import { useNavigate } from "react-router-dom";
import { Wrench, TrendingUp, Building2, ClipboardList } from "lucide-react";

const useCases = [
  { icon: Wrench, title: "Solar Installers", description: "Schedule crews, track equipment, and manage installation workflows from start to finish.", route: "/projects" },
  { icon: TrendingUp, title: "Solar Sales Teams", description: "Close more deals with pipeline management, proposal tools, and automated follow-ups.", route: "/leads" },
  { icon: Building2, title: "Solar Companies", description: "Get a bird's eye view of your entire operation — from lead gen to post-install support.", route: "/reports" },
  { icon: ClipboardList, title: "Project Managers", description: "Keep every project on track with Gantt charts, milestones, and resource allocation.", route: "/tasks" },
];

const UseCasesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Built for Every Solar Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're a solo installer or a national company, Solar OS scales with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              onClick={() => navigate(uc.route)}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary/20"
            >
              <div className="h-14 w-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <uc.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{uc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
