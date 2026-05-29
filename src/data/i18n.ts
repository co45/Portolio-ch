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
      title: "Oussema Chaabene | Full Stack Web Engineer",
      description:
        "Portfolio of Oussema Chaabene, an Full Stack web engineer specializing in Angular, React, Spring Boot, Node, Express, Django, .NET, databases, Docker, Jenkins, and AWS S3.",
    },
    nav: {
      brand: "Oussema Chaabene",
      cta: "Contact",
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
      name: "Oussema Chaabene",
      title: "Full Stack Web Engineer",
      intro:
        "Full stack web engineer working on modern digital products, combining frontend craft, backend architecture, databases, deployment, and a constant drive to learn and build useful software.",
      location: "Tunis, Tunisia | Building web products",
      email: "chaabeneoussema1@gmail.com",
      socials: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/chaabene-oussema",
        },
        { label: "Email", href: "mailto:chaabeneoussema1@gmail.com" },
        { label: "Phone", href: "tel:+21626750633" },
      ],
    },
    hero: {
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      downloadCvLabel: "Download resume as PDF",
    },
    heroVisual: {
      file: "fullstack.tsx",
      label: "Building",
      title: "Full stack products with practical engineering depth.",
      stats: [
        ["3", "Internships"],
        ["8+", "Frameworks"],
        ["Indie", "Builder"],
      ],
      design: "responsive",
      code: "scalable",
      users: "supported",
    },
    about: {
      eyebrow: "About",
      title: "A full stack profile shaped by engineering practice.",
      body:
        "I am a young developer passionate about digital innovation, with hands-on experience building CRM, ERP, file management, email, and social web features. My background combines computer engineering studies at ESPRIT with applied computing training at ISGT, and I enjoy solving problems collaboratively while continuing to learn new technologies.",
      highlights: [
        "Responsive and performant web applications",
        "Relational and non-relational databases",
        "Team collaboration and continuous learning",
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Frameworks, tools, and practices I use to build full stack products.",
      items: [
        "Angular",
        "React",
        "Spring Boot",
        "Node.js",
        "Express",
        "Django",
        ".NET",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Jenkins",
        "AWS S3",
        "Microservices",
        "WordPress",
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected projects, client-style systems, and applied full stack work.",
      filters: {
        All: "All",
        React: "React",
        "UI/UX": "UI/UX",
        "Full-stack": "Full-stack",
        "Landing Pages": "Websites",
      },
      liveDemo: "Live demo",
      github: "GitHub",
      items: [
        {
          title: "EcoWarriors",
          type: "Social Web Platform",
          category: "React",
          description:
            "Collaborated on a web application promoting ecological actions, sustainability, and environmental awareness through an interactive social media experience.",
          stack: ["MongoDB", "Express", "React", "Node.js"],
          demoUrl: "",
          githubUrl: "",
        },
        {
          title: "CRM Solution",
          type: "Full Stack Internship",
          category: "Full-stack",
          description:
            "Designed, developed, and deployed CRM features including email management, mailing lists, employee hierarchy management, and file storage through Amazon S3.",
          stack: ["Spring Boot", "Angular", "MySQL", "MongoDB", "AWS S3"],
          demoUrl: "",
          githubUrl: "",
        },
        {
          title: "ERP Process Management",
          type: "Full Stack Internship",
          category: "Full-stack",
          description:
            "Built and deployed an ERP solution focused on managing company processes and improving operational workflows.",
          stack: ["Spring Boot", "Angular", "PostgreSQL"],
          demoUrl: "",
          githubUrl: "",
        },
        {
          title: "WordPress Website",
          type: "CMS Website Deployment",
          category: "Landing Pages",
          description:
            "Created and deployed a website using WordPress, HTML, CSS, and PHP during a summer internship.",
          stack: ["WordPress", "HTML", "CSS", "PHP"],
          demoUrl: "",
          githubUrl: "",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Education, professional practice, and applied full stack experience.",
      items: [
        {
          role: "Computer Engineering Degree, Full Stack Development",
          organization:
            "ESPRIT - Private Higher School of Engineering and Technology",
          period: "2021 - Present",
          detail:
            "Engineering program focused on software development, full stack web technologies, and practical project delivery.",
        },
        {
          role: "Full Stack Web Engineer Intern",
          organization: "Mosofty",
          period: "Jul. 2023 - Sep. 2023",
          detail:
            "Designed, developed, and deployed a CRM solution with email and mailing list management, employee hierarchy features, Amazon S3 file storage, microservices, Docker, and Jenkins.",
        },
        {
          role: "Applied Computing in Management",
          organization: "ISGT - Higher Institute of Management of Tunis",
          period: "2019 - 2021",
          detail:
            "Completed applied computing studies with a foundation in management information systems and software development.",
        },
        {
          role: "Senior IT Technician Intern",
          organization: "Toucomex",
          period: "Mar. 2021 - Jun. 2021",
          detail:
            "Designed, developed, and deployed an ERP solution for company process management using Spring Boot, Angular, and PostgreSQL.",
        },
        {
          role: "Summer Intern",
          organization: "African Northern Fruit",
          period: "Jun. 2020 - Aug. 2020",
          detail:
            "Created and deployed a website with WordPress, HTML, CSS, and PHP.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's discuss a project, product, or collaboration.",
      body:
        "I work on full stack web projects and digital products. You can reach me by email, LinkedIn, or phone.",
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
      title: "Oussema Chaabene | Ingenieur Web Full Stack",
      description:
        "Portfolio de Oussema Chaabene, ingenieur web full stack specialise en Angular, React, Spring Boot, Node, Express, Django, .NET, bases de donnees, Docker, Jenkins et AWS S3.",
    },
    nav: {
      brand: "Oussema Chaabene",
      cta: "Contact",
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
      name: "Oussema Chaabene",
      title: "Ingenieur Web Full Stack",
      intro:
        "Ingenieur web full stack travaillant sur des produits numeriques modernes, avec une approche qui combine frontend, backend, bases de donnees, deploiement et apprentissage continu.",
      location: "Tunis, Tunisie | Creation de produits web",
      email: "chaabeneoussema1@gmail.com",
      socials: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/chaabene-oussema",
        },
        { label: "Email", href: "mailto:chaabeneoussema1@gmail.com" },
        { label: "Telephone", href: "tel:+21626750633" },
      ],
    },
    hero: {
      viewProjects: "Voir les projets",
      contactMe: "Contact",
      downloadCv: "Telecharger CV",
      downloadCvLabel: "Telecharger le CV en PDF",
    },
    heroVisual: {
      file: "fullstack.tsx",
      label: "Creation",
      title: "Des produits full stack avec une base technique solide.",
      stats: [
        ["3", "Stages"],
        ["8+", "Frameworks"],
        ["Indie", "Builder"],
      ],
      design: "responsive",
      code: "scalable",
      users: "accompagnes",
    },
    about: {
      eyebrow: "Profil",
      title: "Un profil full stack construit par la pratique.",
      body:
        "Je suis un jeune developpeur passionne par l'innovation numerique, avec une experience pratique dans la creation de solutions CRM, ERP, gestion de fichiers, gestion d'emails et applications sociales web. Mon parcours combine une formation d'ingenieur a ESPRIT et une licence en informatique appliquee a la gestion a l'ISGT.",
      highlights: [
        "Applications web reactives et performantes",
        "Bases de donnees relationnelles et non relationnelles",
        "Collaboration en equipe et apprentissage continu",
      ],
    },
    skills: {
      eyebrow: "Competences",
      title: "Frameworks, outils et pratiques que j'utilise pour creer des produits full stack.",
      items: [
        "Angular",
        "React",
        "Spring Boot",
        "Node.js",
        "Express",
        "Django",
        ".NET",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "PHP",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Jenkins",
        "AWS S3",
        "Microservices",
        "WordPress",
      ],
    },
    projects: {
      eyebrow: "Projets",
      title: "Projets, systemes applicatifs et travaux full stack appliques.",
      filters: {
        All: "Tous",
        React: "React",
        "UI/UX": "UI/UX",
        "Full-stack": "Full-stack",
        "Landing Pages": "Sites web",
      },
      liveDemo: "Demo",
      github: "GitHub",
      items: [
        {
          title: "EcoWarriors",
          type: "Plateforme sociale web",
          category: "React",
          description:
            "Collaboration sur une application web axee sur la promotion d'actions ecologiques, la durabilite et la conscience environnementale via une experience de reseau social interactive.",
          stack: ["MongoDB", "Express", "React", "Node.js"],
          demoUrl: "",
          githubUrl: "",
        },
        {
          title: "Solution CRM",
          type: "Stage full stack",
          category: "Full-stack",
          description:
            "Conception, developpement et deploiement de fonctionnalites CRM: gestion des emails, listes de diffusion, structure hierarchique des employes et stockage de fichiers avec Amazon S3.",
          stack: ["Spring Boot", "Angular", "MySQL", "MongoDB", "AWS S3"],
          demoUrl: "",
          githubUrl: "",
        },
        {
          title: "ERP Process Management",
          type: "Stage full stack",
          category: "Full-stack",
          description:
            "Conception et deploiement d'une solution ERP orientee gestion des processus de l'entreprise et amelioration des workflows operationnels.",
          stack: ["Spring Boot", "Angular", "PostgreSQL"],
          demoUrl: "",
          githubUrl: "",
        },
        {
          title: "Site WordPress",
          type: "Creation et deploiement CMS",
          category: "Landing Pages",
          description:
            "Creation et deploiement d'un site web avec WordPress, HTML, CSS et PHP pendant un stage d'ete.",
          stack: ["WordPress", "HTML", "CSS", "PHP"],
          demoUrl: "",
          githubUrl: "",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Formation, pratique professionnelle et experience full stack appliquee.",
      items: [
        {
          role: "Diplome d'ingenieur en Genie Informatique, developpement full stack",
          organization:
            "ESPRIT - Ecole Superieure Privee d'Ingenierie et de Technologie",
          period: "2021 - En cours",
          detail:
            "Formation d'ingenieur orientee developpement logiciel, technologies web full stack et realisation de projets pratiques.",
        },
        {
          role: "Ingenieur Web Full Stack, Stage",
          organization: "Mosofty",
          period: "Juil. 2023 - Sept. 2023",
          detail:
            "Conception, developpement et deploiement d'une solution CRM avec gestion des emails, listes de diffusion, hierarchie des employes, stockage Amazon S3, microservices, Docker et Jenkins.",
        },
        {
          role: "Licence en informatique appliquee a la gestion",
          organization: "ISGT - Institut Superieur de Gestion de Tunis",
          period: "2019 - 2021",
          detail:
            "Formation en informatique appliquee a la gestion avec bases solides en systemes d'information et developpement logiciel.",
        },
        {
          role: "Technicien superieur en informatique, Stage",
          organization: "Toucomex",
          period: "Mars 2021 - Juin 2021",
          detail:
            "Conception, developpement et deploiement d'une solution ERP pour la gestion des processus de l'entreprise avec Spring Boot, Angular et PostgreSQL.",
        },
        {
          role: "Stage d'ete",
          organization: "African Northern Fruit",
          period: "Juin 2020 - Aout 2020",
          detail:
            "Creation et deploiement d'un site web avec WordPress, HTML, CSS et PHP.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Discutons d'un projet, d'un produit ou d'une collaboration.",
      body:
        "Je travaille sur des projets web full stack et des produits numeriques. Vous pouvez me contacter par email, LinkedIn ou telephone.",
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
