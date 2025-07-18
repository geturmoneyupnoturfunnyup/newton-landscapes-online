import { Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Materials", href: "/materials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-earth-brown text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">J&B Landscaping</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Professional landscaping and hardscaping services in Newton, NJ. 
              We transform outdoor spaces with quality workmanship and reliable service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <a
                  href="tel:973-948-7167"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (973) 948-7167
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <a
                  href="mailto:jblandscape1@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all"
                >
                  jblandscape1@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-primary-foreground/60 mt-1" />
                <div className="text-primary-foreground/80 text-sm">
                  <div>Mon-Fri: 24 hours</div>
                  <div>Sat: 24 hours</div>
                  <div>Sun: 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} J&B Landscaping. All rights reserved. | Newton, NJ Landscaping & Hardscaping
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;