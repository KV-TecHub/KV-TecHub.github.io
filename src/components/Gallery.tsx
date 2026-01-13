import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-tavern.jpg";
import interiorImage from "@/assets/interior.jpg";
import viewImage from "@/assets/view.jpg";
import foodMeze from "@/assets/food-meze.jpg";
import foodGrill from "@/assets/food-grill.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodDessert from "@/assets/food-dessert.jpg";

const galleryImages = [
  { src: heroImage, alt: "La Veranda terrace with mountain view", span: "col-span-2 row-span-2" },
  { src: interiorImage, alt: "Cozy interior with fireplace", span: "col-span-1 row-span-1" },
  { src: foodMeze, alt: "Traditional Greek meze platter", span: "col-span-1 row-span-1" },
  { src: viewImage, alt: "Panoramic view of Pelion mountains", span: "col-span-1 row-span-2" },
  { src: foodGrill, alt: "Grilled souvlaki skewers", span: "col-span-1 row-span-1" },
  { src: foodSalad, alt: "Fresh Greek salad", span: "col-span-1 row-span-1" },
  { src: foodDessert, alt: "Traditional baklava dessert", span: "col-span-1 row-span-1" },
];

export const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Visual Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Gallery
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our space, cuisine, and the breathtaking views that await you
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`gallery-item ${image.span}`}
              onClick={() => setLightboxImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-warm-white hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightboxImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </section>
  );
};
