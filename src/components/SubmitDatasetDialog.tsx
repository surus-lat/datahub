import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

const SubmitDatasetDialog = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    task: "",
    domain: "",
    language: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Trigger PR on GitHub repo
    console.log("Submit dataset:", formData);
    setOpen(false);
    setFormData({ name: "", task: "", domain: "", language: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 left-4 font-mono text-xs text-muted-foreground hover:text-foreground"
        >
          <Plus className="h-3 w-3 mr-1" />
          submit
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background border-border/50 max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-mono text-sm text-foreground">
            /submit_dataset
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-mono text-xs text-muted-foreground">
              name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="font-mono text-xs bg-transparent border-border/30"
              placeholder="dataset_name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="task" className="font-mono text-xs text-muted-foreground">
              task
            </Label>
            <Input
              id="task"
              value={formData.task}
              onChange={(e) => setFormData({ ...formData, task: e.target.value })}
              className="font-mono text-xs bg-transparent border-border/30"
              placeholder="/extract, /translate, etc."
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain" className="font-mono text-xs text-muted-foreground">
              domain
            </Label>
            <Input
              id="domain"
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              className="font-mono text-xs bg-transparent border-border/30"
              placeholder="news, medical, etc."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="language" className="font-mono text-xs text-muted-foreground">
              language
            </Label>
            <Input
              id="language"
              value={formData.language}
              onChange={(e) => setFormData({ ...formData, language: e.target.value })}
              className="font-mono text-xs bg-transparent border-border/30"
              placeholder="en, de, zh, etc."
            />
          </div>
          <Button
            type="submit"
            variant="outline"
            className="w-full font-mono text-xs border-border/50"
          >
            submit →
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitDatasetDialog;
