"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/data/blog";
import { BookOpen, FileText, Palette, Megaphone, Clock, Calendar, ArrowRight } from "lucide-react";

const categories = ["All", "Publishing", "Self-Publishing", "Formatting", "Design", "Marketing"];

export function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const postsSorted = [...blogData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredPosts = activeCategory === "All"
    ? postsSorted
    : postsSorted.filter(post => post.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Publishing":
      case "Self-Publishing":
        return <BookOpen className="w-6 h-6 text-accent" />;
      case "Formatting":
        return <FileText className="w-6 h-6 text-accent" />;
      case "Design":
        return <Palette className="w-6 h-6 text-accent" />;
      case "Marketing":
        return <Megaphone className="w-6 h-6 text-accent" />;
      default:
        return <BookOpen className="w-6 h-6 text-accent" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Self-Publishing":
        return "from-orange-500/10 via-amber-500/5 to-transparent";
      case "Formatting":
        return "from-blue-500/10 via-indigo-500/5 to-transparent";
      case "Design":
        return "from-rose-500/10 via-purple-500/5 to-transparent";
      case "Marketing":
        return "from-emerald-500/10 via-teal-500/5 to-transparent";
      default:
        return "from-orange-500/10 via-amber-500/5 to-transparent";
    }
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Blog Hero Header */}
      <section className="bg-surface border-b border-border py-16 text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-accent font-sans font-bold text-sm uppercase tracking-widest block mb-3">
            Author Resource Center
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            The Kandle Direct Blog
          </h1>
          <p className="font-sans text-lg text-secondary max-w-2xl mx-auto">
            Expert insights, tutorials, and strategy guides covering eBook formatting, self-publishing on Amazon, cover design secrets, and digital marketing.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mt-12">
        <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-sans font-bold text-sm px-5 py-2.5 rounded-full border transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-white border-border text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 md:px-6 max-w-6xl mt-10">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 text-secondary">
            No posts found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                
                {/* Featured Cover Image / Visual Accent for Post */}
                <div className="relative h-48 w-full overflow-hidden border-b border-border bg-muted">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${getCategoryGradient(post.category)} p-6 flex flex-col justify-between`}>
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        {getCategoryIcon(post.category)}
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-md text-primary font-sans font-bold text-xs px-3 py-1 rounded-full shadow-sm border border-border/50">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Meta details */}
                  <div className="flex items-center gap-4 text-xs text-secondary mb-3 font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="font-sans text-sm text-secondary mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read Link */}
                  <div className="pt-4 border-t border-border/50">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent font-sans font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read Article
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>

              </article>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}
