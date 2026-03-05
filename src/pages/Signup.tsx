import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    if (!password.trim()) e.password = "Password is required";
    else if (password.length < 8) e.password = "Password must be at least 8 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    toast({ title: "Account created successfully!", description: "Welcome to Solar OS." });
    setTimeout(() => navigate("/"), 600);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left: Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-bg items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 0%, transparent 50%), radial-gradient(circle at 70% 70%, white 0%, transparent 50%)" }} />
        <div className="relative text-center max-w-md">
          <Link to="/" className="text-4xl font-bold text-primary-foreground tracking-tight mb-6 block">Solar OS</Link>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Start managing your solar business smarter. Free forever — no credit card required.
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Link to="/" className="text-2xl font-bold gradient-text tracking-tight lg:hidden block mb-8">Solar OS</Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Create your account</h1>
          <p className="text-muted-foreground mb-8">Get started with Solar OS for free</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <Input type="text" placeholder="John Doe" value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }} className={`h-11 ${errors.name ? "border-destructive" : ""}`} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="you@company.com" value={email} onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }} className={`h-11 ${errors.email ? "border-destructive" : ""}`} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Password</label>
              <Input type="password" placeholder="Min 8 characters" value={password} onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }} className={`h-11 ${errors.password ? "border-destructive" : ""}`} />
              {errors.password && <p className="text-xs text-destructive mt-1">{errors.password}</p>}
            </div>
            <Button type="submit" disabled={loading} className="w-full h-11 gradient-bg border-0 text-primary-foreground hover:opacity-90 transition-opacity">
              {loading ? <><Loader2 className="mr-2 animate-spin" size={16} /> Creating account…</> : <>Create Account <ArrowRight className="ml-2" size={16} /></>}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
