import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { MentalMode } from "@/pages/Dashboard";

interface DailyTrendChartProps {
  mode: MentalMode;
}

const DailyTrendChart = ({ mode }: DailyTrendChartProps) => {
  // Generate simulated daily data
  const generateData = () => {
    const hours = ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM"];
    return hours.map((hour) => {
      let stress, focus;
      switch (mode) {
        case "calm":
          stress = 20 + Math.random() * 20;
          focus = 40 + Math.random() * 20;
          break;
        case "focused":
          stress = 30 + Math.random() * 20;
          focus = 60 + Math.random() * 20;
          break;
        case "stressed":
          stress = 60 + Math.random() * 20;
          focus = 30 + Math.random() * 20;
          break;
      }
      return { hour, stress, focus };
    });
  };

  const data = generateData();

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--stress))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--stress))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--focus))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--focus))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "0.5rem",
          }}
        />
        <Area
          type="monotone"
          dataKey="stress"
          stroke="hsl(var(--stress))"
          fillOpacity={1}
          fill="url(#colorStress)"
          name="Stress Level"
        />
        <Area
          type="monotone"
          dataKey="focus"
          stroke="hsl(var(--focus))"
          fillOpacity={1}
          fill="url(#colorFocus)"
          name="Focus Level"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DailyTrendChart;
