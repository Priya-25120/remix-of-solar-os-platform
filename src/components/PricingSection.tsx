import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import solar5kw from "@/assets/solar-5kw.jpg";
import solar10kw from "@/assets/solar-10kw.jpg";
import solar20kw from "@/assets/solar-20kw.jpg";

const products = [
  {
    name: "5kW Residential Solar Plan", price: "₹3,49,000",
    description: "Perfect for small homes and starter solar setups.", image: solar5kw,
    highlighted: false, badge: null,
    features: ["Basic solar monitoring", "10-year warranty", "Standard inverter", "Residential installation support"],
  },
  {
    name: "10kW Smart Solar Plan", price: "₹6,99,000",
    description: "Best for medium homes and growing families.", image: solar10kw,
    highlighted: true, badge: "Most Popular",
    features: ["Advanced monitoring dashboard", "25-year performance warranty", "Smart inverter", "Battery ready system", "Mobile app access"],
  },
  {
    name: "25kW Commercial Solar Plan", price: "₹14,50,000",
    description: "Ideal for large commercial and industrial use.", image: solar20kw,
    highlighted: false, badge: null,
    features: ["Enterprise solar analytics", "Dedicated support manager", "Commercial inverter", "Battery storage included", "SLA guarantee"],
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">Solar System Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect solar solution for your needs. Transparent pricing, no hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`rounded-2xl border flex flex-col card-clickup overflow-hidden ${
                product.highlighted ? "gradient-border bg-card relative" : "border-border bg-card"
              }`}
            >
              {product.badge && (
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 gradient-bg text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                  {product.badge}
                </div>
              )}
              <div className="relative w-full h-44 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-1 text-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold gradient-text">{product.price}</span>
                  <span className="text-sm text-muted-foreground ml-2">installed</span>
                </div>
                <ul className="space-y-2 mb-6 flex-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-primary flex-shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => navigate("/signup")}
                  className={product.highlighted
                    ? "btn-clickup border-0 text-white w-full rounded-full font-semibold"
                    : "w-full rounded-full hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-semibold"
                  }
                  variant={product.highlighted ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
