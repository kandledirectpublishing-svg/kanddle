export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface HowItWorksItem {
  step: string;
  text: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
  whyAuthorsChoose?: WhyChooseUsItem[];
  howItWorks?: HowItWorksItem[];
  whoItsFor?: string[];
  whatMakesUsDifferent?: string[];
  faqs?: ServiceFAQ[];
}

export const servicesData: Service[] = [
  // Phase 1: Concept & Manuscript
  {
    slug: 'concept-development',
    title: 'Concept Development & Market Research',
    category: 'Concept & Manuscript',
    shortDescription: 'Validate your book concept before you write a single chapter.',
    fullDescription: 'Writing a book without validating the idea first is the #1 reason manuscripts fail to sell. Before you invest months writing, we research comparable titles, reader demand, category trends, and search behaviour across the US, UAE, and KSA. So, your concept is built to sell from day one, not just built on hope.\n\nWe treat your book idea like a product launch: tested against real market data, refined for your target reader, and positioned to compete in a crowded category rather than get lost in it.',
    features: [
      'Comp title & bestseller analysis — 5 - 10 comparable titles reviewed for positioning, pricing, and reader reception',
      'Target reader persona — A clear profile of who your book is for and what drives them to buy',
      'Category & genre positioning — The most viable Amazon/KDP categories for visibility and ranking',
      'Book concept viability score — A straightforward rating of your idea\'s commercial potential',
      'Market demand & keyword research — What readers are actually searching for in your topic or genre',
      'Positioning & hook recommendations — How to frame your premise so it stands out immediately'
    ],
    metaTitle: 'Book Concept Development & Market Research Services | Kandle Direct Publishing',
    metaDescription: 'Validate your book idea before you write it. We research comp titles, reader demand, and category trends across US, UAE & KSA markets so your book is built to sell.',
    whyAuthorsChoose: [
      { title: 'Reduce risk', description: 'Know your idea has a real audience before you write it' },
      { title: 'Save months', description: 'Skip guesswork and write with clear direction' },
      { title: 'Stand out', description: 'Position your book against what\'s already selling in your category' },
      { title: 'Go global', description: 'Validated for US, UAE, and KSA reader markets, not just one region' },
      { title: 'Avoid oversaturation', description: 'Find underserved niches with real demand instead of crowded categories' },
      { title: 'Write with confidence', description: 'Move forward knowing your concept has been stress-tested' }
    ],
    howItWorks: [
      { step: 'Consultation', text: 'Share your idea, goals, and target market with us' },
      { step: 'Research', text: 'We run comp title, category, and keyword research across your markets' },
      { step: 'Report', text: 'You receive a clear viability report with positioning guidance' },
      { step: 'Debrief', text: 'We walk through the findings together and map your next steps' }
    ],
    whoItsFor: [
      'First-time authors who don\'t want to risk months on an unvalidated idea',
      'Business owners and entrepreneurs writing a book to build authority or their brand',
      'Experienced authors testing a new concept before committing to write it',
      'Fiction authors deciding between genres or story angles',
      'Nonfiction authors positioning a book around their expertise'
    ],
    whatMakesUsDifferent: [
      'We research three markets at once — US, UAE, and KSA, instead of a single-region view',
      'Our recommendations are based on real comp title and keyword data, not opinion',
      'You get a written report, not just a verbal opinion, so you can reference it while writing',
      'We work with both fiction and nonfiction authors',
      'Every project includes a one-on-one debrief, not just an automated document'
    ],
    faqs: [
      { question: 'How long does this take?', answer: 'Most projects are completed within 1–2 weeks.' },
      { question: 'Can this help me choose between multiple book ideas?', answer: 'Yes. We can compare several concepts side by side to identify the strongest one.' },
      { question: 'Does this work for fiction and nonfiction?', answer: 'Yes, our process adapts to both.' },
      { question: 'Will this apply to the UAE and KSA markets specifically, not just the US?', answer: 'Yes. Regional reader trends and category competition are factored into every report.' },
      { question: 'What do I receive at the end?', answer: 'A written viability report covering comp titles, reader persona, positioning, and recommended next steps, plus a live debrief call.' }
    ]
  },
  {
    slug: 'ghostwriting',
    title: 'Ghostwriting & Writing Coaching',
    category: 'Concept & Manuscript',
    shortDescription: 'Professional support to get your manuscript completed.',
    fullDescription: 'Whether you need a full ghostwriter or a coach to guide you through each chapter, we provide professional support to get your manuscript completed and polished.',
    features: ['Full manuscript ghostwriting', 'Chapter-by-chapter coaching', 'Outline & structure planning'],
    metaTitle: 'Ghostwriting & Writing Coaching | Kandle Direct Publishing',
    metaDescription: 'Turn your ideas into a polished manuscript with professional ghostwriting or one-on-one writing coaching from Kandle Direct Publishing. Get started today.'
  },
  {
    slug: 'manuscript-assessment',
    title: 'Manuscript Assessment',
    category: 'Concept & Manuscript',
    shortDescription: 'Identify structural weaknesses before editing.',
    fullDescription: 'Before editing begins, a professional manuscript assessment identifies structural weaknesses, pacing issues, and areas for high-impact improvement.',
    features: ['Detailed editorial report', 'Structural feedback', 'Revision roadmap'],
    metaTitle: 'Manuscript Assessment Services | Kandle Direct Publishing',
    metaDescription: "Identify structural weaknesses before editing begins. Kandle Direct Publishing's expert manuscript assessment gives your book a clear roadmap to publication."
  },
  
  // Phase 2: Editing & Refinement
  {
    slug: 'developmental-editing',
    title: 'Developmental Editing',
    category: 'Editing & Refinement',
    shortDescription: 'High-level editing for story structure and pacing.',
    fullDescription: 'High-level editing addressing story structure, character arcs, plot consistency, pacing, and thematic depth. The most transformative stage of the editing process.',
    features: ['Full story structure analysis', 'Character arc review', 'Plot hole identification'],
    metaTitle: 'Developmental Editing Services | Kandle Direct Publishing',
    metaDescription: "Strengthen your book's structure, pacing, and plot with professional developmental editing from Kandle Direct Publishing. Transform your manuscript today."
  },
  {
    slug: 'substantive-editing',
    title: 'Line & Substantive Editing',
    category: 'Editing & Refinement',
    shortDescription: 'Sentence-level editing to improve flow and tone.',
    fullDescription: 'Sentence-level editing improving flow, tone, voice, and style. We transform rough prose into compelling, reader-friendly writing.',
    features: ['Paragraph-level rewrites', 'Voice & tone consistency', 'Scene-by-scene flow analysis'],
    metaTitle: 'Line & Substantive Editing | Kandle Direct Publishing',
    metaDescription: "Refine your writing at the sentence level. Kandle Direct Publishing's line and substantive editing improves clarity, flow, and voice throughout your entire manuscript."
  },
  {
    slug: 'copyediting',
    title: 'Copyediting',
    category: 'Editing & Refinement',
    shortDescription: 'Precision correction of grammar and syntax.',
    fullDescription: 'Precision correction of grammar, syntax, punctuation, and consistency across the entire manuscript following house style guidelines.',
    features: ['Grammar & syntax correction', 'Style guide enforcement', 'Consistency checks'],
    metaTitle: 'Professional Copyediting Services | Kandle Direct Publishing',
    metaDescription: 'Eliminate grammar, spelling, and punctuation errors with expert copyediting from Kandle Direct Publishing. Publish a polished, error-free book with full confidence.'
  },
  {
    slug: 'proofreading',
    title: 'Proofreading',
    category: 'Editing & Refinement',
    shortDescription: 'Final error sweep before going to press.',
    fullDescription: 'The final error sweep catching typos, formatting inconsistencies, and last-mile errors before your book goes to press.',
    features: ['Typographical error correction', 'Formatting verification', 'Final polish'],
    metaTitle: 'Book Proofreading Services | Kandle Direct Publishing',
    metaDescription: "Catch every error before going to print. Kandle Direct Publishing's proofreading service ensures your manuscript is polished, professional, and publication-ready."
  },

  // Phase 3: Design & Production
  {
    slug: 'book-cover-design',
    title: 'Book Cover Design',
    category: 'Design & Production',
    shortDescription: 'Market-researched, genre-appropriate covers.',
    fullDescription: 'Commission a market-researched, genre-appropriate cover available in 2D, 3D, and full-wrap print formats that grabs reader attention instantly.',
    features: ['Custom illustration/photography', 'Typography selection', 'Print & digital formats'],
    metaTitle: 'Professional Book Cover Design | Kandle Direct Publishing',
    metaDescription: 'Make a powerful first impression with a custom book cover. Kandle Direct Publishing designs professional, genre-appropriate covers that attract readers and boost sales.'
  },
  {
    slug: 'interior-formatting',
    title: 'Interior Formatting & Typesetting',
    category: 'Design & Production',
    shortDescription: 'Professional interior layout for print and digital.',
    fullDescription: 'Professional interior layout for print PDF and digital ePub/Mobi formats, including beautiful headers, chapter breaks, and drop caps.',
    features: ['Custom font selection', 'Chapter headers & drop caps', 'ePub/Mobi generation'],
    metaTitle: 'Interior Formatting & Typesetting | Kandle Direct Publishing',
    metaDescription: "Give readers a seamless reading experience. Kandle Direct Publishing formats your book's interior with expert typesetting for both print and digital platforms."
  },
  {
    slug: 'isbn-acquisition',
    title: 'ISBN & Barcode Registration',
    category: 'Design & Production',
    shortDescription: 'Official registration for your book.',
    fullDescription: 'We assign an official ISBN, generate EAN barcodes, and guide you through copyright registration to protect your intellectual property.',
    features: ['ISBN assignment', 'Barcode generation', 'Copyright guidance'],
    metaTitle: 'ISBN & Barcode Registration | Kandle Direct Publishing',
    metaDescription: 'Get your ISBN and barcode set up correctly. Kandle Direct Publishing handles ISBN acquisition and barcode registration for seamless global retail distribution.'
  },
  {
    slug: 'illustrations',
    title: 'Custom Illustrations',
    category: 'Design & Production',
    shortDescription: 'Bespoke artwork for children’s books and novels.',
    fullDescription: 'Beautiful custom illustrations tailored to your genre, perfect for children’s books, graphic novels, or chapter headers.',
    features: ['Character design', 'Full page spreads', 'Spot illustrations'],
    metaTitle: 'Custom Book Illustration Services | Kandle Direct Publishing',
    metaDescription: "Bring your story to life with original custom illustrations. Kandle Direct Publishing creates bespoke artwork tailored to your book's genre, tone, and target audience."
  },
  
  // Phase 4: Publishing & Distribution
  {
    slug: 'kdp-setup',
    title: 'KDP Setup & Optimization',
    category: 'Publishing & Distribution',
    shortDescription: 'Full Kindle Direct Publishing account setup.',
    fullDescription: 'Full Kindle Direct Publishing account setup with metadata optimization, category targeting, and pricing strategy for maximum royalty.',
    features: ['Account creation', 'Metadata optimization', 'Pricing strategy'],
    metaTitle: 'KDP Setup & Optimization Services | Kandle Direct Publishing',
    metaDescription: 'Launch your book on Amazon the right way. Kandle Direct Publishing sets up and optimizes your KDP listing to maximize visibility, rankings, and consistent book sales.'
  },
  {
    slug: 'ingramspark-distribution',
    title: 'Global Distribution via IngramSpark',
    category: 'Publishing & Distribution',
    shortDescription: 'List your book in 40,000+ retail outlets.',
    fullDescription: 'List your book in 40,000+ retail outlets, libraries, and bookstores worldwide, making your physical copies available to everyone.',
    features: ['Global catalog listing', 'Library access', 'Wholesale discount setup'],
    metaTitle: 'Global Book Distribution via IngramSpark | Kandle Direct Publishing',
    metaDescription: 'Get your book into bookstores and libraries worldwide. Kandle Direct Publishing manages your IngramSpark distribution for global reach and maximum market visibility.'
  },
  {
    slug: 'author-central',
    title: 'Amazon Author Central Setup',
    category: 'Publishing & Distribution',
    shortDescription: 'Claim your author profile on Amazon.',
    fullDescription: 'We build out a robust Amazon Author Central profile to establish your credibility, link all your books, and provide readers with your bio and blog feeds.',
    features: ['Profile optimization', 'Book linking', 'Editorial reviews integration'],
    metaTitle: 'Amazon Author Central Setup | Kandle Direct Publishing',
    metaDescription: 'Build your author brand on Amazon. Kandle Direct Publishing sets up and optimizes your Author Central profile to boost credibility and improve book discoverability.'
  },

  // Phase 5: Marketing & Launch
  {
    slug: 'review-sourcing',
    title: 'ARC Campaign & Review Sourcing',
    category: 'Marketing & Launch',
    shortDescription: 'Secure verified reviews before launch.',
    fullDescription: 'Distribute advance reader copies (ARCs) and secure verified reviews before your launch day to ensure strong social proof out of the gate.',
    features: ['ARC distribution', 'Review team management', 'Launch day coordination'],
    metaTitle: 'ARC Campaign & Book Review Sourcing | Kandle Direct Publishing',
    metaDescription: "Build social proof before launch day. Kandle Direct Publishing runs targeted ARC campaigns to source genuine early reviews and boost your book's credibility on Amazon."
  },
  {
    slug: 'book-launch-strategy',
    title: 'Book Launch Strategy',
    category: 'Marketing & Launch',
    shortDescription: 'Execute a full launch plan.',
    fullDescription: 'Execute a full launch plan including pre-launch buzz, launch day activities, and post-launch momentum to hit the bestseller lists.',
    features: ['Timeline creation', 'Email sequence drafting', 'Launch team coordination'],
    metaTitle: 'Book Launch Strategy Services | Kandle Direct Publishing',
    metaDescription: 'Launch your book with maximum impact. Kandle Direct Publishing creates a tailored book launch strategy to build buzz, drive sales, and connect you with your ideal readers.'
  },
  {
    slug: 'press-release',
    title: 'Press Release & Media Outreach',
    category: 'Marketing & Launch',
    shortDescription: 'Get your book featured in the media.',
    fullDescription: 'Professionally written press releases distributed to relevant media outlets, bloggers, and podcasters to generate organic buzz.',
    features: ['Professional copywriting', 'Media list targeting', 'Distribution reporting'],
    metaTitle: 'Book Press Release & Media Outreach | Kandle Direct Publishing',
    metaDescription: 'Get your book noticed by the press. Kandle Direct Publishing crafts compelling press releases and manages media outreach to amplify your launch and build author credibility.'
  },

  // Phase 6: Growth & Ongoing Promotion
  {
    slug: 'advertising-management',
    title: 'Amazon Ads Management',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Target high-intent book buyers.',
    fullDescription: 'Run managed pay-per-click campaigns targeting high-intent book buyers in your specific genre using Amazon Advertising.',
    features: ['Keyword research', 'Bid management', 'A/B testing'],
    metaTitle: 'Amazon Ads Management for Authors | Kandle Direct Publishing',
    metaDescription: 'Drive more book sales with targeted Amazon advertising. Kandle Direct Publishing manages your Amazon Ads campaigns to maximize ROI, visibility, and consistent sales growth.'
  },
  {
    slug: 'seo-content-strategy',
    title: 'SEO & Content Strategy',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Grow organic discoverability.',
    fullDescription: 'Grow organic discoverability with keyword-rich author blog content targeting your reader audience and improving your search engine rankings.',
    features: ['Keyword mapping', 'Blog post creation', 'On-page SEO'],
    metaTitle: 'Author SEO & Content Strategy | Kandle Direct Publishing',
    metaDescription: 'Get found online and grow your readership organically. Kandle Direct Publishing builds a powerful SEO and content strategy to drive traffic to your author brand.'
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Consistent, engaging social content.',
    fullDescription: 'Consistent, engaging social content across Instagram, Facebook, X, and TikTok to grow your author following and brand visibility.',
    features: ['Content calendar', 'Graphic creation', 'Community engagement'],
    metaTitle: 'Author Social Media Management | Kandle Direct Publishing',
    metaDescription: 'Build your author platform on social media. Kandle Direct Publishing manages your channels with engaging content to grow your following and connect you with readers.'
  },
  {
    slug: 'audiobook-production',
    title: 'Audiobook Production',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Professional narration for your book.',
    fullDescription: 'Professional narration, editing, and mastering to produce an ACX-compliant audiobook ready for Audible, Amazon, and iTunes.',
    features: ['Narrator casting', 'Audio mastering', 'ACX distribution'],
    metaTitle: 'Professional Audiobook Production | Kandle Direct Publishing',
    metaDescription: 'Reach listeners everywhere with a professionally produced audiobook. Kandle Direct Publishing handles narration, editing, and platform distribution for your title.'
  },
  {
    slug: 'author-website',
    title: 'Author Website Design',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Your professional digital home.',
    fullDescription: 'Custom, mobile-responsive author websites to capture email subscribers, sell books direct, and showcase your entire portfolio.',
    features: ['Custom design', 'Newsletter integration', 'Direct sales setup'],
    metaTitle: 'Author Website Design Services | Kandle Direct Publishing',
    metaDescription: 'Establish your online presence as a professional author. Kandle Direct Publishing designs SEO-ready author websites that showcase your books, brand, and biography.'
  }
];
