export type Language = "en" | "fr";

export type ProjectCategory =
  | "React"
  | "UI/UX"
  | "Full-stack"
  | "Landing Pages";

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "React",
  "UI/UX",
  "Full-stack",
  "Landing Pages",
];

export const translations = {
  en: {
    meta: {
      title: "Your Name | Frontend Developer Portfolio",
      description:
        "Modern portfolio for a computer engineer specializing in frontend development, web development, React, TypeScript, UI/UX, and performance optimization.",
    },
    nav: {
      brand: "Portfolio",
      cta: "Hire Me",
      themeLabel: "Toggle light and dark mode",
      languageLabel: "Switch language",
      items: [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
      ],
    },
    profile: {
      name: "Your Name",
      title: "Computer Engineer & Frontend Developer",
      intro:
        "I design and build fast, accessible, and polished web experiences with modern frontend technologies.",
      location: "Available for remote and on-site opportunities",
      email: "hello@example.com",
      socials: [
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
        { label: "Portfolio", href: "https://example.com/" },
      ],
    },
    hero: {
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      downloadCvLabel: "Download resume as PDF",
    },
    heroVisual: {
      file: "frontend.tsx",
      label: "Building",
      title: "Interfaces that feel fast, clear, and alive.",
      stats: [
        ["99", "Performance"],
        ["AA", "Accessibility"],
        ["0.8s", "First Load"],
      ],
      design: "premium",
      code: "maintainable",
      users: "delighted",
    },
    about: {
      eyebrow: "About",
      title: "Computer engineering mindset, frontend product craft.",
      body:
        "I am a computer engineer focused on building modern web products that are useful, elegant, and reliable. My work blends software fundamentals with frontend engineering, responsive design, accessibility, and thoughtful UI/UX decisions. I enjoy turning complex requirements into interfaces that people can understand quickly and use confidently.",
      highlights: [
        "Clean architecture",
        "Accessible interfaces",
        "Fast loading experiences",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Tools and practices I use to ship polished web experiences.",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX",
        "Git",
        "REST APIs",
        "Performance Optimization",
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work shaped for clarity, speed, and polish.",
      filters: {
        All: "All",
        React: "React",
        "UI/UX": "UI/UX",
        "Full-stack": "Full-stack",
        "Landing Pages": "Landing Pages",
      },
      liveDemo: "Live demo",
      github: "GitHub",
      items: [
        {
          title: "SaaS Analytics Dashboard",
          type: "Frontend Architecture",
          category: "React",
          description:
            "A responsive dashboard with clean data visualization, reusable components, and fast interactions.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/saas-dashboard",
        },
        {
          title: "E-Commerce Web Experience",
          type: "UI Engineering",
          category: "Full-stack",
          description:
            "A polished shopping interface focused on conversion, accessibility, API integration, and mobile-first performance.",
          stack: ["Next.js", "APIs", "Performance"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/ecommerce-web",
        },
        {
          title: "Developer Portfolio System",
          type: "Design & Build",
          category: "UI/UX",
          description:
            "A high-end personal site with animated sections, glass components, and editable content data.",
          stack: ["React", "Framer Motion", "UI/UX"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/portfolio-system",
        },
        {
          title: "Product Landing Page",
          type: "Conversion Design",
          category: "Landing Pages",
          description:
            "A premium landing page concept with strong content hierarchy, responsive sections, and polished interactions.",
          stack: ["HTML", "Tailwind CSS", "Responsive Design"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/product-landing-page",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Education and practical frontend development experience.",
      items: [
        {
          role: "Computer Engineering Graduate",
          organization: "Your University or Institution",
          period: "2021 - 2025",
          detail:
            "Built a strong foundation in software engineering, systems thinking, web technologies, and problem solving.",
        },
        {
          role: "Frontend Developer",
          organization: "Freelance / Personal Projects",
          period: "2023 - Present",
          detail:
            "Create modern web interfaces, integrate APIs, improve responsiveness, and optimize user experience.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build a clean, fast, and memorable web experience.",
      body:
        "Have a project, role, or collaboration in mind? Reach out and I'll respond with next steps.",
      formTitle: "Send a message",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Thanks! Your message is ready. Connect a Formspree endpoint to send it live.",
      error: "Please complete every field with a valid email address.",
    },
    footer:
      "Built with React, TypeScript, Tailwind CSS, and Framer Motion.",
  },
  fr: {
    meta: {
      title: "Votre Nom | Portfolio Developpeur Frontend",
      description:
        "Portfolio moderne pour un ingenieur informatique specialise en developpement frontend, web, React, TypeScript, UI/UX et optimisation des performances.",
    },
    nav: {
      brand: "Portfolio",
      cta: "Me contacter",
      themeLabel: "Changer le mode clair ou sombre",
      languageLabel: "Changer de langue",
      items: [
        { id: "about", label: "Profil" },
        { id: "skills", label: "Competences" },
        { id: "projects", label: "Projets" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
      ],
    },
    profile: {
      name: "Votre Nom",
      title: "Ingenieur Informatique & Developpeur Frontend",
      intro:
        "Je concois et developpe des experiences web rapides, accessibles et soignees avec des technologies frontend modernes.",
      location: "Disponible pour des opportunites a distance ou sur site",
      email: "hello@example.com",
      socials: [
        { label: "GitHub", href: "https://github.com/" },
        { label: "LinkedIn", href: "https://linkedin.com/" },
        { label: "Portfolio", href: "https://example.com/" },
      ],
    },
    hero: {
      viewProjects: "Voir les projets",
      contactMe: "Contact",
      downloadCv: "Telecharger CV",
      downloadCvLabel: "Telecharger le CV en PDF",
    },
    heroVisual: {
      file: "frontend.tsx",
      label: "Creation",
      title: "Des interfaces rapides, claires et vivantes.",
      stats: [
        ["99", "Performance"],
        ["AA", "Accessibilite"],
        ["0.8s", "Chargement"],
      ],
      design: "premium",
      code: "maintenable",
      users: "satisfaits",
    },
    about: {
      eyebrow: "Profil",
      title: "Esprit ingenieur, precision frontend.",
      body:
        "Je suis ingenieur informatique et je cree des produits web modernes, utiles, elegants et fiables. Mon travail combine les bases du genie logiciel, le developpement frontend, le responsive design, l'accessibilite et des choix UI/UX reflechis.",
      highlights: [
        "Architecture claire",
        "Interfaces accessibles",
        "Experiences rapides",
      ],
    },
    skills: {
      eyebrow: "Competences",
      title: "Technologies et pratiques que j'utilise pour livrer des experiences web soignees.",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX",
        "Git",
        "APIs REST",
        "Optimisation des performances",
      ],
    },
    projects: {
      eyebrow: "Projets",
      title: "Selection de projets orientes clarte, rapidite et finition.",
      filters: {
        All: "Tous",
        React: "React",
        "UI/UX": "UI/UX",
        "Full-stack": "Full-stack",
        "Landing Pages": "Landing Pages",
      },
      liveDemo: "Demo",
      github: "GitHub",
      items: [
        {
          title: "Tableau de Bord SaaS",
          type: "Architecture Frontend",
          category: "React",
          description:
            "Un tableau de bord responsive avec visualisation claire, composants reutilisables et interactions rapides.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/saas-dashboard",
        },
        {
          title: "Experience Web E-Commerce",
          type: "Ingenierie UI",
          category: "Full-stack",
          description:
            "Une interface d'achat soignee, axee conversion, accessibilite, integration API et performance mobile.",
          stack: ["Next.js", "APIs", "Performance"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/ecommerce-web",
        },
        {
          title: "Systeme de Portfolio Developpeur",
          type: "Design & Build",
          category: "UI/UX",
          description:
            "Un site personnel haut de gamme avec sections animees, composants glass et contenu facile a modifier.",
          stack: ["React", "Framer Motion", "UI/UX"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/portfolio-system",
        },
        {
          title: "Landing Page Produit",
          type: "Design Conversion",
          category: "Landing Pages",
          description:
            "Un concept de landing page premium avec hierarchie claire, sections responsives et interactions soignees.",
          stack: ["HTML", "Tailwind CSS", "Responsive Design"],
          demoUrl: "https://example.com/",
          githubUrl: "https://github.com/your-username/product-landing-page",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Formation et experience pratique en developpement frontend.",
      items: [
        {
          role: "Diplome en Genie Informatique",
          organization: "Votre universite ou institution",
          period: "2021 - 2025",
          detail:
            "Base solide en genie logiciel, pensee systeme, technologies web et resolution de problemes.",
        },
        {
          role: "Developpeur Frontend",
          organization: "Freelance / Projets personnels",
          period: "2023 - Aujourd'hui",
          detail:
            "Creation d'interfaces modernes, integration d'APIs, amelioration du responsive et optimisation UX.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Construisons une experience web claire, rapide et memorable.",
      body:
        "Vous avez un projet, une opportunite ou une collaboration en tete ? Envoyez-moi un message.",
      formTitle: "Envoyer un message",
      name: "Nom",
      email: "Email",
      message: "Message",
      submit: "Envoyer",
      sending: "Envoi...",
      success:
        "Merci ! Votre message est pret. Ajoutez un endpoint Formspree pour l'envoyer reellement.",
      error: "Veuillez remplir tous les champs avec une adresse email valide.",
    },
    footer:
      "Construit avec React, TypeScript, Tailwind CSS et Framer Motion.",
  },
} as const;
