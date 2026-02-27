const columns = [
  { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press", "Partners"] },
  { title: "Resources", links: ["Help Center", "Community", "Webinars", "Templates", "API"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR", "Cookies"] },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="text-xl font-bold gradient-text tracking-tight">Solar OS</a>
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
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
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
