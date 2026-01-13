import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import interiorImage from "@/assets/interior.jpg";
import viewImage from "@/assets/view.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            A Taste of Tradition
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={interiorImage}
                alt="Cozy interior of La Veranda"
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-elevated"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-48 md:w-64 z-20">
              <img
                src={viewImage}
                alt="Stunning mountain view from La Veranda"
                className="w-full h-40 md:h-48 object-cover rounded-lg shadow-warm border-4 border-background"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-lg -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-8"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nestled in the heart of Portaria village on the slopes of Mount
              Pelion, <strong className="text-foreground">La Veranda</strong>{" "}
              has been welcoming guests since 1985 with authentic Greek
              hospitality and cuisine.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Our tavern offers a unique dining experience where traditional
              recipes passed down through generations meet the freshest local
              ingredients from the fertile Pelion region. Every dish tells a
              story of our heritage.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're enjoying a morning coffee on our sun-drenched
              terrace or savoring a romantic dinner by the fireplace, the
              panoramic views of the Pagasetic Gulf create an unforgettable
              backdrop.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "35+", label: "Years of Service" },
                { number: "100%", label: "Local Ingredients" },
                { number: "50+", label: "Signature Dishes" },
                { number: "∞", label: "Mountain Views" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-card rounded-lg"
                >
                  <span className="block font-display text-3xl md:text-4xl text-primary font-semibold">
                    {item.number}
                  </span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
