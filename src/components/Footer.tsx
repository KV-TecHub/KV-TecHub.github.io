import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reservation", href: "#reservation" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-3xl font-semibold mb-4">La Veranda</h3>
            <p className="text-warm-white/70 leading-relaxed mb-6">
              Traditional Greek cuisine with breathtaking views of Mount Pelion. 
              Serving authentic flavors since 1985.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-warm-white/10 rounded-full flex items-center justify-center
                           hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warm-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-warm-white/70">
                  Portaria Village, Pelion<br />Magnesia 37011, Greece
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+302428099110"
                  className="text-warm-white/70 hover:text-primary transition-colors"
                >
                  +30 24280 99110
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@laverandaportaria.gr"
                  className="text-warm-white/70 hover:text-primary transition-colors"
                >
                  info@laverandaportaria.gr
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-xl font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-warm-white/70">
              <li className="flex justify-between">
                <span>Monday - Sunday</span>
                <span>10:00 - 00:00</span>
              </li>
              <li className="text-sm text-warm-white/50 pt-2">
                Kitchen closes at 23:00
              </li>
            </ul>
            <a
              href="#reservation"
              className="inline-block mt-6 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm
                       hover:shadow-warm transition-all duration-300"
            >
              Book a Table
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-white/50 text-sm">
            © {new Date().getFullYear()} La Veranda. All rights reserved.
          </p>
          <p className="text-warm-white/50 text-sm">
            Portaria, Pelion • Greece
          </p>
        </div>
      </div>
    </footer>
  );
};
