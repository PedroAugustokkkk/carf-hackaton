import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { mes: "Jan", engajamento: 45 },
  { mes: "Fev", engajamento: 52 },
  { mes: "Mar", engajamento: 58 },
  { mes: "Abr", engajamento: 63 },
  { mes: "Mai", engajamento: 69 },
  { mes: "Jun", engajamento: 72 },
];

const EngagementChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          dataKey="mes"
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        />
        <YAxis
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          label={{ value: "% Engajamento", angle: -90, position: "insideLeft" }}
          domain={[0, 100]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "var(--radius)",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="engajamento"
          stroke="hsl(var(--chart-1))"
          strokeWidth={3}
          name="Taxa de Engajamento (%)"
          dot={{ fill: "hsl(var(--chart-1))", r: 5 }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EngagementChart;
