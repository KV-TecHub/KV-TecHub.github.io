import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import foodMeze from "@/assets/food-meze.jpg";
import foodGrill from "@/assets/food-grill.jpg";
import foodSalad from "@/assets/food-salad.jpg";
import foodDessert from "@/assets/food-dessert.jpg";

const menuCategories = [
  {
    id: "appetizers",
    name: "Appetizers",
    description: "Traditional Greek starters",
    items: [
      { name: "Tzatziki", description: "Creamy yogurt with cucumber & garlic", price: "€5" },
      { name: "Dolmades", description: "Vine leaves stuffed with rice & herbs", price: "€7" },
      { name: "Fava Santorini", description: "Yellow split pea puree with onions", price: "€6" },
      { name: "Saganaki", description: "Pan-fried cheese with lemon", price: "€8" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    description: "Fresh & seasonal",
    items: [
      { name: "Horiatiki", description: "Classic Greek salad with feta & olives", price: "€9" },
      { name: "Roka Salata", description: "Arugula with sun-dried tomatoes & parmesan", price: "€10" },
      { name: "Cretan Dakos", description: "Barley rusk with tomato & mizithra cheese", price: "€8" },
    ],
  },
  {
    id: "meze",
    name: "Meze Platters",
    description: "Sharing is caring",
    items: [
      { name: "Classic Meze", description: "Selection of 5 traditional dips & bread", price: "€18" },
      { name: "Seafood Meze", description: "Grilled octopus, calamari & shrimp", price: "€28" },
      { name: "Meat Lovers", description: "Grilled selection with pita & tzatziki", price: "€24" },
    ],
  },
  {
    id: "grills",
    name: "From the Grill",
    description: "Charcoal-grilled perfection",
    items: [
      { name: "Souvlaki Plate", description: "Pork or chicken skewers with pita", price: "€14" },
      { name: "Lamb Chops", description: "Grilled with oregano & lemon", price: "€22" },
      { name: "Mixed Grill", description: "Selection of grilled meats", price: "€26" },
      { name: "Grilled Sea Bass", description: "Fresh catch with olive oil & herbs", price: "€24" },
    ],
  },
  {
    id: "mains",
    name: "Main Courses",
    description: "Hearty Greek classics",
    items: [
      { name: "Moussaka", description: "Layered eggplant, meat & béchamel", price: "€16" },
      { name: "Pastitsio", description: "Greek pasta bake with meat sauce", price: "€14" },
      { name: "Kleftiko", description: "Slow-cooked lamb with vegetables", price: "€20" },
      { name: "Gemista", description: "Stuffed tomatoes & peppers with rice", price: "€13" },
    ],
  },
  {
    id: "seafood",
    name: "Seafood",
    description: "From the Aegean",
    items: [
      { name: "Grilled Octopus", description: "With vinegar & olive oil", price: "€18" },
      { name: "Shrimp Saganaki", description: "In tomato sauce with feta", price: "€20" },
      { name: "Calamari", description: "Crispy fried with lemon", price: "€15" },
    ],
  },
  {
    id: "vegetarian",
    name: "Vegetarian",
    description: "Garden fresh",
    items: [
      { name: "Spanakopita", description: "Spinach & feta phyllo pie", price: "€10" },
      { name: "Briam", description: "Roasted vegetable medley", price: "€12" },
      { name: "Gigantes Plaki", description: "Giant beans in tomato sauce", price: "€10" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings",
    items: [
      { name: "Baklava", description: "Honey & walnut phyllo pastry", price: "€7" },
      { name: "Galaktoboureko", description: "Custard-filled phyllo", price: "€7" },
      { name: "Greek Yogurt", description: "With honey & walnuts", price: "€6" },
      { name: "Loukoumades", description: "Honey puffs with cinnamon", price: "€8" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Local wines & spirits",
    items: [
      { name: "House Wine", description: "Red or white, per glass", price: "€5" },
      { name: "Ouzo", description: "Traditional anise spirit", price: "€4" },
      { name: "Tsipouro", description: "Local grape spirit", price: "€4" },
      { name: "Greek Coffee", description: "Traditional preparation", price: "€3" },
    ],
  },
];

const categoryImages: Record<string, string> = {
  appetizers: foodMeze,
  salads: foodSalad,
  meze: foodMeze,
  grills: foodGrill,
  mains: foodGrill,
  seafood: foodGrill,
  vegetarian: foodSalad,
  desserts: foodDessert,
  drinks: foodDessert,
};

export const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("appetizers");

  const currentCategory = menuCategories.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Our Offerings
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            The Menu
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Authentic recipes crafted with love, using fresh ingredients from local Pelion producers
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden shadow-elevated"
          >
            <img
              src={categoryImages[activeCategory]}
              alt={currentCategory?.name}
              className="w-full h-80 md:h-[500px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <h3 className="font-display text-3xl text-warm-white">
                {currentCategory?.name}
              </h3>
              <p className="text-warm-white/80">{currentCategory?.description}</p>
            </div>
          </motion.div>

          {/* Menu Items */}
          <motion.div
            key={`items-${activeCategory}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {currentCategory?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-4 bg-background rounded-lg hover:shadow-soft transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-xl text-primary font-semibold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          * Prices are indicative. Seasonal items and daily specials available. Please ask your server.
        </motion.p>
      </div>
    </section>
  );
};
