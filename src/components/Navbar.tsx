import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "Features", "Solutions", "Pricing", "Resources", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#" className="text-xl font-bold gradient-text tracking-tight">Solar OS</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm" className="gradient-bg border-0 text-primary-foreground hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
          <nav className="flex flex-col gap-3 mb-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            <Button variant="ghost" size="sm" className="flex-1">Login</Button>
            <Button size="sm" className="flex-1 gradient-bg border-0 text-primary-foreground">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
