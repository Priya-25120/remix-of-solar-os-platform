import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", target: "home" },
  { label: "Features", target: "features" },
  { label: "Solutions", target: "solutions" },
  { label: "Pricing", target: "pricing" },
  { label: "Resources", target: "resources" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (target: string) => {
    setMobileOpen(false);

    if (target === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <button onClick={() => handleNav("home")} className="text-xl font-bold gradient-text tracking-tight">
          Solar OS
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="rounded-full px-5" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button size="sm" className="rounded-full px-5 gradient-bg border-0 text-primary-foreground hover:opacity-90 transition-opacity" onClick={() => navigate("/signup")}>
            Sign Up
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
              <button
                key={item.label}
                onClick={() => handleNav(item.target)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex-1 rounded-full" onClick={() => { setMobileOpen(false); navigate("/login"); }}>Login</Button>
            <Button size="sm" className="flex-1 rounded-full gradient-bg border-0 text-primary-foreground" onClick={() => { setMobileOpen(false); navigate("/signup"); }}>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
