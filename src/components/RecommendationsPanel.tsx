import { Card } from "@/components/ui/card";
import { MentalState } from "@/pages/Dashboard";
import { Lightbulb, Coffee, Wind } from "lucide-react";

interface RecommendationsPanelProps {
  state: MentalState;
}

const RecommendationsPanel = ({ state }: RecommendationsPanelProps) => {
  const getRecommendations = () => {
    switch (state) {
      case "Stressed":
        return {
          icon: <Wind className="w-5 h-5 text-stress" />,
          title: "Take a Calming Break",
          tips: [
            "Try a 5-minute breathing exercise",
            "Step away from your screen",
            "Listen to calming music",
            "Practice progressive muscle relaxation",
          ],
        };
      case "Focused":
        return {
          icon: <Coffee className="w-5 h-5 text-focus" />,
          title: "Maintain Your Flow",
          tips: [
            "Great focus! Keep up the momentum",
            "Stay hydrated",
            "Take short breaks every 25 minutes",
            "Tackle your most important tasks now",
          ],
        };
      default:
        return {
          icon: <Lightbulb className="w-5 h-5 text-calm" />,
          title: "Grounding Activities",
          tips: [
            "Perfect time for planning",
            "Try a light stretching routine",
            "Review your goals for today",
            "Engage in creative thinking",
          ],
        };
    }
  };

  const recommendations = getRecommendations();

  return (
    <Card className="p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        {recommendations.icon}
        <h3 className="text-xl font-semibold">{recommendations.title}</h3>
      </div>
      <ul className="space-y-2">
        {recommendations.tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted-foreground">{tip}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecommendationsPanel;
