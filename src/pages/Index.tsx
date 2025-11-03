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
    <div className="relative min-h-screen bg-background">
      <div className="flex min-h-screen flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center gap-8">
          {viewState === 'glitch' && (
            <GlitchText speed={1} enableShadows={true} enableOnHover={false}>
              DataHub
            </GlitchText>
          )}
          {viewState === 'matrix' && <MatrixRain jsonData={sampleData} />}
          {viewState === 'json' && <JsonDisplay />}
          
          <div className="w-full max-w-4xl">
            <h2 className="font-mono text-foreground/50 text-sm mb-4 text-center">/&lt;task?&gt;</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/30 rounded px-4 py-3 text-center">
                /extract
              </div>
              <div className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/30 rounded px-4 py-3 text-center">
                /translate
              </div>
              <div className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer border border-border/30 rounded px-4 py-3 text-center">
                /&lt;&gt;
              </div>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 h-8 w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10"
          onClick={cycleView}
        >
          <Code2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
