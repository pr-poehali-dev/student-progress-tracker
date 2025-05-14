
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: string;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
}

const StatsCard = ({
  title,
  value,
  description,
  icon,
  trend,
  className,
}: StatsCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          <Icon name={icon} className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center">
            {trend && (
              <div
                className={cn(
                  "mr-2 flex items-center",
                  trend.positive ? "text-green-500" : "text-red-500"
                )}
              >
                <Icon
                  name={trend.positive ? "TrendingUp" : "TrendingDown"}
                  className="mr-1 h-3 w-3"
                />
                <span className="text-xs">{trend.value}%</span>
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
