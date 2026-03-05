import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, TrendingUp, Briefcase, CheckSquare,
  HeadphonesIcon, UserPlus, BarChart3, Sun, Zap, Battery, DollarSign,
  ArrowUpRight, ArrowDownRight, Activity, Menu, X, LogOut,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type NavItem = { label: string; icon: React.ElementType; route: string; desc: string };

const sidebarItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, route: "/dashboard", desc: "View solar installation performance" },
  { label: "Customers", icon: Users, route: "/customers", desc: "Manage solar clients" },
  { label: "Sales", icon: TrendingUp, route: "/leads", desc: "Track solar deals and proposals" },
  { label: "Projects", icon: Briefcase, route: "/projects", desc: "Monitor solar installations" },
  { label: "Tasks", icon: CheckSquare, route: "/tasks", desc: "Assign installation work" },
  { label: "Support", icon: HeadphonesIcon, route: "/support", desc: "Handle service requests" },
  { label: "Leads", icon: UserPlus, route: "/leads", desc: "Track solar prospects" },
  { label: "Reports", icon: BarChart3, route: "/reports", desc: "Solar business insights" },
];

const stats = [
  { label: "Total Installations", value: "1,284", change: "+12.5%", up: true, icon: Sun },
  { label: "Active Projects", value: "47", change: "+8.2%", up: true, icon: Briefcase },
  { label: "Energy Generated", value: "4.8 GWh", change: "+23.1%", up: true, icon: Zap },
  { label: "Monthly Revenue", value: "₹48,50,000", change: "-2.4%", up: false, icon: DollarSign },
];

const recentProjects = [
  { name: "Residential Solar Installation", client: "BrightSun Energy", location: "California", status: "In Progress", progress: 65 },
  { name: "20kW Commercial Solar Project", client: "SolarGrid Solutions", location: "Texas", status: "Planning", progress: 20 },
  { name: "Rooftop Solar Setup", client: "EcoVolt Solar", location: "Arizona", status: "Completed", progress: 100 },
  { name: "Solar Farm Deployment", client: "SunValley Inc", location: "Nevada", status: "In Progress", progress: 45 },
];

const recentLeads = [
  { name: "Residential Solar Inquiry", company: "BrightSun Energy", status: "New" },
  { name: "Commercial Rooftop Installation", company: "SolarGrid Solutions", status: "Qualified" },
  { name: "Industrial Panel Upgrade", company: "EcoVolt Solar", status: "In Progress" },
  { name: "Solar Farm Expansion", company: "SunValley Inc", status: "Won" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const statusColor = (status: string) => {
    if (status === "Completed" || status === "Won") return "bg-emerald-100 text-emerald-700";
    if (status === "In Progress" || status === "Qualified") return "bg-blue-100 text-blue-700";
    if (status === "New" || status === "Planning") return "bg-amber-100 text-amber-700";
    return "bg-muted text-muted-foreground";
  };

  const SidebarContent = () => (
    <>
      <div className="p-5 border-b border-border/50">
        <button onClick={() => navigate("/")} className="text-xl font-bold gradient-text tracking-tight">
          Solar OS
        </button>
        <p className="text-xs text-muted-foreground mt-1">Solar Business Platform</p>
      </div>
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.route && item.label === "Dashboard";
          return (
            <button
              key={item.label}
              onClick={() => { navigate(item.route); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`}
              title={item.desc}
            >
              <Icon size={18} className={active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"} />
              <div className="text-left">
                <span>{item.label}</span>
              </div>
            </button>
          );
        })}
      </nav>
      <div className="p-3 border-t border-border/50">
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/60 hover:text-foreground transition-colors"
        >
          <LogOut size={18} />
          Back to Home
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 flex-col bg-card border-r border-border/50 sticky top-0 h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-64 h-full bg-card flex flex-col animate-slide-in-right">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-xl border-b border-border/50 h-16 flex items-center px-4 md:px-8 gap-4">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold tracking-tight text-foreground">Dashboard</h1>
            <p className="text-xs text-muted-foreground hidden sm:block">View solar installation performance</p>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-emerald-500" />
            <span className="text-xs font-medium text-emerald-600">System Online</span>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.label} className="card-clickup border-border/50 rounded-2xl">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                      <span className={`flex items-center gap-1 text-xs font-semibold ${s.up ? "text-emerald-600" : "text-red-500"}`}>
                        {s.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {s.change}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Tables */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Projects */}
            <Card className="rounded-2xl border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold">Recent Projects</CardTitle>
                  <button onClick={() => navigate("/projects")} className="text-xs font-medium text-primary hover:underline">View all →</button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {recentProjects.map((p) => (
                    <div key={p.name} className="px-6 py-3.5 hover:bg-muted/30 transition-colors cursor-pointer" onClick={() => navigate("/projects")}>
                      <div className="flex items-center justify-between mb-1.5">
                        <p className="text-sm font-medium text-foreground">{p.name}</p>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor(p.status)}`}>{p.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">{p.client} · {p.location}</p>
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                            <div className="h-full rounded-full gradient-bg" style={{ width: `${p.progress}%` }} />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">{p.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Leads */}
            <Card className="rounded-2xl border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold">Recent Leads</CardTitle>
                  <button onClick={() => navigate("/leads")} className="text-xs font-medium text-primary hover:underline">View all →</button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/50">
                  {recentLeads.map((l) => (
                    <div key={l.name} className="px-6 py-3.5 hover:bg-muted/30 transition-colors cursor-pointer" onClick={() => navigate("/leads")}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-foreground">{l.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{l.company}</p>
                        </div>
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor(l.status)}`}>{l.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick performance */}
          <Card className="rounded-2xl border-border/50">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Monthly Energy Output</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { month: "Jan", value: "380 MWh" },
                  { month: "Feb", value: "420 MWh" },
                  { month: "Mar", value: "510 MWh" },
                  { month: "Apr", value: "480 MWh" },
                ].map((m) => (
                  <div key={m.month} className="text-center p-4 rounded-xl bg-muted/40">
                    <p className="text-xs text-muted-foreground mb-1">{m.month} 2026</p>
                    <p className="text-lg font-bold gradient-text">{m.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
