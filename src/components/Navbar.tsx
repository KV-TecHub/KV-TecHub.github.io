import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span
              className={`font-display text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? "text-foreground" : "text-warm-white"
              }`}
            >
              La Veranda
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-foreground" : "text-warm-white"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-sm transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:shadow-warm"
                  : "bg-warm-white/20 text-warm-white border border-warm-white/40 hover:bg-warm-white hover:text-foreground"
              }`}
            >
              Reserve Table
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-foreground" : "text-warm-white"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground text-lg font-medium py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservation"
                onClick={() => setIsOpen(false)}
                className="btn-hero text-center mt-4"
              >
                Reserve Table
              </a>
              <a
                href="tel:+302428099110"
                className="flex items-center justify-center gap-2 text-muted-foreground mt-2"
              >
                <Phone size={18} />
                +30 24280 99110
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
