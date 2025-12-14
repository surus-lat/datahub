import { useState, useEffect } from "react";
import GlitchText from "@/components/GlitchText";
import MatrixRain from "@/components/MatrixRain";
import JsonDisplay from "@/components/JsonDisplay";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

interface Dataset {
  task: string;
  domain: string;
  language: string;
}

interface CoreData {
  tasks: string[];
  datasets: Record<string, Dataset>;
}

const Index = () => {
  const [viewState, setViewState] = useState<"glitch" | "json">("glitch");
  const [jsonData, setJsonData] = useState<CoreData | null>(null);
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  useEffect(() => {
    fetch("/core_data.json")
      .then((res) => res.json())
      .then((data) => setJsonData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const cycleView = () => {
    setViewState((prev) => (prev === "glitch" ? "json" : "glitch"));
  };

  const handleTaskClick = (task: string) => {
    setSelectedTask(selectedTask === task ? null : task);
  };

  const filteredDatasets = jsonData?.datasets
    ? Object.entries(jsonData.datasets).filter(
        ([_, dataset]) => dataset.task === selectedTask
      )
    : [];

  return (
    <div className="relative min-h-screen bg-background">
      <div className="flex min-h-screen flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center gap-16">
          {viewState === "glitch" && (
            <>
              <div className="flex flex-col items-center">
                <GlitchText speed={1} enableShadows={true} enableOnHover={true}>
                  DataHub
                </GlitchText>
                <p className="font-mono text-foreground/40 text-xs tracking-widest -mt-1">| the missing data layer |</p>
              </div>
              
              <div className="flex flex-col items-center gap-8">
                <h2 className="font-mono text-foreground/50 text-sm text-center">/&lt;task?&gt;</h2>
                
                <div className="w-full max-w-4xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {jsonData?.tasks.map((task) => (
                      <button
                        key={task}
                        onClick={() => handleTaskClick(task)}
                        className={`font-mono text-xs transition-colors cursor-pointer border rounded px-4 py-3 text-center ${
                          selectedTask === task
                            ? "text-foreground border-foreground/50 bg-foreground/5"
                            : "text-muted-foreground border-border/30 hover:text-foreground hover:border-border/50"
                        }`}
                      >
                        {task}
                      </button>
                    ))}
                    <button
                      onClick={() => handleTaskClick("")}
                      className={`font-mono text-xs transition-colors cursor-pointer border rounded px-4 py-3 text-center ${
                        selectedTask === ""
                          ? "text-foreground border-foreground/50 bg-foreground/5"
                          : "text-muted-foreground border-border/30 hover:text-foreground hover:border-border/50"
                      }`}
                    >
                      /&lt;&gt;
                    </button>
                  </div>
                </div>

                {selectedTask !== null && filteredDatasets.length > 0 && (
                  <div className="w-full max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {filteredDatasets.map(([name, dataset]) => (
                        <div
                          key={name}
                          className="font-mono text-xs border border-border/30 rounded px-4 py-3 space-y-1"
                        >
                          <div className="text-foreground">{name}</div>
                          <div className="text-muted-foreground">
                            domain: {dataset.domain || "—"}
                          </div>
                          <div className="text-muted-foreground">
                            lang: {dataset.language || "—"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          {viewState === "json" && jsonData && <JsonDisplay data={jsonData} />}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 h-10 w-10 border-foreground/50 text-foreground bg-foreground/10 hover:bg-foreground/20 transition-all"
          onClick={cycleView}
        >
          <Code2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
