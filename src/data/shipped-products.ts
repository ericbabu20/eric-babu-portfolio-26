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
    slug: "aura-spaces-ai-energy-assistant",
    status: "published",
    name: "Aura Spaces AI Energy Portal",
    summary:
      "A smart-home energy portal that brings electricity, gas, solar, EV charging and tariff data into one view, with an AI assistant that answers questions in plain English.",
    context: "independent",
    contextLabel: "Independent product",
    delivery: "independent",
    releaseStatus: "Deployed",
    access: "public",
    accessNote: "Live portal available",
    role: "Product definition, UX, coding, feature development and deployment.",
    capabilities: [
      "AI assistant",
      "Energy usage data",
      "Octopus Energy data",
      "EV charging",
      "Tariff comparison",
    ],
    url: "https://www.auraspaces.uk/portal",
    urlLabel: "Open Aura portal",
    mediaVideo: "/videos/aura-spaces-card-loop-5s.mp4",
    coverIcon: "assistant",
    coverLabel: "Aura Spaces",
    overview: [
      "A smart-home energy portal that brings electricity, gas, solar, EV charging and tariff data into one view, with an AI assistant that answers questions in plain English.",
      "It is a personal product, separate from my work at Outfox Energy.",
    ],
    customerProblem: [
      "UK households get energy data scattered across bills, supplier apps and device apps, and little of it explains what to do next.",
    ],
    built:
      "A web and mobile portal with a home overview (solar, grid, home and EV flows), daily, weekly and monthly electricity and gas usage, an EV charging card with off-peak scheduling, a tariff card with supplier comparison, device controls, and Aura AI, a chat assistant that answers from the household's own data.",
    stack:
      "Expo / React Native (web export on Vercel), Express API, Supabase (auth and database), Gemini (AI assistant), Octopus Energy API (tariff and consumption data).",
    inProgress: "Live device control through Home Assistant, and voice.",
    contribution: [
      "Defined the PRD, UX flows and data rules.",
      "Handled all coding and feature development.",
      "Deployed the product end to end.",
    ],
    deliveredCapabilities: [
      {
        title: "Home overview",
        description: "Solar, grid, home and EV flows in one view.",
      },
      {
        title: "Electricity and gas usage",
        description: "Daily, weekly and monthly usage from the household's own data.",
      },
      {
        title: "EV charging",
        description: "A charging card with off-peak scheduling.",
      },
      {
        title: "Tariff comparison",
        description: "A tariff card that compares suppliers.",
      },
      {
        title: "Aura AI",
        description: "A chat assistant that answers from the household's own data.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "Deployed, with a live portal. No usage or adoption figures are published.",
    ],
    editorNotes: [
      "The card thumbnail is the 5 second loop at public/videos/aura-spaces-card-loop-5s.mp4.",
      "No usage or adoption figures are published.",
    ],
  },
  {
    slug: "compliance-analyst-ai",
    // DRAFT: release status, deployment and adoption are not confirmed.
    // Change to "published" only after Eric confirms (see private checklist).
    status: "draft",
    name: "Compliance Analyst AI",
    summary:
      "An internal AI tool to support Ofgem-sensitive document review, built around local-first retrieval-augmented generation (RAG).",
    context: "internal",
    contextLabel: "Internal AI tool",
    delivery: "unconfirmed",
    releaseStatus: "Draft: release status not confirmed",
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
    coverLabel: "Compliance Analyst AI",
    overview: [
      "An internal AI tool designed to support the review of Ofgem-sensitive documents. It combines local-first retrieval-augmented generation (RAG) with cited question-and-answer, gap analysis, regulatory change monitoring, audit logging and privacy controls.",
      "It supports reviewers. It does not guarantee regulatory compliance and does not replace human review.",
    ],
    customerProblem: [
      "Reviewing Ofgem-sensitive documents is detailed work that depends on finding and citing the right source material.",
    ],
    contribution: [
      "Designed and built the tool.",
    ],
    deliveredCapabilities: [
      {
        title: "Local-first RAG",
        description: "Retrieval-augmented generation designed to work locally first.",
      },
      {
        title: "Cited Q&A",
        description: "Answers that cite the source material.",
      },
      {
        title: "Gap analysis and regulatory change monitoring",
        description: "Supports review of gaps and tracks regulatory changes.",
      },
      {
        title: "Audit logging and privacy controls",
        description: "Records activity and applies privacy controls.",
      },
    ],
    outcomes: [],
    qualitativeOutcomes: [
      "No deployment, adoption or outcome claims are made.",
    ],
    notes: [
      "This tool supports document review. It does not guarantee regulatory compliance.",
    ],
    editorNotes: [
      "Draft: excluded from the public site until release status is confirmed.",
      "Confirm: is it deployed, who uses it, and was it built independently or for an employer?",
      "Confirm that publishing a description of an internal, Ofgem-sensitive tool is permitted.",
      "No public demo link should be created.",
    ],
  },
];
