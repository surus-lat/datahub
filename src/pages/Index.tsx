import { useState } from "react";
import GlitchText from "@/components/GlitchText";
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Index = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  const sampleData = {
    datahub: {
      version: "1.0.0",
      status: "active",
      nodes: [
        { id: "node_001", type: "processor", status: "online" },
        { id: "node_002", type: "storage", status: "online" },
        { id: "node_003", type: "analytics", status: "processing" }
      ],
      connections: 42,
      timestamp: new Date().toISOString()
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
      {showMatrix ? (
        <MatrixRain jsonData={sampleData} />
      ) : (
        <GlitchText speed={1} enableShadows={true} enableOnHover={false}>
          DataHub
        </GlitchText>
      )}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10"
        onClick={() => setShowMatrix(!showMatrix)}
      >
        <Code2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Index;
