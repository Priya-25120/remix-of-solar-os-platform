import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah Mitchell", role: "Operations Director", company: "SunPower Energy", review: "Solar OS helped us increase installations by 45% in just 6 months. We replaced 5 separate tools with one platform — our team has never been more productive.", initials: "SM" },
  { name: "Marcus Chen", role: "Sales Manager", company: "BrightSolar Arizona", review: "The lead tracking alone pays for itself. We're converting 3x more prospects and our close rate went from 18% to 42% within the first quarter.", initials: "MC" },
  { name: "Jessica Rodriguez", role: "CEO", company: "EcoVolt Florida", review: "Finally a platform built for solar. Project scheduling and team coordination features are exactly what we needed to scale from 50 to 200+ installs per month.", initials: "JR" },
];

const TestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Loved by Solar Teams Worldwide
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See how solar companies are growing faster with Solar OS.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => navigate("/customers")}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col transition-all duration-300 cursor-pointer card-clickup hover:border-primary/20"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
