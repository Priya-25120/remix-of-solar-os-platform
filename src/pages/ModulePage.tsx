import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ModuleConfig {
  title: string;
  description: string;
  color: string;
  columns: string[];
  rows: string[][];
}

const MODULE_CONFIG: Record<string, ModuleConfig> = {
  leads: {
    title: "Lead Management",
    description: "Track and convert solar leads with an intelligent pipeline.",
    color: "from-violet-500 to-purple-600",
    columns: ["Name", "Phone", "Status", "Assigned To"],
    rows: [
      ["SunPower California", "+1 408-555-0101", "New", "Amit Sharma"],
      ["Tesla Solar Texas", "+1 512-555-0202", "In Progress", "Priya Patel"],
      ["BrightSolar Arizona", "+1 602-555-0303", "Qualified", "Rahul Verma"],
      ["EcoVolt Florida", "+1 305-555-0404", "Negotiation", "Sneha Gupta"],
      ["SolarEdge Nevada", "+1 702-555-0505", "Won", "Vikram Singh"],
    ],
  },
  projects: {
    title: "Project Tracking",
    description: "Monitor every installation from site survey to final inspection.",
    color: "from-blue-500 to-indigo-600",
    columns: ["Project Name", "Client", "Status", "Progress %"],
    rows: [
      ["Residential Solar Installation", "John Smith", "In Progress", "65%"],
      ["Commercial Solar Plant", "GreenTech Corp", "Planning", "20%"],
      ["Rooftop Solar Setup", "Michael Johnson", "Completed", "100%"],
      ["Solar Farm Deployment", "SunValley Inc", "On Hold", "40%"],
      ["Industrial Panel Install", "David Williams", "In Progress", "80%"],
    ],
  },
  customers: {
    title: "Customer Management",
    description: "Manage solar customers, contracts and relationships.",
    color: "from-orange-500 to-amber-600",
    columns: ["Customer Name", "Email", "Phone", "City"],
    rows: [
      ["John Smith", "john@example.com", "+91 98765-43210", "Mumbai"],
      ["Michael Johnson", "michael@example.com", "+91 87654-32109", "Delhi"],
      ["David Williams", "david@example.com", "+91 76543-21098", "Bangalore"],
      ["Robert Brown", "robert@example.com", "+91 65432-10987", "Chennai"],
      ["James Miller", "james@example.com", "+91 54321-09876", "Hyderabad"],
    ],
  },
  tasks: {
    title: "Task Management",
    description: "Assign, prioritize, and track tasks across all your solar projects.",
    color: "from-emerald-500 to-teal-600",
    columns: ["Task", "Due Date", "Assigned", "Status"],
    rows: [
      ["Site survey — Smith residence", "2025-04-15", "Amit Sharma", "Pending"],
      ["Panel installation — GreenTech", "2025-04-18", "Priya Patel", "In Progress"],
      ["Inverter wiring check", "2025-04-20", "Rahul Verma", "Completed"],
      ["Battery integration test", "2025-04-22", "Sneha Gupta", "Pending"],
      ["Final inspection — Solar Farm", "2025-04-25", "Vikram Singh", "Scheduled"],
    ],
  },
  reports: {
    title: "Analytics & Reports",
    description: "Real-time insights into solar performance and revenue.",
    color: "from-cyan-500 to-sky-600",
    columns: [],
    rows: [],
  },
  support: {
    title: "Support & Collaboration",
    description: "Keep your crews, designers, and office staff aligned.",
    color: "from-pink-500 to-rose-600",
    columns: ["Ticket", "Customer", "Priority", "Status"],
    rows: [
      ["Inverter not responding", "John Smith", "High", "Open"],
      ["Panel cleaning request", "Michael Johnson", "Low", "Resolved"],
      ["Billing query", "David Williams", "Medium", "In Progress"],
      ["Warranty claim", "Robert Brown", "High", "Open"],
      ["App login issue", "James Miller", "Low", "Resolved"],
    ],
  },
  dashboard: {
    title: "Dashboard",
    description: "Overview of your solar business metrics.",
    color: "from-violet-500 to-purple-600",
    columns: [],
    rows: [],
  },
  "knowledge-base": {
    title: "Knowledge Base",
    description: "Solar installation guides and documentation.",
    color: "from-blue-400 to-cyan-500",
    columns: ["Article", "Category", "Last Updated"],
    rows: [
      ["Solar Panel Installation Guide", "Installation", "2025-03-01"],
      ["Inverter Troubleshooting", "Maintenance", "2025-02-15"],
      ["Battery Storage Best Practices", "Technology", "2025-01-20"],
      ["Net Metering Policy Guide", "Compliance", "2025-03-10"],
      ["Safety Protocols for Rooftop Work", "Safety", "2025-02-28"],
    ],
  },
  utilities: {
    title: "Utilities & Setup",
    description: "Configure your Solar OS workspace.",
    color: "from-slate-500 to-gray-600",
    columns: ["Setting", "Value", "Status"],
    rows: [
      ["Company Name", "Solar OS Demo", "Active"],
      ["Default Currency", "INR (₹)", "Active"],
      ["Time Zone", "Asia/Kolkata", "Active"],
      ["Email Notifications", "Enabled", "Active"],
      ["API Access", "v2.1", "Active"],
    ],
  },
};

const reportStats = [
  { label: "Total Projects", value: "142", change: "+12%" },
  { label: "Active Leads", value: "87", change: "+23%" },
  { label: "Monthly Revenue", value: "₹48,50,000", change: "+18%" },
  { label: "Installations Completed", value: "96", change: "+8%" },
];

interface ModulePageProps {
  module: string;
}

const ModulePage = ({ module }: ModulePageProps) => {
  const navigate = useNavigate();
  const config = MODULE_CONFIG[module] ?? null;

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">Module not found</p>
          <button onClick={() => navigate("/")} className="text-primary underline">Go home</button>
        </div>
      </div>
    );
  }

  const isReportOrDashboard = module === "reports" || module === "dashboard";

  return (
    <div className="min-h-screen bg-background">
      <div className={`bg-gradient-to-r ${config.color} py-12 px-6`}>
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Modules
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{config.title}</h1>
          <p className="text-white/75 text-lg">{config.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {isReportOrDashboard ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {reportStats.map((s) => (
              <Card key={s.label} className="card-clickup">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{s.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-green-500 font-semibold mt-1">{s.change} from last month</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {config.rows.length} record{config.rows.length !== 1 ? "s" : ""} found
            </h2>
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    {config.columns.map((col) => (
                      <TableHead key={col}>{col}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {config.rows.map((row, i) => (
                    <TableRow key={i} className="hover:bg-muted/50 transition-colors">
                      {row.map((cell, j) => (
                        <TableCell key={j}>
                          {config.columns[j]?.toLowerCase().includes("status") ? (
                            <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                              cell === "Won" || cell === "Completed" || cell === "Resolved" || cell === "Active"
                                ? "bg-green-100 text-green-700"
                                : cell === "In Progress"
                                ? "bg-blue-100 text-blue-700"
                                : cell === "New" || cell === "Pending" || cell === "Open" || cell === "Scheduled"
                                ? "bg-amber-100 text-amber-700"
                                : cell === "On Hold"
                                ? "bg-red-100 text-red-700"
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {cell}
                            </span>
                          ) : (
                            cell
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
