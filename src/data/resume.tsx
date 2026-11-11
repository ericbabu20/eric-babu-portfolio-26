import {
  BriefcaseBusinessIcon,
  HomeIcon,
  MailIcon,
  PackageIcon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";

/**
 * Profile, experience, education and skills.
 * Source of truth: "Eric Babu PO resume 2026.pdf".
 *
 * Product and case-study content lives in separate files:
 *   - ./shipped-products.ts
 *   - ./case-studies.ts
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const DATA = {
  name: "Eric Babu",
  initials: "EB",
  /**
   * Set NEXT_PUBLIC_SITE_URL when you deploy so links, the sitemap and
   * social previews use your real domain.
   */
  url: SITE_URL,
  location: "Leicester, UK",

  role: "Product Owner | Digital Energy & AI Products",
  headline: "I turn complex customer journeys into clear, useful digital experiences.",
  description:
    "I\u2019m Eric, a Product Owner working across UK energy products and independent AI projects. I bring experience in discovery, prioritisation and delivery, alongside a creative practice in photography and filmmaking that shapes my eye for detail and approach to visual storytelling.",
  /** Used for page titles and search results. */
  seoDescription:
    "Eric Babu is a Product Owner in Leicester, UK, delivering customer-facing digital energy products and independently building AI-powered tools, with a creative practice in photography and filmmaking.",

  /** Add a portrait at /public/portrait.jpg and set this path to use it. */
  avatarUrl: "/eric-babu.jpg" as string | undefined,

  /**
   * The CV button appears only if this file exists in /public.
   * The CV contains a phone number, so only add a copy you are happy to
   * publish (for example, one with the phone number removed).
   */
  cvFile: "/Eric-Babu-Product-Owner-CV.pdf",

  about: [
    "I\u2019m a Product Owner and Product Analyst with 2+ years of experience delivering digital products in regulated UK energy retail. At Outfox Energy I work on the customer portal, the mobile app and the onboarding journey, from discovery and requirements through engineering collaboration to launch and post-launch analytics.",
    "I have working knowledge of tariffs, billing, payments and smart metering, and I prioritise using RICE and value-versus-effort analysis, informed by stakeholder input, research and operational feedback.",
    "I also build AI-powered products independently, and my training includes the Airtribe AI Product Management fellowship (2026, Cohort 33).",
    "Beyond product work, I\u2019m a photographer and filmmaker. Working with composition, light and editing gives me another way to explore how people notice, interpret and connect with a story. I bring that attention to detail into how I present ideas, communicate customer journeys and collaborate with designers.",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: UserIcon, label: "About" },
    {
      href: "/#shipped-products",
      icon: PackageIcon,
      label: "Shipped Products",
    },
    { href: "/#case-studies", icon: FileTextIcon, label: "Case Studies" },
    { href: "/#experience", icon: BriefcaseBusinessIcon, label: "Experience" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],

  contact: {
    email: "ericbabu20@gmail.com",
    linkedin: "https://www.linkedin.com/in/ericbabu",
    location: "Leicester, UK",
  },

  work: [
    {
      company: "Outfox Energy (Redfish / Zog Solutions)",
      shortName: "Outfox Energy",
      logo: "/logos/outfox-energy.png",
      location: "Leicester, UK",
      title: "Product Analyst / Product Owner",
      start: "Apr 2024",
      end: "Present",
      highlights: [
        "Product owner for the Outfox customer portal and mobile app, working with engineering, design, QA and operations from discovery and API requirements through to production launch.",
        "Defined customer journeys and requirements, and collaborated with designers on prototypes.",
        "Delivered self-service tariff changes in the customer portal.",
        "Introduced frontend logic to automate meter-validation steps in the customer onboarding journey.",
        "Enabled customers to set up Direct Debit and make bill payments digitally, and replaced a manual, call-based Priority Services Register (PSR) process with a digital in-app form.",
        "Owned the product backlog and wrote PRDs, functional and technical requirements, user stories and acceptance criteria for frontend and backend teams, prioritising with RICE and value-versus-effort analysis.",
        "Tested APIs in Postman across sandbox and production environments, and set up Google Analytics and an A/B testing framework across the website, portal and onboarding journey.",
        "Ran Agile ceremonies in Jira and mapped billing and settlements workflows in BPMN to align stakeholders.",
      ],
    },
    {
      company: "Livspace Home Interiors",
      shortName: "Livspace",
      logo: "/logos/livspace.png",
      location: "Hyderabad, India",
      title: "Business Manager - Sales",
      start: "Jun 2023",
      end: "Apr 2024",
      highlights: [
        "Led a team delivering high-end residential interior projects end to end, owning the P&L and the client lifecycle from lead to handover.",
        "Drove revenue growth through sales strategy and team performance, recruited and mentored designers and architects, and developed structured engagement processes that improved conversion and delivery efficiency.",
      ],
    },
    {
      company: "BYJU'S (Think and Learn Pvt Ltd)",
      shortName: "BYJU'S",
      logo: "/logos/byjus.png",
      location: "Bangalore, India",
      title: "Team Lead / Business Development Associate",
      start: "Nov 2021",
      end: "Apr 2023",
      highlights: [
        "Led, trained and managed a high-performing inside sales team, consistently exceeding targets through structured performance management, disciplined follow-up and customer engagement.",
      ],
    },
    {
      company: "Rainbow Constructions",
      shortName: "Rainbow Constructions",
      logo: undefined as string | undefined,
      location: "Kerala, India",
      title: "Project Coordinator",
      start: "Oct 2020",
      end: "Oct 2021",
      highlights: [
        "Coordinated civil engineering projects with design and structural engineering teams; managed project visibility through digital marketing.",
      ],
    },
  ],

  education: [
    {
      institution: "Airtribe",
      logo: "/logos/airtribe.png",
      location: "India",
      qualification: "Fellowship, AI Product Management",
      detail: "Cohort 33",
      start: "2026",
      end: "2026",
    },
    {
      logo: "/logos/mbcet.png",
      institution: "Mar Baselios College of Engineering and Technology (KTU University)",
      location: "Kerala, India",
      qualification: "Bachelor of Technology, Civil Engineering",
      detail: "CGPA 7.3",
      start: "2016",
      end: "2020",
    },
  ],

  certifications: [
    "AI-First Product Management - Airtribe (2025)",
    "Advanced Product Management - Vision, Strategy and Metrics",
    "Business Analysis Fundamentals (ECBA-endorsed course)",
    "The Practical BPMN 2.0 Master Class",
    "UI/UX Prototype Essential Training",
  ],

  skillGroups: [
    {
      title: "Product discovery and strategy",
      skills: [
        "Product discovery",
        "Product roadmapping",
        "RICE and value-versus-effort prioritisation",
        "Product lifecycle ownership",
        "Business case development",
        "Primary and secondary research",
        "UK energy retail: tariffs, billing, settlements, pricing, payments",
        "Customer onboarding, smart meters, prepayment, PSR, WHD, meter validation",
        "Ofgem-regulated communications",
      ],
    },
    {
      title: "Delivery and stakeholder collaboration",
      skills: [
        "Backlog management",
        "PRDs, user stories and acceptance criteria",
        "Release planning",
        "Scrum and Kanban",
        "Jira",
        "Sprint planning, stand-ups and retrospectives",
        "UAT and defect triage",
        "Cross-functional team coordination",
        "BPMN process mapping",
        "Executive communication and alignment",
      ],
    },
    {
      title: "Analytics and experimentation",
      skills: [
        "Google Analytics",
        "Funnel analysis",
        "A/B testing",
        "Conversion optimisation",
        "Data-driven decision making",
      ],
    },
    {
      title: "UX and journey design",
      skills: [
        "Figma prototyping",
        "User journey mapping",
        "Wireframes",
        "Customer experience design",
        "Stakeholder feedback loops",
      ],
    },
    {
      title: "Technical and AI capabilities",
      skills: [
        "API testing (Postman)",
        "SQL",
        "Backend logic validation",
        "System integration",
        "Frontend logic design",
        "OpenAPI and contract-first thinking",
        "Cursor, Lovable, Google Stitch, Antigravity",
        "Prompt engineering",
        "RAG concepts",
        "AI assistant workflows",
      ],
    },
  ],
} as const;
