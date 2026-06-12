import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogData } from '@/data/blog';
import Link from 'next/link';
import { Calendar, Clock, BookOpen, ChevronLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};
  return {
    title: `${post.metaTitle} | Kandle Direct Blog`,
    description: post.metaDescription,
    openGraph: {
      title: `${post.title} | Kandle Direct Blog`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://www.kandledirectpublishing.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        
        {/* Back Button & Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-sm font-sans font-bold text-accent hover:text-accent-hover transition-colors"
          >
            <ChevronLeft size={16} />
            Back to Blog
          </Link>
          
          <div className="text-xs font-sans text-secondary hidden sm:block">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-accent">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium line-clamp-1 max-w-[200px] inline-block align-bottom">
              {post.title}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8 space-y-8">
            <div>
              {/* Category Badge */}
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-4">
                {post.category}
              </span>
              
              {/* Article Title */}
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
                {post.title}
              </h1>

              {/* Author & Meta details */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-secondary font-sans border-y border-border py-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                    {post.author[0]}
                  </div>
                  <span className="font-bold text-primary">{post.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar size={16} className="text-gray-400" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={16} className="text-gray-400" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Render HTML Content */}
            <div 
              className="font-sans text-base md:text-lg text-secondary leading-relaxed space-y-6 prose prose-orange max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Keywords/Tags */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2">
              <span className="font-sans text-xs font-bold text-primary uppercase tracking-wider mr-2">Focus Keywords:</span>
              {post.keywords.map((kw, idx) => (
                <span 
                  key={idx} 
                  className="bg-surface border border-border text-secondary font-sans text-xs px-3 py-1.5 rounded-lg"
                >
                  {kw}
                </span>
              ))}
            </div>
            
          </article>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 bg-primary text-white p-8 rounded-2xl shadow-xl border border-primary-hover/10 space-y-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                <BookOpen size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold">Ready to Publish Your eBook?</h3>
              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                Don't let formatting errors or a generic cover hold your book back. Partner with Kandle Direct Publishing for professional editing, layout formatting, and beautiful custom covers.
              </p>
              
              <div className="space-y-3 pt-2">
                <Link 
                  href="/contact" 
                  className="block w-full text-center bg-accent text-white font-sans font-bold py-3.5 rounded-lg hover:bg-accent-hover transition-colors text-sm shadow-lg shadow-accent/20"
                >
                  Get a Free Publishing Guide
                </Link>
                <a 
                  href="tel:+447922656521" 
                  className="block w-full text-center border border-white/20 hover:border-white text-white font-sans font-bold py-3.5 rounded-lg transition-colors text-sm"
                >
                  Call +44 7922 656521
                </a>
              </div>
            </div>
          </aside>
          
        </div>

      </div>
    </div>
  );
}
