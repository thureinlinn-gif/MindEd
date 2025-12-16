import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BrainwaveChart from "@/components/BrainwaveChart";
import StressGauge from "@/components/StressGauge";
import MentalStateCard from "@/components/MentalStateCard";
import RecommendationsPanel from "@/components/RecommendationsPanel";
import ModeSelector from "@/components/ModeSelector";
import DailyTrendChart from "@/components/DailyTrendChart";
import AccessibilityControls from "@/components/AccessibilityControls";

export type MentalMode = "calm" | "focused" | "stressed";
export type MentalState = "Focused" | "Neutral" | "Stressed";

export interface BrainwaveData {
  timestamp: number;
  alpha: number;
  beta: number;
  gamma: number;
}

const Dashboard = () => {
  const [mode, setMode] = useState<MentalMode>("calm");
  const [brainwaveData, setBrainwaveData] = useState<BrainwaveData[]>([]);
  const [mentalState, setMentalState] = useState<MentalState>("Neutral");
  const [confidence, setConfidence] = useState(0);

  // Simulate brainwave data based on mode
  useEffect(() => {
    const generateBrainwave = () => {
      const timestamp = Date.now();
      let alpha, beta, gamma;

      switch (mode) {
        case "calm":
          alpha = 40 + Math.random() * 30;
          beta = 20 + Math.random() * 15;
          gamma = 10 + Math.random() * 10;
          break;
        case "focused":
          alpha = 25 + Math.random() * 15;
          beta = 45 + Math.random() * 25;
          gamma = 30 + Math.random() * 20;
          break;
        case "stressed":
          alpha = 15 + Math.random() * 10;
          beta = 55 + Math.random() * 25;
          gamma = 50 + Math.random() * 30;
          break;
      }

      return { timestamp, alpha, beta, gamma };
    };

    const interval = setInterval(() => {
      setBrainwaveData((prev) => {
        const newData = [...prev, generateBrainwave()];
        return newData.slice(-20); // Keep last 20 data points
      });
    }, 500);

    return () => clearInterval(interval);
  }, [mode]);

  // Predict mental state based on brainwave data
  useEffect(() => {
    if (brainwaveData.length === 0) return;

    const latest = brainwaveData[brainwaveData.length - 1];
    const { alpha, beta, gamma } = latest;

    // Simple prediction logic
    if (beta > 60 || gamma > 60) {
      setMentalState("Stressed");
      setConfidence(Math.min(95, 70 + Math.random() * 25));
    } else if (beta > 40 && gamma > 25) {
      setMentalState("Focused");
      setConfidence(Math.min(95, 75 + Math.random() * 20));
    } else {
      setMentalState("Neutral");
      setConfidence(Math.min(95, 70 + Math.random() * 25));
    }
  }, [brainwaveData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto p-6 space-y-6">
        <header className="text-center space-y-3 py-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MindEase
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understand your brainwave patterns and find balance through visualization and AI-powered guidance
          </p>
        </header>

        <AccessibilityControls />

        <ModeSelector mode={mode} onModeChange={setMode} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Real-Time Brainwave Activity</h2>
              <BrainwaveChart data={brainwaveData} />
            </Card>

            <Card className="p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Daily Trend</h2>
              <DailyTrendChart mode={mode} />
            </Card>
          </div>

          <div className="space-y-6">
            <MentalStateCard state={mentalState} confidence={confidence} />
            <StressGauge level={brainwaveData[brainwaveData.length - 1]?.beta || 0} />
            <RecommendationsPanel state={mentalState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
