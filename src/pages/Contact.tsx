import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your outdoor space? Get in touch with us for a free consultation and quote. 
              We're here to help bring your landscaping vision to life.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-[var(--shadow-soft)]">
              <h2 className="text-2xl font-semibold text-primary mb-6">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input id="name" placeholder="Your full name" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="project-type" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="landscape-design">Landscape Design & Installation</SelectItem>
                      <SelectItem value="hardscaping">Hardscaping</SelectItem>
                      <SelectItem value="maintenance">Maintenance Services</SelectItem>
                      <SelectItem value="materials">Material Delivery</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, including size, timeline, and any specific requirements..."
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-moss-green text-primary-foreground hover:shadow-[var(--shadow-earth)]"
                >
                  Send Message
                </Button>
              </form>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-xl font-semibold text-primary mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-moss-green" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:973-948-7167" className="text-muted-foreground hover:text-primary transition-colors">
                        (973) 948-7167
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-moss-green" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:jblandscape1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        jblandscape1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-moss-green" />
                    <div>
                      <p className="font-medium text-foreground">Service Area</p>
                      <p className="text-muted-foreground">Newton, NJ & Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 shadow-[var(--shadow-soft)]">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-moss-green" />
                  <h3 className="text-xl font-semibold text-primary">Business Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </Card>
              
              {/* Map Placeholder */}
              <Card className="p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-xl font-semibold text-primary mb-4">Find Us</h3>
                <div className="aspect-video bg-warm-beige rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-moss-green mx-auto mb-2" />
                    <p className="text-muted-foreground">Newton, NJ</p>
                    <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;