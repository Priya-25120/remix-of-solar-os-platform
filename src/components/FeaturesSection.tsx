import { Users, FolderKanban, MessageSquare, CheckSquare, Link, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  { icon: Users, title: "Lead Management", description: "Track and manage solar leads efficiently with a smart pipeline designed for solar sales.", route: "/leads" },
  { icon: FolderKanban, title: "Project Management", description: "Monitor solar installations from start to finish with real-time project boards and milestones.", route: "/projects" },
  { icon: MessageSquare, title: "Customer Management", description: "Manage solar customers, contracts, and post-install relationships in one unified place.", route: "/customers" },
  { icon: CheckSquare, title: "Task Management", description: "Assign and prioritize tasks across all solar projects with a unified team view.", route: "/tasks" },
  { icon: BarChart3, title: "Analytics", description: "Track solar performance, revenue trends, and team productivity with real-time dashboards.", route: "/reports" },
  { icon: Link, title: "Team Collaboration", description: "Coordinate your solar team — crews, designers, and office staff — all in sync.", route: "/support" },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="section-padding" style={{ background: "hsl(226, 44%, 98%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need to Run Your Solar Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built tools that help solar companies close more deals and deliver projects faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              onClick={() => navigate(f.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && navigate(f.route)}
              className="group relative rounded-xl border border-border bg-card p-6 card-clickup hover:border-primary/25 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-primary/40"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              <span className="absolute bottom-4 right-5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Open module →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
