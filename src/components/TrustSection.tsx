const companies = ["SunPower", "Vivint Solar", "Tesla Energy", "Enphase", "SolarEdge", "First Solar"];

const TrustSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 border-y border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-sm font-medium text-muted-foreground mb-8 tracking-wide uppercase">
          Trusted by Solar Teams Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-bold text-muted-foreground/40 select-none"
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
