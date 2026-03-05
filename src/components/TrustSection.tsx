import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const companies = [
  { name: "SunPower California", route: "/customers" },
  { name: "Tesla Solar Texas", route: "/customers" },
  { name: "BrightSolar Arizona", route: "/customers" },
  { name: "EcoVolt Florida", route: "/customers" },
  { name: "SolarEdge Nevada", route: "/customers" },
  { name: "First Solar", route: "/customers" },
];

const TrustSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-14 px-4 md:px-8 border-y border-border/30 bg-background">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-muted-foreground mb-8 tracking-[0.2em] uppercase"
        >
          Trusted by Leading Solar Companies
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map(({ name, route }, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => navigate(route)}
              className="text-base md:text-lg font-bold text-muted-foreground/30 select-none cursor-pointer hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
