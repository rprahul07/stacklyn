import type { BlogPost } from "./types";

export const oilGasPosts: BlogPost[] = [
  // ------------------------------------------------------------------
  {
    slug: "what-is-permit-to-work-system",
    title: "What Is a Permit to Work System? A Practical Guide for Oil & Gas Contractors",
    metaTitle: "What Is a Permit to Work (PTW) System? Guide for Oil & Gas | Stacklyn",
    metaDescription:
      "A permit to work system controls high-risk work such as hot work, confined space entry, and electrical isolation. Learn the permit types, lifecycle, roles, common failures, and what digital PTW changes.",
    keywords:
      "what is permit to work, permit to work system, PTW system oil and gas, types of work permits, hot work permit, confined space permit, digital permit to work, ePTW, permit to work process, isolation certificate",
    category: "Permit to Work",
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
    readMinutes: 8,
    dek: "How permit to work systems control hazardous work on oil and gas sites, where paper systems break down, and what changes when permits go digital.",
    shortAnswer:
      "A permit to work (PTW) system is a formal written process for controlling high-risk, non-routine work such as hot work, confined space entry, work at height, and electrical isolation. Before work starts, hazards are assessed, isolations and gas tests are completed, and named people authorise the job. Afterwards, the area is formally handed back as safe.",
    sections: [
      {
        heading: "Why permit to work systems exist",
        paragraphs: [
          "Many serious accidents in the process industries happen during maintenance and other non-routine work, when the normal operating controls of a plant do not apply. A permit to work system exists to make sure that everyone involved knows exactly what work is happening, where, what hazards it creates, and which safeguards must be in place before it starts.",
          "The Piper Alpha disaster in 1988 made this painfully clear. A pump was restarted while one of its pressure safety valves had been removed for maintenance, and the public inquiry that followed found serious failings in how permits were managed and communicated at shift handover. 167 people died. Since then, permit to work has been treated as a core part of safety management across the oil and gas industry.",
          "Regulators and operators set expectations for how it is done. The UK Health and Safety Executive publishes guidance on permit-to-work systems (HSG250), and operators such as Saudi Aramco, ADNOC, and PDO specify their own permit requirements for the contractors who work on their facilities.",
        ],
      },
      {
        heading: "What work needs a permit",
        paragraphs: [
          "Each site defines its own list in its permit to work procedure, but most oil and gas facilities require a permit for work such as:",
        ],
        bullets: [
          "Hot work — welding, cutting, grinding, or any source of ignition near flammable materials.",
          "Confined space entry — vessels, tanks, pits, and other enclosed spaces.",
          "Work at height.",
          "Electrical work and the isolation of electrical equipment.",
          "Excavation and ground disturbance.",
          "Breaking containment on process equipment and pipework.",
          "Critical lifting operations and radiography.",
        ],
      },
      {
        heading: "The permit lifecycle, step by step",
        paragraphs: [
          "Every permit follows a lifecycle. The names differ between companies, but the logic is the same: nothing starts until controls are verified, and nothing is closed until the area is safe to return to operation.",
        ],
        table: {
          headers: ["Step", "What happens"],
          rows: [
            ["1. Request", "The team doing the work describes the job, location, equipment, and expected duration."],
            ["2. Risk assessment", "A job safety analysis or task risk assessment identifies hazards and the controls needed."],
            ["3. Isolation", "Energy sources are isolated and locked, usually recorded on an isolation certificate."],
            ["4. Gas testing", "The atmosphere is tested where required and results are recorded, with re-testing at set intervals."],
            ["5. Authorisation", "The responsible authority checks the controls and issues the permit with any conditions."],
            ["6. Work and monitoring", "The permit is displayed at the worksite and its conditions are checked during the job."],
            ["7. Suspension and handover", "Unfinished work is suspended or formally handed over between shifts."],
            ["8. Completion and hand-back", "The site is inspected, isolations are removed, and the area is returned to operations before the permit closes."],
          ],
        },
      },
      {
        heading: "Key roles in a permit to work system",
        paragraphs: ["Titles vary between companies, but most systems separate these responsibilities:"],
        bullets: [
          "Issuing or area authority — responsible for the plant area and authorises work in it.",
          "Performing authority or permit receiver — leads the work party and accepts responsibility for working within the permit conditions.",
          "Isolating authority — carries out and verifies isolations.",
          "Authorised gas tester — tests the atmosphere and records the results.",
          "Control room or site controller — keeps an overview of all active permits and conflicting activities.",
        ],
      },
      {
        heading: "Where paper permit systems break down",
        paragraphs: [
          "Paper permits can work, but they depend heavily on discipline and memory. The same weaknesses appear again and again in incident investigations and audits:",
        ],
        bullets: [
          "No live view of every active permit, so conflicting work in the same area is easy to miss.",
          "Isolations that are not clearly cross-referenced to the permits that depend on them.",
          "Gas test results that are not recorded at the required intervals.",
          "Shift handovers done verbally, with details lost between crews.",
          "Permits left open after work finishes, or closed without a proper site inspection.",
          "Audits that take days because evidence is spread across folders and handwriting.",
        ],
      },
      {
        heading: "What changes with a digital permit to work system",
        paragraphs: [
          "A digital permit to work system (often called ePTW) does not replace the procedure or the site walk. It enforces the steps, stops permits progressing until required checks are complete, and records the evidence automatically.",
        ],
        table: {
          headers: ["Area", "Paper permits", "Digital permits"],
          rows: [
            ["Visibility", "Permit board in one control room", "Live view of all permits on any authorised screen"],
            ["Conflicting work", "Relies on people noticing", "Automatic warnings for overlapping work on the same area or equipment"],
            ["Isolations", "Separate paper certificates", "Linked to the permits that depend on them"],
            ["Gas tests", "Written on the form, if remembered", "Timestamped entries with re-test reminders"],
            ["Competency", "Assumed", "Only trained, authorised people can issue or receive permits"],
            ["Audit", "Days of document gathering", "Complete history exported in minutes"],
          ],
        },
      },
      {
        heading: "Off-the-shelf or custom permit to work software?",
        paragraphs: [
          "Off-the-shelf permit software suits organisations whose procedures match the product. Custom software makes sense when your permit types, approval chains, or client-specific formats are unusual — for example a contractor working for several operators with different requirements — or when you need offline mobile apps, Arabic interfaces, or integration with maintenance systems such as SAP or Maximo.",
          "A custom digital permit to work system for one site typically costs $6,000–12,000 to build with an India-based team, and a pilot usually goes live in 8–12 weeks.",
        ],
      },
    ],
    faqs: [
      { q: "What is the difference between a permit to work and a risk assessment?", a: "A risk assessment identifies the hazards of a job and the controls needed. The permit to work is the formal authorisation that confirms those controls are actually in place before the work starts, and it usually references the risk assessment." },
      { q: "What are the main types of work permits?", a: "The most common are hot work, cold work, confined space entry, electrical and isolation permits, excavation, and work at height. Many sites add permits for lifting operations, radiography, and breaking containment." },
      { q: "Who can issue a permit to work?", a: "Only people trained and authorised under the site's permit to work procedure, usually the area authority responsible for that part of the plant. The permit receiver who leads the work party accepts responsibility for working within its conditions." },
      { q: "Do operators accept digital permit to work systems?", a: "Many operators and contractors use electronic permit systems. Whether a particular system is accepted depends on the operator's own procedures, so a digital system should implement those procedures exactly and be reviewed with the operator before use." },
      { q: "How long does it take to implement a digital permit to work system?", a: "A pilot on one site typically takes 8–12 weeks, including configuring permit types, approval chains, and reports. Rollout to further sites follows in phases." },
    ],
    related: [
      { name: "HSE & Compliance Software", href: "/industries/hse-compliance-software" },
      { name: "Saudi Arabia Oil & Gas Software", href: "/markets/oil-gas-software-saudi-arabia" },
      { name: "UAE Oil & Gas Software", href: "/markets/oil-gas-software-uae" },
      { name: "Software Cost Estimator", href: "/tools/software-cost-estimator" },
    ],
  },
  // ------------------------------------------------------------------
  {
    slug: "uae-icv-certificate-score-guide",
    title: "How the UAE ICV Certificate and Score Work: A Guide for Suppliers",
    metaTitle: "UAE ICV Certificate & Score Explained for Suppliers (2026) | Stacklyn",
    metaDescription:
      "What the UAE In-Country Value (ICV) certificate is, which components make up your ICV score, how supplier spend counts, how long certificates last, and practical ways to improve your score.",
    keywords:
      "UAE ICV certificate, ICV score calculation, how to get ICV certificate UAE, in-country value UAE, MoIAT ICV program, ICV certificate validity, improve ICV score, ADNOC ICV, ICV for suppliers, ICV Emiratisation",
    category: "ICV & Localisation",
    datePublished: "2026-09-23",
    dateModified: "2026-09-23",
    readMinutes: 8,
    dek: "What the National In-Country Value certificate measures, how the score is built, and how suppliers can improve it before their next audit.",
    shortAnswer:
      "The UAE ICV certificate measures how much a company contributes to the UAE economy. Under the National In-Country Value Program run by MoIAT, approved certification bodies calculate a score from audited financial statements. It covers UAE goods and third-party spend, investment, Emiratisation, expatriate contribution, and bonus factors. A higher score improves how you are evaluated in tenders.",
    sections: [
      {
        heading: "What the ICV programme is and why it matters",
        paragraphs: [
          "The National In-Country Value (ICV) Program is a UAE government initiative, managed by the Ministry of Industry and Advanced Technology (MoIAT), that aims to redirect procurement spending into the UAE economy. Companies receive an ICV certificate showing a score that reflects their contribution to the country.",
          "The score matters because it is used when tenders are evaluated. Federal entities and major buyers — including ADNOC, which pioneered ICV in the energy sector — take ICV scores into account when awarding contracts. In a close tender, a stronger score can be the difference between winning and losing the work.",
        ],
      },
      {
        heading: "What makes up the ICV score",
        paragraphs: ["The score is calculated from several components defined in the MoIAT methodology:"],
        bullets: [
          "Goods and third-party spend — manufacturing in the UAE and money spent with UAE-based suppliers.",
          "Investment — investment in UAE-based assets such as facilities, equipment, and technology.",
          "Emiratisation — employment and pay of UAE nationals.",
          "Expatriate contribution — the contribution of expatriate employees working in the UAE.",
          "Bonus factors — additional credit for specific qualifying activities.",
        ],
      },
      {
        heading: "How your supplier spend counts",
        paragraphs: [
          "For many service companies, third-party spend is the biggest lever on the score. Not all spend counts equally. Spend with UAE suppliers that hold a valid ICV certificate contributes according to their own score, UAE suppliers without a valid certificate count only at a low default value, and spend with suppliers outside the UAE generally adds nothing.",
          "That makes supplier certificates important. If a key supplier's certificate expires or was never collected, your own score can fall even though nothing about your spending changed. Keeping a register of supplier certificates, with their scores and expiry dates, is one of the simplest ways to protect your result.",
        ],
      },
      {
        heading: "How to get certified",
        paragraphs: ["The process is built around your audited financial statements:"],
        bullets: [
          "Finalise your audited financial statements for the year.",
          "Engage an ICV certification body approved by MoIAT.",
          "Prepare the ICV submission with spend, supplier, investment, and workforce data and supporting documents.",
          "The certification body verifies the evidence and calculates your score.",
          "The certificate is issued and can be verified by buyers.",
          "Repeat the process with each new set of audited financial statements to renew.",
        ],
      },
      {
        heading: "How long an ICV certificate lasts",
        paragraphs: [
          "An ICV certificate is valid for 14 months from the date of the audited financial statements it is based on. Because tenders require a valid certificate, plan renewals well ahead of expiry so there is no gap between certificates.",
        ],
      },
      {
        heading: "Why ICV scores come out lower than expected",
        paragraphs: ["When companies are disappointed by their score, the cause is usually data rather than performance:"],
        bullets: [
          "Supplier certificates that were expired or never collected.",
          "Spend classified incorrectly between UAE-based and imported.",
          "Investment in UAE assets that was not captured in the submission.",
          "Incomplete records of Emirati employment and pay.",
          "Data assembled in a rush just before the certification deadline.",
        ],
      },
      {
        heading: "Practical ways to improve your score",
        paragraphs: ["Most improvements come from managing the score throughout the year instead of calculating it once:"],
        bullets: [
          "Prefer ICV-certified UAE suppliers where it makes commercial sense.",
          "Ask key suppliers for their current certificates and track expiry dates.",
          "Record spend, investment, and workforce data monthly, not annually.",
          "Plan investment and Emiratisation with the score in mind.",
          "Estimate your score before the audit so there is still time to act.",
        ],
      },
      {
        heading: "Using software to track ICV all year",
        paragraphs: [
          "ICV reporting software connects to your accounting system, classifies spend by supplier location and certificate status, keeps a register of supplier certificates, summarises workforce data, and estimates your score before the audit. When certification time comes, the evidence is already organised.",
          "Software prepares and organises the data — it does not issue certificates. Your official score is always calculated by an approved certification body under the current MoIAT methodology, so check the latest guidelines with your certification body before relying on any estimate.",
        ],
      },
    ],
    faqs: [
      { q: "Who issues the ICV certificate in the UAE?", a: "ICV certificates are issued by certification bodies approved by the Ministry of Industry and Advanced Technology (MoIAT) under the National In-Country Value Program, based on your audited financial statements." },
      { q: "How long is an ICV certificate valid?", a: "An ICV certificate is valid for 14 months from the date of the audited financial statements it is based on, so it needs renewing with each new financial year." },
      { q: "Is an ICV certificate mandatory?", a: "It is not a general legal requirement for every company, but federal entities and major buyers such as ADNOC use ICV in tender evaluation, so suppliers without a valid certificate lose the ICV part of the evaluation." },
      { q: "How can a service company improve its ICV score?", a: "Focus on third-party spend: work with ICV-certified UAE suppliers where sensible, collect current supplier certificates, classify spend accurately, and track data during the year so there is time to act before the audit." },
      { q: "Can software calculate my official ICV score?", a: "No. Software can estimate your score and organise the evidence, but the official score is calculated by an approved certification body under the MoIAT methodology." },
    ],
    related: [
      { name: "ICV Reporting Software (UAE)", href: "/markets/icv-reporting-software-uae" },
      { name: "UAE Oil & Gas Software", href: "/markets/oil-gas-software-uae" },
      { name: "Tally & GST Automation", href: "/ai-automation/tally-gst-automation" },
      { name: "Software Cost Estimator", href: "/tools/software-cost-estimator" },
    ],
  },
];
