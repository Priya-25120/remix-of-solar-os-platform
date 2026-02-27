import { useNavigate } from "react-router-dom";

const companies = [
  { name: "SunPower", route: "/customers" },
  { name: "Vivint Solar", route: "/customers" },
  { name: "Tesla Energy", route: "/customers" },
  { name: "Enphase", route: "/customers" },
  { name: "SolarEdge", route: "/customers" },
  { name: "First Solar", route: "/customers" },
];

const TrustSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-14 px-4 md:px-8 border-y border-border/30 bg-background">
      <div className="container mx-auto text-center">
        <p className="text-xs font-semibold text-muted-foreground mb-8 tracking-[0.2em] uppercase">
          Trusted by the Best
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map(({ name, route }) => (
            <span
              key={name}
              onClick={() => navigate(route)}
              className="text-lg md:text-xl font-bold text-muted-foreground/30 select-none cursor-pointer hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
