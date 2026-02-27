import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import dashboardImg from "@/assets/dashboard-hero.png";

const chipRoutes: Record<string, string> = {
  "Lead Mgmt": "/leads",
  "Projects": "/projects",
  "CRM": "/customers",
  "AI Agents": "/support",
  "Scheduling": "/tasks",
  "Analytics": "/reports",
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 overflow-hidden bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <span className="h-2 w-2 rounded-full gradient-bg" />
              Now in Beta — Try it Free
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6">
              Software to<br />
              replace all <span className="gradient-text">solar tools</span>
            </h1>

            <div className="space-y-2.5 mb-8">
              {[
                { bold: "Save money.", text: "All Apps, CRM, Projects + 20 more." },
                { bold: "Save time.", text: "All teams working together with perfect context." },
                { bold: "Scale faster.", text: "AI Agents & Automation built-in." },
              ].map((item) => (
                <div key={item.bold} className="flex items-start gap-2.5">
                  <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                    <span className="font-semibold text-foreground">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button
                size="lg"
                className="btn-clickup border-0 text-primary-foreground text-base px-8 rounded-full h-12"
                onClick={() => navigate("/signup")}
              >
                Get started. It's FREE! <ArrowRight className="ml-2" size={18} />
              </Button>
              <p className="text-xs text-muted-foreground mt-2 sm:mt-3">Free forever.<br />No credit card.</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Lead Mgmt", "Projects", "CRM", "AI Agents", "Scheduling", "Analytics"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate(chipRoutes[tag])}
                  className="text-xs font-medium border border-border rounded-full px-3 py-1.5 text-muted-foreground cursor-pointer transition-all duration-200 hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-10 blur-2xl" />
              <img
                src={dashboardImg}
                alt="Solar OS Dashboard showing project management, analytics, and team collaboration"
                className="relative rounded-xl shadow-2xl border border-border/50 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
