import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "BrightSun Energy",
    review: "Solar OS transformed how we manage our installations. We went from juggling 5 different tools to one seamless platform. Our project completion rate improved by 40%.",
    initials: "SM",
  },
  {
    name: "Marcus Chen",
    company: "EcoVolt Solar",
    review: "The lead management alone pays for itself. We're converting 3x more prospects and our sales team has never been more productive.",
    initials: "MC",
  },
  {
    name: "Jessica Rodriguez",
    company: "Apex Solar Solutions",
    review: "Finally, a platform that understands solar. The project tracking and team collaboration features are exactly what we needed to scale our business.",
    initials: "JR",
  },
];

const TestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Loved by Solar Teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              onClick={() => navigate("/customers")}
              className="rounded-xl border border-border bg-card p-6 flex flex-col transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
