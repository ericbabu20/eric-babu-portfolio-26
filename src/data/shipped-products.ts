import type { ShippedProduct } from "./types";

/**
 * SHIPPED PRODUCTS
 * ----------------
 * Products and features delivered to users. Edit this file to change
 * what appears in the "Shipped Products" section and on /products/[slug].
 *
 * - status: "published" shows publicly. "draft" is hidden everywhere
 *   except local preview (npm run dev), where it is clearly labelled.
 * - url: leave undefined to hide the "Visit website" button.
 * - cover: add a real screenshot to /public/covers and reference it here.
 *   Until then a neutral cover is shown. Do not use mock-ups.
 *
 * Every figure below is taken from "Eric Babu PO resume 2026.pdf" and is
 * labelled as reported by me. Scope wording must not be widened.
 */
export const shippedProducts: ShippedProduct[] = [
  {
    slug: "compliance-analyst-ai",
    // DRAFT: under management review. Not a released deployment.
    // Change to "published" only after Eric confirms it may be public.
    status: "draft",
    dedicatedPage: true,
    name: "Outfox Compliance Analyst",
    summary:
      "An internal AI tool to support Ofgem-sensitive document review, built around local-first retrieval-augmented generation (RAG).",
    context: "internal",
    contextLabel: "Internal AI tool",
    delivery: "unconfirmed",
    releaseStatus: "Under review by management",
    access: "not-confirmed",
    role: "Designed and built the tool.",
    capabilities: [
      "Local-first RAG",
      "Cited Q&A",
      "Gap analysis",
      "Regulatory change monitoring",
      "Audit logging",
      "Privacy controls",
    ],
    coverIcon: "compliance",
    coverLabel: "Compliance Analyst",
    mediaVideo: "/videos/outfox-compliance-analyst-demo.mp4",
    company: "Outfox Energy",
    logo: "/logos/outfox-energy.png",
    overview: [
      "Outfox Compliance Analyst is an internal AI tool designed to support the review of Ofgem-sensitive documents. It supports reviewers. It does not guarantee regulatory compliance and does not replace human review.",
      "The frontend is written in React. The backend is on Azure, and the language model is Ollama, running locally. Cited question-and-answer, gap analysis, regulatory change monitoring, audit logging and privacy controls sit alongside local-first retrieval.",
      "The proposed users are the compliance and governance team. The project is under review by management. It is built for regulated energy-supplier material, such as customer communications and internal guidance, which reviewers check against licence conditions and Ofgem sources. It is not endorsed by Ofgem.",
    ],
    stack:
      "React on the frontend, Azure for the backend, and Ollama as the local language model.",
    inProgress:
      "Under review by management. Proposed for the compliance and governance team. Not a released deployment.",
    customerProblem: [
      "Reviewing Ofgem-sensitive documents is detailed work. Each judgement depends on finding the right licence condition, guidance or internal policy, and then citing it accurately.",
      "Checklist-style manual review is slow, and it is easy to miss a relevant source or lose track of where a conclusion came from.",
    ],
    contribution: [
      "Designed and built the tool, from the retrieval approach through to the review interface.",
      "Defined how answers cite their sources, how gap reviews are presented and how regulatory source changes are surfaced.",
      "Designed the privacy model, with local-only processing by default and an explicit, redacted route for optional cloud use.",
    ],
    deliveredCapabilities: [
      {
        title: "Local-first RAG",
        description:
          "Retrieval-augmented generation that runs locally first. By default, internal documents are not uploaded to external LLM servers.",
      },
      {
        title: "Cited Q&A",
        description:
          "Answers cite the source material they rely on, such as licence conditions, guidance or internal documents, so a reviewer can check each point.",
      },
      {
        title: "Gap analysis and regulatory change monitoring",
        description:
          "Helps reviewers find wording that may fall short of a relevant requirement. It also tracks changes to Ofgem and other regulatory sources so updates can be triaged.",
      },
      {
        title: "Audit logging and privacy controls",
        description:
          "Records review activity in an audit log. Local-only mode is the default; if cloud mode is enabled, redaction can be applied before context is sent.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "No deployment, adoption or outcome claims are made.",
      "The tool is intended to help reviewers find evidence faster, keep a clearer citation trail and keep internal documents local by default. These are design aims, not measured results.",
    ],
    notes: [
      "This tool supports document review. It does not guarantee regulatory compliance, and human sign-off remains required.",
    ],
    editorNotes: [
      "Draft: excluded from the public site. Management review is not a release.",
      "Architecture as described: React frontend, Azure backend, Ollama local language model.",
      "Proposed users are the compliance and governance team. Do not describe them as current users.",
      "Confirm that publishing a description of an internal, Ofgem-sensitive tool is permitted.",
      "No public demo link should be created.",
    ],
  },
  {
    slug: "aura-energy-portal",
    status: "published",
    dedicatedPage: true,
    name: "Aura Energy Portal",
    tagline: "Household energy data, explained in one place.",
    summary:
      "I independently designed, built and deployed a home energy portal for UK households, with an initial focus on prepayment customers. It brings electricity and gas usage, tariff information and a household-aware AI assistant into one responsive experience.",
    context: "independent",
    contextLabel: "Independent product",
    delivery: "independent",
    releaseStatus: "Deployed · Phase 1",
    access: "public",
    role: "Product definition, UX, development and deployment",
    capabilities: [],
    highlights: [
      "Electricity and gas usage across day, week and month views.",
      "Aura AI for questions about the household\u2019s energy.",
      "Octopus account connection and import tariff information.",
    ],
    detailLabel: "View product details",
    url: "https://auraspaces-smart-portal.vercel.app",
    urlLabel: "Open live portal",
    mediaVideo: "/videos/aura-spaces-card-loop-5s.mp4",
    coverIcon: "assistant",
    coverLabel: "Aura Energy Portal",
    overview: [
      "Aura brings electricity and gas usage, tariff information and an AI assistant into one home energy portal. I owned the product definition, UX, coding, feature development and deployment.",
      "A personal product, developed independently of my work at Outfox Energy.",
    ],
    customerProblem: [
      "Household energy information is spread across supplier accounts, bills and device apps. People can see individual readings without getting a clear explanation of their usage or what those readings mean.",
    ],
    contribution: [
      "Defined the product requirements, user journeys and data rules.",
      "Designed the responsive dashboard, navigation and feature flows.",
      "Built the frontend, integrations and supporting backend functionality.",
      "Implemented household-aware AI chat.",
      "Deployed the portal and handled ongoing feature development.",
    ],
    deliveredCapabilities: [
      {
        title: "Electricity and gas usage",
        description: "Day, week and month views in kWh.",
      },
      {
        title: "Aura AI",
        description: "A conversational assistant that uses household profile information.",
      },
      {
        title: "Tariff information",
        description: "An import tariff card, plus an external supplier-comparison link.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "The screenshots show the portal as it appears when signed in. This case study does not add separate measured usage, adoption or savings results.",
    ],
    editorNotes: [
      "The full case study lives at src/app/products/aura-energy-portal/page.tsx.",
      "Screenshots are from the live portal. The profile screen is not published because it shows an email address.",
      "A microphone control is visible in chat. Speech processing is not described.",
    ],
  },
  {
    slug: "outfox-energy-sign-up-journey",
    status: "published",
    name: "Outfox Energy Sign-Up Journey",
    summary:
      "Digital onboarding for domestic energy customers, from getting a quote through to joining Outfox Energy.",
    context: "professional",
    contextLabel: "Professional work",
    delivery: "team",
    releaseStatus: "Live",
    access: "public",
    highlight: "Frontend logic that automates meter-validation steps in the customer onboarding journey.",
    role: "Defined customer journeys and requirements, and collaborated with designers on prototypes and with engineering on delivery.",
    capabilities: [
      "Customer onboarding",
      "Customer journeys",
      "Meter validation",
      "Frontend logic",
      "Requirements",
    ],
    url: "https://signup.outfox.energy/#/get-a-quote",
    cover: {
      src: "/covers/outfox-signup-quote.jpg",
      alt: "Laptop and phone showing the Outfox Energy quote step: choose electricity and gas or electricity only, enter a postcode, and select annual usage before requesting a quote.",
      position: "center",
    },
    coverIcon: "onboarding",
    coverLabel: "Sign-up journey",
    company: "Outfox Energy",
    logo: "/logos/outfox-energy.png",
    overview: [
      "An end-to-end digital onboarding journey for domestic customers of Outfox Energy, a UK energy supplier. It is the route into the company: customers start from a quote and move through to sign-up online.",
      "I worked on it as Product Analyst / Product Owner in a cross-functional team of engineering, design, QA and operations.",
    ],
    customerProblem: [
      "Onboarding included manual meter-validation steps, which created operational workload for the business.",
    ],
    contribution: [
      "Defined customer journeys and requirements, and collaborated with designers on prototypes.",
      "Wrote product requirements, user stories and acceptance criteria for the onboarding journey.",
      "Defined the requirements for the frontend logic that automates meter-validation steps, working with the engineering team.",
      "Worked with engineering, QA and operations through delivery and release.",
      "Validated business logic, data accuracy and system behaviour before release, including API testing in Postman across sandbox and production environments.",
      "Set up Google Analytics and an A/B testing framework across the onboarding journey to support data-led improvements.",
    ],
    deliveredCapabilities: [
      {
        title: "End-to-end digital onboarding",
        description:
          "A complete online journey for domestic energy customers, starting from a quote.",
      },
      {
        title: "Automated meter validation",
        description:
          "Frontend logic that automates meter-validation steps in the onboarding journey.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Introduced frontend logic to automate meter-validation steps in the customer onboarding journey.",
      "Outcome measures for this work are not published here yet.",
    ],
    relatedCaseStudySlugs: ["outfox-onboarding-meter-validation"],
    editorNotes: [
      "The CV's meter-validation figure is held in private/CONTENT-CHECKLIST.md until the supporting evidence is confirmed. Do not restore it here without that evidence.",
      "Confirm who specified versus built the frontend logic, and who designed the journey, so the contribution wording is accurate.",
    ],
  },
  {
    slug: "outfox-energy-website",
    // DRAFT: placeholder copy only. Publish after Eric supplies the real content.
    status: "draft",
    name: "Outfox Energy Website",
    summary:
      "Placeholder summary for the Outfox Energy website. This will be replaced with the real description.",
    context: "professional",
    contextLabel: "Professional work",
    delivery: "team",
    releaseStatus: "Content coming",
    access: "not-confirmed",
    role: "Placeholder. Your role on the Outfox Energy website will be added next.",
    capabilities: ["Website", "Content coming", "Details coming"],
    coverIcon: "website",
    coverLabel: "Outfox website",
    company: "Outfox Energy",
    logo: "/logos/outfox-energy.png",
    overview: [
      "Placeholder. An overview of the Outfox Energy website will be added next.",
    ],
    customerProblem: [
      "Placeholder. The customer problem this website addresses will be added next.",
    ],
    contribution: [
      "Placeholder. Your contribution will be added next.",
    ],
    deliveredCapabilities: [
      {
        title: "Placeholder capability",
        description:
          "A short description of what this part of the website does will be added next.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Placeholder. Outcomes will be added next.",
    ],
    notes: [
      "This page is a placeholder. The real website description has not been added yet.",
    ],
    editorNotes: [
      "Draft placeholder. Replace every placeholder line before publishing.",
      "Add the live website URL when it should be shown.",
    ],
  },
  {
    slug: "outfox-energy-customer-portal",
    status: "published",
    name: "Outfox Energy Customer Portal",
    summary:
      "Self-service portal where customers change tariff, set up Direct Debit, pay bills and register for the Priority Services Register.",
    context: "professional",
    contextLabel: "Professional work",
    delivery: "team",
    releaseStatus: "Live",
    access: "sign-in-required",
    accessNote: "Customer sign-in required",
    highlight: "Self-service tariff changes in the customer portal.",
    role: "Product ownership across discovery, requirements, backlog, testing and delivery, working with design, engineering, QA and operations.",
    capabilities: [
      "Self-service",
      "Tariff changes",
      "Direct Debit",
      "Bill payments",
      "PSR registration",
    ],
    url: "https://portal.outfox.energy/sign-in",
    coverIcon: "portal",
    coverLabel: "Customer portal",
    company: "Outfox Energy",
    logo: "/logos/outfox-energy.png",
    overview: [
      "A self-service portal for Outfox Energy customers covering tariff changes, Direct Debit setup, bill payments and Priority Services Register (PSR) registration.",
      "I worked on it as Product Analyst / Product Owner, alongside engineering, design, QA and operations teams.",
    ],
    customerProblem: [
      "Tariff price-change events generated support contacts. A self-service tariff change feature was designed to reduce them.",
      "Direct Debit and billing queries also generated support contacts. Priority Services Register registration was a manual, call-based process, which the digital form was designed to improve for vulnerable customers.",
    ],
    contribution: [
      "Defined customer journeys and requirements, and collaborated with designers on prototypes.",
      "Led product discovery for the portal.",
      "Defined API requirements and wrote PRDs, functional and technical requirements, user stories and acceptance criteria.",
      "Owned and prioritised the backlog using RICE and value-versus-effort analysis, informed by stakeholder input, research, customer journey evidence and operational feedback.",
      "Ran Agile ceremonies in Jira, and mapped billing and settlements workflows in BPMN to align stakeholders.",
      "Tested APIs in Postman across sandbox and production environments before release.",
      "Implemented Google Analytics and an A/B testing framework across the portal.",
    ],
    deliveredCapabilities: [
      {
        title: "Self-service tariff change",
        description:
          "Customers can change tariff in the portal.",
      },
      {
        title: "Direct Debit setup and bill payments",
        description: "In-app Direct Debit setup and bill payment features.",
      },
      {
        title: "Digital PSR registration",
        description:
          "A fully digital in-app form that replaced a manual, call-based Priority Services Register process.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Delivered self-service tariff changes in the customer portal.",
      "Enabled customers to set up Direct Debit and make bill payments digitally.",
      "Replaced a manual, call-based Priority Services Register process with a digital in-app form.",
      "Outcome measures for this work are not published here yet.",
    ],
    relatedCaseStudySlugs: ["outfox-self-service-tariff-changes"],
    notes: [
      "The live portal requires a customer account to sign in. No demo access is provided.",
    ],
    editorNotes: [
      "The CV's support-contact figures are held in private/CONTENT-CHECKLIST.md until the supporting evidence is confirmed. Never widen their scope when restoring them.",
      "The CV says 'led ... UX design in Figma'. I replaced it with 'collaborated with designers on prototypes'. Confirm what you designed yourself.",
    ],
  },
  {
    slug: "home-energy-customer-portal",
    // DRAFT: placeholder copy only. Publish after Eric supplies the real content.
    status: "draft",
    name: "Home Energy Customer Portal",
    summary:
      "Placeholder summary for the Home Energy customer portal. Version 2 is coming soon.",
    context: "professional",
    contextLabel: "Professional work",
    delivery: "team",
    releaseStatus: "v2 coming soon",
    access: "not-confirmed",
    accessNote: "v2 coming soon",
    role: "Placeholder. Your role on the Home Energy customer portal will be added next.",
    capabilities: ["Customer portal", "Self-service", "Content coming"],
    coverIcon: "portal",
    coverLabel: "Customer portal",
    company: "Home Energy",
    overview: [
      "Placeholder. An overview of the Home Energy Customer Portal will be added next.",
      "Version 2 of this portal is coming soon.",
    ],
    customerProblem: [
      "Placeholder. The customer problem this portal addresses will be added next.",
    ],
    contribution: [
      "Placeholder. Your contribution will be added next.",
    ],
    deliveredCapabilities: [
      {
        title: "Placeholder capability",
        description:
          "A short description of what customers can do in the portal will be added next.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Placeholder. Outcomes will be added next.",
    ],
    notes: [
      "Version 2 is coming soon. The rest of this page is a placeholder.",
    ],
    editorNotes: [
      "Draft placeholder. Replace every placeholder line before publishing.",
      "Confirm the company name, your role, and whether a public link should be shown.",
    ],
  },
  {
    slug: "home-energy-sign-up-journey",
    // DRAFT: placeholder copy only. Publish after Eric supplies the real content.
    status: "draft",
    name: "Home Energy Sign-up Journey",
    summary:
      "Placeholder summary for the Home Energy sign-up journey. The real description will be added next.",
    context: "professional",
    contextLabel: "Professional work",
    delivery: "team",
    releaseStatus: "Coming soon",
    access: "not-confirmed",
    role: "Placeholder. Your role on the Home Energy sign-up journey will be added next.",
    capabilities: ["Customer onboarding", "Sign-up journey", "Content coming"],
    coverIcon: "onboarding",
    coverLabel: "Sign-up journey",
    company: "Home Energy",
    overview: [
      "Placeholder. An overview of the Home Energy sign-up journey will be added next.",
    ],
    customerProblem: [
      "Placeholder. The customer problem this journey addresses will be added next.",
    ],
    contribution: [
      "Placeholder. Your contribution will be added next.",
    ],
    deliveredCapabilities: [
      {
        title: "Placeholder capability",
        description:
          "A short description of what the sign-up journey does will be added next.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Placeholder. Outcomes will be added next.",
    ],
    notes: [
      "This page is a placeholder. The real sign-up journey description has not been added yet.",
    ],
    editorNotes: [
      "Draft placeholder. Replace every placeholder line before publishing.",
      "Confirm the company name, your role, release status, and whether a public link should be shown.",
    ],
  }
];
