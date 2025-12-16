import { Outlet, Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, LayoutDashboard, MessageSquare } from "lucide-react";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MindEase
              </span>
            </Link>
            <div className="flex gap-2">
              <Button
                variant={location.pathname === "/" ? "default" : "ghost"}
                asChild
              >
                <Link to="/">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button
                variant={location.pathname === "/assistant" ? "default" : "ghost"}
                asChild
              >
                <Link to="/assistant">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Assistant
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
