import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesData } from '@/data/services';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Professional Publishing Services`,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Kandle Direct Publishing`,
      description: service.shortDescription,
    },
    alternates: {
      canonical: `https://www.kandledirectpublishing.com/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8 text-sm font-sans text-secondary">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-accent">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-primary font-medium">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-primary mb-6">
              {service.title}
            </h1>
            
            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-widest mb-8">
              {service.category}
            </div>

            <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed mb-10">
              {service.shortDescription}
            </p>

            <div className="bg-surface border border-border p-8 rounded-lg mb-10">
              <h2 className="text-2xl font-black text-primary mb-4">Overview</h2>
              <p className="text-lg text-secondary leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            <h2 className="text-2xl font-black text-primary mb-6">What's Included</h2>
            <ul className="space-y-4 mb-10">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mt-1 bg-accent/20 text-accent rounded-full p-1 mr-4 shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-lg text-secondary font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-primary text-white p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-black mb-4">Ready to get started?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Speak with a publishing consultant today about your {service.title.toLowerCase()} needs.
              </p>
              
              <Link href="/contact" className="block w-full text-center bg-accent text-white font-bold py-4 rounded hover:bg-accent/90 transition-colors mb-4 text-lg">
                Get a Free Quote
              </Link>
              
              <a href="tel:+447922656521" className="block w-full text-center border border-gray-600 hover:border-white text-white font-bold py-4 rounded transition-colors">
                Call +44 7922 656521
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
