import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Package, ChevronDown, LayoutDashboard, Users, TrendingUp, RefreshCw, Receipt, FileText, Briefcase, CheckSquare, HeadphonesIcon, UserPlus, BookOpen, Wrench, UserCog, Factory, BarChart3, Settings, Shield, Search } from "lucide-react";
import ModulesDropdown from "./ModulesDropdown";

type MobileModuleItem = { label: string; icon: React.ElementType; color: string };
type MobileModuleGroup = { heading: string; items: MobileModuleItem[] };

const mobileModules: MobileModuleGroup[] = [
  {
    heading: "Core",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, color: "text-purple-500" },
      { label: "Customers", icon: Users, color: "text-blue-500" },
      { label: "Sales", icon: TrendingUp, color: "text-green-500" },
      { label: "Subscriptions", icon: RefreshCw, color: "text-cyan-500" },
      { label: "Expenses", icon: Receipt, color: "text-orange-500" },
      { label: "Contracts", icon: FileText, color: "text-pink-500" },
    ],
  },
  {
    heading: "Finance",
    items: [
      { label: "Accounting", icon: BarChart3, color: "text-indigo-500" },
    ],
  },
  {
    heading: "Work",
    items: [
      { label: "Projects", icon: Briefcase, color: "text-violet-500" },
      { label: "Tasks", icon: CheckSquare, color: "text-emerald-500" },
      { label: "Support", icon: HeadphonesIcon, color: "text-red-500" },
      { label: "Leads", icon: UserPlus, color: "text-amber-500" },
      { label: "Estimate Requests", icon: FileText, color: "text-teal-500" },
      { label: "Knowledge Base", icon: BookOpen, color: "text-blue-400" },
      { label: "Utilities", icon: Wrench, color: "text-slate-500" },
    ],
  },
  {
    heading: "People & Ops",
    items: [
      { label: "HRM", icon: UserCog, color: "text-fuchsia-500" },
      { label: "Production", icon: Factory, color: "text-yellow-500" },
    ],
  },
  {
    heading: "Insights & Admin",
    items: [
      { label: "Reports", icon: BarChart3, color: "text-purple-400" },
      { label: "Setup", icon: Settings, color: "text-gray-500" },
      { label: "Quality Control", icon: Shield, color: "text-rose-500" },
      { label: "SEO Optimization", icon: Search, color: "text-lime-500" },
    ],
  },
];

const MobileModulesAccordion = () => {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  return (
    <div className="border border-border/50 rounded-lg overflow-hidden">
      {/* Modules toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Package size={15} className="text-primary/70" />
          Modules
        </div>
        <ChevronDown
          size={14}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {/* Module groups */}
      {open && (
        <div className="border-t border-border/50 bg-muted/20">
          {mobileModules.map((group) => (
            <div key={group.heading} className="border-b border-border/30 last:border-0">
              <button
                onClick={() => setExpandedGroup(expandedGroup === group.heading ? null : group.heading)}
                className="w-full flex items-center justify-between px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted-foreground/70 hover:bg-muted/40 transition-colors"
              >
                {group.heading}
                <ChevronDown
                  size={11}
                  className="transition-transform duration-200"
                  style={{ transform: expandedGroup === group.heading ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              {expandedGroup === group.heading && (
                <div className="px-3 pb-2 flex flex-col gap-0.5">
                  {group.items.map((mod) => {
                    const Icon = mod.icon;
                    return (
                      <button
                        key={mod.label}
                        className="text-left text-xs text-foreground hover:bg-muted/60 px-2 py-1.5 rounded-lg transition-colors flex items-center gap-2.5 group"
                      >
                        <span className={`shrink-0 p-1 rounded-md bg-muted/80 group-hover:bg-background transition-colors ${mod.color}`}>
                          <Icon size={13} />
                        </span>
                        <span className="font-medium">{mod.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const navItems = [
  { label: "Home", target: "home" },
  { label: "Features", target: "features" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/60" style={{ boxShadow: "0 1px 0 0 hsl(248 79% 67% / 0.06), 0 2px 12px -2px hsl(248 79% 67% / 0.08)" }}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
        <button onClick={() => handleNav("home")} className="text-xl font-bold gradient-text tracking-tight">
          Solar OS
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.slice(0, 2).map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="nav-item-clickup text-sm font-medium text-muted-foreground px-3 py-1.5 rounded-lg"
            >
              {item.label}
            </button>
          ))}
          <ModulesDropdown />
          {navItems.slice(2).map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.target)}
              className="nav-item-clickup text-sm font-medium text-muted-foreground px-3 py-1.5 rounded-lg"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-5 border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            size="sm"
            className="rounded-full px-5 btn-clickup border-0 text-primary-foreground"
            onClick={() => navigate("/signup")}
          >
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
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1 mb-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.target)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left px-2 rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Modules Accordion */}
            <MobileModulesAccordion />
          </nav>
          <div className="flex gap-3 mt-2">
            <Button variant="outline" size="sm" className="flex-1 rounded-full" onClick={() => { setMobileOpen(false); navigate("/login"); }}>Login</Button>
            <Button size="sm" className="flex-1 rounded-full gradient-bg border-0 text-primary-foreground" onClick={() => { setMobileOpen(false); navigate("/signup"); }}>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
