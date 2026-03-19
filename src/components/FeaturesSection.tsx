import { Users, FolderKanban, MessageSquare, CheckSquare, BarChart3, CalendarClock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  { icon: Users, title: "Lead Tracking", description: "Capture and nurture solar leads with an intelligent pipeline. Score prospects, automate follow-ups, and convert more deals.", route: "/leads" },
  { icon: FolderKanban, title: "Installation Management", description: "Oversee every solar installation from site survey to final sign-off. Real-time status, crew assignment, and issue tracking.", route: "/projects" },
  { icon: MessageSquare, title: "Solar CRM", description: "Manage solar customers, contracts, and post-install relationships in one unified customer record.", route: "/customers" },
  { icon: CalendarClock, title: "Project Scheduling", description: "Schedule crews, equipment deliveries, and inspections with drag-and-drop simplicity. No more spreadsheet chaos.", route: "/tasks" },
  { icon: BarChart3, title: "Solar Analytics", description: "Track revenue, installation rates, team performance, and customer satisfaction with real-time solar dashboards.", route: "/reports" },
  { icon: CheckSquare, title: "Team Management", description: "Coordinate field crews, designers, and office staff. Assign tasks, share files, and communicate in context.", route: "/support" },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="section-padding" style={{ background: "hsl(226, 44%, 98%)" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Everything You Need to Run Your Solar Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built modules that help solar companies win more projects and deliver faster.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={() => navigate(f.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(f.route)}
              className="group relative rounded-2xl border border-border bg-card p-6 card-clickup hover:border-primary/25 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              <span className="absolute bottom-4 right-5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Open module →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
