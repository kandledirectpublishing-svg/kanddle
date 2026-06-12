import Image from 'next/image';

export function AuthorTestimonials() {
  const testimonials = [
    { quote: "Kandle Direct made my dream of becoming a published author a reality. The process was seamless and the team was incredibly supportive.", author: "Jane Doe" },
    { quote: "I was blown away by the quality of the cover design and editing. They truly care about the authors they work with.", author: "John Smith" },
    { quote: "Keeping 100% of my royalties is a game-changer. Kandle is the best self-publishing partner I could have asked for.", author: "Emily Chen" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Author Success Stories</h2>
          <div className="h-1 w-24 bg-terracotta mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-lg border border-border shadow-sm flex flex-col h-full">
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-secondary italic mb-6 flex-grow">"{test.quote}"</p>
              <div className="font-sans font-bold text-primary">- {test.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
