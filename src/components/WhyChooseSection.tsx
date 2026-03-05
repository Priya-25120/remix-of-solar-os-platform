import { Target, Activity, Cpu, CalendarCheck, Users, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Target, title: "Centralized Lead Tracking", description: "Track every solar lead from first contact to closed deal. Automate follow-ups and never let a prospect slip through the cracks." },
  { icon: Activity, title: "Real-Time Installation Monitoring", description: "Monitor every solar installation in real time — from site survey to panel activation. Stay on top of every project milestone." },
  { icon: Cpu, title: "Smart Inverter & Performance Analytics", description: "Analyze inverter performance, energy output, and system health with intelligent dashboards built for solar professionals." },
  { icon: CalendarCheck, title: "Automated Project Scheduling", description: "Schedule crews, deliveries, and inspections automatically. Eliminate double-bookings and reduce project delays." },
  { icon: Users, title: "Solar Customer Lifecycle Management", description: "Manage the entire customer journey — from quote to post-install support — in one unified solar CRM." },
  { icon: BarChart3, title: "Integrated Reporting Dashboard", description: "Generate revenue reports, installation metrics, and team performance insights with one-click solar business analytics." },
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Why Solar OS</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Why Solar Companies Choose Solar OS
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built tools that help solar businesses close more deals, deliver faster, and grow smarter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="rounded-2xl border border-border bg-card p-6 card-clickup"
            >
              <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
