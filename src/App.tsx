import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import PricingPage from "./pages/PricingPage";
import ModulePage from "./pages/ModulePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<PricingPage />} />
          {/* CRM Module Pages */}
          <Route path="/leads" element={<ModulePage module="leads" />} />
          <Route path="/projects" element={<ModulePage module="projects" />} />
          <Route path="/support" element={<ModulePage module="support" />} />
          <Route path="/tasks" element={<ModulePage module="tasks" />} />
          <Route path="/customers" element={<ModulePage module="customers" />} />
          <Route path="/reports" element={<ModulePage module="reports" />} />
          <Route path="/knowledge-base" element={<ModulePage module="knowledge-base" />} />
          <Route path="/utilities" element={<ModulePage module="utilities" />} />
          <Route path="/dashboard" element={<ModulePage module="dashboard" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
