import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BrainwaveData } from "@/pages/Dashboard";

interface BrainwaveChartProps {
  data: BrainwaveData[];
}

const BrainwaveChart = ({ data }: BrainwaveChartProps) => {
  const formattedData = data.map((d) => ({
    ...d,
    time: new Date(d.timestamp).toLocaleTimeString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="alpha"
          stroke="hsl(var(--calm))"
          strokeWidth={2}
          dot={false}
          name="Alpha (Calm)"
        />
        <Line
          type="monotone"
          dataKey="beta"
          stroke="hsl(var(--focus))"
          strokeWidth={2}
          dot={false}
          name="Beta (Focus)"
        />
        <Line
          type="monotone"
          dataKey="gamma"
          stroke="hsl(var(--stress))"
          strokeWidth={2}
          dot={false}
          name="Gamma (Active)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BrainwaveChart;
