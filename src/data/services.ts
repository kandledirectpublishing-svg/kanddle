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
      shortDescription: "### Meta Title",
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
      shortDescription: "### Meta Title",
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
      shortDescription: "### Meta Title",
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
      shortDescription: "### Meta Title",
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
      shortDescription: "### Meta Title",
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
      shortDescription: "### Meta Title",
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
      shortDescription: "### Meta Title",
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
