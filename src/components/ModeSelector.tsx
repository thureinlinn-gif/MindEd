import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MentalMode } from "@/pages/Dashboard";
import { Waves, Zap, AlertTriangle } from "lucide-react";

interface ModeSelectorProps {
  mode: MentalMode;
  onModeChange: (mode: MentalMode) => void;
}

const ModeSelector = ({ mode, onModeChange }: ModeSelectorProps) => {
  const modes = [
    {
      value: "calm" as MentalMode,
      label: "Calm",
      icon: <Waves className="w-5 h-5" />,
      description: "Relaxed and peaceful state",
      gradient: "from-calm to-calm/70",
    },
    {
      value: "focused" as MentalMode,
      label: "Focused",
      icon: <Zap className="w-5 h-5" />,
      description: "High concentration mode",
      gradient: "from-focus to-focus/70",
    },
    {
      value: "stressed" as MentalMode,
      label: "Stressed",
      icon: <AlertTriangle className="w-5 h-5" />,
      description: "Elevated stress levels",
      gradient: "from-stress to-stress/70",
    },
  ];

  return (
    <Card className="p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Simulation Mode</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modes.map((m) => (
          <Button
            key={m.value}
            variant={mode === m.value ? "default" : "outline"}
            onClick={() => onModeChange(m.value)}
            className={`h-auto flex-col items-start p-4 ${
              mode === m.value ? `bg-gradient-to-br ${m.gradient}` : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {m.icon}
              <span className="font-semibold">{m.label}</span>
            </div>
            <span className="text-xs opacity-80">{m.description}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default ModeSelector;
