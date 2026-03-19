import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ProductivitySection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: stats card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="rounded-2xl bg-card border border-border p-8 shadow-lg card-clickup">
              <p className="text-xs font-semibold gradient-text uppercase tracking-wide mb-5">Live Performance</p>
              <div className="space-y-5">
                {[
                  { label: "Leads Converted", value: "87%", sub: "↑ 34% vs last quarter" },
                  { label: "Projects On-Time", value: "94%", sub: "↑ 18% since onboarding" },
                  { label: "Team Efficiency", value: "3.2×", sub: "Avg across solar teams" },
                  { label: "Revenue Growth", value: "62%", sub: "Year-over-year avg" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between border-b border-border/40 pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <span className="text-sm font-medium text-foreground">{stat.label}</span>
                      <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
                    </div>
                    <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Productivity</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Manage Your Entire Solar Operation in One Place
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Solar OS replaces scattered spreadsheets and disconnected tools with one unified platform — built specifically for solar companies that want to scale.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: Zap, text: "Automate lead follow-ups and scheduling workflows" },
                { icon: Shield, text: "Enterprise-grade security for customer data" },
                { icon: Clock, text: "Save 10+ hours per week per team member" },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              className="btn-clickup border-0 text-white rounded-full px-8 font-semibold"
              onClick={() => navigate("/signup")}
            >
              Get Started Free <ArrowRight className="ml-2" size={18} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;
