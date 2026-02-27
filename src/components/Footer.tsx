import { useNavigate } from "react-router-dom";

const columns = [
  { title: "Product", links: [
    { label: "Features", action: "scroll:features" },
    { label: "Pricing", action: "/pricing" },
    { label: "Integrations", action: "#" },
    { label: "Changelog", action: "#" },
    { label: "Docs", action: "#" },
  ]},
  { title: "Company", links: [
    { label: "About", action: "#" },
    { label: "Blog", action: "#" },
    { label: "Careers", action: "#" },
    { label: "Press", action: "#" },
    { label: "Partners", action: "#" },
  ]},
  { title: "Resources", links: [
    { label: "Help Center", action: "#" },
    { label: "Community", action: "#" },
    { label: "Webinars", action: "#" },
    { label: "Templates", action: "#" },
    { label: "API", action: "#" },
  ]},
  { title: "Legal", links: [
    { label: "Privacy", action: "#" },
    { label: "Terms", action: "#" },
    { label: "Security", action: "#" },
    { label: "GDPR", action: "#" },
    { label: "Cookies", action: "#" },
  ]},
];

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = (action: string) => {
    if (action.startsWith("scroll:")) {
      const id = action.replace("scroll:", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else if (action.startsWith("/")) {
      navigate(action);
    }
  };

  return (
    <footer id="contact" className="border-t border-border py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => handleClick("scroll:home")} className="text-xl font-bold gradient-text tracking-tight">Solar OS</button>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              One platform to manage your entire solar business.
            </p>
            <div className="flex gap-4 mt-4">
              {["X", "in", "f", "yt"].map((s) => (
                <span key={s} className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-primary transition-colors cursor-pointer">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.action)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2026 Solar OS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
