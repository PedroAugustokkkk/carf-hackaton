import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import DashboardCard from "@/components/DashboardCard";
import ProfileCard from "@/components/ProfileCard";
import CompetencyChart from "@/components/CompetencyChart";
import EngagementChart from "@/components/EngagementChart";
import TrainingPrograms from "@/components/TrainingPrograms";
import ChatAssistant from "@/components/ChatAssistant";
import FilterBar from "@/components/FilterBar";
import {
  Users,
  Target,
  TrendingUp,
  BookOpen,
  BarChart3,
  FileText,
  AlertTriangle,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Filtros */}
        <FilterBar />

        {/* Métricas principais */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total de Servidores"
            value="400"
            icon={<Users className="h-5 w-5" />}
            variant="primary"
          />
          <MetricCard
            title="Competências Mapeadas"
            value="156"
            icon={<Target className="h-5 w-5" />}
            variant="secondary"
          />
          <MetricCard
            title="Lacunas Identificadas"
            value="242"
            icon={<AlertTriangle className="h-5 w-5" />}
            trend={{ value: -8, label: "vs. mês anterior" }}
          />
          <MetricCard
            title="Taxa de Engajamento"
            value="50%"
            icon={<TrendingUp className="h-5 w-5" />}
            variant="success"
            trend={{ value: 12, label: "vs. mês anterior" }}
          />
        </div>

        {/* Perfil do Servidor */}
        <DashboardCard
          title="Perfil do Servidor"
          description="Visão geral das competências e trilhas em andamento"
          icon={<Users className="h-5 w-5" />}
        >
          <ProfileCard />
        </DashboardCard>

        {/* Gráficos principais */}
        <div className="grid gap-6 lg:grid-cols-2">
          <DashboardCard
            title="Diagnóstico de Lacunas"
            description="Principais áreas com necessidade de capacitação"
            icon={<BarChart3 className="h-5 w-5" />}
            headerAction={
              <Button variant="outline" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Exportar
              </Button>
            }
          >
            <CompetencyChart />
          </DashboardCard>

          <DashboardCard
            title="Evolução de Engajamento"
            description="Taxa de participação em trilhas de capacitação (Jan-Jun)"
            icon={<TrendingUp className="h-5 w-5" />}
          >
            <EngagementChart />
          </DashboardCard>
        </div>

        {/* Trilhas e Assistente */}
        <div className="grid gap-6 lg:grid-cols-2">
          <DashboardCard
            title="Trilhas de Capacitação"
            description="Programas ativos e percentuais de participação"
            icon={<GraduationCap className="h-5 w-5" />}
            headerAction={
              <Button variant="outline" size="sm">
                Registrar Conclusão
              </Button>
            }
          >
            <TrainingPrograms />
          </DashboardCard>

          <ChatAssistant />
        </div>

        {/* Seção de Relatórios */}
        <DashboardCard
          title="Relatórios e Exportações"
          description="Gerar relatórios detalhados sobre competências, lacunas e engajamento"
          icon={<FileText className="h-5 w-5" />}
        >
          <div className="flex flex-wrap gap-3">
            <Button variant="default">
              <FileText className="mr-2 h-4 w-4" />
              Relatório de Competências
            </Button>
            <Button variant="outline">
              <BarChart3 className="mr-2 h-4 w-4" />
              Relatório de Lacunas
            </Button>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Relatório de Capacitação
            </Button>
          </div>
        </DashboardCard>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            CGIPC - Gestão Inteligente de Pessoas e Competências
          </p>
          <p className="mt-1">
            Conselho Administrativo de Recursos Fiscais • 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
