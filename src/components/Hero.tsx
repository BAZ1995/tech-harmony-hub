import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Clock } from "lucide-react";
import heroCctv from "@/assets/hero-cctv.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCctv}
          alt="CCTV Security Camera"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Glow Effects */}
      <div className="hero-glow top-1/4 -left-40 opacity-30" />
      <div className="hero-glow bottom-1/4 right-0 opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted Tech Solutions Provider</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Complete{" "}
            <span className="gradient-text">Tech Solutions</span>{" "}
            for Your Business
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From CCTV installation to network infrastructure, TV mounting to website hosting — 
            we deliver professional tech services with expert precision and reliable support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
