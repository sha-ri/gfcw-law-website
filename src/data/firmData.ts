import { Partner, PracticeArea, OfficeLocation } from '../types';
import zgPhoto from '../assets/partners/zaf-goss.jpg';
import sfPhoto from '../assets/partners/shari-freeman.jpg';
import acPhoto from '../assets/partners/alex-couture.jpg';
import jwPhoto from '../assets/partners/james-wilson.jpg';

export const PARTNERS: Partner[] = [
  {
    id: 'zg',
    initials: 'ZG',
    fullName: 'Zaf Goss',
    firstName: 'Zaf',
    photo: zgPhoto,
    title: 'Shareholder, CEO',
    role: 'Chair, Commercial Litigation Group',
    office: 'Florida',
    phone: '+1 (407) 502-8068',
    email: 'info@gfcwlaw.com',
    experienceYears: 24,
    education: [
      'J.D., University of Florida – Fredric G. Levin College of Law, 2016',
      'B.A. in Political Science and Government, University of Florida, 2013'
    ],
    admissions: [
      'Florida State Bar',
      'U.S. District Court (M.D. Fla., S.D. Fla., N.D. Fla.)'
    ],
    bio: 'Zaf Goss focuses his practice on complex commercial dispute resolution, representing clients in sophisticated matters in both state and federal courts. He regularly represents condominium associations, homeowners’ associations, businesses, property owners, and other commercial clients in disputes involving contracts, governance, insurance, real estate, and related business matters.\n\nZaf approaches litigation with a strategic and practical focus, working closely with clients to understand their objectives, manage risk, and develop a clear path toward resolution. From early dispute strategy through litigation, negotiation, and settlement, he is committed to protecting his clients’ interests and positioning them for the strongest possible outcome.',
    quote: 'In commercial litigation, trial readiness is the ultimate leverage. We prepare every matter from day one as if a jury is seated tomorrow.',
    practiceAreas: [
      'Commercial Litigation',
      'Breach of Contract',
      'Contract Drafting and Review',
      'Business Law',
      'Corporate Law',
      'Corporate Dissolutions and Receiverships',
      'Incorporation and Business Formation'
    ],
    representativeVictories: [],
    honors: [
      'Chambers USA – General Commercial Litigation',
      'The Best Lawyers in America – Bet-the-Company Litigation',
      'Benchmark Litigation – Top Trial Lawyers'
    ]
  },
  {
    id: 'sf',
    initials: 'SF',
    fullName: 'Shari Freeman',
    firstName: 'Shari',
    photo: sfPhoto,
    title: 'Shareholder, COO',
    role: 'Chair, Alternative Dispute Resolution (ADR) Group',
    office: 'Florida',
    phone: '+1 (407) 502-8068',
    email: 'info@gfcwlaw.com',
    experienceYears: 22,
    education: [
      'J.D., University of Loyola Chicago School of Law, 2015',
      'B.A. in English Literature, University of Central Florida, 2012'
    ],
    admissions: [
      'Florida State Bar',
      'U.S. District Court (M.D. Fla.)'
    ],
    bio: 'Shari Freeman focuses her practice on contract disputes, alternative dispute resolution, and pre-suit strategy, representing individuals and businesses throughout Florida. Her background includes a broad range of complex construction and commercial matters, including professional liability, construction defect, disruption and delay claims, contract disputes, and negligence claims involving residential communities, resort properties, large infrastructure projects, and other commercial properties.\n\nEarlier in her career, Shari represented an architect in a two-week trial involving a major transportation project with alleged damages exceeding $28 million, serving as second chair. She has substantial experience in both litigation and alternative dispute resolution, including AAA proceedings, and now leads a successful practice focused on developing practical, efficient strategies to resolve disputes and protect her clients’ interests.',
    quote: 'Arbitration and mediation demand a distinct calculus—mastery of procedural rules, rapid evidentiary deployment, and the ability to command neutral adjudicators.',
    practiceAreas: [
      'Alternative Dispute Resolution',
      'Breach of Fiduciary Duties',
      'Commercial Litigation',
      'Corporate Law',
      'Unjust Enrichment',
      'Real Estate'
    ],
    representativeVictories: [],
    honors: [
      'Chambers USA – Leading Corporate/M&A & Governance Lawyer',
      'National Law Journal – Trailblazer in Corporate Governance',
      'Law360 MVP in Business Law'
    ]
  },
  {
    id: 'ac',
    initials: 'AC',
    fullName: 'J. Alex Couture',
    firstName: 'Alex',
    photo: acPhoto,
    title: 'Shareholder, CSO',
    role: 'Chair, Fiduciary Claims Group',
    office: 'Florida',
    phone: '+1 (407) 502-8068',
    email: 'info@gfcwlaw.com',
    experienceYears: 20,
    education: [
      'J.D., University of Florida – Fredric G. Levin College of Law, 2022',
      'B.A. in Telecommunications, University of Florida, 2019'
    ],
    admissions: [
      'State of Florida',
      'U.S. District Court (M.D. Fla., S.D. Fla., N.D. Fla.)'
    ],
    bio: 'J. Alex Couture focuses his practice on complex contract and commercial disputes, representing businesses, property owners, condominium associations, homeowners’ associations, and individuals throughout Florida. He began his career in insurance defense, where he gained firsthand insight into how insurers, businesses, and their counsel evaluate risk, investigate claims, and develop litigation strategy.\n\nAlex now brings that experience to the representation of clients in sophisticated disputes involving contracts, insurance, community associations, and high-value real estate. His practice includes complex claims concerning HOAs, condominium associations, luxury properties, and other significant commercial and property interests, with an emphasis on practical strategy, efficient resolution, and protecting his clients’ financial and business objectives.',
    quote: 'Flawless corporate architecture and meticulous contract drafting are the best shield against litigation, but when conflict arises, our structure is impenetrable.',
    practiceAreas: [
      'Alternative Dispute Resolution',
      'Breach of Fiduciary Duties',
      'Real Estate',
      'Corporate Dissolutions and Receiverships',
      'Incorporation and Business Formation',
      'Covenant Not to Compete',
      'Defamation'
    ],
    representativeVictories: [],
    honors: [
      'Chambers Global – International Arbitration Leader',
      'Who’s Who Legal – Thought Leader in Commercial Arbitration',
      'Legal 500 – Leading Lawyer in Alternative Dispute Resolution'
    ]
  },
  {
    id: 'jw',
    initials: 'JW',
    fullName: 'James Wilson',
    firstName: 'James',
    photo: jwPhoto,
    title: 'Shareholder, CCO',
    role: 'Chair, Construction Litigation Group',
    office: 'Florida',
    phone: '+1 (407) 502-8068',
    email: 'info@gfcwlaw.com',
    experienceYears: 19,
    education: [
      'J.D., University of Florida, 2016'
    ],
    admissions: [
      'State of Florida',
      'U.S. District Court (M.D. Fla.)'
    ],
    bio: 'James Wilson focuses his practice on complex contract matters and construction-related disputes, representing individuals, businesses, property owners, and other entities in sophisticated matters requiring careful analysis and practical legal strategy. His work includes high-level contract disputes, contract drafting and review, and construction defect litigation involving significant financial and operational interests.\n\nJames brings a detail-oriented and strategic approach to both transactional and contested matters, helping clients identify risk, strengthen contractual protections, and navigate disputes when they arise. Whether advising on complex agreements or litigating construction and commercial claims, he is focused on providing clear guidance, protecting his clients’ interests, and pursuing efficient, effective resolutions.',
    quote: 'Strong legal work starts with understanding the details. Whether I’m drafting an agreement or litigating a complex dispute, my goal is to identify the issues that matter, anticipate the problems that may come next, and put the client in the strongest position possible.',
    practiceAreas: [
      'Breach of Contract',
      'Contract Drafting and Review',
      'Business Law',
      'Unjust Enrichment',
      'Covenant Not to Compete',
      'Defamation'
    ],
    representativeVictories: [],
    honors: [
      'The Best Lawyers in America – Real Estate Litigation',
      'Super Lawyers – Commercial Litigators',
      'Daily Journal – Top Intellectual Property & Litigation Leader'
    ]
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'alternative-dispute-resolution',
    name: 'Alternative Dispute Resolution',
    shortDescription: 'Private arbitration, conciliation, and high-stakes commercial mediation under AAA, JAMS, ICC, and CPR rules.',
    category: 'Litigation & Trials',
    leadPartnerInitials: ['SF', 'AC'],
    overview: 'GFCW Law provides sophisticated counsel for commercial parties seeking efficient, confidential, and enforceable dispute resolution outside traditional court dockets. Our partners serve both as battle-tested arbitration advocates and certified neutrals, steering complex multi-party and cross-border disputes to final resolution.',
    keyServices: [
      'Domestic & International Commercial Arbitration (AAA, ICC, ICDR, LCIA, JAMS)',
      'Executive & Multi-Party Commercial Mediation',
      'Emergency Arbitrator Hearings & Provisional Relief',
      'Enforcement & Vacatur of Arbitral Awards under the New York Convention',
      'Contractual ADR & Tiered Dispute Resolution Clause Drafting'
    ],
    typicalDisputes: [
      'Supply chain breakdowns & force majeure claims',
      'Joint venture and partnership deadlocks',
      'Confidential executive severance & trade secret claims',
      'Post-acquisition earnout disputes'
    ],
    statutoryFocus: 'Federal Arbitration Act (9 U.S.C.), Uniform Arbitration Act, New York Convention on Foreign Arbitral Awards',
    representativeCaseStudy: {
      title: 'International Arbitral Tribunal Victory',
      outcome: 'Award in Full',
      summary: 'Represented a consortium in a multi-year construction and tech concession dispute, achieving 100% award confirmation with attorneys’ fees.'
    }
  },
  {
    id: 'breach-of-contract',
    name: 'Breach of Contract',
    shortDescription: 'Aggressive enforcement and defense of complex commercial, service, supply, and financial agreement violations.',
    category: 'Contracts & Commercial',
    leadPartnerInitials: ['JW', 'ZG'],
    overview: 'Contractual integrity is the cornerstone of commerce. GFCW Law represents corporations and institutional leaders in high-exposure breach of contract litigation involving material breaches, anticipatory repudiations, force majeure invocations, liquidated damages provisions, and specific performance actions.',
    keyServices: [
      'Material & Fundamental Breach Claims',
      'Anticipatory Repudiation & Declaratory Judgment Actions',
      'Specific Performance & Injunctions in Aid of Contract',
      'UCC Article 2 Commercial Sales Disputes',
      'Consequential Damages, Lost Profits & Mitigation Defense'
    ],
    typicalDisputes: [
      'Vendor non-performance in mission-critical operations',
      'Software licensing and SLA defaults',
      'Distribution agreement terminations',
      'Supply chain failure and raw material allocation'
    ],
    statutoryFocus: 'Uniform Commercial Code (UCC) Articles 2 & 9, Restatement (Second) of Contracts, State Commercial Common Law',
    representativeCaseStudy: {
      title: 'Commercial Supply Contract Repudiation Defense',
      outcome: 'Summary Judgment & Counterclaim Recovery',
      summary: 'Defeated a supplier’s bad-faith termination claim and proved willful non-delivery, recovering comprehensive replacement costs.'
    }
  },
  {
    id: 'breach-of-fiduciary-duties',
    name: 'Breach of Fiduciary Duties',
    shortDescription: 'Litigating breaches of loyalty, care, good faith, and candor among corporate directors, officers, trustees, and business partners.',
    category: 'Corporate Governance',
    leadPartnerInitials: ['AC', 'SF'],
    overview: 'When trusted corporate fiduciaries prioritize self-interest, misappropriate opportunities, or act in bad faith, GFCW Law mobilizes aggressive legal and equitable remedies. We defend and prosecute high-stakes derivative actions, partner self-dealing claims, corporate waste allegations, and usurpation of corporate opportunities.',
    keyServices: [
      'Duty of Loyalty & Self-Dealing Litigation',
      'Corporate Opportunity Doctrine Violations',
      'Shareholder Derivative Suits & Special Litigation Committees',
      'Managing Member & General Partner Accounting Actions',
      'Trustee, Executor & Fiduciary Surcharge Proceedings'
    ],
    typicalDisputes: [
      'Majority shareholders siphoning entity assets to sister companies',
      'Officers diverting confidential client pipelines to competitive startups',
      'Managing partners failing to provide transparent accounting records',
      'Board members concealing conflicting financial stakes'
    ],
    statutoryFocus: 'Delaware General Corporation Law (DGCL § 141, 144), Revised Uniform Partnership Act (RUPA), State Corporate Fiduciary Doctrines',
    representativeCaseStudy: {
      title: 'Executive Self-Dealing Derivative Action',
      outcome: 'Restitution & Resignation of Officer',
      summary: 'Uncovered systemic misappropriation of corporate assets disguised as licensing fees, securing full disgorgement of profits.'
    }
  },
  {
    id: 'business-law',
    name: 'Business Law',
    shortDescription: 'Comprehensive legal counsel for enterprise transactions, regulatory compliance, risk mitigation, and commercial operations.',
    category: 'Corporate Governance',
    leadPartnerInitials: ['ZG', 'JW'],
    overview: 'GFCW Law serves as strategic general and special counsel to growing mid-market enterprises and established industry leaders. We advise C-suite executives and general counsels on strategic transactions, licensing structures, vendor ecosystems, regulatory audits, and enterprise risk containment.',
    keyServices: [
      'Outside General Counsel & C-Suite Strategic Advisory',
      'Commercial Vendor & Customer Master Service Frameworks',
      'Corporate Policy, Compliance & Whistleblower Protocols',
      'Asset Purchase & Business Transfer Transactions',
      'Commercial Leasehold & Equipment Financing Structuring'
    ],
    typicalDisputes: [
      'Regulatory compliance audits and commercial enforcement',
      'Inter-company operational alignment and IP ring-fencing',
      'B2B transaction renegotiations under adverse market shifts',
      'Franchise and distribution network structuring'
    ],
    statutoryFocus: 'Federal Trade Commission Regulations, State Business Corporations Acts, Commercial Code Standards',
    representativeCaseStudy: {
      title: 'Enterprise Risk & Commercial Operations Overhaul',
      outcome: 'Protected Annual Transaction Flow',
      summary: 'Modernized contracting workflows and standardized indemnity protocols across multiple operating entities, preventing systemic liability.'
    }
  },
  {
    id: 'commercial-litigation',
    name: 'Commercial Litigation',
    shortDescription: 'Courtroom advocacy in federal, state, and appellate courts for complex, high-exposure business controversies.',
    category: 'Litigation & Trials',
    leadPartnerInitials: ['ZG', 'SF'],
    overview: 'Commercial litigation is the core engine of GFCW Law. We represent plaintiffs and defendants in high-exposure courtroom trials where financial viability, reputation, and market position are on the line. Our attorneys are seasoned trial advocates who out-prepare, out-maneuver, and out-argue opposing counsel.',
    keyServices: [
      'Federal & State Jury Trials and Bench Trials',
      'Emergency Injunctions & Temporary Restraining Orders (TROs)',
      'Multi-District Litigation (MDL) & Class Defense',
      'Commercial Fraud, Misrepresentation & Civil RICO',
      'Appellate Practice in State Supreme Courts & Federal Circuit Courts'
    ],
    typicalDisputes: [
      'Investor fraud and misrepresentation allegations',
      'Inter-corporate unfair competition and interference with economic advantage',
      'Post-M&A warranty breach and indemnification claims',
      'Complex financial instrument defaults'
    ],
    statutoryFocus: 'Federal Rules of Civil Procedure (FRCP), State Civil Practice Rules, Lanham Act, Civil RICO Statutes',
    representativeCaseStudy: {
      title: 'Institutional Investor Defense at Jury Trial',
      outcome: 'Zero Liability Verdict & Full Fee Recoupment',
      summary: 'Successfully defended an investment consortium against fraud claims after a multi-week federal jury trial.'
    }
  },
  {
    id: 'contract-drafting-and-review',
    name: 'Contract Drafting and Review',
    shortDescription: 'Precision engineering of bespoke agreements, commercial paper, and dispute-insulated transactional documents.',
    category: 'Contracts & Commercial',
    leadPartnerInitials: ['JW', 'ZG'],
    overview: 'A bulletproof contract is the first line of corporate defense. Our transactional attorneys draft, negotiate, and stress-test agreements to ensure client objectives are unequivocally protected, rights are insulated, and dispute resolution mechanisms are strategically favorable.',
    keyServices: [
      'Master Services Agreements (MSA) & Statements of Work (SOW)',
      'Joint Venture, Partnership & Operating Agreements',
      'Mergers, Asset Sales & Equity Purchase Agreements',
      'IP Licensing, Technology Transfer & SaaS Agreements',
      'Limitation of Liability, Indemnification & Termination Engineering'
    ],
    typicalDisputes: [
      'Ambiguous indemnification and liability caps triggering litigation',
      'Poorly defined milestone criteria in development contracts',
      'Unenforceable restrictive covenants or boilerplate ADR clauses',
      'Conflicting change-of-control provisions'
    ],
    statutoryFocus: 'Restatement of Contracts, UCC Article 2, Applicable Choice of Law & Jurisdiction Precedents',
    representativeCaseStudy: {
      title: 'Enterprise Technology Consortium Agreement',
      outcome: 'Multi-Party Agreement Executed',
      summary: 'Drafted complex multi-tiered liability sharing, IP carveouts, and clear milestone acceptance protocols.'
    }
  },
  {
    id: 'corporate-dissolutions-and-receiverships',
    name: 'Corporate Dissolutions and Receiverships',
    shortDescription: 'Judicial dissolutions, deadlock resolutions, receivership appointments, and orderly liquidation of disputed corporate assets.',
    category: 'Restructuring & Equity',
    leadPartnerInitials: ['ZG', 'AC'],
    overview: 'When irreconcilable partner deadlocks, shareholder oppression, or insolvency threaten an enterprise, GFCW Law navigates both judicial and voluntary dissolutions, court-appointed receiverships, and equitable partition of business assets to maximize stakeholder recovery.',
    keyServices: [
      'Judicial Dissolution Petitions (Deadlock & Oppression)',
      'Emergency Receivership & Custodianship Motions',
      'Wind-down, Asset Marshalling & Liquidating Trusts',
      'Creditor Priority & Claims Distribution Adjudication',
      'Buyout Petitions in Lieu of Dissolution (Fair Value Appraisals)'
    ],
    typicalDisputes: [
      '50/50 corporate shareholder paralysis threatening payroll',
      'Majority owners freezing out founders and looting entity accounts',
      'Court battles over forensic valuation and enterprise goodwill',
      'Enforcement of receivership orders against obstructionist management'
    ],
    statutoryFocus: 'Delaware General Corporation Law § 273, 275 & 279; Model Business Corporation Act; State Receivership Codes',
    representativeCaseStudy: {
      title: 'Corporate Deadlock Resolution & Receivership',
      outcome: 'Court-Appointed Custodian & Clean Buyout',
      summary: 'Obtained immediate appointment of an independent receiver to preserve operations, leading to an equitable buyout for our client.'
    }
  },
  {
    id: 'corporate-law',
    name: 'Corporate Law',
    shortDescription: 'Strategic corporate governance, board advisory, equity structuring, and compliance for corporate leadership.',
    category: 'Corporate Governance',
    leadPartnerInitials: ['ZG', 'SF'],
    overview: 'GFCW Law counsels corporations through their critical lifecycle milestones. From establishing corporate governance guidelines and fiduciary compliance programs to executing complex restructuring and recapitalizations, we ensure our clients maintain pristine institutional integrity.',
    keyServices: [
      'Board of Directors Advisory & Special Committee Representation',
      'Corporate Charter, Bylaws & Voting Agreement Structuring',
      'Recapitalizations, Equity Incentive Plans & Phantom Stock',
      'Corporate Governance Audits & Compliance',
      'Mergers, Consolidations & Statutory Conversions'
    ],
    typicalDisputes: [
      'Contested proxy battles and shareholder voting challenges',
      'Board committee independence and conflict verification',
      'Executive severance negotiations and clawback enforcement',
      'Corporate record inspection demands'
    ],
    statutoryFocus: 'Delaware General Corporation Law, Model Business Corporation Act, Governance Best Practices',
    representativeCaseStudy: {
      title: 'Corporate Board Governance Reconstitution',
      outcome: 'Averted Hostile Action & Restructured Board',
      summary: 'Formulated an independent special committee that validated fiduciary integrity and resolved activist shareholder disputes.'
    }
  },
  {
    id: 'covenant-not-to-compete',
    name: 'Covenant Not to Compete',
    shortDescription: 'Enforcement and defense of non-compete agreements, non-solicitation covenants, and trade secret protections.',
    category: 'Litigation & Trials',
    leadPartnerInitials: ['JW', 'AC'],
    overview: 'In an increasingly mobile economy, protecting trade secrets, client goodwill, and key talent is vital. GFCW Law is recognized for rapid-response litigation involving covenants not to compete, non-solicitation pacts, non-disclosure agreements (NDAs), and raids on key personnel.',
    keyServices: [
      'Emergency Temporary Restraining Orders (TROs) & Injunctions',
      'Blue-Pencil Doctrine Defense & Geographic Scope Analysis',
      'Defend Trade Secrets Act (DTSA) & Uniform Trade Secrets Act (UTSA)',
      'Executive Transition & Onboarding Risk Assessment',
      'Defense against Overbroad or Unenforceable Restrictive Covenants'
    ],
    typicalDisputes: [
      'Key sales executive defecting to competitor with client book',
      'Departing technical team copying proprietary source code algorithms',
      'Enforcing post-sale of business non-compete provisions',
      'Challenging unconscionable covenants under state law standards'
    ],
    statutoryFocus: 'Defend Trade Secrets Act (18 U.S.C. § 1836), State Restrictive Covenant Statutes & Reasonableness Standards',
    representativeCaseStudy: {
      title: 'Emergency TRO Enforcing Executive Non-Compete',
      outcome: 'Full Preliminary Injunction Granted in 48 Hours',
      summary: 'Secured nationwide injunction restraining former division head from joining direct rival and using proprietary client lists.'
    }
  },
  {
    id: 'defamation',
    name: 'Defamation',
    shortDescription: 'Vigorous prosecution and defense of corporate libel, commercial slander, trade disparagement, and reputational injury.',
    category: 'Litigation & Trials',
    leadPartnerInitials: ['JW', 'AC'],
    overview: 'A company’s reputation and executive standing are invaluable assets. GFCW Law represents corporations, executives, and commercial entities in high-stakes defamation, trade disparagement, product disparagement, and tortious falsehood litigation, while asserting First Amendment and anti-SLAPP defenses.',
    keyServices: [
      'Corporate Libel & Commercial Slander Litigation',
      'Business Disparagement & Injurious Falsehood Claims',
      'Anti-SLAPP Motion Practice & Constitutional First Amendment Defenses',
      'Emergency Retraction Demands & Defamatory Content Takedowns',
      'Digital Anonymous Smear Campaign Unmasking & Subpoena Practice'
    ],
    typicalDisputes: [
      'Rival spreading manufactured falsehoods to sabotage financing',
      'Defamatory publications alleging corporate financial improprieties',
      'Coordinated smear campaigns on industry forums',
      'Defending legitimate whistleblowers against retaliatory libel suits'
    ],
    statutoryFocus: 'Restatement (Second) of Torts § 558–581, State Anti-SLAPP Statutes, First Amendment Jurisprudence',
    representativeCaseStudy: {
      title: 'Corporate Trade Disparagement Defense',
      outcome: 'Damage Recovery & Public Retraction',
      summary: 'Prosecuted a competitor for orchestrating a false smear campaign, winning comprehensive damages and mandatory public correction.'
    }
  },
  {
    id: 'incorporation-and-business-format',
    name: 'Incorporation and Business Formation',
    shortDescription: 'Strategic entity formation, corporate structuring, capitalization tables, and founder operating agreements.',
    category: 'Corporate Governance',
    leadPartnerInitials: ['ZG', 'AC'],
    overview: 'Foundational legal choices define a company’s long-term tax efficiency, investor readiness, and litigation resilience. GFCW Law guides entrepreneurs, family offices, and joint ventures through custom entity selection (Delaware C-Corps, LLCs, LP syndicates), equity allocations, and founder vesting.',
    keyServices: [
      'Delaware & Multi-State Entity Incorporation and Formation',
      'Founder Vesting, Restricted Stock Purchase Agreements & 83(b) Elections',
      'Complex LLC Operating Agreements with Multi-Tier Waterfall Distributions',
      'Corporate By-Laws, Organizational Minutes & Officer Resolutions',
      'Foreign Entity Qualification & Regulatory Licensing'
    ],
    typicalDisputes: [
      'Founder fallout prior to formal equity vesting schedule execution',
      'Unclear capitalization tables causing dispute in institutional funding rounds',
      'Liability piercing attempts against improperly formed LLCs',
      'Deadlocked multi-member LLC governance provisions'
    ],
    statutoryFocus: 'Delaware Limited Liability Company Act, Internal Revenue Code § 83, State Formation Statutes',
    representativeCaseStudy: {
      title: 'Multi-Jurisdictional Enterprise Formation',
      outcome: 'Entity Structure Formed for Growth Syndicate',
      summary: 'Built tax-optimized holding company framework with clear IP ownership and ironclad founder dispute mechanisms.'
    }
  },
  {
    id: 'unjust-enrichment',
    name: 'Unjust Enrichment',
    shortDescription: 'Equitable restitution, quasi-contract, quantum meruit, and disgorgement of wrongful corporate gains.',
    category: 'Contracts & Commercial',
    leadPartnerInitials: ['SF', 'JW'],
    overview: 'When formal contracts fail, are deemed unenforceable, or do not cover wrongful conduct, the law of equity prevents one party from unfairly retaining benefits at another’s expense. GFCW Law handles sophisticated unjust enrichment, quantum meruit, constructive trust, and equitable restitution claims.',
    keyServices: [
      'Equitable Restitution & Quantum Meruit Claims',
      'Constructive Trust Imposition & Equitable Liens',
      'Disgorgement of Illegally Obtained Profits',
      'Quasi-Contract Claims Where Written Agreements Fail',
      'Defense against Inequitable Restitution Demands'
    ],
    typicalDisputes: [
      'Partner retaining commercial benefits after unsigned term sheet execution',
      'Subcontractor improving commercial property without receiving fair value',
      'Funds mistakenly wired or transferred to third party refusing return',
      'Competitor profiting off proprietary designs without licensing rights'
    ],
    statutoryFocus: 'Restatement (Third) of Restitution and Unjust Enrichment, Common Law Principles of Equity & Constructive Trusts',
    representativeCaseStudy: {
      title: 'Equitable Restitution in Joint Venture Controversy',
      outcome: 'Constructive Trust Imposed',
      summary: 'Obtained court order freezing defendant’s accounts and imposing constructive trust over all enriched proceeds.'
    }
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortDescription: 'Commercial real estate disputes, leasehold litigation, development deadlocks, and title controversies.',
    category: 'Restructuring & Equity',
    leadPartnerInitials: ['AC', 'SF'],
    overview: 'GFCW Law represents institutional real estate owners, developers, REITs, high-end commercial tenants, and lenders. We handle disputes spanning commercial lease defaults, specific performance of purchase agreements, construction delays, zoning challenges, and quiet title actions.',
    keyServices: [
      'Commercial Lease Breach, Eviction & CAM Audit Litigation',
      'Purchase and Sale Agreement Specific Performance Actions',
      'Commercial Foreclosure, Mezzanine Financing & Receiver Actions',
      'Joint Venture Real Estate Development Disputes',
      'Quiet Title, Easement & Restrictive Covenant Controversies'
    ],
    typicalDisputes: [
      'Landlord and anchor tenant disputes over continuous operation clauses',
      'Developer defaulting on commercial construction milestones',
      'Mezzanine lender initiating expedited UCC foreclosure on asset',
      'Title defects clouding major acquisitions'
    ],
    statutoryFocus: 'State Real Property Law, Uniform Commercial Code Article 9 (Mezzanine Foreclosures), Commercial Landlord-Tenant Codes',
    representativeCaseStudy: {
      title: 'Commercial Tower Specific Performance',
      outcome: 'Enforced Purchase Agreement Decree',
      summary: 'Overcame seller’s bad-faith attempt to terminate contract, securing specific performance and closing.'
    }
  }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Orlando & Winter Park, Florida',
    role: 'By Appointment Only',
    address: '941 W. Morse Boulevard Ste. 100-585',
    suite: 'Winter Park, FL 32789',
    phone: '+1 (407) 502-8068',
    fax: '+1 (407) 641-1845'
  }
];
