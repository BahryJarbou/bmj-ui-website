import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  icon?: LucideIcon;
  className?: string;
  loading?: boolean;
}

export function StatCard({
  title,
  value,
  description,
  trend,
  icon: Icon,
  className,
  loading,
}: StatCardProps) {
  if (loading) {
    return (
      <Card className={cn("bmj-stat-card", className)}>
        <CardHeader className="bmj-stat-card-header">
          <Skeleton className="bmj-stat-card-skeleton-title" />
          <Skeleton className="bmj-stat-card-skeleton-icon" />
        </CardHeader>
        <CardContent className="bmj-stat-card-skeleton-content">
          <Skeleton className="bmj-stat-card-skeleton-value" />
          <Skeleton className="bmj-stat-card-skeleton-desc" />
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className={cn("bmj-stat-card", className)}>
        <CardHeader className="bmj-stat-card-header">
          <CardTitle className="bmj-stat-card-title">{title}</CardTitle>
          {Icon && <Icon className="bmj-stat-card-icon" />}
        </CardHeader>
        <CardContent>
          <div className="bmj-stat-card-value">{value}</div>
          {(description || trend) && (
            <div className="bmj-stat-card-footer">
              {trend && (
                <span
                  className={cn(
                    "bmj-stat-card-trend",
                    trend.isPositive
                      ? "bmj-stat-card-trend-up"
                      : "bmj-stat-card-trend-down",
                  )}
                >
                  {trend.isPositive ? (
                    <TrendingUp className="bmj-stat-card-trend-icon" />
                  ) : (
                    <TrendingDown className="bmj-stat-card-trend-icon" />
                  )}
                  {trend.value}%
                </span>
              )}
              {description && (
                <p className="bmj-stat-card-description">{description}</p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
