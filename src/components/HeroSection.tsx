import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardImg from "@/assets/dashboard-hero.png";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(250,30%,97%) 0%, hsl(0,0%,100%) 100%)" }}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full gradient-bg" />
              Now in Beta — Try it Free
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              The Everything App for{" "}
              <span className="gradient-text">Solar Companies</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Manage leads, projects, installations, teams, and customers in one powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gradient-bg border-0 text-primary-foreground hover:opacity-90 transition-opacity text-base px-8">
                Get Started Free <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                <Play size={18} className="mr-2" /> Book Demo
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-10 blur-2xl" />
              <img
                src={dashboardImg}
                alt="Solar OS Dashboard showing project management, analytics, and team collaboration"
                className="relative rounded-xl shadow-2xl border border-border/50 w-full animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
