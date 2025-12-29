import { useState } from "react";
import { ChevronLeft, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FacebookLogo from "@/components/FacebookLogo";
import MetaLogo from "@/components/MetaLogo";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-card flex flex-col">
      {/* Top Banner */}
      <div className="w-full px-4 py-3 border-b border-border flex items-center gap-3">
        <Download className="w-5 h-5 text-primary" />
        <span className="text-primary text-sm font-medium">
          Get Facebook for Android and browse faster.
        </span>
      </div>

      {/* Header with back button and language */}
      <div className="w-full px-4 py-3 border-b border-border flex items-center justify-between">
        <ChevronLeft className="w-6 h-6 text-foreground" />
        <span className="text-muted-foreground text-sm">English (UK)</span>
        <div className="w-6" /> {/* Spacer for alignment */}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 pt-8">
        {/* Facebook Logo */}
        <FacebookLogo className="w-16 h-16 mb-10" />

        {/* Login Form */}
        <div className="w-full max-w-sm space-y-3">
          <Input
            type="text"
            placeholder="Mobile number or email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 rounded-2xl bg-secondary border-border text-base px-4 placeholder:text-muted-foreground"
          />
          
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 rounded-2xl bg-secondary border-border text-base px-4 placeholder:text-muted-foreground"
          />

          <Button 
            className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base mt-4"
          >
            Log in
          </Button>

          <div className="text-center pt-2">
            <button className="text-foreground font-medium text-sm hover:underline">
              Forgotten password?
            </button>
          </div>
        </div>

        {/* Create Account Button */}
        <div className="w-full max-w-sm mt-auto mb-8">
          <Button 
            variant="outline"
            className="w-full h-12 rounded-full border-2 border-primary text-primary font-semibold text-base hover:bg-primary/5"
          >
            Create new account
          </Button>

          {/* Meta Logo */}
          <div className="flex justify-center mt-6">
            <MetaLogo className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
