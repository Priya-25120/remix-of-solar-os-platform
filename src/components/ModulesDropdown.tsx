import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, LayoutDashboard, Users, TrendingUp, RefreshCw, Receipt, FileText, Briefcase, CheckSquare, HeadphonesIcon, UserPlus, BookOpen, Wrench, UserCog, Factory, BarChart3, Settings, Shield, Search, Package, ChevronUp } from "lucide-react";

type SubItem = { label: string };
type Module = {
  label: string;
  icon: React.ElementType;
  color: string;
  subItems?: SubItem[];
};

type Column = {
  heading: string;
  modules: Module[];
};

const columns: Column[] = [
  {
    heading: "Core",
    modules: [
      { label: "Dashboard", icon: LayoutDashboard, color: "text-purple-500" },
      { label: "Customers", icon: Users, color: "text-blue-500" },
      {
        label: "Sales", icon: TrendingUp, color: "text-green-500",
        subItems: [
          { label: "Estimates" }, { label: "Proposals" }, { label: "Quotations" },
          { label: "Invoices" }, { label: "Payments" }, { label: "Credit Notes" }, { label: "Items" },
        ],
      },
      { label: "Subscriptions", icon: RefreshCw, color: "text-cyan-500" },
      { label: "Expenses", icon: Receipt, color: "text-orange-500" },
      { label: "Contracts", icon: FileText, color: "text-pink-500" },
    ],
  },
  {
    heading: "Finance",
    modules: [
      {
        label: "Accounting", icon: BarChart3, color: "text-indigo-500",
        subItems: [
          { label: "Dashboard" }, { label: "Chart of Accounts" }, { label: "Journals & Ledgers" },
          { label: "Accounts Receivable" }, { label: "Accounts Payable" }, { label: "Tax Management" },
          { label: "Bank & Cash" }, { label: "Fixed Assets" }, { label: "Cost & Profit Centers" },
          { label: "Budgets & Controls" }, { label: "Financial Reports" }, { label: "Advanced Analytics" },
          { label: "Audit & Compliance" }, { label: "Settings & Configuration" },
        ],
      },
    ],
  },
  {
    heading: "Work",
    modules: [
      { label: "Projects", icon: Briefcase, color: "text-violet-500" },
      { label: "Tasks", icon: CheckSquare, color: "text-emerald-500" },
      { label: "Support", icon: HeadphonesIcon, color: "text-red-500" },
      { label: "Leads", icon: UserPlus, color: "text-amber-500" },
      { label: "Estimate Requests", icon: FileText, color: "text-teal-500" },
      { label: "Knowledge Base", icon: BookOpen, color: "text-blue-400" },
      {
        label: "Utilities", icon: Wrench, color: "text-slate-500",
        subItems: [
          { label: "Media" }, { label: "Bulk PDF Export" }, { label: "e-Invoice Export" },
          { label: "CSV Export" }, { label: "Calendar" }, { label: "Announcements" },
          { label: "Goals" }, { label: "Activity Log" }, { label: "Surveys" },
          { label: "Database Backup" }, { label: "Ticket Pipe Log" },
        ],
      },
    ],
  },
  {
    heading: "People & Ops",
    modules: [
      {
        label: "HRM", icon: UserCog, color: "text-fuchsia-500",
        subItems: [
          { label: "HR Overview" }, { label: "People" }, { label: "Org Structure" },
          { label: "Time & Attendance" }, { label: "Leave Center" }, { label: "Payroll Hub" },
          { label: "Hiring Pipeline" }, { label: "Performance Hub" }, { label: "Expenses" },
          { label: "Documents" }, { label: "Analytics" }, { label: "Settings" },
        ],
      },
      {
        label: "Production", icon: Factory, color: "text-yellow-500",
        subItems: [
          { label: "Manufacturing Orders" }, { label: "Bill of Materials" }, { label: "Schedules" },
          { label: "Job Cards" }, { label: "Factory Setup" }, { label: "Inventory Dashboard" },
          { label: "Manage Products" }, { label: "Category" }, { label: "Inventory Alerts" },
          { label: "Stock Ledger" }, { label: "Stock Adjustment" }, { label: "Stock Transfer" },
          { label: "Delivery Challan" },
        ],
      },
    ],
  },
  {
    heading: "Insights & Admin",
    modules: [
      {
        label: "Reports", icon: BarChart3, color: "text-purple-400",
        subItems: [
          { label: "Sales" }, { label: "Expenses" }, { label: "Expenses vs Income" },
          { label: "Leads" }, { label: "Timesheets Overview" }, { label: "KB Articles" },
        ],
      },
      { label: "Setup", icon: Settings, color: "text-gray-500" },
      {
        label: "Quality Control", icon: Shield, color: "text-rose-500",
        subItems: [{ label: "Quality Checks" }, { label: "Inspections" }, { label: "Reports" }],
      },
      { label: "SEO Optimization", icon: Search, color: "text-lime-500" },
    ],
  },
];

const ModuleItem = ({ mod }: { mod: Module }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = mod.icon;

  return (
    <div>
      <button
        onClick={() => mod.subItems ? setExpanded(!expanded) : undefined}
        className="w-full flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg hover:bg-muted/60 transition-all duration-150 group"
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className={`shrink-0 p-1 rounded-md bg-muted/80 group-hover:bg-background transition-colors ${mod.color}`}>
            <Icon size={13} />
          </span>
          <span className="text-xs font-medium text-foreground truncate">{mod.label}</span>
        </div>
        {mod.subItems && (
          <span className="text-muted-foreground shrink-0 transition-transform duration-200" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <ChevronDown size={11} />
          </span>
        )}
      </button>

      {mod.subItems && expanded && (
        <div className="ml-6 mt-0.5 border-l border-border/60 pl-2 flex flex-col gap-0.5 animate-fade-in">
          {mod.subItems.map((sub) => (
            <button
              key={sub.label}
              className="text-left text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 px-2 py-1 rounded-md transition-colors duration-150 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
              {sub.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ModulesDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-2 py-1 rounded-lg ${
          open
            ? "gradient-text bg-muted/60"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
        }`}
      >
        <Package size={14} />
        Modules
        <ChevronDown
          size={13}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* Mega menu — fixed to viewport, centered */}
          <div
            className="fixed left-1/2 z-50 mt-3 w-[95vw] max-w-[960px] max-h-[80vh] overflow-y-auto rounded-2xl border border-border/60 bg-background shadow-2xl"
            style={{
              top: "64px",
              transform: "translateX(-50%)",
              animation: "mega-menu-in 0.2s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            {/* Header bar */}
            <div className="gradient-bg px-5 py-3 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package size={16} className="text-white" />
                <span className="text-sm font-semibold text-white tracking-wide">Solar OS Modules</span>
              </div>
              <span className="text-xs text-white/70">All-in-one business platform</span>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-5 gap-0 divide-x divide-border/40 p-2">
              {columns.map((col) => (
                <div key={col.heading} className="px-3 py-3 flex flex-col gap-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-2 px-2">
                    {col.heading}
                  </p>
                  {col.modules.map((mod) => (
                    <ModuleItem key={mod.label} mod={mod} />
                  ))}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border/40 px-5 py-3 flex items-center justify-between bg-muted/20 rounded-b-2xl">
              <span className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">20+ modules</span> · Complete business suite
              </span>
              <button className="text-xs gradient-text font-semibold hover:opacity-80 transition-opacity flex items-center gap-1">
                Explore all modules <ChevronRight size={12} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ModulesDropdown;
