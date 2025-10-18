import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    value: number;
    label: string;
  };
  variant?: "default" | "primary" | "secondary" | "success";
}

const MetricCard = ({ title, value, icon, trend, variant = "default" }: MetricCardProps) => {
  const variantStyles = {
    default: "bg-card",
    primary: "bg-gradient-primary text-primary-foreground",
    secondary: "bg-gradient-secondary text-secondary-foreground",
    success: "bg-success/10 border-success/20",
  };

  return (
    <Card className={cn("shadow-institutional hover:shadow-lg transition-all", variantStyles[variant])}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className={cn(
              "text-sm font-medium",
              variant === "default" || variant === "success" ? "text-muted-foreground" : "text-current/80"
            )}>
              {title}
            </p>
            <p className="text-3xl font-bold">{value}</p>
            {trend && (
              <p className={cn(
                "text-xs flex items-center gap-1",
                variant === "default" || variant === "success" ? "text-muted-foreground" : "text-current/70"
              )}>
                <span className={cn(
                  trend.value > 0 ? "text-success" : "text-destructive"
                )}>
                  {trend.value > 0 ? "↑" : "↓"} {Math.abs(trend.value)}%
                </span>
                <span>{trend.label}</span>
              </p>
            )}
          </div>
          <div className={cn(
            "flex h-12 w-12 items-center justify-center rounded-lg",
            variant === "default" ? "bg-primary/10 text-primary" : 
            variant === "success" ? "bg-success/20 text-success" : "bg-white/20"
          )}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
