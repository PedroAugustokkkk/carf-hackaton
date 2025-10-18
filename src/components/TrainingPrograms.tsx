import { GraduationCap, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const programs = [
  { name: "Gestão Tributária Avançada", completion: 69, color: "hsl(var(--chart-1))" },
  { name: "Inovação no Serviço Público", completion: 52, color: "hsl(var(--chart-2))" },
  { name: "Liderança e Desenvolvimento", completion: 30, color: "hsl(var(--chart-4))" },
];

const TrainingPrograms = () => {
  return (
    <div className="space-y-4">
      {programs.map((program) => (
        <div key={program.name} className="space-y-2 rounded-lg border border-border bg-card p-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium">{program.name}</p>
                <p className="text-xs text-muted-foreground">
                  {program.completion}% concluído
                </p>
              </div>
            </div>
            <Button size="sm" variant="ghost">
              <CheckCircle2 className="h-4 w-4" />
            </Button>
          </div>
          <Progress 
            value={program.completion} 
            className="h-2"
            style={{ 
              backgroundColor: 'hsl(var(--accent))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default TrainingPrograms;
