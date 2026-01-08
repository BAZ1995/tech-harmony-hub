import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@techpro.com",
    href: "mailto:info@techpro.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Tech Street, City, State 12345",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
    href: "#",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="bg-secondary/50 border-border/50"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <Input
                  id="service"
                  placeholder="e.g., CCTV Installation, Network Setup"
                  className="bg-secondary/50 border-border/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-secondary/50 border-border/50"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-8">
              Have questions or need a quote? Reach out to us through any of the channels below, 
              and our team will get back to you promptly.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
