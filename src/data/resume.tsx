import {
  BriefcaseBusinessIcon,
  HomeIcon,
  MailIcon,
  PackageIcon,
  FileTextIcon,
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
      headingName: "Outfox Energy",
      logo: "/logos/outfox-energy.png",
      location: "Leicester, UK",
      title: "Product Analyst / Product Owner",
      start: "Apr 2024",
      end: "Present",
      summary:
        "I own the customer portal, mobile app and sign-up journey for a UK domestic energy supplier, from discovery and API requirements through to launch. Most of my work is turning manual, call-based processes into self-service ones.",
      stats: [
        {
          figure: "30%",
          spoken: "30 percent less registration-team workload",
          title: "Less registration-team workload",
          detail: "Automated supply-point validation via the EES API",
        },
        {
          figure: "15–20%",
          spoken: "15 to 20 percent fewer tariff-renewal contacts, every month",
          title: "Fewer tariff-renewal contacts, every month",
          detail: "Self-service renewals in the customer portal",
        },
        {
          figure: "20%",
          spoken: "20 percent fewer Direct Debit contacts",
          title: "Fewer Direct Debit contacts",
          detail: "Digital Direct Debit set-up",
        },
        {
          figure: "18%",
          spoken: "18 percent better contact data quality",
          title: "Better contact data quality",
          detail: "Email and mobile validation at sign-up",
        },
      ],
      shipped: [
        {
          heading: "Sign-up journey",
          items: [
            "Supply-point validation (rejects commercial, de-energised and unmetered supply points)",
            "Email and mobile validation",
            "Usage-based quoting (in progress)",
          ],
        },
        {
          heading: "Customer portal",
          items: [
            "Tariff renewals",
            "Direct Debit set-up, including pay-on-bill to Direct Debit",
            "Meter-reading page, designed end to end",
            "Change of tenancy form",
            "Priority Services Register (PSR) form",
            "Full UI and UX redesign",
          ],
        },
        {
          heading: "Website",
          items: [
            "Zendesk FAQ, chatbot and contact page",
            "Prismic CMS for terms and conditions (no deployment needed to update)",
            "Google Analytics and A/B testing",
          ],
        },
      ],
      nowBuilding:
        "Now building: usage-based quoting for more accurate Direct Debits, and half-hourly consumption in the customer portal.",
    },
    {
      company: "Livspace Home Interiors",
      shortName: "Livspace",
      headingName: "Livspace Home Interiors",
      logo: "/logos/livspace.png",
      location: "Hyderabad, India",
      title: "Business Manager, Sales",
      start: "Jun 2023",
      end: "Apr 2024",
      summary:
        "Owned the P&L and client lifecycle for high-end residential interior projects, leading designers and architects from enquiry to handover.",
    },
    {
      company: "BYJU'S (Think and Learn Pvt Ltd)",
      shortName: "BYJU'S",
      headingName: "BYJU'S (Think and Learn Pvt Ltd)",
      logo: "/logos/byjus.png",
      location: "Bangalore, India",
      title: "Team Lead / Business Development Associate",
      start: "Nov 2021",
      end: "Apr 2023",
      summary:
        "Led and trained an inside-sales team that consistently exceeded targets.",
    },
    {
      company: "Rainbow Constructions",
      shortName: "Rainbow Constructions",
      headingName: "Rainbow Constructions",
      logo: undefined as string | undefined,
      location: "Kerala, India",
      title: "Project Coordinator",
      start: "Oct 2020",
      end: "Oct 2021",
      summary:
        "Coordinated civil engineering projects with design and structural engineering teams.",
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
