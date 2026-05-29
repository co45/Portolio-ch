# Portfolio CH

A modern one-page portfolio website for a computer engineer specializing in web development and frontend development.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy To GitHub Pages

1. Open `vite.config.ts`.
2. Replace `REPOSITORY_NAME` in `base: "/REPOSITORY_NAME/"` with your real GitHub repository name.
3. Push to the `main` branch.
4. In GitHub, enable Pages with GitHub Actions as the source.

The workflow is in `.github/workflows/deploy.yml`.

## Customize Content

Most editable website text, project data, project links, filters, and translations are in:

```txt
src/data/i18n.ts
```

To add Arabic later, add a new language key to the same translation object and update the language switcher options.

## Replace The CV

The Download CV button uses:

```txt
public/cv.pdf
```

Replace that placeholder file with your real resume PDF before publishing.

## Contact Form

The contact form is ready for Formspree or EmailJS.

- For Formspree, add your endpoint in `src/components/ContactForm.tsx`.
- For EmailJS, add your service ID, template ID, and public key in the same file, then replace the placeholder fetch logic.

Until an endpoint is added, the form runs in demo mode after validation.

## SEO

SEO and social sharing tags are in `index.html`. Replace the placeholder `public/og-image.svg` with your own preview image before launch.
