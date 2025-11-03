import { useState } from "react";
import GlitchText from "@/components/GlitchText";
import MatrixRain from "@/components/MatrixRain";
import JsonDisplay from "@/components/JsonDisplay";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Index = () => {
  const [viewState, setViewState] = useState<'glitch' | 'matrix' | 'json'>('glitch');

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

  const cycleView = () => {
    setViewState(prev => {
      if (prev === 'glitch') return 'matrix';
      if (prev === 'matrix') return 'json';
      return 'glitch';
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background">
      {viewState === 'glitch' && (
        <GlitchText speed={1} enableShadows={true} enableOnHover={false}>
          DataHub
        </GlitchText>
      )}
      {viewState === 'matrix' && <MatrixRain jsonData={sampleData} />}
      {viewState === 'json' && <JsonDisplay />}
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10"
        onClick={cycleView}
      >
        <Code2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Index;
