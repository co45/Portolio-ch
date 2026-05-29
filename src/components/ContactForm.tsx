import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import type { Language } from "../data/i18n";
import type { translations } from "../data/i18n";

type ContactCopy = (typeof translations)[Language]["contact"];
type FormStatus = "idle" | "sending" | "success" | "error";

const FORMSPREE_ENDPOINT = "";
// Add your Formspree endpoint above, for example:
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-form-id";
// For EmailJS instead, add your service ID, template ID, and public key here,
// then replace the fetch call with emailjs.send(serviceId, templateId, data, publicKey).

export function ContactForm({ copy }: { copy: ContactCopy }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValid =
    formData.name.trim().length > 1 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.message.trim().length > 8;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      if (FORMSPREE_ENDPOINT) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Form request failed");
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 650));
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3 className="text-xl font-semibold">{copy.formTitle}</h3>
      <label className="form-field">
        <span>{copy.name}</span>
        <input
          value={formData.name}
          onChange={(event) =>
            setFormData((current) => ({ ...current, name: event.target.value }))
          }
          name="name"
          autoComplete="name"
          required
        />
      </label>
      <label className="form-field">
        <span>{copy.email}</span>
        <input
          value={formData.email}
          onChange={(event) =>
            setFormData((current) => ({ ...current, email: event.target.value }))
          }
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </label>
      <label className="form-field">
        <span>{copy.message}</span>
        <textarea
          value={formData.message}
          onChange={(event) =>
            setFormData((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          name="message"
          rows={5}
          required
        />
      </label>
      <motion.button
        type="submit"
        className="button-primary justify-center"
        disabled={status === "sending"}
        whileHover={{ y: status === "sending" ? 0 : -3 }}
        whileTap={{ scale: 0.98 }}
      >
        {status === "sending" ? copy.sending : copy.submit}
      </motion.button>
      {status === "success" && (
        <p className="form-status form-status-success" role="status">
          {copy.success}
        </p>
      )}
      {status === "error" && (
        <p className="form-status form-status-error" role="alert">
          {copy.error}
        </p>
      )}
    </form>
  );
}
