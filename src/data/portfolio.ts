import p01 from "@/assets/projects/p01.jpg";
import p02 from "@/assets/projects/p02.jpg";
import p03 from "@/assets/projects/p03.jpg";
import p04 from "@/assets/projects/p04.jpg";
import p05 from "@/assets/projects/p05.jpg";
import p06 from "@/assets/projects/p06.jpg";
import p07 from "@/assets/projects/p07.jpg";
import p08 from "@/assets/projects/p08.jpg";
import p09 from "@/assets/projects/p09.jpg";
import p10 from "@/assets/projects/p10.jpg";
import p11 from "@/assets/projects/p11.jpg";
import p12 from "@/assets/projects/p12.jpg";
import p13 from "@/assets/projects/p13.jpg";
import p14 from "@/assets/projects/p14.jpg";

export const profile = {
  name: "Faruq Akintunde Odetola",
  shortName: "Faruq Odetola",
  initials: "FO",
  title: "Senior Full Stack Developer",
  subtitle: "Backend-focused engineer · 6+ years",
  email: "faruqodetola1@gmail.com",
  phone: "+974 3319 7354",
  location: "Doha, Qatar",
  status: "Valid Work Visa & NOC",
  github: "https://github.com/HOLUMlDEY6041",
  portfolio: "https://faruqnao.netlifv.app",
  summary:
    "I design and build scalable backend systems, APIs, and distributed applications. Strong in .NET, microservices, and Azure — with hands-on experience across CI/CD, containerization and performance optimization. I take ownership from architecture to deployment, with reliability and security in mind.",
};

export const experience = [
  {
    company: "Ehjz for Trading and Services",
    role: "Senior Full Stack Developer",
    start: "May 2025",
    end: "Feb 2026",
    location: "Doha, Qatar",
    current: true,
    bullets: [
      "Lead day-to-day IT operations: infrastructure, software development, cybersecurity.",
      "Manage cross-functional teams maintaining internal systems & public platforms (.NET, React, React Native).",
      "Oversee CI/CD pipelines, Azure cloud deployments, and Docker containerization.",
      "Implement cybersecurity standards, backup policies and IT asset management.",
      "Align IT strategy with business goals to drive digital transformation.",
      "Integrated payment gateways and third-party APIs for secure transactions.",
    ],
    stack: [".NET", "React", "React Native", "Azure", "Docker"],
  },
  {
    company: "Quadrate Tech Solution",
    role: "Fullstack Developer · Internship",
    start: "Feb 2025",
    end: "Aug 2025",
    location: "Doha, Qatar",
    bullets: [
      "Built dynamic web apps with ASP.NET Core and ReactJS.",
      "Designed responsive frontends using HTML, CSS and Bootstrap.",
      "Built and tested APIs with Postman and Swagger; managed PostgreSQL via Entity Framework.",
      "Contributed to Agile sprints, code reviews and version control.",
    ],
    stack: ["ASP.NET Core", "React", "PostgreSQL", "Swagger"],
  },
  {
    company: "Nasser Technology & Services",
    role: "Backend Developer / Programmer",
    start: "Oct 2023",
    end: "Dec 2024",
    location: "Doha, Qatar",
    bullets: [
      "Developed and deployed scalable applications with .NET Core and Blazor Server.",
      "Built mobile chat apps using Kotlin and ZegoCloud.",
      "Implemented secure multi-role auth using JWT and ASP.NET Core Identity.",
      "Integrated Azure App Services, Blob Storage and Application Insights.",
      "Designed RESTful APIs and managed CI/CD via Azure DevOps.",
      "Integrated Google Cloud AI (OCR & Video Intelligence) for automated reporting.",
    ],
    stack: [".NET Core", "Blazor", "Azure", "Kotlin", "Google Cloud AI"],
  },
  {
    company: "Scholar Indexing Society",
    role: "Full Stack Developer",
    start: "Jan 2021",
    end: "Jun 2023",
    location: "Sunyani, Ghana",
    bullets: [
      "Created PHP-based web apps with Laravel, Symfony and CodeIgniter.",
      "Built RESTful APIs and integrated payment gateways.",
      "Led design of secure authentication and cloud database systems.",
      "Used Figma for UI/UX, built dynamic frontends with JS frameworks.",
    ],
    stack: ["Laravel", "Vue.js", "MySQL", "Figma"],
  },
  {
    company: "TeamApt Limited",
    role: "Backend Developer",
    start: "Sep 2019",
    end: "Dec 2021",
    location: "Lagos, Nigeria",
    bullets: [
      "Developed React frontends with Tailwind CSS.",
      "Built backend APIs and integrated third-party services.",
      "Managed MySQL databases and version control.",
    ],
    stack: ["React", "Node.js", "MySQL", "Tailwind"],
  },
  {
    company: "ACME Computer Solution",
    role: "IT Support",
    start: "2016",
    end: "2018",
    location: "Lagos, Nigeria",
    bullets: [
      "Delivered hardware/software support for SMEs.",
      "Installed, configured and maintained networking devices and OSes.",
      "Trained end-users on IT best practices and office software.",
    ],
    stack: ["Networking", "Windows", "Support"],
  },
];

