const companies = ["SunPower", "Vivint Solar", "Tesla Energy", "Enphase", "SolarEdge", "First Solar"];

const TrustSection = () => {
  return (
    <section className="py-14 px-4 md:px-8 border-y border-border/30 bg-background">
      <div className="container mx-auto text-center">
        <p className="text-xs font-semibold text-muted-foreground mb-8 tracking-[0.2em] uppercase">
          Trusted by the Best
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-bold text-muted-foreground/30 select-none hover:text-muted-foreground/60 transition-colors"
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
