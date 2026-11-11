import type { CaseStudy } from "./types";

/**
 * CASE STUDIES
 * ------------
 * Detailed explorations of problems, research, prioritisation, decisions,
 * trade-offs and learning. Edit this file to change what appears in the
 * "Case Studies" section and on /case-studies/[slug].
 *
 * Four entries below were drafted from the documents in
 * "Desktop/case studys". They stay as DRAFTS until you have checked them
 * and set status to "published". The other three are still title-only.
 *
 * To publish an entry:
 *   1. Confirm projectType is correct (the build refuses "unconfirmed").
 *   2. Make sure executiveSummary and problem are filled in.
 *   3. For a group assignment, fill in role.individualContribution.
 *   4. Change status to "published".
 *
 * A subject (for example "Zomato") is the product being analysed. It is
 * not a claim that I worked for that company or that anything shipped.
 *
 * Keep proposedMetrics (plans) separate from measuredResults (real data).
 * None of the drafted case studies has measured results.
 */
export const caseStudies: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "twitter-x-aarrr-funnel-analysis",
    status: "draft",
    title: "Twitter/X: AARRR Funnel Analysis",
    summary:
      "An AARRR funnel analysis of X, finding that its growth problem is habit rather than awareness, with four epics prioritised using RICE.",
    projectType: "coursework",
    subject: "X (formerly Twitter)",
    logo: "/logos/x.png",
    documentUrl: "/case-studies/twitter-x-aarrr-funnel-analysis.pdf",
    topics: ["AARRR", "Funnel analysis", "RICE prioritisation", "Activation and retention"],
    coverIcon: "analytics",
    featured: true,
    role: { title: "Author of the assignment" },

    executiveSummary: {
      paragraphs: [
        "The analysis concludes that X does not have an awareness problem; it has a habit problem. It leaks users before they experience real value: sign-up is brittle, first-session relevance is weak, and there is no strong pull to return on ordinary days.",
        "Four epics were defined (account access, first run, feed control, reasons to return) and prioritised with RICE. The recommended order is: fix access, fix the first run, fix feed control, then build reasons to return.",
      ],
    },
    context: {
      paragraphs: [
        "A product management assignment applying the AARRR framework (acquisition, activation, retention, revenue, referral) to X. It was done in four steps: map the funnel, identify gaps, define epics, and prioritise them with RICE.",
      ],
    },
    problem: {
      paragraphs: [
        "Too many users must solve a puzzle before the product earns the right to become a habit. The biggest growth opportunity is faster relevance, lower friction and more visible control.",
      ],
      bullets: [
        "Acquisition: messaging is too broad, so the clearest reason to join is lost.",
        "Activation: sign-up and re-entry are brittle, and first-session relevance is under-supported.",
        "Retention: feed controls are fragmented, and casual users have no recurring reason to open X outside live events.",
        "Revenue: monetisation asks for trust before proving value.",
        "Referral: strong passive virality, but no native invite mechanic.",
      ],
    },
    targetUsers: {
      bullets: [
        "New users in their first session and first week.",
        "Returning or reactivating users.",
        "Casual users who lack a reason to open X outside live events.",
      ],
    },
    evidence: {
      paragraphs: [
        "The analysis uses public evidence only: X's own help documentation, public app store reviews, and third-party reports (see sources below). X publishes no internal funnel data, so the scores are directional.",
      ],
      bullets: [
        "Acquisition: the homepage says 'See what's happening' while app listings also promote Grok, Spaces, long video, DMs, communities and Premium.",
        "Activation: X requires a unique email or phone number per account. Reviews describe OTP failures, suspension after deactivation, and crashes when adding existing accounts on mobile.",
        "Activation: X's own documentation says relevance is built from follows, likes, replies and media watched, which are signals a new user has not yet given.",
        "Retention: controls are split across the For You and Following toggle, 'Not interested', muted words, notification filters and topic settings. App store reviews flag the feed resetting to For You.",
        "Revenue: mobile Premium costs more than web because of app-store fees, and creator revenue share requires Premium plus 5M impressions in 90 days and 500 verified followers.",
        "Referral: X's documentation favours content sharing (embeds, links) over explicit user-invite mechanics.",
      ],
    },
    options: [
      {
        name: "Epic 1: Account Access Rescue",
        description:
          "Detect duplicate email or phone conflicts before showing a dead-end error, improve OTP reliability and preserve sign-up progress, add a reactivation flow, and harden 'add existing account' on mobile.",
        verdict: "Ranked first (RICE 3.60). Highest impact, lowest effort and strongest evidence.",
      },
      {
        name: "Epic 2: Intent-Led First Run",
        description:
          "Replace generic onboarding with an explicit intent choice, let users preview their feed, and give new or reactivated users a seven-day path tied to a visibly better feed.",
        verdict: "Ranked second (RICE 1.95). High reach and impact, but a larger build.",
      },
      {
        name: "Epic 3: Feed Control Centre and Reset",
        description:
          "A single 'Control my feed' entry point with plain-language toggles, inline 'Why am I seeing this?' explanations, and a 'Reset my interests' option.",
        verdict: "Ranked third (RICE 1.80). Touches the whole active base, but consolidating fragmented controls is non-trivial and slower-moving.",
      },
      {
        name: "Epic 4: Reasons to Return",
        description:
          "Opt-in live-topic hubs, relevance-based notifications instead of volume-based ones, an optional weekly digest, and quiet mode by default for new users.",
        verdict: "Ranked fourth (RICE 1.60). High value for lapsing users, but harder to calibrate.",
      },
      {
        name: "Referral and revenue improvements",
        description:
          "Productising sharing and invite mechanics, and monetisation changes.",
        verdict: "Deliberately excluded from the build sequence; to follow once the funnel stops leaking.",
      },
    ],
    prioritisation: {
      paragraphs: [
        "Epics were scored with RICE: (Reach × Impact × Confidence) ÷ Effort. The assignment notes that the scores are directional because X publishes no internal funnel data.",
        "Sequencing rationale: fix access first, because if sign-up, reactivation or add-account flows fail nothing downstream matters. Fix the first run second, to address irrelevant first sessions. Fix feed control third. Build reasons to return last, once the first run reliably produces engaged users worth bringing back.",
        "Revenue and referral were left out of the sequence on purpose. Referral is the most under-productised lever, but sharing and invite mechanics are better built once new arrivals reliably find value. Revenue follows the same logic: a healthier activation and retention base lifts ad-inventory quality and subscription willingness more durably than pushing monetisation into a fragile experience.",
      ],
    },
    proposedSolution: {
      paragraphs: [
        "Focus on activation and retention first: fix access, fix the first run, fix feed control, then build reasons to return. Revenue and referral improvements follow once the funnel stops leaking.",
      ],
    },
    references: [
      "DataReportal: X users, stats, data and trends (datareportal.com/essential-x-stats)",
      "X Help Centre: How to sign up for X; About our approach to recommendations; About your For You timeline; Communities",
      "X Business: Brand safety",
      "Ofcom: Statement on X's commitment to tackle illegal hate and terror content (May 2026)",
      "Kantar: Media Reactions 2024 (advertiser brand-safety perceptions)",
      "Pew Research Center: Social media and news use",
      "Apple App Store (GB) and Google Play user reviews",
    ],
    editorNotes: [
      "Drafted from X_AARRR_Assignment_Submission 2.pages.",
      "Project type set to Coursework because the document is titled a 'Product Management Assignment'. Confirm.",
      "The document has no validation plan or measured results, so those sections are intentionally empty. Add a plan only if you have one.",
      "The RICE Reach, Impact, Confidence and Effort values were stored in table cells I could not read reliably, so only the final scores are shown. Add the component values if you want them.",
      "The document quotes some headline statistics (for example Android downloads and U.S. daily usage). I left them out of the page; add them if you have checked the sources.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zomato-engagement-retention-strategy",
    status: "draft",
    title: "Zomato: Engagement and Retention Strategy",
    summary:
      "A CY2026 product strategy for Zomato in Tier-1 India: OKRs, funnel and cohort analysis, and a North Star metric aimed at building an everyday ordering habit.",
    projectType: "coursework",
    subject: "Zomato",
    logo: "/logos/zomato.png",
    documentUrl: "/case-studies/zomato-engagement-retention-strategy.pdf",
    topics: ["OKRs", "Funnel analysis", "Cohort analysis", "North Star metric", "Retention"],
    coverIcon: "retention",
    featured: true,
    role: { title: "Author of the case study" },

    executiveSummary: {
      paragraphs: [
        "The strategy argues that growth in Tier-1 India means getting existing users to order more often, for reasons beyond price. It combines OKRs for CY2026, a funnel analysis, a cohort analysis and a synthesis, all built around one journey: discovery, order, delivery.",
        "The funnel leaks and the weakest cohorts share one root cause, which is thin, price-led value. The proposed fix is to build habit through personalisation, a better first 30 days, value beyond discounts and reliable delivery, tracked by a North Star metric of Monthly Habitual Orders.",
      ],
    },
    context: {
      paragraphs: [
        "A product management case study on Zomato's food delivery business in Tier-1 India, prepared for Cohort 33. All figures in the document are illustrative assumptions made for the exercise.",
      ],
    },
    problem: {
      paragraphs: [
        "Tier-1 is a mature market rather than a greenfield one, so the opportunity is to turn occasional ordering into an everyday habit.",
      ],
      bullets: [
        "Acquisition in Tier-1 is saturated and costly, so the win is getting existing users to order more often.",
        "Discount fatigue: users hunt coupons and switch apps for the best deal, so a full-price ordering habit is the durable moat.",
        "Reliability drives retention: one late or wrong order erodes more loyalty than ten discounts can buy back.",
      ],
    },
    targetUsers: {
      paragraphs: ["The analysis segments users into six cohorts for retention:"],
      bullets: [
        "New users and repeat users.",
        "High-frequency and low-frequency users.",
        "Discount-driven and full-price users.",
      ],
    },
    evidence: {
      paragraphs: [
        "This case study is built on assumptions, not on primary research or real Zomato data. The starting-point beliefs (a saturated market, discount fatigue, reliability driving loyalty), the baselines and the funnel conversion rates are illustrative assumptions made for the exercise.",
        "The funnel diagnosis and cohort analysis are therefore hypotheses to test, not findings.",
      ],
      bullets: [
        "Illustrative funnel, indexed to 100 app opens: app open to restaurant discovery −14%, discovery to menu view −29%, menu to cart −34%, cart to checkout −25%, checkout to order placed −20%, placed to delivered −4%. Open to delivered conversion is 23%.",
        "Hypothesised biggest leaks: discovery to menu (choice overload, weak ranking) and menu to cart (price shock, indecision).",
      ],
    },
    options: [
      {
        name: "KR1: Order frequency, via Smart Reorder and meal-time personalisation",
        description:
          "A personalised home feed, one-tap reorder and meal-time push at lunch and dinner, supported by Gold membership expansion.",
      },
      {
        name: "KR2: New-user retention, via first-30-days habit onboarding",
        description:
          "Spread welcome value across three orders instead of one, with a guided first order and a reliability promise.",
      },
      {
        name: "KR3: Full-price order share, via value beyond discounts",
        description:
          "Quality-verified badges, curated 'everyday value' menus and exclusive restaurants, supported by transparent all-in pricing.",
      },
      {
        name: "KR4: On-time delivery, via ETA accuracy and proactive communication",
        description:
          "A better ETA model, smarter rider allocation and batching, and live status nudges.",
      },
    ],
    prioritisation: {
      paragraphs: [
        "The initiatives are sequenced so that each builds on the last: onboarding seeds the habit, personalisation deepens it, value beyond discounts protects margin, and reliability keeps the trust that holds it together.",
      ],
      bullets: [
        "Now (Q1 to Q2): first-30-days onboarding revamp, fixing the two biggest funnel leaks (discovery ranking and transparent pricing), and shipping the ETA-accuracy model.",
        "Next (Q2 to Q3): Smart Reorder and meal-time personalisation, quality-verified badges and curated value menus, and auto-applying the best coupon at checkout.",
        "Later (Q3 to Q4): Gold membership expansion, cohort-targeted lifecycle nudges, and discount-weaning to lift full-price share.",
      ],
    },
    proposedSolution: {
      paragraphs: [
        "The objective is to make Zomato the default daily food companion for Tier-1 India, shifting users from occasional indulgence to a trusted everyday habit.",
        "The North Star metric is Monthly Habitual Orders: orders placed each month by users who order four or more times that month. It captures both breadth (active users) and depth (frequency as a proxy for habit). Limitation: repeat discounts can inflate it, because a user can reach four orders in a month through promotions without forming a lasting habit.",
        "Guardrail metrics are full-price order share, on-time delivery percentage and contribution margin per order. Discount depth and contribution margin matter most here: they show whether growth in Monthly Habitual Orders is coming from genuine habit or from discounting.",
      ],
      bullets: [
        "Funnel hypotheses include surfacing meal-time, location-aware picks on the home screen, ranking by ETA and past preference, leading with popular items and combos, showing all-in pricing earlier, and one-tap saved payment.",
        "Cohort hypotheses include spreading welcome value across three orders, deepening habit through personalisation and Gold perks, and using occasion-based nudges such as payday, weekend and meal-time to lift low-frequency cadence.",
      ],
    },
    validationPlan: {
      paragraphs: [
        "Each lead initiative is expanded into a metric ladder of input metrics, output metrics and a North Star contribution. For example, for order frequency the inputs are the share of users served a personalised feed and reorder CTA impressions, and the outputs are reorder rate and sessions per active user per week.",
        "The document does not describe an experiment or test plan for these initiatives. They are untested hypotheses, and every baseline and target is an illustrative assumption.",
      ],
    },
    proposedMetrics: [
      {
        name: "KR1: Order frequency",
        definition: "From 3.4 to 4.6 orders per active user per month (illustrative baseline and target).",
      },
      {
        name: "KR2: New-user M3 retention",
        definition: "From 27% to 40% retained at month 3 (illustrative baseline and target).",
      },
      {
        name: "KR3: Full-price order share",
        definition: "From 46% to 60% of orders without a discount (illustrative baseline and target).",
      },
      {
        name: "KR4: On-time delivery",
        definition: "From 84% to 93%, a gain of 10 points of delivery NSAT (illustrative baseline and target).",
      },
    ],
    editorNotes: [
      "Drafted from Case study 1 - Zomato .pdf.",
      "Project type set to Coursework because the document says 'Prepared by Eric Babu - Cohort 33' (matching your Airtribe cohort). Confirm.",
      "The document itself says all figures are illustrative assumptions. The page says so too and no number is presented as a result.",
      "There is no reflection section in the document. Add one if you want the case study to show learning and next steps.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "zepto-increasing-average-order-value",
    status: "draft",
    title: "Zepto: Increasing Average Order Value",
    summary:
      "Draft. A group assignment exploring how to increase average order value for Zepto.",
    projectType: "group-assignment",
    subject: "Zepto",
    logo: "/logos/zepto.png",
    topics: ["Average order value", "Group assignment"],
    coverIcon: "basket",
    role: {
      // Pending: do not describe individual contribution until supplied.
      individualContribution: undefined,
    },
    editorNotes: [
      "Group assignment. My individual contribution is pending and must be supplied before publishing.",
      "No document has been supplied yet, so nothing has been written.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "vitafit-momentum-prd",
    status: "draft",
    title: "VitaFit Momentum: A PRD for Rewards and Community Challenges",
    summary:
      "A product requirements document for a feature set intended to lift repeat usage on a fitness platform, with an A/B experiment plan and a clickable prototype.",
    projectType: "coursework",
    subject: "VitaFit",
    documentUrl: "/case-studies/vitafit-momentum.pdf",
    topics: ["PRD", "Gamification", "Community", "Retention", "Experiment design"],
    coverIcon: "communication",
    featured: true,
    timeframe: "April 2026",
    role: { title: "Author of the PRD" },
    links: [
      { label: "View prototype (Lovable)", url: "https://engage-stride-hub.lovable.app" },
    ],

    executiveSummary: {
      paragraphs: [
        "VitaFit Momentum proposes two connected features to turn a passive on-demand fitness library into a habit-forming, community-led experience: a gamification and rewards system, and time-bound community challenges.",
        "The PRD recommends launching both together in an MVP and testing them in a four-arm experiment, so the team can see whether rewards, community or the combination does most to lift repeat usage.",
      ],
    },
    context: {
      paragraphs: [
        "A product requirements document dated April 2026, version 1.0, with the status 'Draft: for review'. It follows a structure of description, problem, evidence, success measures, audience, product scope and experiment plan.",
      ],
    },
    problem: {
      paragraphs: [
        "VitaFit is described as experiencing a decline in repeat usage and long-term retention because users lose motivation after their initial onboarding.",
      ],
      bullets: [
        "Users lack a reason to return regularly once the novelty of sign-up fades.",
        "The experience feels transactional and individual rather than social or emotionally rewarding.",
        "Users do not feel personally connected to instructors, which reduces loyalty.",
        "There is no accountability mechanism, so users can disengage without consequence.",
      ],
    },
    targetUsers: {
      bullets: [
        "Primary: busy working professionals (22 to 40), who want flexible fitness but struggle with consistency, and respond to progress tracking, social proof and tangible rewards.",
        "Secondary: Gen Z and younger fitness users (18 to 25), who are native to social experiences and respond to leaderboards, badges, shareable achievements and instructor-led interaction.",
      ],
    },
    evidence: {
      paragraphs: [
        "The PRD maps six behavioural data signals to what each suggests. The document lists the signals but does not include the underlying data.",
      ],
      bullets: [
        "A drop in D7 and D30 retention suggests users are not forming a repeat habit after sign-up.",
        "High session browsing but low completion suggests users are interested but lack motivation to start or finish.",
        "Low repeat attendance with the same instructor suggests a weak instructor-user connection.",
        "Declining weekly active users suggests users are not returning consistently.",
        "Higher retention among live class users than on-demand users suggests social presence and instructor interaction drive engagement.",
        "Low community or sharing activity suggests users are not forming social accountability loops.",
      ],
    },
    options: [
      {
        name: "Gamification only (VitaPoints, streaks, badges)",
        description:
          "Users earn points for completing sessions, trying new workout types, attending live sessions and following instructors, plus weekly consistency and streak badges.",
        verdict: "Tested as its own group in the A/B plan, and also included in the combined MVP.",
      },
      {
        name: "Community Challenges only",
        description:
          "Time-bound group challenges, such as a 7-day morning yoga reset or an instructor's weekly challenge, with a leaderboard, progress screen and instructor check-ins.",
        verdict: "Tested as its own group in the A/B plan, and also included in the combined MVP.",
      },
      {
        name: "Gamification and Community Challenges together",
        description:
          "Both features launched together as the MVP.",
        verdict:
          "Recommended. Gamification gives users a personal reason to return, challenges give them someone and something to return for, and instructor-led challenges create the personal connection that is missing.",
      },
    ],
    prioritisation: {
      paragraphs: [
        "The MVP is deliberately lean, to test the core behavioural hypothesis before investing in complexity. A reward marketplace is excluded from the MVP, so the first version focuses purely on motivation and habit formation.",
      ],
      bullets: [
        "In the MVP: a basic VitaPoints system and weekly streaks, three starter badges, three community challenges with a leaderboard and progress screen, an instructor welcome message for each challenge, and a post-session reward confirmation screen.",
        "Deferred to a later phase: more instructor-led and seasonal challenges, friend invite flows and team competitions, a full reward marketplace, and personalised challenge recommendations.",
      ],
    },
    proposedSolution: {
      paragraphs: [
        "Gamification: users earn VitaPoints (for example +50 for completing a workout, +75 for attending a live session, +25 for trying a new category, +10 for following an instructor) and badges for consistency and streaks. Progress surfaces on the home screen, post-session screen, profile, instructor pages and notifications.",
        "Community challenges appear on the home screen, the Explore tab and instructor profiles, with a challenge detail page showing goal, duration, participants, progress, leaderboard and rewards. Each challenge includes an instructor welcome video and weekly check-in, live Q&A or short motivational clips, instructor shout-outs, and curated playlists.",
      ],
    },
    validationPlan: {
      paragraphs: [
        "Hypothesis 1: users who receive points, badges and streak feedback after completing sessions will attend more weekly sessions than users who do not.",
        "Hypothesis 2: users who join community challenges will show higher repeat usage and better retention than users relying solely on standard on-demand sessions.",
        "The plan is a four-week controlled beta run as a four-arm experiment: a control arm with the existing experience, Arm A with gamification only, Arm B with challenges only, and Arm C with both combined. Signals tracked include session frequency, weekly active users, challenge join and completion rates, D7 and D30 retention, instructor follow rate, notification engagement, reward engagement, streak continuation and in-app survey responses.",
        "Limitation on D30 retention: a complete 30-day retention reading needs follow-up beyond a four-week enrolment period, for example 30 days after each user first joins the experiment. The plan would need that longer window before D30 can be judged. The PRD does not state a sample size, so none is given here.",
        "If the MVP shows positive results against the success metrics, the roadmap expands to the deferred items above. All targets are proposals and the hypotheses are untested.",
      ],
    },
    proposedMetrics: [
      {
        name: "North Star: users completing two or more sessions per week",
        definition: "Increase the number of users completing two or more VitaFit sessions per week.",
      },
      {
        name: "Weekly active users completing sessions",
        definition: "Target: +15%.",
      },
      {
        name: "Average sessions per user per week",
        definition: "Target: +20%.",
      },
      {
        name: "D30 retention rate",
        definition: "Target: +10%.",
      },
      {
        name: "Repeat usage within 7 days of first session",
        definition: "Target: +15%.",
      },
      {
        name: "Challenge participation rate",
        definition: "Target: 25% of active users join at least one challenge.",
      },
      {
        name: "Challenge completion rate",
        definition: "Target: 40% of participants complete a challenge.",
      },
      {
        name: "Instructor follow or favourite rate",
        definition: "Target: +20%.",
      },
      {
        name: "Secondary: reward redemption, streak continuation, social shares or invites, notification click-through",
        definition:
          "Targets: 15 to 20% of eligible users redeem rewards; week-on-week workout consistency improves; social shares or friend invites +10%; push click-through +10% for challenge and reward messages.",
      },
    ],
    reflection: undefined,
    editorNotes: [
      "Drafted from VITA fit- airtribe .pdf. I changed the title and slug from 'VitaFit: Product Communication' to match the content, which is a PRD. Change it back if you prefer.",
      "Project type set to Coursework because the file name says 'airtribe'. Confirm, and whether VitaFit is a real product or a concept.",
      "The PRD says the owner is 'Product Team'. Confirm your own role and wording, and that 'Author of the PRD' is accurate.",
      "The 'data signals' table does not include data. If the signals are hypothetical, say so on the page.",
      "The Lovable prototype link works (it returned 200 when checked). Keep it only if you are happy for it to be public.",
      "There are no measured results and no reflection section in the document.",
      "The four groups are now described as a four-arm experiment, with a note that D30 retention needs follow-up beyond the four-week enrolment period. The PRD gives no sample size and none is invented.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "uber-findmyride-spot",
    status: "draft",
    title: "Uber: FindMyRide Spot",
    summary: "Draft. A product concept called FindMyRide Spot, for Uber.",
    projectType: "unconfirmed",
    subject: "Uber",
    logo: "/logos/uber.png",
    topics: ["Product concept", "Mobility"],
    coverIcon: "location",
    role: {},
    editorNotes: [
      "No document has been supplied for this concept, so nothing has been written.",
      "The 'Uber eats .pdf' you supplied is about Group Order and has been used for the JTBD case study below.",
      "Project type is not confirmed. This is not evidence of work with Uber.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ux-evaluation-and-redesign",
    status: "draft",
    title: "UX Evaluation and Redesign",
    summary:
      "Draft. An evaluation and redesign of a user experience. The subject has yet to be confirmed.",
    projectType: "unconfirmed",
    topics: ["UX evaluation", "Redesign"],
    coverIcon: "ux",
    role: {},
    editorNotes: [
      "No document has been supplied, so nothing has been written.",
      "The product evaluated and the project type have not been supplied.",
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "driving-adoption-jtbd-first-principles",
    status: "draft",
    title: "Driving Adoption Through JTBD and First Principles",
    summary:
      "Why Uber Eats Group Order has low adoption despite real demand, analysed with Jobs To Be Done and first principles, with a phased strategy to make group ordering the default for shared meals.",
    projectType: "unconfirmed",
    subject: "Uber Eats",
    logo: "/logos/uber-eats.png",
    documentUrl: "/case-studies/uber-eats-group-order.pdf",
    topics: ["Jobs To Be Done", "First principles", "Adoption", "Group ordering"],
    coverIcon: "research",
    featured: true,
    timeframe: "2025",
    role: { title: "Author of the analysis" },

    executiveSummary: {
      paragraphs: [
        "Group Order is a high-potential feature with chronically low adoption among working professionals and young users in Tier-1 cities. The analysis applies Jobs To Be Done and first-principles thinking to diagnose why, and proposes a phased strategy to make group ordering the default for shared meals.",
        "The central finding is that the feature digitises the coordination problem rather than eliminating it. It makes users absorb all the coordination cost and anxiety upfront while deferring the benefits to the end. The proposed fix is to shift payment to each participant, show costs and savings before commitment, and remove the waiting anxiety with a deadline.",
      ],
    },
    context: {
      paragraphs: [
        "A product management analysis of the Uber Eats Group Order feature, using Jobs To Be Done, first-principles thinking and a prioritised product roadmap. The document is marked 'Confidential, 2025'.",
      ],
    },
    problem: {
      paragraphs: [
        "In theory Group Order combines several meal preferences into one coordinated delivery, which addresses a real and recurring need across offices, friend groups, families and shared households. In practice it adds friction, across four dimensions:",
      ],
      bullets: [
        "Coordination: link-sharing is manual and passive, participants get no push notifications, and the restaurant must be chosen before others can join.",
        "Payment trust: the host pays upfront and chases reimbursements, the cost per person is not shown before joining, and it is unclear who is responsible for the bill.",
        "Accountability: there is no deadline for participants to add items, the initiator bears the blame for the group experience, and shared visibility is absent or delayed.",
        "Trust in advance booking: users have experienced promise failures, timing is overpromised, and status communication is poor, which matters more when several people are waiting.",
      ],
    },
    targetUsers: {
      paragraphs: [
        "The analysis covers working professionals and young users in Tier-1 cities, across four contexts:",
      ],
      bullets: [
        "Team lunches at work.",
        "Friends ordering together.",
        "Family meals.",
        "Small gatherings, where one person is hosting.",
      ],
    },
    evidence: {
      paragraphs: [
        "The core job statement is: 'When I'm organising food for my team or a group of friends, help me let everyone choose exactly what they want, without me having to collect orders, guess preferences, handle payment logistics, or feel responsible if anything goes wrong.'",
        "Users are not hiring the feature to place a group order. They are hiring it to eliminate coordination anxiety and preserve their social standing. Three unspoken fears were mapped: the bill trap (ending up paying for everyone), the judgement fear (others seeing what I order) and the blame fear (if something goes wrong, it is my fault).",
        "The document also presents a table of six participant segments with average items, average order value, pain points and satisfaction. Across payment methods and social contexts the same three pain points recur: payment ambiguity, coordination tax and delivery trust. It concludes that the timing of payment, not the payment method, is the issue.",
      ],
    },
    options: [
      {
        name: "Conventional assumption: 'Better UI fixes adoption'",
        description:
          "UI polish cannot resolve payment ambiguity, and trust and timing issues are structural rather than visual.",
        verdict: "Rejected.",
      },
      {
        name: "Conventional assumption: 'People want to order together'",
        description:
          "People want to eat together and avoid logistics. Group ordering is a means, not the goal, so if individual orders achieve the same social outcome, they win.",
        verdict: "Rejected.",
      },
      {
        name: "Atomic Individual Checkout",
        description:
          "Each participant pays their own share when they join, and the group order is confirmed only once everyone has paid by their preferred method. Participants join through a mobile web link with no app download or account needed.",
        verdict: "Chosen as the most structurally significant improvement.",
      },
    ],
    prioritisation: {
      paragraphs: [
        "Four first-principles questions shaped the priorities. The key principle is to eliminate the most emotionally costly friction first, not the most technically easy, and to make the benefit of group ordering visible at the exact moment of decision.",
        "Initiatives were sequenced by their impact on group order initiation rate and group order completion rate, and rated for effort and impact.",
      ],
      bullets: [
        "Now: real-time cost preview (medium effort, very high impact), an order deadline timer (low effort, high impact) and a savings visibility banner (low effort, high impact).",
        "Next: a rich messaging link preview (medium effort, very high impact), a collaborative restaurant vote (high effort, high impact) and a contextual 'Start as group?' prompt (medium effort, high impact).",
        "Later: saved group templates (medium effort, very high impact), calendar integration (high effort, very high impact) and preference memory (high effort, high impact).",
      ],
    },
    proposedSolution: {
      paragraphs: [
        "The current model is organise, wait, feel anxious, pay, then see the benefit. The target model is benefit visible, commit, organise, pay, benefit confirmed.",
        "Shifting payment ownership from the host to each participant removes the organiser's role as debt collector, improves fairness, discourages over-ordering, gives everyone their own confirmation and tracking, and removes guest friction.",
      ],
      bullets: [
        "Default on, opt out: when several people share a delivery address, prompt 'Start as group?' rather than requiring discovery.",
        "Reduce steps for the initiator, because every step avoided makes Group Order more likely to be their default next time.",
        "Make savings visible, for example 'Your group saved ₹X together' in the post-order summary.",
        "Reward the organiser publicly, as social validation is an underused retention mechanic.",
      ],
    },
    validationPlan: {
      paragraphs: [
        "The document sets targets over three to six months but does not describe how they would be tested.",
      ],
    },
    proposedMetrics: [
      {
        name: "Group Order adoption rate (primary)",
        definition:
          "Share of eligible multi-person sessions using Group Order, rather than individual orders. Target: 3× the current baseline in 6 months.",
      },
      {
        name: "Completion rate (secondary)",
        definition:
          "Share of started group orders that are placed rather than abandoned mid-coordination. Target: above 70% within 6 months.",
      },
      {
        name: "Repeat group ordering (retention)",
        definition:
          "Share of users who use Group Order a second and third time within 30 days. Target: above 40% repeat use within 3 months.",
      },
    ],
    nextSteps: {
      paragraphs: [
        "Unresolved: the recommended fix is individual payment (each participant pays their own share, and the order is confirmed only once everyone has paid), but the Now, Next and Later sequence does not include it. Those items are cost preview, order deadline timer, savings banner, link preview, restaurant vote, group prompt, saved templates, calendar integration and preference memory. How the sequence and the recommended payment model fit together would need to be decided.",
        "Unresolved: the document does not say what happens if one participant's payment fails, or what happens when the order deadline passes before everyone has paid. This page does not assume an answer.",
      ],
    },
    editorNotes: [
      "Drafted from Uber eats .pdf. I matched it to the 'Driving Adoption Through JTBD and First Principles' entry because it is a JTBD and first-principles analysis of Uber Eats Group Order. The 'Uber: FindMyRide Spot' entry has no document, so it stays a title-only draft.",
      "Project type is left as 'unconfirmed' because the document does not say whether it was coursework or an independent piece. The build will not publish it until you set it.",
      "The document is marked 'Confidential, 2025'. Check that you are free to publish it.",
      "The document's research table names two participants and gives order values and satisfaction scores. I did not name the people. Confirm whether this was real research (and how it was done) or illustrative, and say so on the page. If it was real, add method and sample size.",
      "The metric targets (3× adoption, 70% completion, 40% repeat use) are proposals. There are no measured results.",
      "There is no reflection section in the document. The 'Next steps' block was written by me to flag the mismatch between the individual-payment recommendation and the delivery sequence, plus the unresolved payment-failure and deadline behaviour. Edit it, or answer the questions, before publishing. Nothing about historical decisions has been invented.",
    ],
  },
  {
    slug: "outfox-self-service-tariff-changes",
    status: "draft",
    title: "Outfox Energy: Self-Service Tariff Changes",
    summary:
      "How self-service tariff changes were introduced in the Outfox Energy customer portal, as an alternative to contacting support during tariff price changes.",
    projectType: "professional",
    subject: "Outfox Energy",
    logo: "/logos/outfox-energy.png",
    topics: ["Self-service", "Customer portal", "Tariff changes", "UK energy retail"],
    coverIcon: "portal",
    timeframe: "To be confirmed",
    role: {
      title: "Product Analyst / Product Owner, working with engineering, design, QA and operations",
    },
    executiveSummary: {
      paragraphs: [
        "A self-service tariff change feature was delivered in the Outfox Energy customer portal. It was aimed at the support contacts that tariff price changes generate.",
      ],
    },
    context: {
      paragraphs: [
        "Outfox Energy is a UK energy supplier. The feature sits in the customer portal, which requires customer sign-in. It was delivered by a cross-functional team of engineering, design, QA and operations, with me as Product Analyst / Product Owner.",
      ],
    },
    problem: {
      paragraphs: [
        "Tariff price changes generate support contacts from customers who want to review or change their tariff.",
      ],
    },
    proposedSolution: {
      paragraphs: [
        "Let customers change tariff themselves in the portal.",
      ],
    },
    relatedProductSlugs: ["outfox-energy-customer-portal"],
    editorNotes: [
      "Outline only. It uses just what the CV and product page already say. Nothing has been invented.",
      "To make this publishable, add: who the users were and how you understood their needs (research, support data, operational feedback), the options you considered, how you prioritised and traded off, the decisions you made and who made them, how it was validated (UAT, API tests, A/B or analytics) and your reflection.",
      "The CV's support-contact figure is held in private/CONTENT-CHECKLIST.md. Add it to 'Measured results' only with its evidence, and keep its scope to tariff price-change events.",
      "Confirm that your employer is happy for this case study to be public.",
    ],
  },
  {
    slug: "outfox-onboarding-meter-validation",
    status: "draft",
    title: "Outfox Energy: Onboarding and Meter Validation",
    summary:
      "How frontend logic was introduced to automate meter-validation steps in the Outfox Energy sign-up journey.",
    projectType: "professional",
    subject: "Outfox Energy",
    logo: "/logos/outfox-energy.png",
    topics: ["Customer onboarding", "Meter validation", "Requirements", "UK energy retail"],
    coverIcon: "onboarding",
    timeframe: "To be confirmed",
    role: {
      title: "Product Analyst / Product Owner, working with engineering, design, QA and operations",
    },
    executiveSummary: {
      paragraphs: [
        "Frontend logic was introduced to automate meter-validation steps that were previously manual in the customer onboarding journey.",
      ],
    },
    context: {
      paragraphs: [
        "The sign-up journey takes domestic customers from a quote through to joining Outfox Energy. It was delivered by a cross-functional team of engineering, design, QA and operations, with me as Product Analyst / Product Owner.",
      ],
    },
    problem: {
      paragraphs: [
        "Onboarding included manual meter-validation steps, which created operational workload for the business.",
      ],
    },
    proposedSolution: {
      paragraphs: [
        "Automate meter-validation steps with frontend logic in the onboarding journey, with requirements defined by product and built with engineering.",
      ],
    },
    relatedProductSlugs: ["outfox-energy-sign-up-journey"],
    editorNotes: [
      "Outline only. It uses just what the CV and product page already say. Nothing has been invented.",
      "To make this publishable, add: which validation steps were manual and why, the options you considered (for example what to automate first), how you prioritised, the rules and edge cases you specified, how it was tested (Postman, UAT, release checks) and your reflection.",
      "The CV's meter-validation figure is held in private/CONTENT-CHECKLIST.md. Describe it only as the share of manual meter-validation steps automated, never as automation of the whole onboarding journey, and only with evidence.",
      "Confirm that your employer is happy for this case study to be public.",
    ],
  },
];
