import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Hammer, Wrench, Truck, Star, Quote } from "lucide-react";
import heroImage from "@/assets/hero-landscaping.jpg";

const Index = () => {
  const services = [
    {
      icon: Leaf,
      title: "Landscape Design",
      description: "Custom landscape design and installation with plants, sod, and irrigation"
    },
    {
      icon: Hammer,
      title: "Hardscaping",
      description: "Patios, walkways, retaining walls, and fire pits built to last"
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Lawn care, mulching, and seasonal cleanup services"
    },
    {
      icon: Truck,
      title: "Material Delivery",
      description: "Quality landscaping materials delivered to your location"
    }
  ];

  const testimonials = [
    {
      text: "I had the pleasure of working with John and his team, and I couldn't be more impressed with their professionalism, work ethic, and attention to detail. From start to finish, they communicated clearly, stayed on schedule, and delivered high-quality work that exceeded my expectations.",
      author: "Jason Evans"
    },
    {
      text: "John and his crew installed a blue stone patio for us and it came out perfect. J&B is hard working, honest, and a pleasure to work with.",
      author: "John Mastriani"
    },
    {
      text: "Wow they brought my garden and yard back! I can't say enough about John and his team!",
      author: "Sarah Gibson"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Professional Landscaping & Hardscaping in Newton, NJ
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Serving homes and businesses with expert outdoor solutions
          </p>
          <Button 
            size="lg" 
            asChild
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto"
          >
            <a href="/contact">Request a Free Quote</a>
          </Button>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From design to installation and maintenance, we provide comprehensive outdoor solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-earth)] transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-moss-green rounded-lg mb-4">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Transform Your Outdoor Space
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  J&B Landscaping is Newton, NJ's trusted partner for landscaping and hardscaping services. 
                  We combine years of experience with a commitment to quality to create outdoor spaces that 
                  enhance your property's beauty and value.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Whether you need a complete landscape transformation, a beautiful patio installation, 
                  or reliable maintenance services, our team delivers results that exceed expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    asChild
                    className="bg-gradient-to-r from-primary to-moss-green text-primary-foreground hover:shadow-[var(--shadow-earth)]"
                  >
                    <a href="/about">Learn More About Us</a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a href="/gallery">View Our Work</a>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </Card>
                <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </Card>
                <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-warm-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-earth)] transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-moss-green text-moss-green" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-primary">
                  – {testimonial.author}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-r from-primary to-moss-green text-primary-foreground shadow-[var(--shadow-earth)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today for a free consultation and quote. Let's bring your outdoor vision to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="/contact">Get Free Quote</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="tel:973-948-7167">Call (973) 948-7167</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
