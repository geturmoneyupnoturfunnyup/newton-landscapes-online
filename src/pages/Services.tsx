import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Hammer, Wrench, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: "Landscape Design & Installation",
      description: "Complete landscape design and installation services including planting, sod installation, irrigation systems, and outdoor lighting to create beautiful, functional outdoor spaces.",
      features: ["Custom landscape design", "Plant selection & installation", "Sod & seeding", "Irrigation systems", "Outdoor lighting"]
    },
    {
      icon: Hammer,
      title: "Hardscaping",
      description: "Professional hardscaping services to enhance your outdoor living spaces with durable, attractive stone and concrete features that add value to your property.",
      features: ["Patios & walkways", "Retaining walls", "Fire pits & outdoor kitchens", "Decorative stonework", "Driveway installation"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance services to keep your landscape looking its best year-round, from regular lawn care to seasonal cleanup and everything in between.",
      features: ["Lawn mowing & care", "Mulching services", "Spring & fall cleanup", "Pruning & trimming", "Weed control"]
    },
    {
      icon: Lightbulb,
      title: "Outdoor Features",
      description: "Specialized outdoor features that transform your yard into an extraordinary space, combining functionality with aesthetic appeal for maximum enjoyment.",
      features: ["Water features & fountains", "Decorative lighting", "Garden borders", "Landscape boulders", "Outdoor structures"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From landscape design to hardscaping and maintenance, we provide comprehensive outdoor solutions 
              tailored to your needs and budget.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-earth)] transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary to-moss-green rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-warm-beige to-secondary shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to Transform Your Outdoor Space?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. We'll work with you to create the perfect outdoor environment for your home or business.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-moss-green text-primary-foreground hover:shadow-[var(--shadow-earth)]">
                Request Free Quote
              </Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;