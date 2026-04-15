import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { cn } from "../../lib/utils";

interface ChartCardProps {
  title: string;
  description?: string;
  data: any[];
  dataKey: string;
  categoryKey: string;
  color?: string;
  className?: string;
  loading?: boolean;
  type?: "area" | "bar" | "line" | "scatter";
}

export function ChartCard({
  title,
  description,
  data,
  dataKey,
  categoryKey,
  color = "var(--primary)",
  className,
  loading,
  type = "area",
}: ChartCardProps) {
  if (loading) {
    return (
      <Card className={cn("bmj-chart-card", className)}>
        <CardHeader>
          <Skeleton className="bmj-chart-card-skeleton-title" />
          <Skeleton className="bmj-chart-card-skeleton-desc" />
        </CardHeader>
        <CardContent className="bmj-chart-content">
          <Skeleton className="bmj-chart-card-skeleton-chart" />
        </CardContent>
      </Card>
    );
  }

  const renderChart = () => {
    const commonProps = {
      data,
      margin: { top: 10, right: 10, left: -20, bottom: 0 },
    };

    const axisProps = {
      xAxis: (
        <XAxis
          dataKey={categoryKey}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
          dy={10}
          type={type === "scatter" ? "number" : "category"}
        />
      ),
      yAxis: (
        <YAxis
          dataKey={type === "scatter" ? dataKey : undefined}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
          type="number"
        />
      ),
      grid: (
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="var(--border)"
          opacity={0.5}
        />
      ),
      tooltip: (
        <Tooltip
          cursor={type === "scatter" ? { strokeDasharray: "3 3" } : undefined}
          contentStyle={{
            backgroundColor: "var(--card)",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            color: "var(--card-foreground)",
          }}
          itemStyle={{
            color: "var(--card-foreground)",
          }}
        />
      ),
    };

    switch (type) {
      case "bar":
        return (
          <BarChart {...commonProps}>
            {axisProps.grid}
            {axisProps.xAxis}
            {axisProps.yAxis}
            {axisProps.tooltip}
            <Bar
              dataKey={dataKey}
              fill={color}
              radius={[4, 4, 0, 0]}
              barSize={32}
            />
          </BarChart>
        );
      case "line":
        return (
          <LineChart {...commonProps}>
            {axisProps.grid}
            {axisProps.xAxis}
            {axisProps.yAxis}
            {axisProps.tooltip}
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={{ r: 4, fill: color, strokeWidth: 2, stroke: "var(--card)" }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        );
      case "scatter":
        return (
          <ScatterChart {...commonProps}>
            {axisProps.grid}
            {axisProps.xAxis}
            {axisProps.yAxis}
            {axisProps.tooltip}
            <Scatter name={title} data={data} fill={color} shape="circle" />
          </ScatterChart>
        );
      case "area":
      default:
        return (
          <AreaChart {...commonProps}>
            <defs>
              <linearGradient
                id={`colorValue-${title.replace(/\s+/g, "-")}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color} stopOpacity={0.1} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            {axisProps.grid}
            {axisProps.xAxis}
            {axisProps.yAxis}
            {axisProps.tooltip}
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              fillOpacity={1}
              fill={`url(#colorValue-${title.replace(/\s+/g, "-")})`}
            />
          </AreaChart>
        );
    }
  };

  return (
    <Card className={cn("bmj-chart-card", className)}>
      <CardHeader>
        <CardTitle className="bmj-chart-card-title">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="bmj-chart-content">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
