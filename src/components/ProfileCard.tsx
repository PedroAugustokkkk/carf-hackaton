import { User, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProfileCard = () => {
  return (
    <Card className="shadow-institutional">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
            <User className="h-8 w-8 text-white" />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-lg font-semibold">Maria Silva Santos</h3>
              <p className="text-sm text-muted-foreground">
                Analista Tributária • CARF/DF
              </p>
              <Badge variant="outline" className="mt-1">
                Servidor Efetivo
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Competências concluídas</span>
                <span className="font-semibold text-primary">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-3 w-3" />
                Direito Tributário
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-3 w-3" />
                Análise Processual
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Award className="h-3 w-3" />
                Gestão de Recursos
              </Badge>
            </div>

            <Button size="sm" variant="outline" className="w-full sm:w-auto">
              <TrendingUp className="mr-2 h-4 w-4" />
              Ver diagnóstico de lacunas
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
