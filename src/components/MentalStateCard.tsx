import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MentalState } from "@/pages/Dashboard";
import { Brain, Zap, AlertCircle } from "lucide-react";

interface MentalStateCardProps {
  state: MentalState;
  confidence: number;
}

const MentalStateCard = ({ state, confidence }: MentalStateCardProps) => {
  const getStateColor = () => {
    switch (state) {
      case "Focused":
        return "bg-focus text-focus-foreground";
      case "Stressed":
        return "bg-stress text-stress-foreground";
      default:
        return "bg-calm text-calm-foreground";
    }
  };

  const getIcon = () => {
    switch (state) {
      case "Focused":
        return <Zap className="w-6 h-6" />;
      case "Stressed":
        return <AlertCircle className="w-6 h-6" />;
      default:
        return <Brain className="w-6 h-6" />;
    }
  };

  return (
    <Card className="p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Mental State Prediction</h3>
      <div className="space-y-4">
        <Badge className={`w-full justify-center py-3 text-lg ${getStateColor()}`}>
          <div className="flex items-center gap-2">
            {getIcon()}
            {state}
          </div>
        </Badge>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Confidence</span>
            <span className="font-semibold">{Math.round(confidence)}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MentalStateCard;
