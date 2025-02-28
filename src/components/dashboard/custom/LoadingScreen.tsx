import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
