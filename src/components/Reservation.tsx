import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, Users, Phone, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Reservation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Sent!",
      description: "We'll confirm your booking within 24 hours. Thank you!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="reservation" className="section-padding bg-card" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Book Your Table
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Reservation
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience with views of Mount Pelion
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+30 xxx xxx xxxx"
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all duration-300 text-foreground appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all duration-300 text-foreground"
                  />
                </div>
              </div>

              {/* Time */}
              <div className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred Time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-sm 
                             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                             transition-all duration-300 text-foreground appearance-none cursor-pointer"
                  >
                    <option value="">Select time</option>
                    {["12:00", "13:00", "14:00", "15:00", "18:00", "19:00", "20:00", "21:00", "22:00"].map(
                      (time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any dietary requirements, special occasions, or seating preferences..."
                className="w-full px-4 py-3 bg-background border border-border rounded-sm 
                         focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                         transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn-hero min-w-[200px]">
                Request Reservation
              </button>
              <p className="text-muted-foreground text-sm mt-4">
                Or call us directly at{" "}
                <a href="tel:+302428099110" className="text-primary hover:underline">
                  +30 24280 99110
                </a>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
