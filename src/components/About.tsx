import { CheckCircle } from "lucide-react";
import serviceNetwork from "@/assets/service-network.jpg";

const features = [
  "Certified & experienced technicians",
  "Quality equipment from trusted suppliers",
  "Competitive pricing with transparent quotes",
  "Fast turnaround and reliable service",
  "Comprehensive after-sales support",
  "Flexible scheduling to fit your needs",
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={serviceNetwork}
                alt="Our team at work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 glass-card p-6 rounded-xl max-w-[200px]">
              <p className="font-display text-4xl font-bold text-primary mb-1">10+</p>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Technology Partner
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We are a full-service technology company dedicated to providing top-quality 
              installation, maintenance, and support services. From security systems to 
              networking infrastructure, we handle all your tech needs with expertise and care.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of certified professionals brings years of experience to every project, 
              ensuring reliable solutions that work for your home or business. We source only 
              the best equipment from reputable manufacturers and provide ongoing support to 
              keep your systems running smoothly.
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
