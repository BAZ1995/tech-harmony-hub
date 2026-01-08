import { Camera, Tv, Network, Speaker, Monitor, Globe, ShoppingBag, Drill } from "lucide-react";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceTv from "@/assets/service-tv.jpg";
import serviceSound from "@/assets/service-sound.jpg";
import serviceComputer from "@/assets/service-computer.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import heroCctv from "@/assets/hero-cctv.jpg";

const services = [
  {
    icon: Camera,
    title: "CCTV Installation & Maintenance",
    description: "Professional security camera systems installation, configuration, and ongoing maintenance for homes and businesses.",
    image: heroCctv,
  },
  {
    icon: Tv,
    title: "TV Mounting & Setup",
    description: "Expert TV wall mounting with concealed cable management and professional drilling for a clean, modern look.",
    image: serviceTv,
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "Complete networking solutions including cable installation, router setup, switch management, and configuration.",
    image: serviceNetwork,
  },
  {
    icon: Speaker,
    title: "Sound System Installation",
    description: "Professional audio and sound system mounting, setup, and configuration for homes, offices, and commercial spaces.",
    image: serviceSound,
  },
  {
    icon: Monitor,
    title: "Computer & Systems Maintenance",
    description: "Comprehensive computer repair, maintenance, and IT support services to keep your systems running smoothly.",
    image: serviceComputer,
  },
  {
    icon: Globe,
    title: "Website Creation & Hosting",
    description: "Custom website design, development, and reliable hosting solutions tailored to your business needs.",
    image: serviceWeb,
  },
  {
    icon: ShoppingBag,
    title: "Equipment Sourcing",
    description: "We source networking equipment, sound systems, computers, laptops, and cameras from reputable suppliers.",
    image: serviceNetwork,
  },
  {
    icon: Drill,
    title: "Drilling & Installation",
    description: "Professional drilling expertise for all mounting and installation needs with precision and care.",
    image: serviceTv,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From installation to maintenance, we provide end-to-end technology services to power your business and home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
