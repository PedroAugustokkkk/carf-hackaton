import { User, Award, TrendingUp, Calendar, Star, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const ProfileCard = () => {
  const servidorData = {
    id: 101,
    nome: "Maria Silva Santos",
    estrelas: 2, // número de estrelas que o servidor possui
    email: "maria.santos.carf@fazenda.gov.br",
    funcao: "Analista Tributária",
    unidade: "CARF/DF",
    dataNomeacao: "15/03/2018",
    vinculo: "Servidor Efetivo - Cedido do Ministério da Fazenda",
    competenciasConcluidas: 72,
    competencias: ["Direito Tributário", "Análise Processual", "Gestão de Recursos"],
    gapsParaIA: ["Comunicação Instrucional", "Gestão de Projetos", "IA e Ética na Tributação"],
  };

  const handleDiagnosticoClick = async () => {
    const API_URL = "https://unexpected-unvariant-pasquale.ngrok-free.dev/api/sugerir_trilha";

    const loadingToast = toast.loading("🤖 CARF.AI analisando lacunas...", {
      description: `Gerando trilha para ${servidorData.nome} via Agente Gemini.`,
    });

    const payload = { id: servidorData.id, gaps: servidorData.gapsParaIA };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

      const resultadoIA = await response.json();
      toast.dismiss(loadingToast);

      const cursoPrincipal =
        resultadoIA.trilha_sugerida?.[0]?.curso_sugerido || "Nenhuma sugestão encontrada.";

      toast.success("✅ Diagnóstico Concluído!", {
        description: `O Agente CSUA sugere o curso: "${cursoPrincipal}". Veja o console para a trilha completa em JSON.`,
        duration: 8000,
      });

      console.log("📊 Trilha Sugerida Pela IA:", resultadoIA.trilha_sugerida);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("❌ Falha na Comunicação com a IA", {
        description: `Verifique se o seu Back-end Python está rodando (Ngrok ativo). Erro: ${error.message}`,
        duration: 10000,
      });
    }
  };

  return (
    <Card className="shadow-institutional">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary">
            <User className="h-8 w-8 text-white" />
          </div>

          <div className="flex-1 space-y-3">
            <div>
              {/* Nome + Estrelas */}
              <h3 className="text-lg font-semibold flex items-center gap-1">
                {servidorData.nome}
                {Array.from({ length: servidorData.estrelas }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </h3>

              {/* Email */}
              <p className="text-xs text-muted-foreground">{servidorData.email}</p>

              {/* Função e Unidade */}
              <p className="text-sm text-muted-foreground">
                {servidorData.funcao} • {servidorData.unidade}
              </p>

              {/* Data de Nomeação */}
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Calendar className="h-3 w-3 text-primary" />
                Nomeada em {servidorData.dataNomeacao}
              </p>

              {/* Vínculo */}
              <Badge variant="outline" className="mt-2">
                {servidorData.vinculo}
              </Badge>
            </div>

            {/* Barra de Progresso */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Competências concluídas</span>
                <span className="font-semibold text-primary">
                  {servidorData.competenciasConcluidas}%
                </span>
              </div>
              <Progress value={servidorData.competenciasConcluidas} className="h-2" />
            </div>

            {/* Competências */}
            <div className="flex flex-wrap gap-2">
              {servidorData.competencias.map((comp) => (
                <Badge key={comp} variant="secondary" className="flex items-center gap-1">
                  <Award className="h-3 w-3" />
                  {comp}
                </Badge>
              ))}
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-2 mt-3">
              {/* Diagnóstico */}
              <Button
                size="sm"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={handleDiagnosticoClick}
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Ver diagnóstico de lacunas
              </Button>

              {/* Botão Teams */}
              <Button
                size="sm"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open("https://teams.microsoft.com", "_blank")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Teams
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;