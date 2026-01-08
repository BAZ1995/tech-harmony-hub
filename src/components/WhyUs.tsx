import { Award, Headphones, Wrench, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "Our technicians are certified and trained in the latest technologies and installation techniques.",
  },
  {
    icon: Wrench,
    title: "Quality Workmanship",
    description: "We take pride in delivering professional installations with attention to detail and clean finishes.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support ensures your systems are always running at peak performance.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with comprehensive warranties and a commitment to your satisfaction.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow bottom-0 right-0 opacity-15" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The TechPro Difference
          </h2>
          <p className="text-lg text-muted-foreground">
            We go above and beyond to deliver exceptional service and lasting results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glow-effect">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 glass-card rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let us help you find the perfect tech solutions for your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-500 text-primary-foreground font-bold py-4 px-8 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
