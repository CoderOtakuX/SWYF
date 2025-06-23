import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, ArTryOn } from "@/components";
import { UserRound, Shirt, ScanFace } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:py-16">
      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            to="/skin-tone-analysis"
            className="relative overflow-hidden rounded-xl border bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10 flex flex-col items-center justify-center text-center h-[180px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-400/20 opacity-30" />
            <ScanFace className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-xl font-bold">Skin Tone Analysis</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Analyze your skin tone to find the best matching colors
            </p>
          </Link>

          <Link 
            to="/tryon"
            className="relative overflow-hidden rounded-xl border bg-white/5 p-6 backdrop-blur transition-all hover:bg-white/10 flex flex-col items-center justify-center text-center h-[180px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-indigo-400/20 opacity-30" />
            <Shirt className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-xl font-bold">Virtual Try-On</h3>
            <p className="text-sm text-muted-foreground mt-2">
              See how clothes look on you before purchasing
            </p>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <ArTryOn />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
} 