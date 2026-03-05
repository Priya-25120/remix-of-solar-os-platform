import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CtaSection = () => {
  const navigate = useNavigate();

  return (
    <section id="resources" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl gradient-bg p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 25% 50%, white 0%, transparent 55%), radial-gradient(circle at 75% 50%, white 0%, transparent 55%)" }}
          />
          <div className="relative">
            <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">Start Today</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to Grow Your Solar Business?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Join solar companies using Solar OS to manage leads, projects, and customers — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 text-base px-8 rounded-full h-12 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => navigate("/signup")}
              >
                Get Started Free <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                className="bg-white/10 border border-white/30 text-white hover:bg-white/20 text-base px-8 rounded-full h-12 font-semibold hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => navigate("/contact")}
              >
                Book a Demo
              </Button>
            </div>
            <p className="text-white/50 text-xs mt-6">Free forever plan available · No credit card required</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