export type ProjectLink = { live?: string; repo?: string };

export const projects: Array<{
  id: string;
  title: string;
  company: string;
  year: string;
  category: string;
  problem: string;
  approach: string;
  challenges: string;
  results: string[];
  different: string;
  stack: string[];
  links?: ProjectLink;
  image?: string;
}> = [
  {
    id: "01",
    title: "Enterprise IT Operations Platform",
    company: "Ehjz for Trading and Services",
    year: "2025",
    category: "Platform",
    problem:
      "Needed a unified platform to manage internal IT infrastructure, the software development lifecycle, and cybersecurity compliance across multiple teams.",
    approach:
      "Full-stack solution with a .NET Core backend, React web app, and React Native mobile monitoring. Deployed on Azure with Docker containerization and automated CI/CD.",
    challenges:
      "Integrating legacy systems with modern cloud infra while maintaining zero downtime during migration.",
    results: [
      "Streamlined IT operations across teams",
      "Reduced deployment time by 60%",
      "Established enterprise cybersecurity standards",
    ],
    different: "Adopt infrastructure-as-code (Terraform) earlier for environment consistency.",
    stack: [".NET Core", "React", "React Native", "Azure", "Docker", "CI/CD"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p01,
  },
  {
    id: "02",
    title: "Secure Multi-Role Authentication System",
    company: "Nasser Technology & Services",
    year: "2024",
    category: "Security",
    problem:
      "Client needed a robust authentication system supporting multiple user roles with enterprise-grade security.",
    approach:
      "JWT-based auth on ASP.NET Core Identity, Azure AD SSO, and role-based access control (RBAC).",
    challenges:
      "Balancing strict security with UX; handling token refresh and sessions across mobile and web.",
    results: [
      "500+ users, zero security breaches",
      "80% reduction in login-related support tickets",
      "Unified auth across web + mobile",
    ],
    different: "Add biometric auth and OAuth2 for richer third-party integrations.",
    stack: [".NET Core", "JWT", "Azure AD", "ASP.NET Identity", "Blazor"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p02,
  },
  {
    id: "03",
    title: "AI-Powered Video Content Analysis",
    company: "Nasser Technology & Services",
    year: "2024",
    category: "AI",
    problem:
      "Manual video content analysis was slow and error-prone for media processing workflows.",
    approach:
      "Integrated Google Cloud AI (OCR + Video Intelligence) to auto-analyse content, extract structured insights, and generate reports.",
    challenges:
      "Optimising API costs at high volume while maintaining data privacy compliance.",
    results: [
      "85% reduction in content analysis time",
      "Automated reporting for content teams",
      "Scalable pipeline for high-volume media",
    ],
    different: "Build a custom ML pipeline for domain-specific analysis instead of relying solely on third-party APIs.",
    stack: ["Google Cloud AI", ".NET Core", "MongoDB", "Azure Blob"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p03,
  },
  {
    id: "04",
    title: "Cross-Platform Mobile Chat Application",
    company: "Nasser Technology & Services",
    year: "2024",
    category: "Mobile",
    problem:
      "Needed a real-time messaging solution with video/audio for internal team comms.",
    approach:
      "Kotlin + ZegoCloud SDK for real-time comms, with a .NET Core backend and Firebase notifications.",
    challenges:
      "Real-time message sync across devices; battery-efficient background notifications.",
    results: [
      "200+ active users",
      "Sub-100ms message delivery latency",
      "Reliable video/audio calls",
    ],
    different: "Add end-to-end encryption and a WebSocket fallback for better reliability.",
    stack: ["Kotlin", "ZegoCloud", ".NET Core", "Firebase", "PostgreSQL"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p04,
  },
  {
    id: "05",
    title: "E-Commerce Platform with Payment Integration",
    company: "Scholar Indexing Society",
    year: "2022",
    category: "Platform",
    problem:
      "Local businesses needed an affordable, scalable e-commerce solution with integrated payments.",
    approach:
      "Laravel backend, Vue.js frontend, multiple payment gateways (Paystack, Flutterwave), and Figma-driven responsive UI.",
    challenges:
      "Payment webhook reliability and PCI-DSS compliance for card transactions.",
    results: [
      "15+ local businesses onboarded",
      "₦50M+ processed in first year",
      "Reliable payment webhook handling",
    ],
    different: "Move to microservices for scalability and add real-time inventory.",
    stack: ["Laravel", "Vue.js", "MySQL", "Paystack", "Tailwind"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p05,
  },
  {
    id: "06",
    title: "Nssmena — Nasser Technology Official Website",
    company: "Nasser Technology & Services",
    year: "2024",
    category: "Website",
    problem:
      "Nasser Technology needed an official corporate site to showcase services, drive lead generation, and reflect a modern brand identity.",
    approach:
      "Designed and built a fully responsive corporate website with a CMS-driven content layer, optimized for SEO and performance across devices.",
    challenges:
      "Balancing rich visual storytelling with fast load times and maintaining content flexibility for non-technical editors.",
    results: [
      "Improved brand presence and SEO ranking",
      "Self-serve content updates for the marketing team",
      "Mobile-first responsive experience",
    ],
    different: "Adopt a headless CMS and static-site generation for even faster performance.",
    stack: ["Blazor", ".NET", "JavaScript", "Bootstrap"],
    links: { live: "https://nssmena.com", repo: "https://github.com/HOLUMlDEY6041" },
    image: p06,
  },
  {
    id: "07",
    title: "Workshop Registration & Certification App",
    company: "Independent",
    year: "2023",
    category: "Platform",
    problem:
      "Workshop organizers needed a unified system for participant registration, payment collection, and automated certificate issuance.",
    approach:
      "Built a web app with secure payment processing and dynamic certificate generation tied to attendance records.",
    challenges:
      "Reliable payment reconciliation and generating personalized PDF certificates at scale.",
    results: [
      "Automated end-to-end registration flow",
      "Eliminated manual certificate issuance",
      "Reduced organizer admin time by 70%",
    ],
    different: "Add a participant portal for re-downloading certificates and tracking workshop history.",
    stack: ["Laravel", "MySQL", "Payment Gateway", "PDF Generation"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p07,
  },
  {
    id: "08",
    title: "Ferk Relief Foundation — Charity Donation Platform",
    company: "Ferk Relief Foundation",
    year: "2023",
    category: "Website",
    problem:
      "A charity foundation needed an online presence to share its mission and accept secure donations from supporters worldwide.",
    approach:
      "Designed an emotionally engaging website with integrated donation gateways, campaign pages, and transparent impact reporting.",
    challenges:
      "Ensuring donation security, multi-currency support, and a trust-building UX for first-time donors.",
    results: [
      "Enabled global online donations",
      "Increased donor conversion through clear CTAs",
      "Transparent campaign tracking",
    ],
    different: "Add recurring donation subscriptions and a donor dashboard for tax receipts.",
    stack: ["PHP", "Laravel", "MySQL", "Payment Gateway"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p08,
  },
  {
    id: "09",
    title: "Nappliction — Social Media Mobile App",
    company: "Independent",
    year: "2024",
    category: "Mobile",
    problem:
      "Needed a social platform for community-driven content sharing with real-time interactions on mobile.",
    approach:
      "Built a cross-platform mobile app with feeds, profiles, messaging, and push notifications backed by Firebase.",
    challenges:
      "Real-time feed performance, media uploads, and moderation tooling for user-generated content.",
    results: [
      "Smooth real-time feed and chat",
      "Scalable media storage pipeline",
      "Engaged early-adopter community",
    ],
    different: "Introduce AI-powered content moderation and recommendation feeds.",
    stack: ["Kotlin Compose", "Firebase", "Google Cloud", "REST APIs"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p09,
  },
  {
    id: "10",
    title: "midnytupdates — Media Web Application",
    company: "Independent",
    year: "2023",
    category: "Website",
    problem:
      "A media outlet required a fast publishing platform for breaking news, entertainment updates, and reader engagement.",
    approach:
      "Built a content-heavy web app with category-based feeds, editor workflow, and SEO-optimized article pages.",
    challenges:
      "Handling high-traffic spikes during trending stories while keeping the editor experience simple.",
    results: [
      "Sub-second article load times",
      "Improved organic search visibility",
      "Streamlined editorial workflow",
    ],
    different: "Add an in-house newsletter engine and reader personalization.",
    stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p10,
  },
  {
    id: "11",
    title: "Scholar Indexing — Research Publication Platform",
    company: "Scholar Indexing Society",
    year: "2022",
    category: "Platform",
    problem:
      "Researchers and academics needed a centralized platform to publish, index, and discover articles and projects.",
    approach:
      "Built a full-stack publication system with submission workflows, indexing, search, and author profiles.",
    challenges:
      "Designing a flexible metadata schema and a relevance-tuned search across diverse academic fields.",
    results: [
      "Hundreds of indexed publications",
      "Searchable academic project library",
      "Author and reviewer dashboards",
    ],
    different: "Integrate DOI minting and ORCID-based author verification.",
    stack: ["Laravel", "MySQL", "Vue.js", "ElasticSearch"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p11,
  },
  {
    id: "12",
    title: "Nike Store — Responsive React Clone",
    company: "Personal Project",
    year: "2023",
    category: "Website",
    problem:
      "Wanted to sharpen modern frontend skills by rebuilding a polished, brand-grade e-commerce experience.",
    approach:
      "Recreated the Nike storefront as a fully responsive React + Tailwind CSS app with reusable components and motion.",
    challenges:
      "Matching pixel-level brand fidelity while keeping the component architecture clean and reusable.",
    results: [
      "Pixel-accurate responsive layout",
      "Reusable component library",
      "Strong portfolio showcase piece",
    ],
    different: "Wire it to a real headless commerce backend and add cart persistence.",
    stack: ["React", "TailwindCSS", "Vite"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p12,
  },
  {
    id: "13",
    title: "Disney+ Clone — React + TypeScript",
    company: "Personal Project",
    year: "2023",
    category: "Website",
    problem:
      "Explore streaming UI patterns — hero carousels, content rails, and responsive media grids — at production quality.",
    approach:
      "Built a Disney+ clone with React, TypeScript, and Tailwind, structured around typed content models and reusable rails.",
    challenges:
      "Performant image loading at scale and a fluid, responsive carousel across breakpoints.",
    results: [
      "Smooth, lazy-loaded media grids",
      "Strict TypeScript content models",
      "Fully responsive streaming UI",
    ],
    different: "Integrate a real content API and add authenticated watchlists.",
    stack: ["React", "TypeScript", "TailwindCSS"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p13,
  },
  {
    id: "14",
    title: "Coffee Shop — Responsive UI/UX Site",
    company: "Personal Project",
    year: "2022",
    category: "Website",
    problem:
      "Needed a clean marketing site demonstrating strong UI/UX fundamentals using only core web technologies.",
    approach:
      "Designed and built a fully responsive coffee shop site with HTML, CSS, JavaScript, and Bootstrap.",
    challenges:
      "Achieving a premium feel without a heavy framework while staying responsive on all devices.",
    results: [
      "Lightweight, fast-loading site",
      "Strong visual hierarchy and UX",
      "Cross-device responsive layout",
    ],
    different: "Rebuild with a component framework and add a real ordering flow.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: { repo: "https://github.com/HOLUMlDEY6041" },
    image: p14,
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C#", "Java", "PHP", "Kotlin", "Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Web & Mobile",
    items: [".NET Core", "Blazor", "ReactJS", "Angular", "Laravel", "Vue.js", "Flutter", ".NET MAUI", "Kotlin Compose"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Microsoft Azure", "Azure Functions", "Firebase", "Google Cloud", "CI/CD", "Docker", "Kubernetes"],
  },
  {
    category: "Security & Auth",
    items: ["OAuth2", "JWT", "Azure AD", "GDPR", "PCI-DSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Oracle"],
  },
  {
    category: "Tools",
    items: ["Swagger", "Postman", "Git", "GitHub Actions", "Azure DevOps", "Figma", "WordPress", "Odoo ERP"],
  },
  {
    category: "AI & Emerging",
    items: ["Google Cloud AI (OCR)", "Video Intelligence", "API-based AI", "Automation workflows"],
  },
];

export const certifications = [
  { name: "Microsoft Azure Developer (AZ-204)", issuer: "Microsoft", status: "In progress" },
  { name: "Startup Grind Certificate", issuer: "Google for Startups" },
  { name: "AI-Powered Performance Ads", issuer: "Google" },
  { name: "Getting Started with DevOps on AWS", issuer: "AWS" },
  { name: "Oracle SQL Certification", issuer: "Oracle" },
  { name: "Developing Android Apps with Kotlin", issuer: "Udacity × Google" },
  { name: "Google Analytics", issuer: "Google" },
  { name: "Cyber Security Threats", issuer: "—" },
  { name: "PHP for Beginners", issuer: "—" },
  { name: "Special Symposium Training (2020-JMISIR)", issuer: "JMISIR" },
];

export const education = [
  { degree: "Master in Information Technology", school: "Miva Open University", years: "2026 — Present" },
  { degree: "B.Sc. Computer Science", school: "University of Ghana", years: "2017 — 2021" },
];
