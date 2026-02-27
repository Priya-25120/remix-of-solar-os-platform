import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="rounded-2xl gradient-bg p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, white 0%, transparent 50%), radial-gradient(circle at 70% 50%, white 0%, transparent 50%)" }} />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 tracking-tight">
              Ready to Transform Your Solar Business?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of solar companies already using Solar OS to grow faster.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8"
            >
              Get Started Free <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
