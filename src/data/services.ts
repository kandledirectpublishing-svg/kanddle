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
      slug: "ghostwriting",
      title: "Ghostwriting & Writing Coaching",
      category: "Concept & Manuscript",
      shortDescription: 'Most manuscripts don\'t stall because the author lacks talent, they stall because there\'s no outline holding the book together and no accountability keeping momentum going.',
      fullDescription: "Most manuscripts don't stall because the author lacks talent, they stall because there's no outline holding the book together and no accountability keeping momentum going. Authors start strong and lose the thread by chapter three, or draft an entire manuscript with no structural plan and end up with a book that reads like a collection of ideas rather than a finished work. Ghostwriting and coaching solve two different sides of that problem, one replaces the writing burden entirely, the other builds the author's own skill and consistency so the book actually gets finished.\n\nWe treat every manuscript as the foundation for what comes after it. A ghostwritten or coached book that isn't structured around a real [concept and market position](https://www.kandledirectpublishing.com/services/concept-development) is much harder to launch successfully later, so we build manuscripts with the eventual launch and reader in mind from the first outline, not as an afterthought once the draft is finished.",
      features: [
          "Full manuscript ghostwriting from outline to final draft",
          "Chapter-by-chapter coaching for hands-on authors who want to write it themselves",
          "Outline & structure planning before a single chapter is written",
          "Voice-matched writing that reads authentically as you, not a generic ghostwriter",
          "Editorial pass built into every manuscript before handoff",
          "Flexible engagement — full ghostwrite, guided coaching, or a hybrid of both"
      ],
      metaTitle: "Ghostwriting & Writing Coaching Services | Kandle Direct Publishing",
      metaDescription: "Full-service ghostwriting or chapter-by-chapter coaching to turn your ideas into a polished, publish-ready manuscript.",
      whyAuthorsChoose: [
          {
              title: "Two Engagement Models",
              description: "full ghostwriting or guided coaching, so you get exactly the level of involvement you want"
          },
          {
              title: "Voice-Matched Writing",
              description: "every manuscript is revised until it sounds like you, not a generic ghostwriter"
          },
          {
              title: "Outline-First Process",
              description: "no stalled or directionless manuscripts, every chapter is mapped before it's written"
          },
          {
              title: "Full-Service Publisher",
              description: "your manuscript connects directly into our concept development and launch strategy services, not handled in isolation"
          }
      ],
      howItWorks: [
          {
              step: "Consultation & voice discovery",
              text: "we start with a call to understand your ideas, goals, and target reader. For ghostwriting, we also review any existing notes, interviews, or rough drafts to capture how you actually speak and think."
          },
          {
              step: "Outline & structure",
              text: "before any writing happens, we build a chapter-by-chapter outline so the book has a clear arc and every chapter earns its place."
          },
          {
              step: "Drafting",
              text: "on the ghostwriting path, chapters are written and delivered in batches for your review. On the coaching path, you draft each chapter yourself with structured feedback and revision notes after every submission."
          },
          {
              step: "Revision & voice-matching",
              text: "iterative rounds to make sure the manuscript sounds authentically like you rather than a generic ghostwritten voice."
          },
          {
              step: "Editorial pass & handoff",
              text: "the complete manuscript is reviewed for consistency, pacing, and clarity before final handoff, so what you receive is publish-ready, not a rough first draft."
          }
      ],
      whoItsFor: [
          "First-time authors who have a strong idea but not the writing time or confidence to execute it",
          "Business owners and entrepreneurs who want a book without stepping away from their business",
          "Authors who've stalled mid-manuscript and need structure and accountability to finish",
          "Authors who want to write it themselves but need craft guidance and a clear outline"
      ],
      faqs: [
          {
              question: "What's the difference between ghostwriting and coaching?",
              answer: "Ghostwriting means our writers produce the manuscript for you based on your ideas and voice. Coaching means you write it yourself, with structured outlines, feedback, and revision guidance after every chapter."
          },
          {
              question: "How long does it take?",
              answer: "Most full ghostwriting projects take 3-6 months depending on manuscript length and complexity. Coaching timelines depend on your own writing pace, most authors complete a manuscript within 4-8 months."
          },
          {
              question: "Will the manuscript actually sound like me?",
              answer: "Yes. We start with a voice discovery process and revise specifically for tone and voice match, not just content accuracy, before any manuscript is considered final."
          },
          {
              question: "Do you work with both fiction and nonfiction?",
              answer: "Yes, our ghostwriters and coaches work across both fiction and nonfiction projects."
          },
          {
              question: "What do I need to provide to get started?",
              answer: "Just your book idea, goals, and any existing notes, outlines, or interviews you have. We'll build the outline and structure with you from there."
          }
      ]
  },
    {
      slug: "manuscript-assessment",
      title: "Manuscript Assessment",
      category: "Concept & Manuscript",
      shortDescription: 'Most authors move straight into line editing before knowing whether the manuscript\'s underlying structure actually holds up.',
      fullDescription: "Most authors move straight into line editing before knowing whether the manuscript's underlying structure actually holds up. That means paying to polish sentences in a chapter that needs to be restructured or cut entirely, and finding out too late that the pacing problem in act two was the real issue all along. A manuscript assessment catches structural, pacing, and development issues before you spend on a full edit, so every editing dollar goes toward a manuscript that's already built to work.\n\nWe also use the assessment as a decision point, not just a report. Authors who've been through our [ghostwriting and coaching process](https://www.kandledirectpublishing.com/services/ghostwriting) or drafted independently both reach the same fork: revise it yourself with a clear roadmap, or move into a full edit. The assessment tells you which path actually fits your manuscript instead of guessing.",
      features: [
          "Full read-through by an experienced editorial assessor",
          "Detailed editorial report covering structure, pacing, and voice",
          "Chapter-by-chapter structural feedback, not just general notes",
          "Clear revision roadmap prioritized by impact",
          "Genre and category fit review against reader expectations",
          "A clear recommendation on your next step — self-revision, coaching, or a full edit"
      ],
      metaTitle: "Manuscript Assessment Services | Kandle Direct Publishing",
      metaDescription: "A professional manuscript assessment that flags structural weaknesses, pacing issues, and revision priorities before you invest in editing.",
      whyAuthorsChoose: [
          {
              title: "Assessment-Before-Edit Model",
              description: "catch structural issues before paying for a full edit that polishes the wrong problems"
          },
          {
              title: "Written, Referenceable Report",
              description: "a document you can return to throughout revision, not just verbal notes"
          },
          {
              title: "Genre-Matched Assessors",
              description: "feedback grounded in real category and reader expectations"
          },
          {
              title: "Full-Service Publisher",
              description: "assessment findings connect directly into our coaching, editing, and launch services"
          }
      ],
      howItWorks: [
          {
              step: "Manuscript submission & assessor match",
              text: "you submit your complete manuscript and we match it with an assessor experienced in your genre or category."
          },
          {
              step: "Full read-through",
              text: "your assessor reads the complete manuscript, not sample chapters, to evaluate the book as a whole."
          },
          {
              step: "Structural & editorial analysis",
              text: "we evaluate plot or argument structure, pacing, character or content development, voice consistency, and genre fit."
          },
          {
              step: "Report delivery",
              text: "you receive a detailed written report covering strengths, weaknesses, and a prioritized, chapter-referenced revision roadmap."
          },
          {
              step: "Debrief call & next-step planning",
              text: "we walk through the findings together and help you decide whether to self-revise, move into coaching, or proceed to a full edit."
          }
      ],
      whoItsFor: [
          "Authors who've finished a draft and aren't sure if it's ready for editing",
          "Authors who've received mixed feedback from beta readers or writing groups and want an expert read",
          "Authors deciding between self-publishing and querying literary agents",
          "Coaching or ghostwriting clients moving from drafting into the revision phase"
      ],
      faqs: [
          {
              question: "How long does it take?",
              answer: "Most assessments are completed within 2-3 weeks depending on manuscript length."
          },
          {
              question: "What's the difference between an assessment and a full edit?",
              answer: "An assessment identifies structural and developmental issues and gives you a revision roadmap. A full edit goes line by line to revise the prose itself. Most authors do an assessment first, revise, then move into editing."
          },
          {
              question: "Do you assess both fiction and nonfiction?",
              answer: "Yes, our assessors work across both fiction and nonfiction manuscripts."
          },
          {
              question: "What do I receive at the end?",
              answer: "A detailed written editorial report covering structure, pacing, and development, plus a prioritized revision roadmap and a live debrief call to walk through the findings."
          },
          {
              question: "Can this replace a full edit?",
              answer: "No, an assessment identifies what needs to change, it doesn't rewrite the prose itself. Most authors use it to revise independently first, then decide whether a full edit is still needed."
          }
      ]
  },
  
  // Phase 2: Editing & Refinement
    {
      slug: "developmental-editing",
      title: "Developmental Editing",
      category: "Editing & Refinement",
      shortDescription: 'Developmental editing is the stage most authors skip or shortcut, and it\'s usually the reason a book underperforms after publication.',
      fullDescription: "Developmental editing is the stage most authors skip or shortcut, and it's usually the reason a book underperforms after publication. Line editing polishes sentences, but if the story sags in the middle or an argument loses its thread by chapter six, no amount of sentence-level polish fixes that. Developmental editing addresses the manuscript at the structural level first, so every later editing pass is working on a book that already holds together.\n\nFor authors who've already been through a [manuscript assessment](https://www.kandledirectpublishing.com/services/manuscript-assessment), developmental editing is often the natural next step, the assessment identifies what's structurally weak, and developmental editing works through the manuscript to actually fix it, scene by scene or section by section.",
      features: [
          "Full story or argument structure analysis, evaluated chapter by chapter",
          "Character arc review for fiction, or logical flow and argument-strength review for nonfiction",
          "Plot hole, inconsistency, and pacing issue identification across the full manuscript",
          "Thematic depth and reader engagement assessment",
          "A full editorial letter with prioritized, actionable revision guidance",
          "In-manuscript margin notes flagging specific scenes, chapters, or sections"
      ],
      metaTitle: "Developmental Editing Services | Kandle Direct Publishing",
      metaDescription: "High-level developmental editing for structure, pacing, and plot or argument consistency, the most transformative stage before line editing begins.",
      whyAuthorsChoose: [
          {
              title: "Structure-First Approach",
              description: "we fix the foundation before anyone touches a sentence"
          },
          {
              title: "Genre-Matched Editors",
              description: "editors experienced in your specific genre or nonfiction category"
          },
          {
              title: "Editorial Letter Plus Margin Notes",
              description: "big-picture guidance and chapter-specific detail, not one or the other"
          },
          {
              title: "Full-Service Publisher",
              description: "developmental editing connects directly into our assessment, coaching, and launch services"
          }
      ],
      howItWorks: [
          {
              step: "Manuscript intake & editor match",
              text: "you submit your complete manuscript and we match it with a developmental editor experienced in your genre or category."
          },
          {
              step: "Full structural read",
              text: "your editor reads the entire manuscript, tracking structure, pacing, character or argument development, and consistency throughout."
          },
          {
              step: "Editorial letter & chapter notes",
              text: "you receive a comprehensive editorial letter covering big-picture issues, plus in-manuscript notes flagging specific scenes or sections."
          },
          {
              step: "Revision support",
              text: "a defined window for follow-up questions as you work through the revision, so you're not left interpreting notes alone."
          },
          {
              step: "Follow-up read (optional)",
              text: "a second structural pass once revisions are complete, to confirm the fixes landed before you move into line editing."
          }
      ],
      whoItsFor: [
          "Authors who've completed a manuscript assessment and are ready to act on the findings",
          "Fiction authors whose plot, pacing, or character arcs feel unresolved or inconsistent",
          "Nonfiction authors whose argument loses focus or momentum partway through the book",
          "Authors preparing a manuscript for agent submission or self-publication who want it structurally solid first"
      ],
      faqs: [
          {
              question: "How is this different from a manuscript assessment?",
              answer: "An assessment identifies structural issues and gives you a roadmap. Developmental editing goes further, an editor works through the manuscript with you to actually resolve those issues at the structural level."
          },
          {
              question: "How long does it take?",
              answer: "Most developmental editing projects take 4-6 weeks depending on manuscript length and the extent of revision needed."
          },
          {
              question: "Do you edit both fiction and nonfiction?",
              answer: "Yes, our developmental editors work across both fiction and nonfiction, matched to your specific genre or category."
          },
          {
              question: "What do I receive at the end?",
              answer: "A full editorial letter covering structural, pacing, and consistency issues, plus in-manuscript margin notes and a defined window for follow-up questions."
          },
          {
              question: "Do I need line editing after this?",
              answer: "Usually yes. Developmental editing addresses structure, not sentence-level prose. Most authors move into line editing or copyediting once structural revisions are complete."
          }
      ]
  },
    {
      slug: "substantive-editing",
      title: "Line & Substantive Editing",
      category: "Editing & Refinement",
      shortDescription: 'Readers rarely notice good prose, but they always notice clunky prose.',
      fullDescription: "Readers rarely notice good prose, but they always notice clunky prose. A manuscript with a strong structure can still lose readers if sentences are repetitive, pacing drags at the line level, or the voice feels inconsistent from chapter to chapter. Line and substantive editing is where a manuscript stops reading like a draft and starts reading like a finished book, the difference between prose that's technically correct and prose that actually holds a reader's attention.\n\nThis stage only works once the structure underneath it is solid. If your manuscript hasn't been through [developmental editing](https://www.kandledirectpublishing.com/services/developmental-editing) yet and you suspect there are structural issues, we'll flag that before starting, polishing sentences in a chapter that still needs restructuring wastes your budget.",
      features: [
          "Paragraph-level rewrites where prose feels flat, cluttered, or unclear",
          "Voice and tone consistency maintained across the entire manuscript",
          "Scene-by-scene or section-by-section flow analysis",
          "Sentence rhythm and pacing refined at the line level",
          "Word choice, clarity, and redundancy addressed throughout",
          "A manuscript that reads the way it was meant to sound, not just grammatically correct"
      ],
      metaTitle: "Line & Substantive Editing | Kandle Direct Publishing",
      metaDescription: "Sentence-level line and substantive editing that sharpens clarity, flow, and voice throughout your manuscript, once the structure is already solid.",
      whyAuthorsChoose: [
          {
              title: "Voice-Preserving Edits",
              description: "we sharpen prose without erasing what makes your writing sound like you"
          },
          {
              title: "Sample Edit First",
              description: "confirm fit before committing to a full manuscript edit"
          },
          {
              title: "Tracked-Changes Transparency",
              description: "every edit is visible and reviewable, nothing is silently rewritten"
          },
          {
              title: "Full-Service Publisher",
              description: "line editing connects directly into our developmental editing, proofreading, and launch services"
          }
      ],
      howItWorks: [
          {
              step: "Manuscript intake & editor match",
              text: "you submit your manuscript and we match it with a line editor suited to your genre and voice."
          },
          {
              step: "Sample edit",
              text: "for longer projects, we edit a sample chapter first so you can confirm the editor's approach matches your voice before the full edit begins."
          },
          {
              step: "Full line & substantive pass",
              text: "your editor works sentence by sentence through the complete manuscript, addressing clarity, flow, tone, and voice consistency."
          },
          {
              step: "Tracked changes delivery",
              text: "you receive the edited manuscript with all changes tracked, so you can review, accept, or query every edit."
          },
          {
              step: "Query resolution",
              text: "a defined window to work through any editor queries or your own follow-up questions before the manuscript is finalized."
          }
      ],
      whoItsFor: [
          "Authors whose manuscript is structurally solid but reads roughly at the sentence level",
          "Authors moving out of developmental editing and into the next stage of polish",
          "Authors who've self-edited extensively and want a professional pass before proofreading",
          "Authors who want their natural voice sharpened, not replaced with a generic editorial tone"
      ],
      faqs: [
          {
              question: "How is this different from developmental editing?",
              answer: "Developmental editing addresses structure, plot, pacing, and argument at the whole-manuscript level. Line and substantive editing works at the sentence level, clarity, flow, tone, and voice, once that structure is already in place."
          },
          {
              question: "How long does it take?",
              answer: "Most line editing projects take 3-5 weeks depending on manuscript length."
          },
          {
              question: "Will this change my voice?",
              answer: "No. We edit to sharpen your voice, not replace it. Every change is tracked so you can see and approve exactly what shifted."
          },
          {
              question: "Do I need developmental editing first?",
              answer: "If your manuscript hasn't been structurally reviewed, we recommend it. Line editing sentences in a section that still needs restructuring means paying to polish text you may end up cutting."
          },
          {
              question: "What do I receive at the end?",
              answer: "A fully edited manuscript with all changes tracked, plus notes on recurring patterns worth watching for in your own writing going forward."
          }
      ]
  },
    {
      slug: "copyediting",
      title: "Copyediting",
      category: "Editing & Refinement",
      shortDescription: 'Copyediting is the stage readers punish hardest when it\'s skipped.',
      fullDescription: "Copyediting is the stage readers punish hardest when it's skipped. A structurally strong, well-written manuscript still loses credibility fast if a reader hits inconsistent spelling, a character's eye color changing between chapters, or a comma splice on the first page. These errors don't just look unpolished, they signal to readers and reviewers that the book wasn't professionally produced, which affects reviews, word of mouth, and how the book is received in its category.\n\nCopyediting comes after [line and substantive editing](https://www.kandledirectpublishing.com/services/substantive-editing), once the prose itself is finished being shaped. Running copyediting too early means correcting sentences that may still be rewritten, so we sequence it as the mechanical pass after the creative and structural work is locked in.",
      features: [
          "Grammar, syntax, and punctuation corrected throughout the manuscript",
          "A consistent house style applied to spelling, hyphenation, capitalization, and numerals",
          "Continuity checks — character names, timelines, and facts verified for consistency",
          "Formatting consistency across headings, dialogue, and citations",
          "A style sheet documenting every decision, for reference by future editors or proofreaders",
          "A manuscript that's mechanically clean and ready for design or proofreading"
      ],
      metaTitle: "Professional Copyediting Services | Kandle Direct Publishing",
      metaDescription: "Precision copyediting that corrects grammar, syntax, and punctuation and enforces consistency across your entire manuscript.",
      whyAuthorsChoose: [
          {
              title: "Style Guide Expertise",
              description: "editors fluent in Chicago, AP, and custom house styles"
          },
          {
              title: "Full Continuity Checking",
              description: "names, timelines, and facts verified, not just grammar"
          },
          {
              title: "Style Sheet Included",
              description: "a reference document that carries consistency into future work"
          },
          {
              title: "Full-Service Publisher",
              description: "copyediting connects directly into our line editing, proofreading, and launch services"
          }
      ],
      howItWorks: [
          {
              step: "Manuscript intake & style guide selection",
              text: "you submit your manuscript and we confirm which style guide to follow (Chicago, AP, or a custom house style)."
          },
          {
              step: "Line-by-line correction",
              text: "your copyeditor works through the full manuscript correcting grammar, syntax, punctuation, and spelling."
          },
          {
              step: "Consistency & continuity pass",
              text: "names, timelines, formatting, and terminology are checked for consistency throughout."
          },
          {
              step: "Style sheet delivery",
              text: "you receive a style sheet documenting every consistency decision, useful for future editors, translators, or sequels."
          },
          {
              step: "Query resolution",
              text: "a defined window to review tracked changes and resolve any editor queries before the manuscript is finalized."
          }
      ],
      whoItsFor: [
          "Authors whose manuscript has been through developmental and line editing and is ready for a mechanical pass",
          "Authors self-publishing who want a professionally clean, error-free final manuscript",
          "Authors preparing a manuscript for a publisher or agent submission where polish matters",
          "Authors working on a series who need consistency documented for future books"
      ],
      faqs: [
          {
              question: "How is this different from line editing?",
              answer: "Line editing shapes how the prose reads, clarity, flow, and voice. Copyediting corrects the mechanics, grammar, punctuation, spelling, and consistency, once that prose is finished."
          },
          {
              question: "How is this different from proofreading?",
              answer: "Copyediting happens before final formatting and catches grammar, consistency, and style issues throughout the manuscript. Proofreading is the final check after formatting, catching anything introduced during layout."
          },
          {
              question: "How long does it take?",
              answer: "Most copyediting projects take 2-4 weeks depending on manuscript length."
          },
          {
              question: "Which style guide do you use?",
              answer: "We typically work with Chicago Manual of Style or AP style, and can follow a custom house style if you have one."
          },
          {
              question: "What do I receive at the end?",
              answer: "A corrected manuscript with all changes tracked, plus a style sheet documenting spelling, formatting, and consistency decisions made throughout."
          }
      ]
  },
    {
      slug: "proofreading",
      title: "Proofreading",
      category: "Editing & Refinement",
      shortDescription: 'Proofreading catches a different category of error than every stage before it.',
      fullDescription: "Proofreading catches a different category of error than every stage before it. Layout and formatting introduce their own mistakes, a word dropped during a last-minute revision, a page number that's off after a chapter was added, a paragraph indent that broke during export, and these slip through even a clean copyedit because they happen after the manuscript was already corrected. Skipping this step means readers find the errors instead, and in reviews, typos get mentioned far more often than any other flaw.\n\nThis is the last stop before publication, which is why it only happens after [copyediting](https://www.kandledirectpublishing.com/services/copyediting) and once the manuscript is in its final laid-out form. Proofreading a manuscript that's still being copyedited means checking a file that's guaranteed to change again.",
      features: [
          "Typographical errors caught and corrected across the fully formatted manuscript",
          "Formatting verification — margins, headers, page numbers, and running heads checked",
          "Widow and orphan lines, awkward page breaks, and spacing errors flagged",
          "A final read against the copyedited version to catch anything introduced during layout",
          "Table of contents, chapter titles, and front/back matter checked against the manuscript",
          "A print-ready or upload-ready file, confirmed error-free before it goes live"
      ],
      metaTitle: "Book Proofreading Services | Kandle Direct Publishing",
      metaDescription: "A final proofreading pass that catches typos, formatting slips, and last-mile errors after layout, before your book goes to print.",
      whyAuthorsChoose: [
          {
              title: "Final-Format Review",
              description: "we proofread the actual laid-out file, not just the manuscript text"
          },
          {
              title: "Cross-Checked Against Copyedit",
              description: "nothing introduced during layout slips through"
          },
          {
              title: "Print and Ebook Experience",
              description: "proofreaders familiar with both formats and their specific formatting risks"
          },
          {
              title: "Full-Service Publisher",
              description: "proofreading closes out the editorial pipeline that starts with concept development"
          }
      ],
      howItWorks: [
          {
              step: "File intake",
              text: "you submit the final formatted manuscript, print layout or ebook file, along with the copyedited version for reference."
          },
          {
              step: "Full proofreading pass",
              text: "your proofreader reads the complete formatted file, flagging typos, formatting inconsistencies, and layout errors."
          },
          {
              step: "Cross-check against copyedit",
              text: "the proofread version is compared against the copyedited manuscript to catch anything introduced during layout."
          },
          {
              step: "Front and back matter review",
              text: "table of contents, chapter titles, headers, and any front or back matter are checked for accuracy."
          },
          {
              step: "Final sign-off",
              text: "you receive a marked-up copy of every correction and confirmation the file is ready to publish."
          }
      ],
      whoItsFor: [
          "Authors with a fully formatted, laid-out manuscript ready for final review before publishing",
          "Authors who've completed copyediting and are preparing to go to print or upload for ebook",
          "Authors who made last-minute changes after copyediting and want confirmation nothing broke",
          "Publishers or self-publishers who want a final safeguard before a print run"
      ],
      faqs: [
          {
              question: "How is this different from copyediting?",
              answer: "Copyediting corrects grammar, style, and consistency in the manuscript itself. Proofreading happens after formatting, checking the final laid-out file for typos and layout errors that copyediting couldn't have caught."
          },
          {
              question: "How long does it take?",
              answer: "Most proofreading passes take 1-2 weeks depending on manuscript length."
          },
          {
              question: "Do you proofread both print and ebook formats?",
              answer: "Yes, we proofread print layouts and ebook files, each has its own common formatting issues we check for specifically."
          },
          {
              question: "What if I make changes after proofreading?",
              answer: "Any changes made after proofreading should go through a quick re-check, even small edits can introduce new formatting or typo errors."
          },
          {
              question: "What do I receive at the end?",
              answer: "A marked-up copy showing every correction made, plus confirmation that your file is ready for print or upload."
          }
      ]
  },

  // Phase 3: Design & Production
    {
      slug: "book-cover-design",
      title: "Book Cover Design",
      category: "Design & Production",
      shortDescription: 'A cover has roughly the same job as a headline, it has a fraction of a second to signal genre, quality, and relevance before a reader scrolls past.',
      fullDescription: "A cover has roughly the same job as a headline, it has a fraction of a second to signal genre, quality, and relevance before a reader scrolls past. Readers judge a book's category and professionalism from the cover alone, long before they read a description, and a cover that doesn't match genre conventions actively repels the readers most likely to buy it, even if the writing inside is excellent. Most self-published books that underperform aren't failing on content, they're failing to signal what they are at a glance.\n\nWe tie cover design back to the category and comp-title research from [concept development](https://www.kandledirectpublishing.com/services/concept-development) whenever it's available, so the cover reflects the same market positioning the book was built around, rather than being designed in isolation from how the book is meant to compete.",
      features: [
          "A custom cover designed around real comp-title and category research, not a generic template",
          "Genre-appropriate imagery, color palette, and typography that signals the right category to readers",
          "Full format delivery — ebook 2D, 3D render for marketing, and full-wrap print cover with spine and back copy",
          "Thumbnail-tested design that reads clearly at small sizes across retailer listings",
          "Multiple concept directions before committing to a final design",
          "Print-file specs matched to your exact trim size and page count"
      ],
      metaTitle: "Professional Book Cover Design | Kandle Direct Publishing",
      metaDescription: "Market-researched, genre-appropriate book cover design in 2D, 3D, and full-wrap print formats, built to grab reader attention and drive clicks.",
      whyAuthorsChoose: [
          {
              title: "Comp-Title Driven Design",
              description: "covers grounded in real category research, not guesswork or generic templates"
          },
          {
              title: "Multiple Concepts",
              description: "you see real design directions before committing, not one take-it-or-leave-it option"
          },
          {
              title: "Full Format Coverage",
              description: "2D, 3D, and full-wrap print delivered from a single cohesive design"
          },
          {
              title: "Full-Service Publisher",
              description: "cover design connects directly into our concept development and launch strategy services"
          }
      ],
      howItWorks: [
          {
              step: "Comp title & category research",
              text: "we review bestselling covers in your genre to identify the visual conventions readers expect."
          },
          {
              step: "Concept development",
              text: "our designers produce multiple distinct concept directions based on that research and your book's content."
          },
          {
              step: "Concept selection & refinement",
              text: "you choose a direction and we refine typography, imagery, and layout through review rounds."
          },
          {
              step: "Full format production",
              text: "the final design is built out across ebook 2D, 3D render, and full-wrap print with spine and back copy."
          },
          {
              step: "File delivery",
              text: "print-ready and upload-ready files are delivered matched to your exact trim size, page count, and platform specs."
          }
      ],
      whoItsFor: [
          "Authors preparing to publish who need a professional, retailer-ready cover",
          "Authors relaunching a backlist title with a cover that better reflects current category conventions",
          "Authors who've had a cover designed elsewhere and it isn't converting or reading correctly at thumbnail size",
          "Authors who need matching print and ebook covers built from one consistent design"
      ],
      faqs: [
          {
              question: "How many concepts will I see?",
              answer: "You'll typically review multiple distinct concept directions before selecting one to refine into the final cover."
          },
          {
              question: "How long does it take?",
              answer: "Most cover design projects take 2-4 weeks from initial research through final file delivery."
          },
          {
              question: "Do you design both ebook and print covers?",
              answer: "Yes, every project includes ebook 2D, a 3D render for marketing use, and a full-wrap print file with spine and back cover copy."
          },
          {
              question: "What information do you need from me to get started?",
              answer: "Your genre, target category, any comp titles you like, back cover copy, and your exact print trim size and page count if you need a print wrap."
          },
          {
              question: "Can you match a cover to an existing series?",
              answer: "Yes, we can design new covers to match the visual identity of an existing series or align with covers from a previous book."
          }
      ]
  },
  {
    slug: 'interior-formatting',
    title: 'Interior Formatting & Typesetting',
    category: 'Design & Production',
      shortDescription: "Professional interior layout for print and digital, built for a seamless reading experience.",
      fullDescription: "**Q: How does your Interior Formatting & Typesetting service work?**\n\nOur designers take your final manuscript and lay it out as a professionally typeset interior, selecting fonts, chapter header styles, and spacing suited to your genre, then producing both a print-ready PDF sized to your exact trim and a reflowable ePub/Mobi file for digital platforms. You review the layout before final files are generated, so nothing goes to print or upload without your sign-off.\n\nInterior formatting is easy to underestimate because readers don't consciously notice good typesetting, they only notice bad typesetting. Cramped margins, inconsistent chapter starts, or a digital file that doesn't reflow properly on an e-reader pulls readers out of the story and reads as unprofessional, even when the writing itself is strong. A well-typeset interior disappears into the background and lets the writing do the work, which is exactly the point.\n\nFormatting happens after [copyediting](https://www.kandledirectpublishing.com/services/copyediting), once the text itself is finalized, and it produces the exact file that gets [proofread](https://www.kandledirectpublishing.com/services/proofreading) before publication. Running these out of order means formatting a manuscript that's still changing, or proofreading a file before it's actually laid out.\n\nFormatting is the stage where the manuscript becomes an actual book. Our objective is a reading experience that feels invisible in the best way. That means:\n\n*   **Matching typography to genre** so the interior feels appropriate before a reader even starts chapter one\n*   **Testing digital files across devices** so the ePub reads cleanly on Kindle, Apple Books, and Kobo alike\n*   **Building print files to exact spec** so there are no surprises or rejected files at the printer\n*   **Sequencing formatting correctly** after copyediting and before the final proofreading pass",
      metaTitle: "Interior Formatting & Typesetting | Kandle Direct Publishing",
      metaDescription: "Professional interior formatting for print PDF and ePub/Mobi, with typesetting, chapter design, and layout built for a seamless reading experience.  **Interior Formatting & Typesetting** =====================================  Professional interior layout for print and digital, built for a seamless reading experience.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["Print-ready interior PDF formatted to your exact trim size and specifications","ePub and Mobi files generated for Kindle, Apple Books, Kobo, and other digital platforms","Custom font pairing selected to match your genre and tone","Designed chapter headers, drop caps, and section breaks","Consistent headers, footers, and page numbering throughout","A reflowable digital file that displays cleanly across every screen size and device"],
      whyAuthorsChoose: [{"title":"Genre-Matched Typesetting","description":"font and layout choices suited to how your category is typically formatted"},{"title":"Print and Digital in One Process","description":"one consistent design across both formats"},{"title":"Cross-Device Testing","description":"ePub files checked across major e-reader platforms before delivery"},{"title":"Full-Service Publisher","description":"formatting connects directly into our copyediting, proofreading, and cover design services"}],
      howItWorks: [{"step":"Manuscript intake & spec confirmation","text":"you submit your final manuscript and we confirm trim size, target platforms, and any design preferences."},{"step":"Font & style selection","text":"we select and pair fonts, chapter header styles, and section break design suited to your genre."},{"step":"Print layout","text":"the interior is typeset into a print-ready PDF, with consistent margins, headers, footers, and pagination."},{"step":"Digital conversion","text":"a reflowable ePub/Mobi file is generated and tested across major e-reader platforms."},{"step":"Review & final delivery","text":"you review both formats before we deliver final, print-ready and upload-ready files."}],
      whoItsFor: ["Authors with a copyedited manuscript ready to become a print and digital file","Authors self-publishing who need professional typesetting without hiring a separate designer","Authors expanding an ebook-only title into print for the first time","Authors relaunching a backlist title with a modernized interior design"],
      faqs: [{"question":"Do you format for both print and ebook?","answer":"Yes, every project includes a print-ready PDF and a reflowable ePub/Mobi file for digital platforms."},{"question":"How long does it take?","answer":"Most formatting projects take 2-3 weeks depending on manuscript length and complexity of design elements."},{"question":"Can I choose my own fonts?","answer":"Yes, we can work with fonts you prefer or recommend options based on your genre if you'd like our guidance."},{"question":"Does this need to happen before or after proofreading?","answer":"Before. We format the manuscript into its final layout first, then proofreading reviews that exact formatted file for any last errors."},{"question":"What if my manuscript includes images or charts?","answer":"We can incorporate images, charts, and other visual elements into both the print and digital layouts."}]
},
  {
    slug: 'isbn-acquisition',
    title: 'ISBN & Barcode Registration',
    category: 'Design & Production',
      shortDescription: "Official registration for your book, set up correctly the first time.",
      fullDescription: "**Q: How does your ISBN & Barcode Registration service work?**\n\nWe handle the full ISBN assignment process for your book, confirm which format each edition needs its own ISBN for, generate a correctly sized EAN barcode ready for back-cover placement, and walk you through copyright registration so your work is properly protected. You end up with the registration details set up correctly the first time, rather than discovering an error after the book is already listed.\n\nISBN registration looks like paperwork, but it's actually the piece of infrastructure that lets a book be found, tracked, and sold across retailers and libraries worldwide. An incorrectly assigned ISBN, or one edition mistakenly sharing a number with another, causes listing errors, sales tracking problems, and retailer confusion that can take weeks to untangle after the fact. Getting it right at registration avoids all of that.\n\nThis step lines up closely with [interior formatting](https://www.kandledirectpublishing.com/services/interior-formatting) and [cover design](https://www.kandledirectpublishing.com/services/book-cover-design), since the barcode has to be sized and placed correctly on the back cover file, and the ISBN itself is embedded in the interior's copyright page. We sequence registration so those pieces land in the right place the first time.\n\nRegistration is a one-time setup that affects how your book is tracked for its entire life in print. Our objective is to get it right once so nothing needs correcting later. That means:\n\n*   **Assigning separate ISBNs per format** so print, ebook, and audiobook editions are tracked correctly and independently\n*   **Avoiding retailer listing errors** that come from incorrect or duplicated ISBN metadata\n*   **Coordinating barcode placement** with your cover file so it's sized and positioned correctly the first time\n*   **Protecting your rights early** through proper copyright registration guidance",
      metaTitle: "ISBN & Barcode Registration | Kandle Direct Publishing",
      metaDescription: "Official ISBN assignment, EAN barcode generation, and copyright guidance, set up correctly for seamless global retail distribution.  **ISBN & Barcode Registration** ===============================  Official registration for your book, set up correctly the first time.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["An official ISBN assigned and correctly linked to your book's metadata","A scannable EAN barcode generated and sized correctly for print placement","Guidance on copyright registration to protect your intellectual property","Correct ISBN handling across formats, since print, ebook, and audiobook editions each need their own","Publisher-of-record set up correctly, so retail listings and metadata stay consistent","A registration process that avoids the common errors that cause retailer listing issues later"],
      whyAuthorsChoose: [{"title":"Format-Aware Registration","description":"we handle the print, ebook, and audiobook distinctions correctly from the start"},{"title":"Coordinated With Design","description":"barcode files sized and delivered to match your cover and interior files"},{"title":"Copyright Guidance Included","description":"not just ISBN assignment, but protection of your work as intellectual property"},{"title":"Full-Service Publisher","description":"registration connects directly into our cover design and interior formatting services"}],
      howItWorks: [{"step":"Format & edition review","text":"we confirm which editions you're publishing (print, ebook, audiobook) since each requires its own ISBN."},{"step":"ISBN assignment","text":"an official ISBN is assigned and correctly linked to your book's title, author, and format metadata."},{"step":"Barcode generation","text":"a scannable EAN barcode is generated at the correct size for your back cover placement."},{"step":"Copyright guidance","text":"we walk you through the copyright registration process so your work is properly protected."},{"step":"Delivery & file handoff","text":"you receive your ISBN details and barcode file ready to hand off to your cover designer or printer."}],
      whoItsFor: ["Authors preparing to publish who need an official ISBN and barcode set up correctly","Authors publishing across multiple formats who need each edition registered independently","Authors who've had listing or metadata issues from an incorrectly registered ISBN previously","Authors who want copyright registration guidance alongside their publishing setup"],
      faqs: [{"question":"Do I need a separate ISBN for each format?","answer":"Yes. Print, ebook, and audiobook editions each require their own ISBN, even if it's the same book."},{"question":"How long does registration take?","answer":"ISBN assignment and barcode generation typically take 1-2 weeks."},{"question":"Do I need this if I'm only publishing on Amazon KDP?","answer":"Amazon can assign a free ISBN for KDP-only publishing, but that ties the ISBN to Amazon as publisher of record. If you plan to distribute beyond Amazon or want to be listed as your own publisher, you'll want an independently registered ISBN."},{"question":"What's included in the copyright guidance?","answer":"We walk you through the copyright registration process for your book so your work is properly protected as intellectual property."},{"question":"What do I receive at the end?","answer":"Your assigned ISBN details and a correctly sized barcode file, ready to hand off to your cover designer or printer."}]
},
  {
    slug: 'illustrations',
    title: 'Custom Illustrations',
    category: 'Design & Production',
      shortDescription: "Bespoke artwork tailored to your genre, from character design to full page spreads.",
      fullDescription: "**Q: How does your Custom Illustrations service work?**\n\nOur illustrators start with your manuscript, genre, and target audience to develop a visual style and character designs before any full-page work begins. From there, we produce full page spreads, spot illustrations, or chapter header art depending on your book's needs, keeping character appearance and style consistent from the first illustration to the last, then deliver print-ready and digital-optimized files matched to your publishing formats.\n\nIllustrated books live or die on visual consistency and tone match. A children's book with artwork that doesn't match its reading level, or a graphic novel where a character looks different from chapter to chapter, breaks reader trust immediately, especially with young readers, who notice inconsistency faster than adults do. Illustrations aren't decoration in these formats, they're doing as much storytelling work as the text itself.\n\nIllustration work needs to be finalized before [interior formatting](https://www.kandledirectpublishing.com/services/interior-formatting) begins, since page layout has to be built around where the artwork sits on each spread. For books where a character design might extend to the cover, we also coordinate directly with our [cover design](https://www.kandledirectpublishing.com/services/book-cover-design) team so the visual identity stays consistent from cover to interior.\n\nIllustrations need to work as a cohesive set, not as individual pieces. Our objective is a visual world that holds together from the first page to the last. That means:\n\n*   **Locking character designs early** so consistency holds across every spread the character appears in\n*   **Matching art style to reading level and genre** so the artwork reinforces the book's tone rather than working against it\n*   **Coordinating timing with formatting** so illustrations are finished and approved before layout begins\n*   **Extending visual identity to the cover** when appropriate, so the book feels like one cohesive product",
      metaTitle: "Custom Book Illustration Services | Kandle Direct Publishing",
      metaDescription: "Original custom illustrations, character design, and full page spreads, tailored to your book's genre, tone, and target audience.  **Custom Illustrations** ========================  Bespoke artwork tailored to your genre, from character design to full page spreads.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["Original character designs that stay consistent across every page they appear on","Full page spreads built for children's books, graphic novels, and illustrated fiction","Spot illustrations and chapter header art for novels and nonfiction","Artwork matched to your book's tone, genre, and target reader age group","Print-ready and digital-optimized files delivered for every format you're publishing","Style consistency maintained across every illustration in the book"],
      whyAuthorsChoose: [{"title":"Genre & Age-Appropriate Style","description":"artwork matched to your specific readership, not a generic house style"},{"title":"Character Consistency","description":"designs locked early and checked throughout so characters stay recognizable"},{"title":"Format-Ready Delivery","description":"print and digital files delivered ready for your production timeline"},{"title":"Full-Service Publisher","description":"illustration work connects directly into our interior formatting and cover design services"}],
      howItWorks: [{"step":"Manuscript & style consultation","text":"we review your manuscript, genre, and target audience to establish the right visual style and tone."},{"step":"Character & concept design","text":"for books with recurring characters, we develop and lock in character designs before full illustration work begins."},{"step":"Illustration production","text":"full page spreads, spot illustrations, or chapter header art are produced in stages for your review."},{"step":"Consistency review","text":"every illustration is checked against established character designs and style guidelines before finalizing."},{"step":"File delivery","text":"print-ready and digital-optimized illustration files are delivered, coordinated with your interior formatting timeline."}],
      whoItsFor: ["Children's book authors who need character-consistent illustrations throughout","Graphic novel creators who need full page spreads produced professionally","Fiction or nonfiction authors who want spot illustrations or chapter header art","Authors publishing a series who need a consistent visual style across multiple books"],
      faqs: [{"question":"What types of illustration do you offer?","answer":"Character design, full page spreads, and spot illustrations or chapter header art, depending on what your book needs."},{"question":"How long does it take?","answer":"Timelines vary significantly by scope, a full children's picture book typically takes 6-10 weeks, while spot illustrations for a novel take considerably less."},{"question":"Can you match an existing character design?","answer":"Yes, if you have existing character art or a previous book in a series, we can match that established style."},{"question":"Do you illustrate for adult fiction and nonfiction, not just children's books?","answer":"Yes, we produce spot illustrations and chapter header art for adult fiction and nonfiction as well as full illustration work for children's books and graphic novels."},{"question":"Should illustrations happen before or after formatting?","answer":"Before. Interior formatting is built around where the artwork sits on the page, so illustrations need to be finalized first."}]
},
  
  // Phase 4: Publishing & Distribution
  {
    slug: 'kdp-setup',
    title: 'KDP Setup & Optimization',
    category: 'Publishing & Distribution',
      shortDescription: "Full Kindle Direct Publishing account setup, built to maximize visibility, rankings, and royalty.",
      fullDescription: "**Q: How does your KDP Setup & Optimization service work?**\n\nWe set up your complete KDP listing, title and subtitle formatting, optimized book description, backend keywords, category selection, and pricing, based on research into what's actually working for comparable titles in your genre. Rather than defaulting to Amazon's suggested categories and generic keywords, we target categories and search terms your book can realistically rank in, so the listing is built to be found, not just published.\n\nMost authors treat KDP setup as a formality, upload the file, pick a category, hit publish. But your KDP listing is the storefront Amazon's algorithm and every reader interacts with, and small setup decisions compound. A book placed in an oversaturated category never cracks the bestseller list, while the same book in a smaller, well-matched category can rank quickly and gain visibility through Amazon's own recommendation engine. Backend keywords either work quietly to surface your book in relevant searches or sit unused because they were never filled in thoughtfully.\n\nThis setup pulls directly from the ISBN and metadata established during [ISBN & barcode registration](https://www.kandledirectpublishing.com/services/isbn-acquisition), and category targeting reflects the same comp-title research used in concept development, so your Amazon listing and your book's original positioning stay aligned rather than working against each other.\n\nA KDP listing isn't a one-time task, it's the foundation your book's visibility is built on for as long as it's live. Our objective is a listing that keeps working for you long after setup. That means:\n\n*   **Targeting realistic categories** where your book can actually rank, not just the biggest, most competitive ones\n*   **Writing metadata for search, not just description** so backend keywords and copy actively drive discoverability\n*   **Pricing strategically** balancing royalty return against what converts in your category\n*   **Keeping the listing consistent** with how the book was researched and positioned from the start",
      metaTitle: "KDP Setup & Optimization Services | Kandle Direct Publishing",
      metaDescription: "Full Kindle Direct Publishing account setup with metadata optimization, category targeting, and pricing strategy built to maximize visibility and royalty.  **KDP Setup & Optimization** ============================  Full Kindle Direct Publishing account setup, built to maximize visibility, rankings, and royalty.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["Full KDP account and book listing set up correctly from the start","Metadata optimization — title, subtitle, description, and keywords built for Amazon search","Strategic category selection targeting categories your book can actually rank in","Pricing strategy built around royalty structure and competitive positioning","Backend keyword fields filled to maximize discoverability without wasting search terms","A listing structured to convert browsers into buyers, not just to exist on the platform"],
      whyAuthorsChoose: [{"title":"Research-Backed Category Selection","description":"categories chosen from real comp-title data, not guesswork"},{"title":"Search-Optimized Metadata","description":"every field on the listing built to be found, not just filled in"},{"title":"Strategic Pricing","description":"pricing decisions grounded in royalty structure and category norms"},{"title":"Full-Service Publisher","description":"KDP setup connects directly into our ISBN registration and launch strategy services"}],
      howItWorks: [{"step":"Account & manuscript intake","text":"we confirm or set up your KDP account and gather your final manuscript, cover files, and metadata."},{"step":"Category & comp research","text":"we research which categories and subcategories give your book the best realistic path to rank."},{"step":"Metadata optimization","text":"title, subtitle, description, and backend keywords are written and structured for Amazon search."},{"step":"Pricing strategy","text":"we set pricing based on your royalty goals and what's competitive within your category."},{"step":"Listing publish & verification","text":"the listing is published and checked to confirm formatting, links, and metadata all display correctly."}],
      whoItsFor: ["Authors ready to publish who want their KDP listing set up correctly the first time","Authors who published previously and want their existing listing optimized for better visibility","Authors unsure which categories or keywords actually fit their book","Authors preparing a listing ahead of a coordinated book launch"],
      faqs: [{"question":"Do you need admin access to my KDP account?","answer":"We can either set up the listing with you providing login access, or walk you through entering everything yourself with our optimized content and category recommendations."},{"question":"How do you choose categories?","answer":"We research comparable titles and category rankings to find categories where your book has a realistic path to visibility, rather than defaulting to the largest, most competitive ones."},{"question":"How long does setup take?","answer":"Most KDP setup projects take 1-2 weeks, including research, metadata writing, and listing verification."},{"question":"Can you optimize a listing that's already live?","answer":"Yes, we regularly audit and re-optimize existing listings, metadata, categories, and pricing can all be updated post-publication."},{"question":"Does this include marketing or ads?","answer":"KDP setup covers the listing itself. Amazon Ads and promotional strategy are handled as part of our launch strategy service."}]
},
  {
    slug: 'ingramspark-distribution',
    title: 'Global Distribution via IngramSpark',
    category: 'Publishing & Distribution',
      shortDescription: "List your book in 40,000+ retail outlets, libraries, and bookstores worldwide.",
      fullDescription: "**Q: How does your IngramSpark Distribution service work?**\n\nWe set up your full IngramSpark catalog listing, uploading your print files, configuring wholesale discount and returnability terms that bookstores expect, and listing your book across Ingram's network of over 40,000 retailers, libraries, and academic institutions worldwide. Unlike a single-retailer listing, this makes your book genuinely orderable by any bookstore or library, anywhere, without you holding inventory.\n\nAmazon-only distribution caps a book's reach at one retailer, which shuts out bookstores, libraries, and international markets that order through wholesale distribution rather than direct from Amazon. IngramSpark is the standard infrastructure traditional and independent publishers both use to reach that wider market, wholesale discount and returnability terms are exactly what a bricks-and-mortar bookstore requires before they'll stock a title, and library systems source almost exclusively through distributors like Ingram rather than retail platforms.\n\nIngramSpark distribution works alongside, not instead of, [KDP setup](https://www.kandledirectpublishing.com/services/kdp-setup), most authors run both to cover Amazon's dominant online reach and Ingram's bookstore and library network simultaneously. It's important to note Ingram requires its own ISBN separate from any free ISBN assigned through KDP, which is where our [ISBN & barcode registration](https://www.kandledirectpublishing.com/services/isbn-acquisition) service comes in ahead of this step.\n\nDistribution reach compounds with every channel your book is available through. Our objective is a setup that opens every reasonable path to a reader or bookseller. That means:\n\n*   **Configuring wholesale terms bookstores actually expect** so real orders aren't blocked by unfavorable discount or return settings\n*   **Reaching library systems** that source almost exclusively through distributors rather than retail platforms\n*   **Running alongside KDP, not replacing it** so you cover both Amazon's online dominance and Ingram's wholesale network\n*   **Keeping print-on-demand risk-free** so global availability doesn't require you to hold or ship inventory yourself",
      metaTitle: "Global Book Distribution via IngramSpark | Kandle Direct Publishing",
      metaDescription: "Get your book into 40,000+ bookstores and libraries worldwide with full IngramSpark distribution setup, catalog listing, and wholesale terms.  **Global Distribution via IngramSpark** =======================================  List your book in 40,000+ retail outlets, libraries, and bookstores worldwide.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["Global catalog listing reaching bookstores, libraries, and retailers beyond Amazon","Library and academic institution access through Ingram's library distribution channels","Wholesale discount and returnability settings configured for bookstore ordering","Print-on-demand setup so physical copies ship worldwide without inventory risk","Correct trim, format, and pricing configuration matched to your print files","A distribution setup that makes your book orderable by any bookstore or library, not just discoverable on one platform"],
      whyAuthorsChoose: [{"title":"Full Wholesale Setup","description":"discount and returnability terms configured to actual bookstore standards"},{"title":"Library Channel Access","description":"listing reaches the distribution network libraries source from"},{"title":"Coordinated ISBN Handling","description":"correctly separated from any KDP-only ISBN to avoid distribution conflicts"},{"title":"Full-Service Publisher","description":"IngramSpark setup connects directly into our ISBN registration and KDP setup services"}],
      howItWorks: [{"step":"Account & file intake","text":"we confirm or set up your IngramSpark account and gather your print-ready interior and cover files."},{"step":"ISBN & format verification","text":"we confirm your ISBN is correctly assigned for Ingram distribution, separate from any KDP-only ISBN."},{"step":"Catalog listing setup","text":"your book's metadata, trim size, and format details are entered and configured for global catalog listing."},{"step":"Wholesale terms configuration","text":"discount percentage and returnability settings are set based on standard bookstore expectations."},{"step":"Publish & verification","text":"the listing is published and checked to confirm it displays correctly and is orderable through the network."}],
      whoItsFor: ["Authors who want their book available in physical bookstores, not just online","Authors targeting library sales and institutional orders","Authors publishing internationally who need distribution beyond a single retail platform","Authors already live on KDP who want to expand reach without holding inventory"],
      faqs: [{"question":"Do I need this in addition to KDP?","answer":"Most authors run both. KDP covers Amazon, IngramSpark covers the wider bookstore, library, and wholesale network Amazon doesn't reach directly."},{"question":"Do I need a separate ISBN for IngramSpark?","answer":"Yes, if you used a free KDP-assigned ISBN, you'll need an independently registered ISBN for IngramSpark distribution."},{"question":"How long does setup take?","answer":"Most IngramSpark setups take 2-3 weeks including file verification and catalog listing configuration."},{"question":"Will this get my book into physical bookstores automatically?","answer":"It makes your book orderable by any bookstore through the Ingram catalog. Actual stocking decisions are still made by individual stores, but distribution setup is the required first step."},{"question":"Does this include ebook distribution?","answer":"IngramSpark also supports ebook distribution to retailers beyond Amazon, we can configure this alongside your print catalog listing if needed."}]
},
  {
    slug: 'author-central',
    title: 'Amazon Author Central Setup',
    category: 'Publishing & Distribution',
      shortDescription: "Claim and build out your author profile to establish credibility and boost discoverability.",
      fullDescription: "**Q: How does your Amazon Author Central Setup service work?**\n\nWe claim or set up your Author Central account, write and upload an optimized author bio, link every book under your published name into one unified profile, and integrate editorial reviews and endorsements directly onto your book pages. The result is a professional author presence on Amazon that builds credibility and gives readers an easy way to find your other books.\n\nMost authors publish a book and never claim their Author Central profile, which means Amazon defaults to a bare listing with no bio, no photo, and no connection between their books. Readers who enjoy one title have no easy path to discovering the author's other work, and a listing without editorial reviews or a real author presence reads as less credible than one that has both. Author Central is free real estate most self-published authors leave completely unused.\n\nThis works best once your book is live through [KDP setup](https://www.kandledirectpublishing.com/services/kdp-setup), since Author Central pulls in your published titles automatically, and it pairs naturally with the review and momentum-building strategy used during a coordinated book launch, giving readers a destination to land on once they've decided they like your writing.\n\nAuthor Central is where a single book purchase turns into a reader who follows your career. Our objective is a profile that keeps working across every book you publish going forward. That means:\n\n*   **Unifying every title under one profile** so readers discover your full catalog, not just the book they found first\n*   **Building credibility through editorial reviews** displayed directly where readers are deciding to buy\n*   **Setting up infrastructure that scales with your catalog** so future books plug into an already-established author presence\n*   **Connecting profile strength to launch performance** since a credible author page reinforces every promotional push",
      metaTitle: "Amazon Author Central Setup | Kandle Direct Publishing",
      metaDescription: "Build your author brand on Amazon with a fully optimized Author Central profile, book linking, and editorial review integration.  **Amazon Author Central Setup** ===============================  Claim and build out your author profile to establish credibility and boost discoverability.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A claimed, verified Author Central profile linked correctly to your Amazon account","Every book you've published linked under one unified author profile","A professionally written author bio optimized for both readers and search","Editorial reviews and endorsements integrated directly into your book listings","Author photo, blog feed, and events sections filled out to build reader trust","A profile that turns a one-time buyer into a reader who follows your future releases"],
      whyAuthorsChoose: [{"title":"Full Profile Build-Out","description":"bio, photo, book linking, and reviews handled end-to-end"},{"title":"Search-Optimized Bio Writing","description":"author bio written to build trust and support discoverability"},{"title":"Editorial Review Integration","description":"endorsements placed where they actually influence buying decisions"},{"title":"Full-Service Publisher","description":"Author Central setup connects directly into our KDP setup and launch strategy services"}],
      howItWorks: [{"step":"Profile claim & verification","text":"we claim or verify your Author Central account and confirm it's correctly linked to your published titles."},{"step":"Bio & branding","text":"we write a professional author bio optimized for reader trust and Amazon search, and upload your author photo."},{"step":"Book linking","text":"every title under your published name is linked into one unified author profile."},{"step":"Editorial review integration","text":"endorsements, review quotes, and editorial praise are added directly to your book listings."},{"step":"Ongoing sections setup","text":"blog feed and events sections are configured where applicable to keep your profile active."}],
      whoItsFor: ["Authors who've published but never claimed or built out their Author Central profile","Authors with multiple books not currently linked under one unified profile","Authors preparing for a launch who want a credible author presence readers land on","Authors who've collected endorsements or editorial reviews that aren't yet displayed on their listings"],
      faqs: [{"question":"Do I need to already have a book published to use Author Central?","answer":"Yes, Author Central links to your published titles, so this is typically set up once your first book is live on Amazon."},{"question":"Can this cover pen names?","answer":"Yes, if you publish under a pen name, we can set up and optimize a profile specifically for that author name."},{"question":"How long does setup take?","answer":"Most Author Central setups take 1-2 weeks, including bio writing and book linking verification."},{"question":"Does this work outside the US Amazon marketplace?","answer":"Author Central profiles are region-specific. We can set up and optimize your profile across the relevant Amazon marketplaces for your target readers."},{"question":"What if I already have a profile but it's incomplete?","answer":"We regularly audit and rebuild existing profiles, adding missing books, updating the bio, and integrating editorial reviews that weren't there before."}]
},

  // Phase 5: Marketing & Launch
  {
    slug: 'review-sourcing',
    title: 'ARC Campaign & Review Sourcing',
    category: 'Marketing & Launch',
      shortDescription: "Secure verified, genuine reviews before launch day so your book has social proof out of the gate.",
      fullDescription: "**Q: How does your ARC Campaign & Review Sourcing service work?**\n\nWe recruit an advance reader team matched to your genre, distribute ARCs on a timeline that lands reviews right around your launch date, and manage follow-up outreach to make sure readers who agreed to review actually post one. Every review sourced through our process is genuine and reader-driven, we never pay or trade for reviews, since platforms like Amazon detect and remove those and it can put your account at risk.\n\nA book with zero reviews on launch day reads as untested to both readers and Amazon's algorithm. Reviews are one of the strongest trust signals a reader checks before buying, and a healthy count of genuine reviews right out of the gate helps a book clear the credibility threshold that turns browsers into buyers. Waiting for reviews to accumulate organically after launch means missing the exact window when a book gets the most algorithmic visibility.\n\nThis works best coordinated with your [KDP setup](https://www.kandledirectpublishing.com/services/kdp-setup) and [Author Central](https://www.kandledirectpublishing.com/services/author-central) profile, since reviews reinforce the listing readers land on and the author credibility they see once they click through to learn more about you.\n\nA single ARC campaign can seed reviews for every future book you publish. Our objective is social proof that compounds across your catalog. That means:\n\n*   **Timing reviews to launch week** so your book has credibility exactly when algorithmic visibility is highest\n*   **Building a reusable reviewer relationship** so future launches start with an existing, engaged reader base\n*   **Staying fully compliant** so review-driven credibility never puts your account or listing at risk\n*   **Coordinating with your author presence** so reviews and profile credibility reinforce each other",
      metaTitle: "ARC Campaign & Book Review Sourcing | Kandle Direct Publishing",
      metaDescription: "Targeted ARC campaigns that source genuine early reviews and build social proof before launch day.  **ARC Campaign & Review Sourcing** ==================================  Secure verified, genuine reviews before launch day so your book has social proof out of the gate.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A recruited ARC reader team matched to your genre and target audience","Advance reader copies distributed on a timeline built around your launch date","Verified reviews live on release day instead of a launch with zero social proof","Ongoing review team management and follow-up outreach through launch week","A compliant process that never risks your account through paid or traded reviews","A reusable reviewer list you can call on again for future releases"],
      whyAuthorsChoose: [{"title":"Genre-Matched Reviewer Network","description":"ARC readers recruited to fit your specific category, not a generic list"},{"title":"Fully Compliant Process","description":"genuine, reader-driven reviews only, protecting your account long-term"},{"title":"Managed Follow-Up","description":"active tracking so ARC commitments actually convert into posted reviews"},{"title":"Full-Service Publisher","description":"review sourcing connects directly into our KDP setup and Author Central services"}],
      howItWorks: [{"step":"ARC reader recruitment","text":"we recruit reviewers matched to your genre and target audience from our reviewer network and platform outreach."},{"step":"ARC distribution","text":"advance reader copies are distributed on a timeline built to land reviews around your launch date."},{"step":"Review team management","text":"we track commitments and follow up with readers to encourage them to post their review."},{"step":"Launch day coordination","text":"review posting is timed alongside your launch activities for maximum visibility on release day."},{"step":"List retention","text":"your reviewer list is retained and can be called on again for future launches."}],
      whoItsFor: ["Authors preparing for launch who want reviews live on day one","First-time authors with no existing reviewer network to draw from","Authors relaunching a backlist title who want a fresh wave of reviews","Authors who want a reusable ARC process for a series or ongoing publishing schedule"],
      faqs: [{"question":"Do you pay for reviews?","answer":"No. We only use compliant, reader-driven review strategies. Paid or traded reviews violate platform policies and can get your book or account suspended."},{"question":"How many reviews can I expect?","answer":"Results vary by genre and ARC team size, but most campaigns aim to land a meaningful cluster of verified reviews within the first week of launch."},{"question":"How far in advance should this start?","answer":"Ideally 6-8 weeks before your publication date, to allow enough time for recruitment, ARC distribution, and reader follow-through."},{"question":"Can you guarantee a specific review count?","answer":"We can't guarantee an exact number since we don't pay for or manufacture reviews, but we manage the process to maximize genuine reader follow-through."},{"question":"Do you keep the reviewer list for future books?","answer":"Yes, we retain your ARC reviewer relationships so future launches can draw on an existing, engaged reader base."}]
},
  {
    slug: 'book-launch-strategy',
    title: 'Book Launch Strategy',
    category: 'Marketing & Launch',
      shortDescription: "A complete launch plan, from pre-launch buzz to post-launch momentum, built to hit the bestseller lists.",
      fullDescription: "**Q: How does your Book Launch Strategy service work?**\n\nWe build a complete pre-launch, launch-week, and post-launch plan around your publication date, drafting the email sequences that build anticipation, coordinating your ARC and reviewer team, and timing promotion to Amazon's algorithm-favored launch window. Because this sits inside our full publishing process, the strategy is built directly on your book's KDP setup, categories, and author profile rather than as a standalone marketing add-on.\n\nA book launch is the only marketing window where Amazon's algorithm actively favors a new release, and that visibility fades fast once it passes. Most authors publish and hope, missing the window entirely because there's no coordinated plan connecting pre-launch buzz, review timing, and promotional push. A planned launch turns that narrow window into a compounding advantage instead, pre-launch anticipation drives day-one sales, early reviews clear the credibility threshold readers look for, and a sustain plan holds the position once the algorithm's initial favor fades.\n\nBecause launch strategy sits at the end of our full publishing pipeline, it draws directly on the [ARC and review sourcing](https://www.kandledirectpublishing.com/services/review-sourcing) campaign already run for your book and the [Author Central](https://www.kandledirectpublishing.com/services/author-central) profile readers land on, so launch week isn't starting cold, it's activating infrastructure that's already been built.\n\nLaunch day isn't the finish line, it's the foundation. Our objective is to maximize launch-week sales velocity while building an author platform and review base that keeps generating sales long after the initial push fades. That means:\n\n*   **Structuring your ARC campaign** to build a reviewer list you can use again for future launches\n*   **Positioning your book in categories** where it can hold rank long-term, not just spike briefly\n*   **Connecting launch activity to your author profile** so new readers have somewhere to land and discover your other books\n*   **Creating a repeatable launch framework** for your next book, so each release compounds on the last",
      metaTitle: "Book Launch Strategy Services | Kandle Direct Publishing",
      metaDescription: "A full launch plan covering pre-launch buzz, launch day execution, and post-launch momentum, built to help your book hit the bestseller lists.  **Book Launch Strategy** ========================  A complete launch plan, from pre-launch buzz to post-launch momentum, built to hit the bestseller lists.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A full pre-launch, launch-week, and post-launch timeline built around your publication date","Email sequence drafting to build anticipation with your existing reader list","Launch team coordination across ARC readers, reviewers, and promotional partners","Category and keyword positioning aligned with your KDP listing for maximum visibility","Launch-week execution support so nothing slips during the highest-visibility window","A post-launch plan that sustains momentum once the initial push fades"],
      whyAuthorsChoose: [{"title":"Full Pipeline Integration","description":"launch strategy is built on the KDP setup, reviews, and author profile already in place, not a standalone campaign"},{"title":"Full-Service Coordination","description":"timeline, ARC outreach, and promo scheduling managed so you're not juggling it all yourself"},{"title":"Data-Driven Positioning","description":"category and keyword decisions based on real comp-title research, not guesswork"},{"title":"Repeatable Framework","description":"a launch process built to work again for your next book, not a one-off push"}],
      howItWorks: [{"step":"Launch audit & benchmarking","text":"we review your book's current assets, KDP listing, reviewer pipeline, and reader list, and benchmark against what's working for comparable titles in your category."},{"step":"90 to 30 days out","text":"email sequence drafting, ARC follow-through, cover reveal timing, and category and keyword confirmation."},{"step":"30 to 7 days out","text":"pre-order push, review outreach follow-ups, and promo scheduling across your available channels."},{"step":"Launch week","text":"coordinated review posting, listing verification, and promotional push timed to your publication date."},{"step":"Post-launch (weeks 2-4)","text":"ranking and keyword performance review, with sustained visibility tactics to hold momentum."}],
      whoItsFor: ["First-time authors who want a real plan instead of publishing and hoping","Authors with an existing reader list who want to convert it into launch-week momentum","Authors who've already been through our editing, design, or KDP setup process and are ready for launch","Authors relaunching a backlist title with a fresh strategy"],
      faqs: [{"question":"How far in advance should we start?","answer":"Ideally 8-12 weeks before your publication date, to allow enough time for ARC recruitment and pre-launch buildout."},{"question":"Do I need to have used your other services first?","answer":"No, though launch strategy works best once your KDP listing, cover, and reviews are already in place. If you haven't done those yet, we can fold them into your launch timeline."},{"question":"Is ad spend included in your fee?","answer":"Ad management is included in our service. Ad spend itself is paid directly by you to the ad platform, and we coordinate timing and budget allocation around your launch window."},{"question":"What happens after launch week?","answer":"We include a post-launch review covering ranking performance, keyword data, and ad optimization, so momentum doesn't drop off once launch week ends."},{"question":"Can this work for a series?","answer":"Yes, we build launch strategies designed to be reused and refined across each book in a series."}]
},
  {
    slug: 'press-release',
    title: 'Press Release & Media Outreach',
    category: 'Marketing & Launch',
      shortDescription: "Get your book featured in the media with a professionally written release and targeted outreach.",
      fullDescription: "**Q: How does your Press Release & Media Outreach service work?**\n\nWe write a press release built around your book's actual news angle, whether that's the subject matter, your background, or the story behind the book, then build a targeted list of media outlets, bloggers, and podcasters who genuinely cover your genre or topic. Rather than a mass distribution blast, we pitch directly to that relevant list and report back on where the release was picked up or covered.\n\nA press release sent to a generic, untargeted media list gets ignored, journalists and bloggers are pitched constantly and only respond to angles that fit what they actually cover. The value isn't in the release existing, it's in reaching the specific outlets whose audience overlaps with your book's readers. Third-party media coverage also carries credibility that self-promotion doesn't, a feature or mention from an outlet a reader already trusts does more for author credibility than the same claim made directly.\n\nMedia outreach works best run alongside a coordinated [book launch strategy](https://www.kandledirectpublishing.com/services/book-launch-strategy), timed so any press pickup lands during the same window as your ARC reviews and promotional push, compounding the visibility rather than generating attention in isolation weeks apart.\n\nPress coverage is an asset that keeps working after the initial pickup fades. Our objective is coverage you can build on, not a one-time send. That means:\n\n*   **Targeting relevance over volume** so pitches land with outlets whose audience actually matches your readers\n*   **Building a real news angle** rather than announcing a publication date as the entire pitch\n*   **Timing outreach with your launch window** so press attention compounds with ARC reviews and promotion\n*   **Creating reusable coverage assets** you can reference in future pitches, your website, and author bio",
      metaTitle: "Book Press Release & Media Outreach | Kandle Direct Publishing",
      metaDescription: "Professionally written press releases distributed to relevant media outlets, bloggers, and podcasters to generate organic buzz around your book.  **Press Release & Media Outreach** ==================================  Get your book featured in the media with a professionally written release and targeted outreach.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A professionally written press release crafted around your book's real news angle","A targeted media list of outlets, bloggers, and podcasters relevant to your genre or topic","Direct distribution and pitching to that media list, not a mass blast to irrelevant contacts","Distribution reporting so you can see exactly where your release was picked up or covered","Author credibility built through third-party media coverage, not just self-promotion","Coverage assets you can reuse across your website, social media, and future pitches"],
      whyAuthorsChoose: [{"title":"Genuinely Targeted Lists","description":"outreach built around outlets that actually cover your genre, not a generic media database"},{"title":"Angle-Driven Writing","description":"releases built around a real story, not just a publication announcement"},{"title":"Transparent Reporting","description":"you see exactly where your release was pitched and picked up"},{"title":"Full-Service Publisher","description":"media outreach connects directly into our launch strategy and Author Central services"}],
      howItWorks: [{"step":"Angle development","text":"we identify your book's genuine news angle, subject matter relevance, author background, or story behind the book."},{"step":"Press release writing","text":"a professional release is drafted around that angle, following standard press release structure and style."},{"step":"Media list targeting","text":"we build a list of outlets, bloggers, and podcasters who actually cover your genre or subject area."},{"step":"Distribution & pitching","text":"the release is distributed and pitched directly to that targeted list rather than a generic mass blast."},{"step":"Reporting & follow-up","text":"you receive a distribution report showing pickups and coverage, with follow-up pitching where there's interest."}],
      whoItsFor: ["Authors launching a book with a genuine news angle, timely subject matter, or compelling author story","Nonfiction authors and subject-matter experts looking to build credibility through media coverage","Authors coordinating press outreach as part of a larger launch strategy","Authors who've tried generic press release distribution before with no real results"],
      faqs: [{"question":"Does every book have a strong press angle?","answer":"Most books have one, whether it's the subject matter, a personal story, or a timely connection to current events. Part of our process is identifying that angle before writing the release."},{"question":"How many outlets will you pitch?","answer":"The list size varies by genre and available relevant outlets, we prioritize a targeted, relevant list over a large but irrelevant one."},{"question":"When should this happen relative to launch?","answer":"Ideally timed to coincide with your launch window, so any press pickup compounds with your ARC reviews and promotional push rather than happening in isolation."},{"question":"Can you guarantee media coverage?","answer":"We can't guarantee pickup since that's ultimately an editorial decision by each outlet, but we build releases and target lists specifically to maximize your realistic chances."},{"question":"What do I receive at the end?","answer":"A professionally written press release, the media list it was pitched to, and a distribution report showing any pickups or coverage."}]
},

  // Phase 6: Growth & Ongoing Promotion
  {
    slug: 'advertising-management',
    title: 'Amazon Ads Management',
    category: 'Growth & Ongoing Promotion',
      shortDescription: "Managed pay-per-click campaigns that put your book in front of high-intent buyers in your genre.",
      fullDescription: "**Q: How does your Amazon Ads Management service work?**\n\nWe research keywords and comp titles to identify where your ideal readers are actually searching, then build and manage sponsored product, keyword, and category-targeted campaigns around that research. From there we actively manage bids, run A/B tests on ad copy and targeting, and report back on performance so spend keeps moving toward what's actually converting rather than sitting on autopilot.\n\nAmazon Ads can be one of the most efficient ways to reach readers actively searching for books like yours, but only when campaigns are actually managed. Autopilot or set-and-forget campaigns waste spend on broad, unqualified traffic and rarely improve over time, while managed campaigns test targeting, adjust bids based on real performance, and reallocate spend toward what's actually converting. The difference between a managed and unmanaged campaign is usually the difference between ads that pay for themselves and ads that quietly drain budget.\n\nAds work best once your [KDP listing](https://www.kandledirectpublishing.com/services/kdp-setup) is optimized and any [launch-window reviews](https://www.kandledirectpublishing.com/services/review-sourcing) are in place, since ad traffic converts far better on a listing that's already built to sell and backed by social proof, rather than one that's still thin on both.\n\nAd spend should get more efficient over time, not stay flat. Our objective is a campaign structure that improves as real data comes in. That means:\n\n*   **Reallocating spend toward what converts** so budget moves away from underperforming keywords and targets\n*   **Scaling winning campaigns deliberately** once performance data justifies increased spend\n*   **Testing continuously** rather than launching a campaign once and leaving it static\n*   **Coordinating with launch and listing work** so ad traffic lands on a page that's actually built to convert",
      metaTitle: "Amazon Ads Management for Authors | Kandle Direct Publishing",
      metaDescription: "Managed Amazon Ads campaigns targeting high-intent book buyers in your genre, built to maximize ROI and consistent sales growth.  **Amazon Ads Management** =========================  Managed pay-per-click campaigns that put your book in front of high-intent buyers in your genre.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["Keyword and product-targeting research built around real comp titles and buyer search behavior","Managed campaign setup across sponsored product, keyword, and category-targeted ads","Ongoing bid management to keep spend efficient as performance data comes in","A/B testing on ad copy, targeting, and creative to continuously improve return","Regular performance reporting so you can see exactly what your ad spend is producing","Campaigns structured to scale spend intelligently once real performance data is in hand"],
      whyAuthorsChoose: [{"title":"Actively Managed Campaigns","description":"bids and targeting adjusted continuously, not left on autopilot"},{"title":"Comp-Title Driven Targeting","description":"keyword and category research grounded in real market data"},{"title":"Transparent Reporting","description":"regular performance reports so you see exactly what spend is producing"},{"title":"Full-Service Publisher","description":"ad management connects directly into our KDP setup and launch strategy services"}],
      howItWorks: [{"step":"Account & goal setup","text":"we confirm or set up your Amazon Ads account and define target ACOS and sales goals."},{"step":"Keyword & comp research","text":"we identify keywords, comp titles, and categories your ideal readers are actually searching."},{"step":"Campaign build","text":"sponsored product, keyword, and category-targeted campaigns are structured and launched around that research."},{"step":"Ongoing bid management","text":"bids are actively adjusted based on real performance data rather than left on autopilot."},{"step":"Testing & reporting","text":"we run A/B tests on copy and targeting and deliver regular performance reports."}],
      whoItsFor: ["Authors with a live book ready to drive consistent, ongoing sales beyond the launch window","Authors who've run Amazon Ads before with disappointing or unclear results","Authors launching who want ad campaigns coordinated with their launch timeline","Authors managing a backlist who want consistent, ongoing visibility rather than a one-time push"],
      faqs: [{"question":"Is ad spend included in your management fee?","answer":"Management is included in our fee. Ad spend itself is paid directly by you to Amazon, and we coordinate budget allocation based on performance and your goals."},{"question":"How much should I budget for ad spend?","answer":"Budget varies significantly by genre and competitiveness. We'll recommend a starting budget based on your category and adjust as performance data comes in."},{"question":"How long before I see results?","answer":"Most campaigns need 2-4 weeks of data before we can meaningfully optimize targeting and bids. Ongoing management continues to improve performance from there."},{"question":"Can this run alongside a book launch?","answer":"Yes, ad campaigns are often timed to launch alongside your book launch strategy so paid visibility compounds with organic launch-week momentum."},{"question":"Do you manage ads for books already published a while ago?","answer":"Yes, ad management works for both new launches and backlist titles looking for consistent, ongoing sales."}]
},
  {
    slug: 'seo-content-strategy',
    title: 'SEO & Content Strategy',
    category: 'Growth & Ongoing Promotion',
      shortDescription: "Grow your organic discoverability with content built to reach the readers already searching for you.",
      fullDescription: "**Q: How does your SEO & Content Strategy service work?**\n\nWe start with keyword research to map out what your target readers are actually searching for, then build a content calendar and write blog posts around that map, applying on-page SEO, titles, meta descriptions, headers, and internal linking, to every piece. Over time this builds organic search visibility that keeps driving traffic to your author site and books long after each individual post is published.\n\nPaid advertising and launch pushes generate visibility while you're actively spending on them, but that visibility disappears the moment the campaign ends. Organic search traffic works differently, a well-optimized blog post can keep bringing readers to your site months or years after it's published, compounding rather than resetting to zero. Most author websites either have no content strategy at all or publish sporadically with no keyword thinking behind it, which means the site never builds the search authority that turns into consistent, free traffic.\n\nThis works as a longer-term complement to [Amazon Ads management](https://www.kandledirectpublishing.com/services/advertising-management) and [press outreach](https://www.kandledirectpublishing.com/services/press-release), those drive concentrated visibility around a launch window, while SEO content builds a growing, free traffic base that keeps working between books and long after a single campaign ends.\n\nSEO content is an asset that keeps paying off long after it's published. Our objective is a growing base of organic traffic that compounds with every post. That means:\n\n*   **Mapping content to real search demand** so every post has a genuine chance to rank and bring in readers\n*   **Building internal linking between posts and books** so organic traffic flows toward what actually drives sales\n*   **Publishing consistently rather than sporadically** since search authority builds cumulatively over time\n*   **Complementing paid and launch activity** with a traffic base that keeps working between campaigns",
      metaTitle: "Author SEO & Content Strategy | Kandle Direct Publishing",
      metaDescription: "Grow organic discoverability with keyword-mapped author blog content, on-page SEO, and a content strategy built around your reader audience.  **SEO & Content Strategy** ==========================  Grow your organic discoverability with content built to reach the readers already searching for you.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A keyword map built around what your target readers are actually searching for","Regular blog content written to rank and to genuinely serve reader interest","On-page SEO applied across your author site, titles, meta descriptions, headers, and internal linking","Growing organic search visibility that compounds over time, unlike paid traffic that stops when spend stops","Content that supports discoverability for your books, not just generic author-site traffic","A content calendar built around a coherent keyword strategy, not one-off, disconnected posts"],
      whyAuthorsChoose: [{"title":"Keyword-Driven Content Planning","description":"every post tied to real search demand, not written blind"},{"title":"Full On-Page Optimization","description":"titles, meta, headers, and linking handled on every piece, not left inconsistent"},{"title":"Content Built for Readers First","description":"genuinely useful posts that also happen to rank, not keyword-stuffed filler"},{"title":"Full-Service Publisher","description":"SEO content connects directly into our ads management and press outreach services"}],
      howItWorks: [{"step":"Keyword research & mapping","text":"we identify what your target readers actually search for and map those keywords to specific content topics."},{"step":"Content calendar planning","text":"a publishing schedule is built around that keyword map, prioritizing topics with the strongest reader and search intent."},{"step":"Blog content creation","text":"posts are written to genuinely serve reader interest while targeting the mapped keywords."},{"step":"On-page SEO implementation","text":"titles, meta descriptions, headers, and internal linking are optimized across every published piece."},{"step":"Performance review","text":"we track rankings and traffic over time and adjust the content plan based on what's actually working."}],
      whoItsFor: ["Authors who want consistent, free organic traffic to their author site and books","Authors with a blog that's never had a keyword strategy behind it","Nonfiction authors and subject-matter experts building topical authority in their niche","Authors thinking beyond a single launch toward long-term discoverability"],
      faqs: [{"question":"How long does SEO take to show results?","answer":"Organic SEO typically takes 3-6 months to show meaningful ranking movement, it's a compounding strategy rather than an immediate one, unlike paid ads."},{"question":"How often do you publish content?","answer":"Publishing frequency is built into your content calendar based on your goals and capacity, consistency matters more than volume."},{"question":"Do you write the blog posts or just strategize?","answer":"We handle both, keyword research and content planning, plus the actual blog post writing and on-page SEO implementation."},{"question":"Does this replace Amazon Ads or press outreach?","answer":"No, it complements them. Ads and press outreach drive concentrated visibility around specific moments, SEO content builds ongoing organic traffic between those campaigns."},{"question":"Do I need an existing author website?","answer":"Ideally yes, though if you don't have one yet, we can advise on the basic setup needed to support a content strategy."}]
},
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    category: 'Growth & Ongoing Promotion',
      shortDescription: "Consistent, engaging social content that grows your author following and connects you with readers.",
      fullDescription: "**Q: How does your Social Media Management service work?**\n\nWe build a content calendar around your genre, upcoming releases, and reader interests, then create and post custom graphics and content across the platforms where your readers actually are, Instagram, Facebook, X, or TikTok. Beyond just posting, we manage community engagement, responding to comments and messages, so your platform builds real relationships with readers rather than just broadcasting at them.\n\nSocial media is where most readers first discover an author as a person, not just a book cover on a retailer page. An inconsistent or purely promotional presence reads as impersonal and readers scroll past it, while a platform that shows up consistently and actually engages builds the kind of following that shows up for every future release, not just the one they happened to see advertised. The compounding value isn't follower count, it's the relationship that makes a reader pre-order the next book without needing to be sold on it again.\n\nSocial content works best coordinated with [SEO and content strategy](https://www.kandledirectpublishing.com/services/seo-content-strategy), since blog content gives social channels something substantial to share and link back to, rather than social posts existing in isolation with nowhere for interested readers to go deeper.\n\nA social platform should get more valuable with every post, not just accumulate followers. Our objective is a following that actually shows up for your books. That means:\n\n*   **Prioritizing engagement over raw follower count** since an engaged following converts far better than a passive one\n*   **Building consistency between releases** so the platform doesn't go quiet and lose momentum between books\n*   **Connecting social content to blog and launch activity** so channels reinforce each other instead of operating in isolation\n*   **Creating a reader relationship, not just a broadcast channel** so future releases sell to an audience that already trusts you",
      metaTitle: "Author Social Media Management | Kandle Direct Publishing",
      metaDescription: "Consistent, engaging social content across Instagram, Facebook, X, and TikTok, managed to grow your author following and brand visibility.  **Social Media Management** ===========================  Consistent, engaging social content that grows your author following and connects you with readers.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A content calendar built around your genre, releases, and reader interests","Custom graphics and post creation across Instagram, Facebook, X, and TikTok","Active community engagement, responding to comments and messages to build real reader relationships","Consistent posting cadence that keeps your platform active between releases","Content that supports launches and promotions without feeling like constant advertising","A growing, engaged following that shows up for future releases, not just passive follower counts"],
      whyAuthorsChoose: [{"title":"Genre-Matched Content Planning","description":"calendars built around what actually resonates with your specific readers"},{"title":"Real Community Engagement","description":"active response management, not just scheduled posting"},{"title":"Custom Graphics Included","description":"professional visual content created for every platform, not generic templates"},{"title":"Full-Service Publisher","description":"social media management connects directly into our SEO content and launch strategy services"}],
      howItWorks: [{"step":"Platform & audience review","text":"we confirm which platforms your readers actually use and review your existing presence, if any."},{"step":"Content calendar planning","text":"a posting schedule is built around your genre, release timeline, and reader interests."},{"step":"Content creation","text":"custom graphics and posts are created and scheduled according to the calendar."},{"step":"Community engagement","text":"comments and messages are actively monitored and responded to, building real reader connection."},{"step":"Performance review","text":"engagement and growth are tracked over time, with the content plan adjusted based on what's resonating."}],
      whoItsFor: ["Authors who want a consistent social presence without managing it themselves","Authors with an existing following they want to grow and engage more actively","Authors preparing for a launch who need social momentum building ahead of release","Authors juggling writing and business who don't have time for daily content creation"],
      faqs: [{"question":"Which platforms do you manage?","answer":"We manage Instagram, Facebook, X, and TikTok, and help you decide which platforms are actually worth your focus based on where your readers are."},{"question":"How often will you post?","answer":"Posting frequency is built into your content calendar based on your goals and platform, consistency matters more than sheer volume."},{"question":"Do you respond to comments and messages as me?","answer":"We manage community engagement on your behalf following guidelines you set, and can loop you in directly for anything that needs your personal voice."},{"question":"Can this scale up around a launch?","answer":"Yes, we increase content frequency and coordinate posting around your launch timeline to build momentum heading into release."},{"question":"Do I need to provide any content myself?","answer":"Not required, though author photos, behind-the-scenes moments, or personal updates you share help us create more authentic content."}]
},
  {
    slug: 'audiobook-production',
    title: 'Audiobook Production',
    category: 'Growth & Ongoing Promotion',
      shortDescription: "Professional narration and production, ready for Audible, Amazon, and iTunes.",
      fullDescription: "**Q: How does your Audiobook Production service work?**\n\nWe cast a narrator matched to your genre and tone, produce an audio sample for your approval before full recording begins, then handle the complete recording, editing, and mastering process to ACX technical specifications. Once production is complete, we manage distribution setup across Audible, Amazon, and iTunes so your audiobook is properly listed and orderable everywhere listeners look for it.\n\nAudiobooks are one of the fastest-growing segments in publishing, and readers who prefer listening rarely convert to buying the print or ebook edition instead, they simply don't buy at all if an audio version doesn't exist. ACX and platform technical requirements are also strict, incorrect noise floor, inconsistent volume levels, or improperly formatted files get rejected on submission, which is why professional mastering matters as much as the narration performance itself.\n\nAudiobook production works well as an extension of a book already live through [KDP setup](https://www.kandledirectpublishing.com/services/kdp-setup) or [IngramSpark distribution](https://www.kandledirectpublishing.com/services/ingramspark-distribution), since it opens up a third format and reader segment without requiring any changes to the underlying manuscript.\n\nAn audiobook opens an entirely new reader segment without touching your existing print or ebook editions. Our objective is a production that meets platform standards the first time and reaches listeners wherever they are. That means:\n\n*   **Matching narrator to genre precisely** so the performance fits reader expectations for your category\n*   **Meeting ACX specifications on submission** avoiding the delays and costs of a rejected upload\n*   **Distributing across every major platform** so the audiobook reaches listeners regardless of where they shop\n*   **Adding format without disrupting existing editions** so print and ebook sales continue unaffected",
      metaTitle: "Professional Audiobook Production | Kandle Direct Publishing",
      metaDescription: "Professional narration, editing, and mastering to produce an ACX-compliant audiobook ready for Audible, Amazon, and iTunes.  **Audiobook Production** ========================  Professional narration and production, ready for Audible, Amazon, and iTunes.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["Narrator casting matched to your genre, tone, and character voices","Professional studio recording with clean, consistent audio quality throughout","Full editing and mastering to ACX technical specifications","Distribution setup across Audible, Amazon, and iTunes / Apple Books","Audio sample review before full production, so you approve the narrator's fit before committing","A finished audiobook that meets platform standards on the first submission, not after rejected uploads"],
      whyAuthorsChoose: [{"title":"Genre-Matched Narrator Casting","description":"voice talent selected to fit your book's tone and audience expectations"},{"title":"ACX-Compliant Production","description":"professional mastering built to meet platform specs on the first submission"},{"title":"Full Platform Distribution","description":"Audible, Amazon, and iTunes handled as part of one production process"},{"title":"Full-Service Publisher","description":"audiobook production connects directly into our KDP setup and distribution services"}],
      howItWorks: [{"step":"Manuscript & style intake","text":"you submit your final manuscript and we discuss tone, pacing, and any character voice needs."},{"step":"Narrator casting","text":"we present narrator options matched to your genre and provide an audio sample for your approval."},{"step":"Recording","text":"the full manuscript is professionally recorded in studio conditions once the narrator is confirmed."},{"step":"Editing & mastering","text":"audio is edited for pacing and consistency, then mastered to meet ACX technical specifications."},{"step":"Distribution setup","text":"the finished audiobook is submitted and configured for listing on Audible, Amazon, and iTunes."}],
      whoItsFor: ["Authors with a published print or ebook who want to reach audiobook listeners","Authors who want a professional narrator rather than self-narrating","Fiction authors with multiple characters who need distinct, well-cast voice performance","Nonfiction authors who want their book accessible to a listening audience"],
      faqs: [{"question":"Do I get to approve the narrator before full production?","answer":"Yes, we provide an audio sample from your selected narrator before recording the full manuscript, so you can confirm the fit."},{"question":"How long does production take?","answer":"Most audiobook productions take 6-10 weeks depending on manuscript length and narrator availability."},{"question":"What is ACX and why does it matter?","answer":"ACX is Audible's production platform with strict technical requirements for noise floor and audio levels. Files that don't meet spec get rejected, so proper mastering is essential for a smooth submission."},{"question":"Can I narrate my own book?","answer":"Yes, if you prefer to self-narrate, we can handle recording direction, editing, and mastering around your performance instead of casting a narrator."},{"question":"Which platforms will my audiobook be available on?","answer":"We manage distribution setup for Audible, Amazon, and iTunes / Apple Books as part of the production process."}]
},
  {
    slug: 'author-website',
    title: 'Author Website Design',
    category: 'Growth & Ongoing Promotion',
      shortDescription: "Your professional digital home, built to capture readers and turn them into subscribers and buyers.",
      fullDescription: "**Q: How does your Author Website Design service work?**\n\nWe design a custom, mobile-responsive website around your author brand, showcasing your full book portfolio, bio, and any media coverage, with newsletter signup and direct sales integration built in from the start. The result is a digital home for your author brand that you own outright, unlike a social profile or retailer page you don't control.\n\nEvery platform an author relies on, Amazon, Instagram, TikTok, is ultimately rented space, algorithms change, accounts get suspended, and platforms shift priorities without warning. An author website is the one piece of online presence you fully own, and it's also the only place capable of capturing an email list, the single most durable, algorithm-proof way to reach readers directly for every future launch. Authors without a website or email list start every new book from zero visibility; authors with both start from an existing, addressable audience.\n\nA website is also the foundation [SEO and content strategy](https://www.kandledirectpublishing.com/services/seo-content-strategy) builds on, blog content needs a home to rank and accumulate search authority, and the email list captured through your site becomes the pre-launch audience that drives day-one sales in every future [book launch](https://www.kandledirectpublishing.com/services/book-launch-strategy).\n\nA website is infrastructure you build once and use for every book after it. Our objective is a site that keeps paying off with each new release. That means:\n\n*   **Prioritizing email capture** so every visitor has a low-friction way to become part of your owned audience\n*   **Building a portfolio that scales** so adding a new book to the site takes minutes, not a redesign\n*   **Structuring for SEO from day one** so blog content has a foundation to build search authority on\n*   **Designing around future launches** so the site is ready to support pre-order pushes and announcements without rebuilding",
      metaTitle: "Author Website Design Services | Kandle Direct Publishing",
      metaDescription: "Custom, mobile-responsive author websites built to capture email subscribers, sell books direct, and showcase your full portfolio.  **Author Website Design** =========================  Your professional digital home, built to capture readers and turn them into subscribers and buyers.  [**\\[Get a Free Quote\\]**](https://www.kandledirectpublishing.com/contact) [**\\[Call +44 7922 656521\\]**](tel:+447922656521)",
      features: ["A custom, mobile-responsive website designed around your author brand","Newsletter signup integration to build your own reader list, an asset no platform can take away","Direct sales setup so readers can buy directly from you where that makes sense","A full portfolio showcase presenting every book you've published in one place","SEO-ready structure that gives your blog content and search visibility somewhere to live","A site built to support a launch, not just exist as a static bio page"],
      whyAuthorsChoose: [{"title":"Custom, Not Templated","description":"a design built around your specific author brand and books"},{"title":"Email Capture Built In","description":"newsletter integration prioritized from the initial design, not bolted on later"},{"title":"SEO-Ready Structure","description":"a foundation built to support ongoing content and search visibility"},{"title":"Full-Service Publisher","description":"your website connects directly into our SEO content and launch strategy services"}],
      howItWorks: [{"step":"Brand & content discovery","text":"we review your books, bio, and any existing brand assets to define the site's design direction."},{"step":"Custom design","text":"a mobile-responsive design is built around your author brand, not a generic template."},{"step":"Core page build","text":"book portfolio, bio, contact, and any additional pages are built out and populated."},{"step":"Newsletter & sales integration","text":"email signup and direct sales functionality are configured and connected."},{"step":"Launch & handoff","text":"the site is tested across devices, launched, and handed off with guidance on managing it going forward."}],
      whoItsFor: ["Authors without any current website who want a professional home base","Authors with an outdated site that doesn't reflect their current books or brand","Authors who want to build an email list they own instead of relying entirely on social platforms","Authors preparing for a launch who need a site ready to support pre-order and announcement pushes"],
      faqs: [{"question":"Do I need a website if I already have social media?","answer":"Yes, social platforms are rented space you don't control. A website is the one piece of your author brand you fully own, and it's the only place that can capture an email list."},{"question":"How long does a website take to build?","answer":"Most author website projects take 3-5 weeks from design discovery through launch."},{"question":"Can I sell books directly from my site?","answer":"Yes, we can integrate direct sales functionality where that makes sense alongside your retailer listings."},{"question":"Do you handle hosting and maintenance after launch?","answer":"We can advise on hosting setup and handle initial launch, and are available for ongoing updates and maintenance if you'd like continued support."},{"question":"Will my site be mobile-friendly?","answer":"Yes, every site is designed mobile-responsive from the start, since most readers will discover it on a phone."}]
}
];
