import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, TrendingUp, RefreshCw, Receipt, FileText,
  Briefcase, CheckSquare, HeadphonesIcon, UserPlus, BookOpen, Wrench,
  BarChart3, Settings, Shield, Search,
} from "lucide-react";

type ModuleItem = { label: string; icon: React.ElementType; color: string; route: string };
type ModuleGroup = { heading: string; items: ModuleItem[] };

const moduleGroups: ModuleGroup[] = [
  {
    heading: "Core",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, color: "text-purple-500", route: "/dashboard" },
      { label: "Customers", icon: Users, color: "text-blue-500", route: "/customers" },
      { label: "Sales", icon: TrendingUp, color: "text-green-500", route: "/leads" },
      { label: "Subscriptions", icon: RefreshCw, color: "text-cyan-500", route: "/dashboard" },
      { label: "Expenses", icon: Receipt, color: "text-orange-500", route: "/dashboard" },
      { label: "Contracts", icon: FileText, color: "text-pink-500", route: "/dashboard" },
    ],
  },
  {
    heading: "Work",
    items: [
      { label: "Projects", icon: Briefcase, color: "text-violet-500", route: "/projects" },
      { label: "Tasks", icon: CheckSquare, color: "text-emerald-500", route: "/tasks" },
      { label: "Support", icon: HeadphonesIcon, color: "text-red-500", route: "/support" },
      { label: "Leads", icon: UserPlus, color: "text-amber-500", route: "/leads" },
      { label: "Estimate Requests", icon: FileText, color: "text-teal-500", route: "/dashboard" },
      { label: "Knowledge Base", icon: BookOpen, color: "text-blue-400", route: "/knowledge-base" },
    ],
  },
  {
    heading: "Finance",
    items: [
      { label: "Accounting", icon: BarChart3, color: "text-indigo-500", route: "/reports" },
      { label: "Reports", icon: BarChart3, color: "text-purple-400", route: "/reports" },
    ],
  },
  {
    heading: "Admin",
    items: [
      { label: "Setup", icon: Settings, color: "text-gray-500", route: "/utilities" },
      { label: "Quality Control", icon: Shield, color: "text-rose-500", route: "/dashboard" },
      { label: "SEO Optimization", icon: Search, color: "text-lime-500", route: "/dashboard" },
    ],
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
          <button onClick={() => navigate("/")} className="text-xl font-bold gradient-text tracking-tight">
            Solar OS
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Welcome to Solar OS</h1>
          <p className="text-muted-foreground text-lg">Select a module to get started.</p>
        </div>

        <div className="space-y-10">
          {moduleGroups.map((group) => (
            <div key={group.heading}>
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">{group.heading}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.items.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <button
                      key={mod.label}
                      onClick={() => navigate(mod.route)}
                      className="card-clickup flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card text-center cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 group"
                    >
                      <span className={`p-2.5 rounded-lg bg-muted/60 group-hover:bg-primary/10 transition-colors ${mod.color}`}>
                        <Icon size={22} />
                      </span>
                      <span className="text-xs font-semibold text-foreground">{mod.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
