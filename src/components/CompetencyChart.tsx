import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { competencia: "Com. Instrucional", lacuna: 35 },
  { competencia: "Gestão de Projetos", lacuna: 28 },
  { competencia: "Dir. Administrativo", lacuna: 25 },
  { competencia: "Gestão de Pessoas", lacuna: 22 },
  { competencia: "Análise Tributária", lacuna: 18 },
];

const CompetencyChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="competencia"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          angle={-15}
          textAnchor="end"
          height={80}
        />
        <YAxis
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          label={{ value: "% de Lacuna", angle: -90, position: "insideLeft" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Bar
          dataKey="lacuna"
          fill="hsl(var(--chart-2))"
          name="Lacuna Identificada (%)"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CompetencyChart;
