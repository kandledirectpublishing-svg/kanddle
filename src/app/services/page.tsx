import type { Metadata } from 'next';
import Link from 'next/link';
import { servicesData } from '@/data/services';

export const metadata: Metadata = {
  title: 'Publishing Services | Professional Book Services from Concept to Global Launch',
  description:
    'Explore 22+ professional publishing services — ghostwriting, editing, cover design, interior formatting, KDP setup, Amazon Ads, and more. Affordable, expert-led publishing support from Kandle Direct.',
  openGraph: {
    title: 'Our Publishing Services | Kandle Direct Publishing',
    description:
      'From manuscript to bestseller. Explore our full suite of professional publishing services for authors.',
  },
  alternates: {
    canonical: 'https://www.kandledirectpublishing.com/services',
  },
};


export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary mb-6">
            Our Publishing Services
          </h1>
          <p className="text-xl text-secondary font-medium leading-relaxed">
            From the first word to the global bookshelf. Explore our complete suite of a-la-carte and package services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              className="bg-surface border border-border p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">
                {service.category}
              </div>
              <h2 className="text-2xl font-black text-primary group-hover:text-accent transition-colors mb-4">
                {service.title}
              </h2>
              <p className="text-secondary font-medium mb-6 flex-1">
                {service.shortDescription}
              </p>
              
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                <span className="text-sm font-bold text-primary group-hover:text-accent transition-colors">Learn More</span>
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent group-hover:text-white transition-colors">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
