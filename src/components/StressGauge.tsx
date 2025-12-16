import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface StressGaugeProps {
  level: number;
}

const StressGauge = ({ level }: StressGaugeProps) => {
  const percentage = Math.min(100, (level / 80) * 100);
  const data = [
    { name: "Stress", value: percentage },
    { name: "Calm", value: 100 - percentage },
  ];

  const getColor = () => {
    if (percentage < 40) return "hsl(var(--calm))";
    if (percentage < 70) return "hsl(var(--focus))";
    return "hsl(var(--stress))";
  };

  const getLabel = () => {
    if (percentage < 40) return "Low";
    if (percentage < 70) return "Moderate";
    return "High";
  };

  return (
    <Card className="p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Stress Level</h3>
      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
            >
              <Cell fill={getColor()} />
              <Cell fill="hsl(var(--muted))" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
          <p className="text-4xl font-bold" style={{ color: getColor() }}>
            {Math.round(percentage)}%
          </p>
          <p className="text-sm text-muted-foreground">{getLabel()}</p>
        </div>
      </div>
    </Card>
  );
};

export default StressGauge;
