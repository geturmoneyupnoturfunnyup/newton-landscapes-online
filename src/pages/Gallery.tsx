import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  // Placeholder for gallery images - will be replaced with generated images
  const galleryImages = [
    {
      id: 1,
      title: "Stone Patio Installation",
      description: "Beautiful bluestone patio with professional installation",
      image: "/placeholder-patio.jpg"
    },
    {
      id: 2,
      title: "Landscape Lighting",
      description: "Elegant outdoor lighting design and installation",
      image: "/placeholder-lighting.jpg"
    },
    {
      id: 3,
      title: "Garden Bed Design",
      description: "Colorful perennial garden with mulched beds",
      image: "/placeholder-garden.jpg"
    },
    {
      id: 4,
      title: "Retaining Wall",
      description: "Natural stone retaining wall with drainage",
      image: "/placeholder-wall.jpg"
    },
    {
      id: 5,
      title: "Fire Pit Area",
      description: "Custom fire pit with surrounding seating area",
      image: "/placeholder-firepit.jpg"
    },
    {
      id: 6,
      title: "Water Feature",
      description: "Natural stone water feature with landscaping",
      image: "/placeholder-water.jpg"
    },
    {
      id: 7,
      title: "Before & After",
      description: "Complete landscape transformation project",
      image: "/placeholder-before-after.jpg"
    },
    {
      id: 8,
      title: "Walkway Installation",
      description: "Curved flagstone walkway with border plantings",
      image: "/placeholder-walkway.jpg"
    },
    {
      id: 9,
      title: "Commercial Landscaping",
      description: "Professional commercial landscape design",
      image: "/placeholder-commercial.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a look at some of our recent landscaping and hardscaping projects. From patios and walkways 
              to complete landscape transformations, see the quality and craftsmanship we bring to every job.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div key={image.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-earth)] transition-all duration-300">
                  <div className="aspect-[4/3] bg-warm-beige flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-lg font-semibold text-primary mb-2">{image.title}</h3>
                      <p className="text-muted-foreground text-sm">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-warm-beige to-secondary p-8 rounded-lg shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to Create Your Dream Outdoor Space?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every project starts with a vision. Let us help you transform your outdoor space into something beautiful and functional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-gradient-to-r from-primary to-moss-green text-primary-foreground hover:shadow-[var(--shadow-earth)] transition-shadow duration-300">
                  Get Started Today
                </a>
                <a href="tel:973-948-7167" className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  Call (973) 948-7167
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;