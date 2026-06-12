import Link from 'next/link';

export function KandleHero() {
  return (
    <section className="relative w-full bg-surface py-20 lg:py-32 overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 max-w-4xl tracking-tight">
          Your Book Publishing Journey Starts with <span className="text-accent">Kandle Direct</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-secondary mb-10 max-w-2xl">
          Keep 100% of your rights and royalties. Affordable book publishing packages, professional formatting, and beautiful cover design tailored for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
          <div className="flex flex-col items-center">
            <Link href="#publishing-guide" className="w-full text-center bg-white text-primary border-2 border-primary font-sans font-bold text-lg py-4 px-8 rounded-md shadow hover:bg-gray-50 transition-all duration-300">
              I'm Still Writing
            </Link>
            <span className="text-sm text-secondary mt-2">Get our free publishing guide</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/contact" className="w-full text-center bg-accent text-white font-sans font-bold text-lg py-4 px-8 rounded-md shadow-lg hover:bg-accent-hover transition-all duration-300 transform hover:-translate-y-1">
              I'm Ready to Publish
            </Link>
            <span className="text-sm text-secondary mt-2">Speak with a publishing expert</span>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
    </section>
  );
}
