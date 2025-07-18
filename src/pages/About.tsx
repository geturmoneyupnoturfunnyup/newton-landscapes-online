import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            About J&B Landscaping
          </h1>
          
          <Card className="p-8 mb-12 shadow-[var(--shadow-soft)]">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                J&B Landscaping is a trusted landscaping and hardscaping company proudly serving Newton, NJ and the surrounding areas. 
                With years of experience in the industry, we specialize in transforming outdoor spaces into beautiful, functional environments 
                that enhance your property's value and your quality of life.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our team combines expertise, creativity, and attention to detail to deliver exceptional results for both residential 
                and commercial clients. From landscape design and installation to hardscaping and ongoing maintenance, we handle every 
                aspect of your outdoor project with professionalism and care.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What sets J&B Landscaping apart is our commitment to quality workmanship, reliable service, and customer satisfaction. 
                We work closely with each client to understand their vision and bring it to life, whether it's a stunning patio, 
                a lush garden, or comprehensive landscape maintenance.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When you choose J&B Landscaping, you're choosing a partner dedicated to creating outdoor spaces that you'll love 
                and enjoy for years to come. Contact us today to discuss your next landscaping project.
              </p>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-primary mb-4">Experience</h3>
              <p className="text-muted-foreground">Years of professional landscaping and hardscaping expertise</p>
            </Card>
            
            <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-primary mb-4">Quality</h3>
              <p className="text-muted-foreground">Committed to delivering exceptional results on every project</p>
            </Card>
            
            <Card className="p-6 text-center shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-primary mb-4">Service</h3>
              <p className="text-muted-foreground">Reliable, professional service from consultation to completion</p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;