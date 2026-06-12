export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  content: string; // HTML format for rendering rich text
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const blogData: BlogPost[] = [
  {
    slug: "amazon-kdp-self-publishing-guide",
    title: "The Ultimate Guide to Self-Publishing an eBook on Amazon KDP",
    excerpt: "Learn how to navigate Kindle Direct Publishing (KDP), optimize your book metadata, select high-traffic keywords, and set up your book royalties correctly.",
    coverImage: "/images/blog/kdp-guide.jpg",
    date: "June 10, 2026",
    author: "Aliah Khan",
    readTime: "7 min read",
    category: "Self-Publishing",
    metaTitle: "Self-Publishing an eBook on Amazon KDP: Complete Guide",
    metaDescription: "Step-by-step tutorial on self-publishing an eBook using Amazon KDP. Discover how to configure royalties, select keywords, and list on Kindle successfully.",
    keywords: ["Amazon KDP", "self-publishing eBook", "KDP royalties", "how to publish an eBook", "Kindle Direct Publishing"],
    content: `
      <p class="mb-4">Self-publishing an eBook on <strong>Amazon KDP (Kindle Direct Publishing)</strong> has completely revolutionized the literary world. Today, authors can upload their manuscript directly and reach millions of global readers without waiting for a traditional publishing gatekeeper. However, publishing a book successfully requires more than just uploading a Word document.</p>
      
      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">1. Setting Up Your Amazon KDP Account</h2>
      <p class="mb-4">Before publishing, you must set up your Amazon KDP account. Visit <a href="https://kdp.amazon.com" class="text-accent hover:underline">kdp.amazon.com</a>, sign in with your existing Amazon credentials or create a new account, and complete your tax and banking information. Having this set up early ensures your <strong>KDP royalties</strong> are paid directly to your bank account without delay.</p>
      
      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">2. Perfecting Your eBook Metadata</h2>
      <p class="mb-4">Metadata is how readers discover your eBook. It includes your book title, subtitle, description, contributor names, and backend keywords. When choosing a title, ensure it is memorable, and use the subtitle to add context or target specific search queries.</p>
      <p class="mb-4">Your description acts as sales copy. Start with a hook, outline the central conflict or core promise, and end with a clear Call to Action (CTA) like "Buy now."</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">3. Selecting KDP Keywords and Categories</h2>
      <p class="mb-4">Amazon allows you to select 7 backend keywords and 3 primary categories. Do not waste these keywords by repeating words already in your title. Instead, focus on long-tail search phrases that readers actually type into the search bar, such as "mystery romance books for adults" or "step by step guide to digital marketing."</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">4. Understanding KDP Royalties</h2>
      <p class="mb-4">Amazon offers two royalty structures for Kindle eBooks: <strong>35% and 70%</strong>.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>70% Royalty Option:</strong> Applies to eBooks priced between $2.99 and $9.99. Keep in mind that Amazon deducts a small delivery fee based on the eBook file size (usually $0.15 per MB), which makes professional file optimization crucial.</li>
        <li><strong>35% Royalty Option:</strong> Applies to eBooks priced below $2.99 or above $9.99. No delivery fee is charged under this plan.</li>
      </ul>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">5. Professional Help Goes a Long Way</h2>
      <p class="mb-4">While the upload process is free and straightforward, the work required to prepare a professional book is extensive. Partnering with a specialized service like <strong>Kandle Direct Publishing</strong> ensures your eBook is professionally formatted, edited, and given a high-converting cover, maximizing your chances of climbing the Amazon Bestseller charts.</p>
    `
  },
  {
    slug: "ebook-formatting-errors-to-avoid",
    title: "5 Common eBook Formatting Mistakes That Ruin the Reader Experience",
    excerpt: "Avoid bad reviews. Discover why professional EPUB formatting matters, how reflowable layouts work, and how to format eBooks correctly.",
    coverImage: "/images/blog/formatting.jpg",
    date: "June 05, 2026",
    author: "Muhammad Ali",
    readTime: "5 min read",
    category: "Formatting",
    metaTitle: "eBook Formatting Mistakes to Avoid | EPUB Formatting Guide",
    metaDescription: "Learn how to format eBooks correctly. Avoid common mistakes like forced line breaks, unoptimized images, and broken links to ensure a great reader experience.",
    keywords: ["eBook formatting", "EPUB format", "Kindle layout", "convert manuscript to EPUB", "reflowable eBook formatting"],
    content: `
      <p class="mb-4">Many self-published authors spend months perfecting their manuscripts, only to upload files with poor <strong>eBook formatting</strong>. Unlike print books, which have fixed layouts, eBooks must adapt to various screens, fonts, and device preferences. This adaptive behavior is called <em>reflowable layout</em>.</p>
      <p class="mb-4">If your file formatting is broken, readers will leave negative reviews regarding the reading experience rather than the story. Here are 5 common errors to avoid.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">1. Using Forced Line Breaks (Hard Returns)</h2>
      <p class="mb-4">Pressing "Enter" at the end of every line in your word processor creates hard breaks. On an eBook reader, this results in chopped sentences and half-empty lines when the reader changes the font size. Always let the text wrap naturally and use proper paragraph styles for spacing.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">2. Static Page Numbers and Headers</h2>
      <p class="mb-4">Because eBook text is reflowable, page numbers do not exist in the same way they do in print. Adding static page numbers or headers in the header/footer of your Word file will cause them to appear in the middle of sentences on Kindle. Remove headers and footers entirely before compiling.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">3. Unoptimized, Low-Resolution Images</h2>
      <p class="mb-4">Images in eBooks must be formatted in RGB color mode, saved at 300 DPI, and compressed. Low-resolution images look pixelated on high-definition tablets, while massive, uncompressed images increase your file size. Remember that Amazon KDP charges a delivery fee of $0.15 per megabyte for 70% royalty books—smaller file sizes mean higher profits!</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">4. Missing or Static Table of Contents (TOC)</h2>
      <p class="mb-4">eBook distributors require both an inline Table of Contents and an NCX (logical) Table of Contents. A static list of chapters with page numbers is useless. Instead, hyperlink your chapters directly so readers can jump to any section with a single tap.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">5. Uploading Unclean Word Documents</h2>
      <p class="mb-4">Simply converting a ".docx" file to <strong>EPUB format</strong> using automated converters often leaves behind hidden styling tags, bloated HTML, and broken font spacing. For a clean file that loads instantly and works on Apple Books, Google Play, and Amazon Kindle, it is highly recommended to seek professional eBook compilation services.</p>
    `
  },
  {
    slug: "design-high-converting-ebook-covers",
    title: "How to Design a Premium eBook Cover That Grabs Readers' Attention",
    excerpt: "Your eBook cover design is your primary sales tool on Amazon Kindle. Discover visual secrets, layout hierarchy, and thumbnail optimization tips.",
    coverImage: "/images/blog/cover-design.jpg",
    date: "May 28, 2026",
    author: "Muhammad Khalid",
    readTime: "6 min read",
    category: "Design",
    metaTitle: "eBook Cover Design: How to Design Covers that Sell on KDP",
    metaDescription: "Discover how to design a high-converting eBook cover. Learn about thumbnail legibility, typography selection, genre expectations, and color contrast.",
    keywords: ["eBook cover design", "professional book designer", "Kindle cover size", "best eBook designs", "cover design tips"],
    content: `
      <p class="mb-4">It is a well-known truth in self-publishing: readers <em>do</em> judge books by their covers. In the online bookstore environment, your <strong>eBook cover design</strong> is your single most important marketing asset. If your cover looks amateur, readers will assume the writing inside is amateur too.</p>
      <p class="mb-4">Here are the essential rules for designing an eBook cover that stands out in search results and drives clicks.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">1. Optimize for Thumbnail Size First</h2>
      <p class="mb-4">Most authors review their book cover design full-screen on a monitor. However, readers see your book as a tiny thumbnail (often less than 100 pixels wide) while scrolling through Amazon. If your title is illegible or the main image is cluttered at that scale, readers will scroll past it. Test your design at 10% scale before finalizing it.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">2. Understand Genre Conventions</h2>
      <p class="mb-4">Every genre has a visual language. Sci-Fi uses dark backgrounds, bold neon colors, and futuristic sans-serif fonts. Romance relies on soft pastel hues, elegant scripts, and emotional character artwork. Breaking these rules to be "original" often backfires because readers use cover visual cues to immediately identify the genre they want to read.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">3. Establish Strong Visual Hierarchy</h2>
      <p class="mb-4">Your cover should communicate one main idea immediately. Design with a focal point—a striking image, a single focal symbol, or bold text. Avoid packing too many elements together. The typography should be bold and readable, with the book title occupying the dominant space, followed by the author name.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">4. Kindle Cover Size & Formats</h2>
      <p class="mb-4">Amazon recommends an ideal height-to-width ratio of 1.6:1. The recommended dimensions are <strong>2560 x 1600 pixels</strong>. Save your cover in JPEG format at 300 DPI in RGB color mode (as CMYK colors can look distorted on digital screens).</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">5. Hire a Professional Designer</h2>
      <p class="mb-4">Unless you have professional graphic design experience, using online templates can make your book look generic. A custom, bespoke design from a professional book designer gives you unique illustrations, customized text treatment, and visual polish that sets your work apart on KDP.</p>
    `
  },
  {
    slug: "ebook-marketing-launch-strategy",
    title: "eBook Marketing Secrets: 4 Tactics to Build Buzz Before Launching",
    excerpt: "Discover how to run a pre-order campaign, coordinate ARC reviewer copies, optimize book metadata, and use SEO to drive book sales on autopilot.",
    coverImage: "/images/blog/marketing.jpg",
    date: "May 15, 2026",
    author: "Aliah Khan",
    readTime: "6 min read",
    category: "Marketing",
    metaTitle: "eBook Marketing & Launch Strategy for Self-Published Authors",
    metaDescription: "Learn how to market an eBook successfully. Complete checklist including pre-orders, ARC review campaigns, and metadata search engine optimization.",
    keywords: ["eBook marketing", "how to sell eBooks", "book pre-order campaign", "get book reviews on Amazon", "metadata SEO for authors"],
    content: `
      <p class="mb-4">Writing a book is only half the battle. Once your manuscript is edited and formatted, you must turn your attention to <strong>eBook marketing</strong>. In a sea of millions of digital titles, a book without a marketing plan is invisible. The most successful authors begin marketing their book weeks or months before the launch date.</p>
      <p class="mb-4">Use these 4 proven tactics to build buzz and secure sales early.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">1. Leverage a Pre-Order Campaign</h2>
      <p class="mb-4">Amazon KDP allows authors to set up Kindle pre-orders up to one year in advance. This is a powerful tool because all sales accumulated during the pre-order period count toward your sales rank on the official launch day, giving your book a significant boost in search algorithms upon release.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">2. Assemble an ARC (Advance Reader Copy) Team</h2>
      <p class="mb-4">Social proof is everything. Readers are hesitant to buy a book that has zero reviews. To overcome this, distribute free pre-release copies (ARCs) to a select group of reviewers (your ARC team) in exchange for their honest reviews on launch day. Keep in mind that Amazon reviews must comply with KDP guidelines—never buy reviews or exchange money.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">3. Optimize Your Book Metadata for SEO</h2>
      <p class="mb-4">SEO isn't just for websites; it is vital for online bookstores too. Research the keywords that your target audience uses when browsing books. Integrate these phrases naturally into your book description and KDP backend slots. Using tools to analyze search volume and competition will help you identify less competitive keywords that are easier to rank for.</p>

      <h2 class="text-2xl font-serif font-bold text-primary mt-8 mb-4">4. Create an Author Website and Email List</h2>
      <p class="mb-4">Social media algorithms change, but your email list is yours forever. Set up a simple landing page offering a free chapter or a short story in exchange for email signups. This allows you to build a dedicated reader list that you can pitch directly when your book officially launches, driving immediate sales.</p>
    `
  }
];
