import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const ProductivitySection = () => {
  return (
    <section className="section-padding gradient-bg-subtle">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: visual */}
          <div className="relative">
            <div className="rounded-2xl bg-card border border-border p-8 shadow-lg">
              <div className="space-y-4">
                {[
                  { label: "Leads Converted", value: "87%", color: "from-primary to-accent" },
                  { label: "Projects On-Time", value: "94%", color: "from-primary to-primary" },
                  { label: "Team Efficiency", value: "3.2x", color: "from-accent to-primary" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Productivity</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Manage Everything in One Place
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Solar OS helps you streamline operations, manage teams, and grow faster. Replace scattered tools with one unified platform designed for solar businesses.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: Zap, text: "Automate repetitive workflows" },
                { icon: Shield, text: "Enterprise-grade security" },
                { icon: Clock, text: "Save 10+ hours per week" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="gradient-bg border-0 text-primary-foreground hover:opacity-90 transition-opacity">
              Get Started <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;
