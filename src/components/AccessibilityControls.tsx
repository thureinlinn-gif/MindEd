import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Contrast, Type } from "lucide-react";

const AccessibilityControls = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  const toggleDyslexiaFont = () => {
    setDyslexiaFont(!dyslexiaFont);
    document.documentElement.classList.toggle("dyslexia-font");
  };

  return (
    <Card className="p-4 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Accessibility Options</h3>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center space-x-2">
          <Contrast className="w-4 h-4 text-muted-foreground" />
          <Switch id="high-contrast" checked={highContrast} onCheckedChange={toggleHighContrast} />
          <Label htmlFor="high-contrast" className="cursor-pointer">
            High Contrast
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Type className="w-4 h-4 text-muted-foreground" />
          <Switch id="dyslexia-font" checked={dyslexiaFont} onCheckedChange={toggleDyslexiaFont} />
          <Label htmlFor="dyslexia-font" className="cursor-pointer">
            Dyslexia-Friendly Font
          </Label>
        </div>
      </div>
    </Card>
  );
};

export default AccessibilityControls;
