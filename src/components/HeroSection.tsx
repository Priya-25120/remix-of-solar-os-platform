import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sun, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import dashboardImg from "@/assets/dashboard-hero.png";

const chipRoutes: Record<string, string> = {
  "Lead Tracking": "/leads",
  "Installation Management": "/projects",
  "Solar CRM": "/customers",
  "Project Scheduling": "/tasks",
  "Solar Analytics": "/reports",
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 overflow-hidden bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-semibold text-muted-foreground mb-6"
            >
              <span className="h-2 w-2 rounded-full gradient-bg" />
              Trusted by 500+ Solar Companies
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mb-6 text-foreground"
            >
              Power Your Solar<br />
              Business with <span className="gradient-text">Solar OS</span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Manage solar installations, customers, sales pipelines and analytics in one powerful platform.
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="space-y-2.5 mb-8">
              {[
                { icon: Sun,        bold: "Close more deals.",    text: "Smart solar lead pipeline with automated follow-ups." },
                { icon: Zap,        bold: "Deliver on time.",     text: "Track every installation from survey to sign-off." },
                { icon: TrendingUp, bold: "Scale with ease.",     text: "Built-in AI automation for fast-growing solar teams." },
              ].map((item) => (
                <div key={item.bold} className="flex items-start gap-2.5">
                  <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                    <span className="font-semibold text-foreground">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex flex-col sm:flex-row items-start gap-3"
            >
              <Button
                size="lg"
                className="btn-clickup border-0 text-white text-base px-8 rounded-full h-12 font-semibold"
                onClick={() => navigate("/signup")}
              >
                Get Started Free <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-12 px-8 text-base border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-semibold"
                onClick={() => navigate("/contact")}
              >
                Book Demo
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5} className="mt-8 flex flex-wrap gap-2">
              {Object.keys(chipRoutes).map((tag) => (
                <button
                  key={tag}
                  onClick={() => navigate(chipRoutes[tag])}
                  className="text-xs font-medium border border-border rounded-full px-3 py-1.5 text-muted-foreground cursor-pointer transition-all duration-200 hover:text-primary hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>

          <motion.div variants={slideInRight} initial="hidden" animate="visible">
            <div className="relative">
              <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-10 blur-2xl" />
              <img
                src={dashboardImg}
                alt="Solar OS Dashboard — lead management, project tracking and solar analytics"
                className="relative rounded-2xl shadow-2xl border border-border/50 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
