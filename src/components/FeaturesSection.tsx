import { Users, FolderKanban, MessageSquare, CheckSquare, Link, BarChart3 } from "lucide-react";

const features = [
  { icon: Users, title: "Lead Management", description: "Capture, track, and convert solar leads with an intelligent pipeline built for solar sales teams." },
  { icon: FolderKanban, title: "Project Tracking", description: "Monitor every installation from site survey to final inspection with real-time project boards." },
  { icon: MessageSquare, title: "Team Collaboration", description: "Keep your crews, designers, and office staff aligned with built-in chat and file sharing." },
  { icon: CheckSquare, title: "Task Management", description: "Assign, prioritize, and track tasks across all your solar projects in one unified view." },
  { icon: Link, title: "CRM Integration", description: "Connect with your existing tools — sync contacts, deals, and customer data seamlessly." },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Get real-time insights into sales performance, project timelines, and team productivity." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding" style={{ background: "hsl(226, 44%, 98%)" }}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything You Need to Run Solar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built tools that help solar companies close more deals and deliver projects faster.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative rounded-xl border border-border bg-card p-6 card-clickup hover:border-primary/25 cursor-default"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
