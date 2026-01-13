import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Portaria Village", "Pelion, Magnesia 37011", "Greece"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+30 24280 99110"],
    href: "tel:+302428099110",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@laverandaportaria.gr"],
    href: "mailto:info@laverandaportaria.gr",
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon - Sun: 10:00 - 00:00", "Kitchen closes at 23:00"],
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Find Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Contact & Location
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground font-semibold mb-2">
                      {info.title}
                    </h3>
                    {info.lines.map((line, i) =>
                      info.href ? (
                        <a
                          key={i}
                          href={info.href}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-muted-foreground">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Directions Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 p-6 bg-card rounded-lg border border-border"
            >
              <h3 className="font-display text-xl text-foreground mb-3">
                Getting Here
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                La Veranda is located in the picturesque village of Portaria, just 12km from Volos.
                We're next to the Xenia Palace Hotel, with ample parking available nearby. 
                Follow the signs to Portaria from the main Volos-Portaria road.
              </p>
              <a
                href="https://www.google.com/maps/place/La+Veranda/@39.3884053,22.9938806,19z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-lg overflow-hidden shadow-elevated h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.9615!2d22.9938806!3d39.3884053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a76d31e0efcb37%3A0x291f4d7a0061a382!2sLa%20Veranda!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Veranda location map"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
