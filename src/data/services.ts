export interface Service {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

export const servicesData: Service[] = [
  // Phase 1: Concept & Manuscript
  {
    slug: 'concept-development',
    title: 'Concept Development & Market Research',
    category: 'Concept & Manuscript',
    shortDescription: 'Validate your book concept before you write.',
    fullDescription: 'We research comparable titles, audience demand, and category trends to validate your book concept and positioning before you write a single chapter.',
    features: ['Comp title analysis', 'Target reader persona', 'Category & genre positioning']
  },
  {
    slug: 'ghostwriting',
    title: 'Ghostwriting & Writing Coaching',
    category: 'Concept & Manuscript',
    shortDescription: 'Professional support to get your manuscript completed.',
    fullDescription: 'Whether you need a full ghostwriter or a coach to guide you through each chapter, we provide professional support to get your manuscript completed and polished.',
    features: ['Full manuscript ghostwriting', 'Chapter-by-chapter coaching', 'Outline & structure planning']
  },
  {
    slug: 'manuscript-assessment',
    title: 'Manuscript Assessment',
    category: 'Concept & Manuscript',
    shortDescription: 'Identify structural weaknesses before editing.',
    fullDescription: 'Before editing begins, a professional manuscript assessment identifies structural weaknesses, pacing issues, and areas for high-impact improvement.',
    features: ['Detailed editorial report', 'Structural feedback', 'Revision roadmap']
  },
  
  // Phase 2: Editing & Refinement
  {
    slug: 'developmental-editing',
    title: 'Developmental Editing',
    category: 'Editing & Refinement',
    shortDescription: 'High-level editing for story structure and pacing.',
    fullDescription: 'High-level editing addressing story structure, character arcs, plot consistency, pacing, and thematic depth. The most transformative stage of the editing process.',
    features: ['Full story structure analysis', 'Character arc review', 'Plot hole identification']
  },
  {
    slug: 'substantive-editing',
    title: 'Line & Substantive Editing',
    category: 'Editing & Refinement',
    shortDescription: 'Sentence-level editing to improve flow and tone.',
    fullDescription: 'Sentence-level editing improving flow, tone, voice, and style. We transform rough prose into compelling, reader-friendly writing.',
    features: ['Paragraph-level rewrites', 'Voice & tone consistency', 'Scene-by-scene flow analysis']
  },
  {
    slug: 'copyediting',
    title: 'Copyediting',
    category: 'Editing & Refinement',
    shortDescription: 'Precision correction of grammar and syntax.',
    fullDescription: 'Precision correction of grammar, syntax, punctuation, and consistency across the entire manuscript following house style guidelines.',
    features: ['Grammar & syntax correction', 'Style guide enforcement', 'Consistency checks']
  },
  {
    slug: 'proofreading',
    title: 'Proofreading',
    category: 'Editing & Refinement',
    shortDescription: 'Final error sweep before going to press.',
    fullDescription: 'The final error sweep catching typos, formatting inconsistencies, and last-mile errors before your book goes to press.',
    features: ['Typographical error correction', 'Formatting verification', 'Final polish']
  },

  // Phase 3: Design & Production
  {
    slug: 'book-cover-design',
    title: 'Book Cover Design',
    category: 'Design & Production',
    shortDescription: 'Market-researched, genre-appropriate covers.',
    fullDescription: 'Commission a market-researched, genre-appropriate cover available in 2D, 3D, and full-wrap print formats that grabs reader attention instantly.',
    features: ['Custom illustration/photography', 'Typography selection', 'Print & digital formats']
  },
  {
    slug: 'interior-formatting',
    title: 'Interior Formatting & Typesetting',
    category: 'Design & Production',
    shortDescription: 'Professional interior layout for print and digital.',
    fullDescription: 'Professional interior layout for print PDF and digital ePub/Mobi formats, including beautiful headers, chapter breaks, and drop caps.',
    features: ['Custom font selection', 'Chapter headers & drop caps', 'ePub/Mobi generation']
  },
  {
    slug: 'isbn-acquisition',
    title: 'ISBN & Barcode Registration',
    category: 'Design & Production',
    shortDescription: 'Official registration for your book.',
    fullDescription: 'We assign an official ISBN, generate EAN barcodes, and guide you through copyright registration to protect your intellectual property.',
    features: ['ISBN assignment', 'Barcode generation', 'Copyright guidance']
  },
  {
    slug: 'illustrations',
    title: 'Custom Illustrations',
    category: 'Design & Production',
    shortDescription: 'Bespoke artwork for children’s books and novels.',
    fullDescription: 'Beautiful custom illustrations tailored to your genre, perfect for children’s books, graphic novels, or chapter headers.',
    features: ['Character design', 'Full page spreads', 'Spot illustrations']
  },
  
  // Phase 4: Publishing & Distribution
  {
    slug: 'kdp-setup',
    title: 'KDP Setup & Optimization',
    category: 'Publishing & Distribution',
    shortDescription: 'Full Kindle Direct Publishing account setup.',
    fullDescription: 'Full Kindle Direct Publishing account setup with metadata optimization, category targeting, and pricing strategy for maximum royalty.',
    features: ['Account creation', 'Metadata optimization', 'Pricing strategy']
  },
  {
    slug: 'ingramspark-distribution',
    title: 'Global Distribution via IngramSpark',
    category: 'Publishing & Distribution',
    shortDescription: 'List your book in 40,000+ retail outlets.',
    fullDescription: 'List your book in 40,000+ retail outlets, libraries, and bookstores worldwide, making your physical copies available to everyone.',
    features: ['Global catalog listing', 'Library access', 'Wholesale discount setup']
  },
  {
    slug: 'author-central',
    title: 'Amazon Author Central Setup',
    category: 'Publishing & Distribution',
    shortDescription: 'Claim your author profile on Amazon.',
    fullDescription: 'We build out a robust Amazon Author Central profile to establish your credibility, link all your books, and provide readers with your bio and blog feeds.',
    features: ['Profile optimization', 'Book linking', 'Editorial reviews integration']
  },

  // Phase 5: Marketing & Launch
  {
    slug: 'review-sourcing',
    title: 'ARC Campaign & Review Sourcing',
    category: 'Marketing & Launch',
    shortDescription: 'Secure verified reviews before launch.',
    fullDescription: 'Distribute advance reader copies (ARCs) and secure verified reviews before your launch day to ensure strong social proof out of the gate.',
    features: ['ARC distribution', 'Review team management', 'Launch day coordination']
  },
  {
    slug: 'book-launch-strategy',
    title: 'Book Launch Strategy',
    category: 'Marketing & Launch',
    shortDescription: 'Execute a full launch plan.',
    fullDescription: 'Execute a full launch plan including pre-launch buzz, launch day activities, and post-launch momentum to hit the bestseller lists.',
    features: ['Timeline creation', 'Email sequence drafting', 'Launch team coordination']
  },
  {
    slug: 'press-release',
    title: 'Press Release & Media Outreach',
    category: 'Marketing & Launch',
    shortDescription: 'Get your book featured in the media.',
    fullDescription: 'Professionally written press releases distributed to relevant media outlets, bloggers, and podcasters to generate organic buzz.',
    features: ['Professional copywriting', 'Media list targeting', 'Distribution reporting']
  },

  // Phase 6: Growth & Ongoing Promotion
  {
    slug: 'advertising-management',
    title: 'Amazon Ads Management',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Target high-intent book buyers.',
    fullDescription: 'Run managed pay-per-click campaigns targeting high-intent book buyers in your specific genre using Amazon Advertising.',
    features: ['Keyword research', 'Bid management', 'A/B testing']
  },
  {
    slug: 'seo-content-strategy',
    title: 'SEO & Content Strategy',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Grow organic discoverability.',
    fullDescription: 'Grow organic discoverability with keyword-rich author blog content targeting your reader audience and improving your search engine rankings.',
    features: ['Keyword mapping', 'Blog post creation', 'On-page SEO']
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Consistent, engaging social content.',
    fullDescription: 'Consistent, engaging social content across Instagram, Facebook, X, and TikTok to grow your author following and brand visibility.',
    features: ['Content calendar', 'Graphic creation', 'Community engagement']
  },
  {
    slug: 'audiobook-production',
    title: 'Audiobook Production',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Professional narration for your book.',
    fullDescription: 'Professional narration, editing, and mastering to produce an ACX-compliant audiobook ready for Audible, Amazon, and iTunes.',
    features: ['Narrator casting', 'Audio mastering', 'ACX distribution']
  },
  {
    slug: 'author-website',
    title: 'Author Website Design',
    category: 'Growth & Ongoing Promotion',
    shortDescription: 'Your professional digital home.',
    fullDescription: 'Custom, mobile-responsive author websites to capture email subscribers, sell books direct, and showcase your entire portfolio.',
    features: ['Custom design', 'Newsletter integration', 'Direct sales setup']
  }
];
