import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Download } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      category: "Mulch",
      items: ["Black mulch", "Brown mulch", "Red mulch", "Natural hardwood mulch", "Cedar mulch"]
    },
    {
      category: "Soil & Compost",
      items: ["Premium topsoil", "Screened topsoil", "Organic compost", "Planting mix", "Fill dirt"]
    },
    {
      category: "Stone & Gravel",
      items: ["Decorative river rock", "Crushed stone", "Pea gravel", "Drainage stone", "Landscape boulders"]
    },
    {
      category: "Sand & Base Materials",
      items: ["Mason sand", "Concrete sand", "Stone dust", "Crusher run", "Road base"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Landscaping Materials
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-8">
              Pickup & Delivery Available
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quality landscaping materials for all your outdoor projects. We offer convenient pickup and delivery 
              services throughout Newton, NJ and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {materials.map((category, index) => (
              <Card key={index} className="p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-2xl font-semibold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-foreground">
                      <div className="w-2 h-2 bg-moss-green rounded-full flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary to-moss-green rounded-lg">
                  <Truck className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Delivery Service</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                We deliver throughout Newton, NJ and surrounding areas. Our delivery trucks can handle materials 
                of all sizes, from small residential orders to large commercial projects.
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Same-day delivery available
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Competitive delivery rates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Professional, reliable service
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl font-semibold text-primary mb-6">Service Area</h3>
              <p className="text-muted-foreground mb-6">
                We proudly serve Newton, NJ and the surrounding communities with both pickup and delivery options 
                for all landscaping materials.
              </p>
              <p className="text-foreground font-medium mb-4">Areas we serve include:</p>
              <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                <div>Newton</div>
                <div>Andover</div>
                <div>Sparta</div>
                <div>Hopatcong</div>
                <div>Stanhope</div>
                <div>Sussex</div>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="p-8 bg-gradient-to-r from-warm-beige to-secondary shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Need Materials for Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for pricing and to schedule pickup or delivery. We'll help you calculate the right 
                quantities for your project and ensure timely delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-moss-green text-primary-foreground hover:shadow-[var(--shadow-earth)]">
                  Request Delivery
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Download className="h-4 w-4 mr-2" />
                  Price List
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Materials;