import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, AlertCircle } from "lucide-react";

interface ModuleConfig {
  title: string;
  description: string;
  endpoint: string;
  color: string;
}

const MODULE_CONFIG: Record<string, ModuleConfig> = {
  leads: {
    title: "Lead Management",
    description: "Capture, track, and convert solar leads with an intelligent pipeline.",
    endpoint: "leads",
    color: "from-violet-500 to-purple-600",
  },
  projects: {
    title: "Project Tracking",
    description: "Monitor every installation from site survey to final inspection.",
    endpoint: "projects",
    color: "from-blue-500 to-indigo-600",
  },
  support: {
    title: "Team Collaboration",
    description: "Keep your crews, designers, and office staff aligned.",
    endpoint: "tickets",
    color: "from-pink-500 to-rose-600",
  },
  tasks: {
    title: "Task Management",
    description: "Assign, prioritize, and track tasks across all your solar projects.",
    endpoint: "tasks",
    color: "from-emerald-500 to-teal-600",
  },
  customers: {
    title: "CRM Integration",
    description: "Connect contacts, deals, and customer data seamlessly.",
    endpoint: "clients",
    color: "from-orange-500 to-amber-600",
  },
  reports: {
    title: "Analytics Dashboard",
    description: "Real-time insights into sales performance and project timelines.",
    endpoint: "reports",
    color: "from-cyan-500 to-sky-600",
  },
};

const CRM_BASE = "http://localhost:8081/api/";

interface ModulePageProps {
  module: string;
}

const ModulePage = ({ module }: ModulePageProps) => {
  const navigate = useNavigate();
  const config = MODULE_CONFIG[module] ?? null;

  const [data, setData] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    if (!config) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${CRM_BASE}${config.endpoint}`);
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      const json = await res.json();
      setData(Array.isArray(json) ? json : json.data ?? json.items ?? []);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to connect to CRM backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [module]);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">Module not found</p>
          <button onClick={() => navigate("/")} className="text-primary underline">
            Go home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.color} py-12 px-6`}>
        <div className="container mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} />
            Back to Solar OS
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{config.title}</h1>
          <p className="text-white/75 text-lg">{config.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">
            {loading
              ? "Loading data…"
              : error
              ? "Connection Error"
              : `${data.length} record${data.length !== 1 ? "s" : ""} found`}
          </h2>
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:bg-muted transition-colors disabled:opacity-50"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 flex items-start gap-4">
            <AlertCircle size={20} className="text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-destructive mb-1">Could not connect to CRM backend</p>
              <p className="text-sm text-muted-foreground">
                Make sure your CRM is running at{" "}
                <code className="bg-muted px-1 rounded text-xs">http://localhost:8081</code> and the{" "}
                <code className="bg-muted px-1 rounded text-xs">{config.endpoint}</code> endpoint is
                available.
              </p>
              <p className="text-sm text-destructive/70 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-5 animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Data Records */}
        {!loading && !error && data.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                {Object.entries(item as Record<string, unknown>)
                  .slice(0, 5)
                  .map(([key, val]) => (
                    <div key={key} className="flex items-start gap-2 mb-1.5 last:mb-0">
                      <span className="text-xs font-medium text-muted-foreground capitalize min-w-[80px]">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="text-xs text-foreground truncate">{String(val)}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && data.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg font-medium mb-1">No records found</p>
            <p className="text-sm">The CRM returned an empty response for this module.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulePage;
