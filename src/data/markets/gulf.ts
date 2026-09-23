import type { MarketPage } from "./types";

const CONTACT_CTA = "WhatsApp +91 95444 51720 or email rahulrp@stacklyn.in";

const oilGasLinks = [
  { name: "Oil & Gas Software", href: "/industries/oil-gas-software" },
  { name: "HSE & Compliance Software", href: "/industries/hse-compliance-software" },
  { name: "EPC & Engineering Software", href: "/industries/epc-engineering-software" },
  { name: "Industrial Workforce Management", href: "/industries/workforce-management-software" },
  { name: "AI Document Processing", href: "/ai-automation/invoice-document-ai" },
];

export const gulfMarketPages: MarketPage[] = [
  // ------------------------------------------------------------------
  {
    slug: "oil-gas-software-uae",
    name: "UAE Oil & Gas Software",
    region: "United Arab Emirates",
    areaServed: ["AE"],
    metaTitle: "Oil & Gas Software Development for UAE Companies | ADNOC Contractors | Stacklyn",
    metaDescription:
      "Custom oil and gas software for UAE operators, EPC contractors, and ADNOC suppliers — digital permit to work, HSE, ICV reporting, crew rotation, and operations dashboards. Arabic and English. Built by Stacklyn.",
    keywords:
      "oil and gas software development UAE, oil and gas software company Abu Dhabi, ADNOC contractor software, permit to work software UAE, HSE software UAE oil and gas, ICV reporting software, digital oilfield software UAE, crew management software UAE, custom software development Abu Dhabi oil gas, oilfield software Dubai",
    eyebrow: "Abu Dhabi · Dubai · Ruwais · Fujairah · ADNOC Suppliers · Arabic & English",
    headline: "Custom Oil & Gas Software for UAE Operators, Contractors, and ADNOC Suppliers",
    intro:
      "Stacklyn builds custom software for oil and gas companies in the United Arab Emirates — digital permit to work, HSE and incident management, ICV reporting, crew rotation and competency tracking, and operations dashboards. Every system is designed around ADNOC-style HSE expectations, UAE data protection law, and bilingual Arabic and English users.",
    context: {
      heading: "What UAE oil and gas companies need from software",
      body:
        "Working in the UAE energy sector means answering to demanding operators, winning tenders on In-Country Value scores, and running mixed workforces across onshore, offshore, and fabrication sites. Contractors are measured on HSE performance, documentation discipline, and the evidence they can produce on request. Most of that evidence still lives in spreadsheets, paper permits, and email. Off-the-shelf products rarely match a contractor's exact permit types, approval chains, or client-specific formats — which is why UAE companies increasingly commission software built around their own procedures and their clients' requirements.",
    },
    keyFacts: [
      { label: "Main operator", value: "ADNOC (Abu Dhabi National Oil Company) and its group companies, plus international partners" },
      { label: "Localisation", value: "National In-Country Value (ICV) Program run by the Ministry of Industry and Advanced Technology (MoIAT); ICV certificates carry weight in tender evaluation" },
      { label: "Data law", value: "UAE Personal Data Protection Law — Federal Decree-Law No. 45 of 2021" },
      { label: "Workforce", value: "Emiratisation targets and multinational crews across onshore, offshore, and yard sites" },
      { label: "Time difference", value: "India is 1.5 hours ahead of the UAE — nearly the full working day overlaps" },
    ],
    compliance: {
      heading: "Built for the way UAE operators audit their contractors",
      points: [
        { title: "Operator-aligned permit to work", desc: "Permit types, isolation certificates, gas testing, and approval chains configured to match your client's HSE management system instead of a generic template." },
        { title: "ICV-ready data capture", desc: "Supplier spend, local purchasing, workforce, and Emiratisation data captured as part of daily operations, so ICV submissions are prepared from records rather than reconstructed each year." },
        { title: "UAE PDPL-aware data handling", desc: "Personal data of workers and contractors handled with consent, access control, retention limits, and audit logs designed around the UAE data protection law." },
        { title: "Bilingual Arabic and English interfaces", desc: "Right-to-left Arabic layouts and English side by side, so the same system serves site crews, supervisors, and client representatives." },
      ],
    },
    solutions: [
      { title: "Digital Permit to Work (ePTW)", desc: "Hot work, confined space, working at height, electrical isolation, and excavation permits with gas test records, multi-level approvals, a live permit board, and automatic expiry." },
      { title: "HSE, Incident & Audit Platform", desc: "Incident and near-miss reporting, investigations, corrective actions, safety observations, and audit checklists with photo evidence and client-ready monthly reports." },
      { title: "ICV Reporting & Supplier Tracking", desc: "Classification of local and imported spend, supplier ICV certificate tracking, score simulation, and document packs for your certification audit." },
      { title: "Crew Rotation & Competency Management", desc: "Rotation schedules, certificate and training expiry alerts, site access eligibility, and offshore and onshore headcount visibility." },
      { title: "Operations & Production Dashboards", desc: "Data from SCADA, historians, and field reports consolidated into live operational dashboards for managers and client reviews." },
      { title: "Document Control & Vendor Portals", desc: "Controlled engineering documents, transmittals, and vendor data submissions with revision history and approval workflows." },
    ],
    delivery: [
      { title: "Your working hours", desc: "Our day overlaps almost entirely with UAE hours for calls, demos, and support." },
      { title: "UAE hosting when required", desc: "Deployment to cloud regions inside the UAE or to your own servers where data residency or client policy requires it." },
      { title: "Fixed-price phases", desc: "A working pilot in 8–12 weeks, then phased rollout with fixed prices per phase." },
      { title: "Handover and ownership", desc: "You own the source code and data, with documentation for your IT team or ongoing support from us." },
    ],
    faqs: [
      { q: "Does Stacklyn build oil and gas software for companies in the UAE?", a: "Yes. Stacklyn builds custom software for UAE oil and gas operators, EPC contractors, and service companies — digital permit to work, HSE and incident management, ICV reporting, crew rotation, document control, and operations dashboards." },
      { q: "Can you build software that meets ADNOC contractor requirements?", a: "We configure permit types, approval chains, reporting formats, and audit evidence to match the HSE requirements your client sets for contractors. We build to your documented requirements; approval of any system by an operator remains between you and your client." },
      { q: "Can the software help with our ICV certificate?", a: "Yes. We build tools that capture local spend, supplier data, workforce, and Emiratisation information during normal operations and prepare the data your certification body needs. Certificates themselves are issued by approved certification bodies under the MoIAT methodology." },
      { q: "Do you support Arabic?", a: "Yes. We build bilingual Arabic and English interfaces with right-to-left layouts, Arabic reports, and language switching per user." },
      { q: "Can the system be hosted in the UAE?", a: "Yes. We deploy to cloud regions within the UAE or to your own infrastructure when data residency rules or client policy require it." },
      { q: "How do you work with UAE clients from India?", a: "India is 1.5 hours ahead of the UAE, so our working day overlaps with yours. We run weekly demos, share a live test environment, and agree on response times for support." },
      { q: "How much does oil and gas software cost in the UAE?", a: "Focused modules such as digital permit to work or ICV reporting typically start from $6,000–14,000. Integrated platforms with HSE, permits, workforce, and dashboards usually range from $25,000–85,000, delivered in fixed-price phases." },
      { q: "How do we start?", a: `${CONTACT_CTA} with the workflow you want to digitise. We reply within 24 hours and send a phased proposal after a free discovery call.` },
    ],
    related: ["oil-gas-software-saudi-arabia", "oil-gas-software-qatar", "oil-gas-software-oman", "icv-reporting-software-uae"],
    relatedLinks: oilGasLinks,
  },
  // ------------------------------------------------------------------
  {
    slug: "oil-gas-software-saudi-arabia",
    name: "Saudi Arabia Oil & Gas Software",
    region: "Saudi Arabia",
    areaServed: ["SA"],
    metaTitle: "Oil & Gas Software Development for Saudi Arabia | Aramco Contractors | Stacklyn",
    metaDescription:
      "Custom oil and gas software for Saudi Arabia — digital work permits aligned to Aramco GI 2.100 practice, HSE and incident management, IKTVA data, and Arabic-first operations systems for contractors in Dhahran, Jubail, and Yanbu.",
    keywords:
      "oil and gas software Saudi Arabia, Aramco contractor software, GI 2.100 work permit software, permit to work software Saudi Arabia, HSE software KSA, IKTVA reporting software, oilfield software Dammam, oil and gas software company Saudi Arabia, Arabic oil and gas software, Jubail industrial software",
    eyebrow: "Dhahran · Dammam · Jubail · Ras Tanura · Yanbu · Aramco Contractors · Arabic First",
    headline: "Custom Oil & Gas Software for Saudi Arabia's Operators and Aramco Contractors",
    intro:
      "Stacklyn builds custom software for oil and gas and industrial companies in Saudi Arabia — digital work permit systems, HSE and incident management, IKTVA data collection, workforce and Saudization tracking, and operations dashboards. Systems are Arabic-first, designed around Saudi Aramco contractor practice, and aligned with Saudi data protection and cybersecurity rules.",
    context: {
      heading: "Why Saudi contractors are digitising permits and HSE records",
      body:
        "Contractors working for Saudi Aramco operate under some of the strictest safety management expectations in the industry. The Aramco work permit system under GI 2.100 and the Construction Safety Manual demand documented pre-job reviews, gas testing, approvals, and traceable records. At the same time, IKTVA scores influence contract awards, and Saudization requirements shape how workforces are planned and reported. Paper permits and spreadsheet trackers cannot keep up with that level of scrutiny across multiple sites in the Eastern Province, Jubail, and Yanbu.",
    },
    keyFacts: [
      { label: "Main operator", value: "Saudi Aramco, alongside SABIC and major petrochemical and industrial operators" },
      { label: "Safety practice", value: "Aramco General Instruction GI 2.100 (work permits) and the Aramco Construction Safety Manual guide contractor practice" },
      { label: "Localisation", value: "IKTVA (In-Kingdom Total Value Add) programme; Saudization under the Nitaqat framework" },
      { label: "Data & security", value: "Personal Data Protection Law (PDPL) enforced by SDAIA; National Cybersecurity Authority controls for many organisations" },
      { label: "Time difference", value: "India is 2.5 hours ahead of Saudi Arabia — mornings in Riyadh overlap with our afternoons" },
    ],
    compliance: {
      heading: "Designed around Aramco contractor practice and Saudi regulation",
      points: [
        { title: "Work permits modelled on GI 2.100 practice", desc: "Permit types, issuer and receiver roles, gas testing, isolation, and approval chains configured to follow your documented Aramco work permit procedures." },
        { title: "IKTVA data from daily operations", desc: "Local content, supplier spend, training, and Saudi workforce data captured continuously, ready for IKTVA reporting rather than assembled at year end." },
        { title: "PDPL-aligned personal data handling", desc: "Worker and contractor data handled with consent records, access controls, retention limits, and audit trails aligned with the Saudi PDPL." },
        { title: "Arabic-first interfaces", desc: "Arabic right-to-left screens, Arabic reports, and English alongside, so supervisors, crews, and client representatives use the same system." },
      ],
    },
    solutions: [
      { title: "Digital Work Permit System", desc: "Electronic permits with issuer and receiver sign-off, gas test entries, isolation certificates, permit boards, suspension, and closure — all with timestamps and photo evidence." },
      { title: "HSE & Incident Management", desc: "Incident, near-miss, and observation reporting with investigations, corrective actions, and KPI dashboards for client and management reviews." },
      { title: "IKTVA & Local Content Reporting", desc: "Spend classification, supplier localisation data, Saudi workforce and training records, and IKTVA-ready summaries." },
      { title: "Workforce, Saudization & Competency", desc: "Headcount by nationality and site, Saudization ratios, certificate and training expiry alerts, and site access eligibility checks." },
      { title: "Plant & Maintenance Dashboards", desc: "Maintenance work orders, equipment status, and production data consolidated into live dashboards for plant and project managers." },
      { title: "Contractor & Subcontractor Compliance Portal", desc: "Document submission, insurance, method statements, and worker qualifications verified before mobilisation." },
    ],
    delivery: [
      { title: "Arabic and English from day one", desc: "Bilingual design, RTL layouts, and Arabic reports are part of the build, not a later add-on." },
      { title: "In-kingdom hosting when required", desc: "Deployment to Saudi cloud regions or your own data centre when data residency or client policy requires it." },
      { title: "Overlapping working hours", desc: "Our afternoons overlap with Saudi mornings for calls, demos, and support." },
      { title: "Phased, fixed-price delivery", desc: "A pilot on one site first, then rollout in fixed-price phases with measurable results." },
    ],
    faqs: [
      { q: "Does Stacklyn build software for Saudi Aramco contractors?", a: "Yes. We build digital work permit systems, HSE and incident platforms, workforce and competency trackers, and IKTVA reporting tools for contractors and service companies working in Saudi Arabia's oil and gas sector." },
      { q: "Can you build a work permit system that follows Aramco GI 2.100?", a: "We configure permit types, roles, gas testing, isolations, and approvals to follow your documented work permit procedures based on Aramco practice. Acceptance of any system for use on an Aramco facility remains between you and your client." },
      { q: "Can the software support IKTVA reporting?", a: "Yes. We build tools that capture local content, supplier spend, training, and Saudi workforce data during daily operations and prepare summaries for your IKTVA submissions." },
      { q: "Is the software available in Arabic?", a: "Yes. Systems are Arabic-first with right-to-left layouts and Arabic reports, with English available side by side." },
      { q: "Can the system be hosted in Saudi Arabia?", a: "Yes. We deploy to cloud regions in the Kingdom or to your own data centre where data residency rules or client policy require it, and design data handling around the Saudi PDPL." },
      { q: "How do you support Saudi clients from India?", a: "India is 2.5 hours ahead of Saudi Arabia, so our afternoons overlap with your working mornings. We run regular demos, share a live test environment, and agree on support response times." },
      { q: "How much does oil and gas software cost in Saudi Arabia?", a: "Focused modules such as a digital work permit system or IKTVA reporting tool typically start from $6,000–14,000. Multi-site platforms with permits, HSE, workforce, and dashboards usually range from $25,000–85,000 in fixed-price phases." },
      { q: "How do we start?", a: `${CONTACT_CTA} with a short description of your operation and the process you want to digitise. We reply within 24 hours.` },
    ],
    related: ["oil-gas-software-uae", "oil-gas-software-qatar", "oil-gas-software-oman", "oil-gas-software-outsourcing-india"],
    relatedLinks: oilGasLinks,
  },
  // ------------------------------------------------------------------
  {
    slug: "oil-gas-software-qatar",
    name: "Qatar Oil & Gas Software",
    region: "Qatar",
    areaServed: ["QA"],
    metaTitle: "Oil & Gas and LNG Software Development for Qatar | QatarEnergy Suppliers | Stacklyn",
    metaDescription:
      "Custom oil, gas, and LNG software for Qatar — permit to work, HSE management, contractor compliance, TAWTEEN supplier data, and project dashboards for companies in Ras Laffan, Mesaieed, and Doha.",
    keywords:
      "oil and gas software Qatar, QatarEnergy supplier software, LNG software development Qatar, HSE software Qatar, permit to work software Qatar, TAWTEEN supplier reporting, Ras Laffan software, oil and gas app development Doha, industrial software Qatar, contractor compliance software Qatar",
    eyebrow: "Doha · Ras Laffan · Mesaieed · Dukhan · LNG Expansion · QatarEnergy Suppliers",
    headline: "Custom Oil, Gas, and LNG Software for Companies Operating in Qatar",
    intro:
      "Stacklyn builds custom software for oil, gas, and LNG companies in Qatar — permit to work, HSE and incident management, contractor prequalification and compliance, TAWTEEN supplier data, and project dashboards. Built for contractors and service companies supporting QatarEnergy operations and the North Field LNG expansion.",
    context: {
      heading: "Software for a market scaling LNG capacity",
      body:
        "Qatar's North Field expansion projects are bringing new plants, contractors, and workforces into Ras Laffan and Mesaieed. Contractors must satisfy QatarEnergy's vendor and HSE prequalification, keep large multinational workforces compliant, and report performance with precision. Localisation is increasingly important through the TAWTEEN programme. Teams that still run permits, competency records, and supplier documentation on paper and spreadsheets struggle to keep pace with project schedules and audit expectations.",
    },
    keyFacts: [
      { label: "Main operator", value: "QatarEnergy (formerly Qatar Petroleum) and its joint venture partners" },
      { label: "Major projects", value: "North Field East and North Field South LNG expansion; industrial cities at Ras Laffan and Mesaieed" },
      { label: "Localisation", value: "TAWTEEN — QatarEnergy's programme to localise services and industries in the energy sector" },
      { label: "Data law", value: "Personal Data Privacy Protection Law — Law No. 13 of 2016" },
      { label: "Time difference", value: "India is 2.5 hours ahead of Qatar — Doha mornings overlap with our afternoons" },
    ],
    compliance: {
      heading: "Built for QatarEnergy-grade contractor scrutiny",
      points: [
        { title: "Prequalification evidence on demand", desc: "HSE statistics, certificates, procedures, and worker qualifications held in one system, ready for vendor prequalification and renewal." },
        { title: "Client-specific permit and report formats", desc: "Permit templates, KPI definitions, and report formats configured per client project, so one team can serve multiple operators correctly." },
        { title: "Supplier and localisation data", desc: "Local supplier, spend, and workforce data captured continuously to support TAWTEEN-related reporting and tender responses." },
        { title: "Privacy-aware workforce records", desc: "Worker data handled with access controls, retention limits, and audit trails designed around Qatar's data protection law." },
      ],
    },
    solutions: [
      { title: "Permit to Work & Isolation Management", desc: "Electronic permits, isolation certificates, gas testing, and simultaneous operations visibility for plant and construction sites." },
      { title: "HSE, Incident & Observation Platform", desc: "Incident reporting, investigations, safety observations, audits, and KPI dashboards ready for client reporting." },
      { title: "Contractor Prequalification & Compliance", desc: "Vendor documentation, insurance, HSE statistics, and worker competency tracked with expiry alerts and approval workflows." },
      { title: "Workforce Mobilisation & Camp Management", desc: "Visa and permit tracking, mobilisation checklists, camp allocation, transport scheduling, and site access eligibility." },
      { title: "Project Controls & Progress Dashboards", desc: "Progress, manpower, and material data from site consolidated into dashboards for project managers and client reviews." },
      { title: "Supplier & Localisation Reporting", desc: "Supplier registers, local spend classification, and summaries that support localisation reporting and tenders." },
    ],
    delivery: [
      { title: "Overlapping hours", desc: "Our afternoons overlap with Doha mornings for meetings, demos, and support." },
      { title: "Qatar hosting when required", desc: "Deployment to cloud regions in Qatar or to your own servers where data residency or client policy requires it." },
      { title: "Project-speed delivery", desc: "Pilot modules in 8–12 weeks, sized to fit project mobilisation schedules." },
      { title: "Bilingual interfaces", desc: "Arabic and English screens and reports for supervisors, crews, and client representatives." },
    ],
    faqs: [
      { q: "Does Stacklyn build oil and gas software for companies in Qatar?", a: "Yes. We build permit to work, HSE and incident management, contractor compliance, workforce mobilisation, and project dashboard software for oil, gas, and LNG companies and contractors operating in Qatar." },
      { q: "Can your software help with QatarEnergy vendor prequalification?", a: "We build systems that keep HSE statistics, certificates, procedures, and worker qualifications organised and exportable, so the evidence prequalification asks for is ready. Prequalification decisions are made by the operator." },
      { q: "Do you support TAWTEEN localisation reporting?", a: "We build supplier and spend tracking that captures local supplier and workforce data during normal operations, which supports localisation reporting and tender responses." },
      { q: "Can the software handle large project workforces?", a: "Yes. We build workforce mobilisation tools covering visas and permits, competency and training expiry, camp allocation, transport, and site access for thousands of workers across multiple sites." },
      { q: "Can the system be hosted in Qatar?", a: "Yes. We deploy to cloud regions in Qatar or to your own infrastructure where data residency or client policy requires it." },
      { q: "Do you support Arabic?", a: "Yes. We build bilingual Arabic and English interfaces with right-to-left layouts and Arabic reports." },
      { q: "How much does oil and gas software cost in Qatar?", a: "Focused modules such as permit to work or contractor compliance typically start from $6,000–14,000. Project platforms covering permits, HSE, workforce, and dashboards usually range from $25,000–85,000 in fixed-price phases." },
      { q: "How do we start?", a: `${CONTACT_CTA} with your project and the process you want to digitise. We reply within 24 hours.` },
    ],
    related: ["oil-gas-software-uae", "oil-gas-software-saudi-arabia", "oil-gas-software-oman", "oil-gas-software-outsourcing-india"],
    relatedLinks: oilGasLinks,
  },
  // ------------------------------------------------------------------
  {
    slug: "oil-gas-software-oman",
    name: "Oman Oil & Gas Software",
    region: "Oman",
    areaServed: ["OM"],
    metaTitle: "Oil & Gas Software Development for Oman | PDO Contractors | Stacklyn",
    metaDescription:
      "Custom oil and gas software for Oman — HSE management for PDO contractors, permit to work, ICV and Omanisation reporting, JSRS supplier compliance, and field operations apps for Muscat, Sohar, and Duqm.",
    keywords:
      "oil and gas software Oman, PDO contractor software, HSE software Oman, permit to work software Oman, ICV reporting Oman, JSRS supplier compliance software, Omanisation reporting software, oilfield software Muscat, oil and gas app development Oman, Duqm industrial software",
    eyebrow: "Muscat · Sohar · Duqm · Fahud · PDO Contractors · ICV & Omanisation",
    headline: "Custom Oil & Gas Software for Oman's Operators and PDO Contractors",
    intro:
      "Stacklyn builds custom software for oil and gas companies in Oman — HSE and incident management for operator contractors, permit to work, ICV and Omanisation reporting, supplier compliance, and offline-capable field apps for remote desert sites.",
    context: {
      heading: "Operating under Oman's contractor expectations",
      body:
        "Contractors working for Petroleum Development Oman and other operators are held to the operator's HSE management system, and serious lapses can mean suspension from work. At the same time, In-Country Value commitments and Omanisation targets shape tender scoring and workforce planning, and supplier registration runs through the Joint Supplier Registration System. Field teams work across remote interior locations where connectivity is limited, so paper forms and delayed reporting remain common. Software built around these realities closes the gap between the field and the office.",
    },
    keyFacts: [
      { label: "Main operators", value: "Petroleum Development Oman (PDO), OQ, and international operators" },
      { label: "Supplier registration", value: "Joint Supplier Registration System (JSRS) used across Oman's oil and gas sector" },
      { label: "Localisation", value: "In-Country Value commitments in the energy sector and Omanisation workforce requirements" },
      { label: "Data law", value: "Personal Data Protection Law — Royal Decree 6/2022" },
      { label: "Time difference", value: "India is 1.5 hours ahead of Oman — nearly the full working day overlaps" },
    ],
    compliance: {
      heading: "Built for operator HSE systems and Oman's localisation rules",
      points: [
        { title: "Operator HSE management alignment", desc: "Incident classification, investigation workflows, and KPIs configured to match the HSE requirements your operator client sets for contractors." },
        { title: "ICV and Omanisation reporting", desc: "Local spend, local supplier use, and Omani workforce data captured during operations and summarised for ICV and Omanisation reporting." },
        { title: "Supplier documentation readiness", desc: "Company documents, certificates, and HSE statistics organised and kept current to support supplier registration and renewal." },
        { title: "Offline field capture", desc: "Mobile apps that record permits, inspections, and incidents at remote sites without signal, syncing once back in coverage." },
      ],
    },
    solutions: [
      { title: "HSE & Incident Management", desc: "Incident and near-miss reporting, investigations, corrective actions, and KPI dashboards aligned with your operator's reporting expectations." },
      { title: "Permit to Work for Remote Sites", desc: "Electronic permits with gas testing, isolations, and approvals that work offline at interior locations and sync to the office." },
      { title: "ICV & Omanisation Tracking", desc: "Spend classification, local supplier registers, Omani workforce ratios, and reports for ICV and Omanisation commitments." },
      { title: "Journey Management & Fleet Safety", desc: "Journey plans, driver competency, vehicle checks, and check-in tracking for travel between remote sites." },
      { title: "Competency & Training Matrix", desc: "Certificates, trainings, and inductions with expiry alerts and site access eligibility checks." },
      { title: "Field Operations Dashboards", desc: "Daily reports, equipment status, and manpower data consolidated into dashboards for operations managers." },
    ],
    delivery: [
      { title: "Overlapping working day", desc: "India is 1.5 hours ahead of Oman, so calls, demos, and support fit your working hours." },
      { title: "Built for low connectivity", desc: "Offline-first mobile apps designed for remote interior sites." },
      { title: "Hosting to your policy", desc: "Deployment to your servers or approved cloud regions based on your data residency requirements." },
      { title: "Phased, fixed-price delivery", desc: "A pilot on one contract or site, then rollout in fixed-price phases." },
    ],
    faqs: [
      { q: "Does Stacklyn build software for PDO contractors?", a: "Yes. We build HSE and incident management, permit to work, competency tracking, journey management, and ICV reporting software for contractors and service companies working with PDO and other operators in Oman." },
      { q: "Can the software match our operator's HSE requirements?", a: "We configure incident categories, investigation workflows, KPIs, and report formats to follow the HSE requirements your operator client sets. Acceptance of any system by an operator remains between you and your client." },
      { q: "Can you help with ICV and Omanisation reporting?", a: "Yes. We build tools that capture local spend, local supplier use, and Omani workforce data during daily operations and summarise them for your ICV and Omanisation reporting." },
      { q: "Will the apps work at remote sites without internet?", a: "Yes. Field apps are offline-first, recording permits, inspections, journeys, and incidents without connectivity and syncing automatically once back in coverage." },
      { q: "Do you build journey management software?", a: "Yes. We build journey planning, driver competency, vehicle inspection, and check-in tracking for travel between remote oil and gas sites." },
      { q: "Do you support Arabic?", a: "Yes. We build bilingual Arabic and English interfaces with right-to-left layouts and Arabic reports." },
      { q: "How much does oil and gas software cost in Oman?", a: "Focused modules such as HSE incident management or journey management typically start from $6,000–14,000. Integrated platforms covering HSE, permits, workforce, and ICV reporting usually range from $25,000–85,000 in fixed-price phases." },
      { q: "How do we start?", a: `${CONTACT_CTA} with a short description of your operation. We reply within 24 hours and propose a pilot.` },
    ],
    related: ["oil-gas-software-uae", "oil-gas-software-saudi-arabia", "oil-gas-software-qatar", "oil-gas-software-outsourcing-india"],
    relatedLinks: oilGasLinks,
  },
];
