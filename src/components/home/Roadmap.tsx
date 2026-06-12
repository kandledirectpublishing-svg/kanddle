export function Roadmap() {
  const steps = [
    { number: '01', title: 'Consultation', desc: 'Discuss your goals with our publishing experts.' },
    { number: '02', title: 'Editing & Design', desc: 'We polish your text and create a stunning cover.' },
    { number: '03', title: 'Formatting', desc: 'Your book is formatted for print and digital.' },
    { number: '04', title: 'Publishing', desc: 'We launch your book to global retailers.' }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-4">Our Publishing Process</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-12 left-10 right-10 h-1 bg-border -z-10"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 text-center bg-white md:bg-transparent p-6 md:p-0 rounded-lg shadow-sm md:shadow-none border md:border-none border-border">
              <div className="w-24 h-24 rounded-full bg-accent text-white flex items-center justify-center text-3xl font-bold font-serif mx-auto mb-6 border-4 border-white shadow-md">
                {step.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="font-sans text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
