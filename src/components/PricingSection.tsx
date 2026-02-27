import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    description: "Perfect for small solar teams getting started.",
    features: ["Up to 5 users", "Lead management", "Basic project tracking", "Email support", "1 GB storage"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/mo",
    description: "For growing solar companies that need more power.",
    features: ["Up to 25 users", "Advanced CRM", "Team collaboration", "Analytics dashboard", "Priority support", "10 GB storage", "API access"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: ["Unlimited users", "Custom integrations", "Dedicated account manager", "SSO & advanced security", "Unlimited storage", "SLA guarantee", "On-premise option"],
    highlighted: false,
  },
];

const PricingSection = () => {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold gradient-text uppercase tracking-wide mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-8 flex flex-col card-clickup ${
                  plan.highlighted
                    ? "gradient-border bg-card relative"
                    : "border-border bg-card"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => plan.name === "Enterprise" ? navigate("/contact") : navigate("/register")}
                className={
                  plan.highlighted
                    ? "btn-clickup border-0 text-primary-foreground w-full rounded-full"
                    : "w-full rounded-full hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                }
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
