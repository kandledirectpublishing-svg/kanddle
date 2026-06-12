import { BookOpen, PenTool, Layout, DollarSign } from 'lucide-react';

const services = [
  {
    title: 'Professional Editing',
    description: 'Our team ensures your manuscript is polished, error-free, and ready for readers without changing your unique voice.',
    icon: <PenTool className="w-10 h-10 text-accent" />
  },
  {
    title: 'Custom Cover Design',
    description: 'Stand out on the shelves with striking, professionally designed covers that capture the essence of your book.',
    icon: <Layout className="w-10 h-10 text-terracotta" />
  },
  {
    title: 'Global Distribution',
    description: 'We publish your book across major platforms like Amazon KDP, Apple Books, and Barnes & Noble.',
    icon: <BookOpen className="w-10 h-10 text-accent" />
  },
  {
    title: 'Keep 100% Royalties',
    description: 'We charge no hidden fees. You retain full ownership and keep every cent of your book sales.',
    icon: <DollarSign className="w-10 h-10 text-terracotta" />
  }
];

export function PremiumServices() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Premium Publishing Services</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
          <p className="font-sans text-secondary text-lg max-w-2xl mx-auto">
            Everything you need to transform your manuscript into a professionally published book, all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-surface p-8 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
              <div className="mb-6 p-4 bg-white inline-block rounded-full shadow-sm">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="font-sans text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
