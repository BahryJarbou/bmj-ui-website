import * as React from "react";
import {
  DashboardLayout,
  StatCard,
  ChartCard,
  AppSidebar,
  Topbar,
} from "./components/bmj-ui";
import { ThemeToggle } from "./components/ThemeToggle";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  Layout,
  Component,
  BarChart3,
  Layers,
  Type,
  MousePointer2,
  Bell,
  Search,
  Users,
  DollarSign,
  ArrowRight,
  Code2,
  PanelLeft,
  Zap,
  Palette,
  Eye,
  Check,
  Copy,
  Box,
  Type as TypeIcon,
  Square,
  MessageSquare,
  List,
  ChevronDown,
  MoreHorizontal,
  Table as TableIcon,
} from "lucide-react";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Skeleton } from "./components/ui/skeleton";
import { Separator } from "./components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";
import { motion } from "motion/react";

const chartData = [
  { name: "Mon", value: 10 },
  { name: "Tue", value: 25 },
  { name: "Wed", value: 15 },
  { name: "Thu", value: 45 },
  { name: "Fri", value: 30 },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="bmj-absolute bmj-right-2 bmj-top-2 bmj-opacity-0 group-hover:bmj-opacity-100 bmj-transition-all bmj-h-8 bmj-w-8"
      onClick={copy}
    >
      {copied ? (
        <Check className="bmj-icon-sm bmj-text-emerald" />
      ) : (
        <Copy className="bmj-icon-sm" />
      )}
    </Button>
  );
}

export function ComponentsPage({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (view: "landing" | "dashboard" | "components" | "docs") => void;
}) {
  return (
    <div className="bmj-min-h-screen bmj-bg-background bmj-pb-20">
      {/* Header */}
      <header className="bmj-border-b bmj-border-border-40 bmj-bg-background-60 bmj-blur-xl bmj-sticky-top-0 bmj-py-2">
        <div className="bmj-max-w-7xl bmj-mx-auto bmj-px-4 bmj-px-6 bmj-h-16 bmj-flex bmj-items-center bmj-justify-between">
          <div className="bmj-flex bmj-items-center bmj-gap-2 bmj-font-bold bmj-text-lg bmj-text-xl bmj-tracking-tight">
            <div className="bmj-w-8 bmj-h-8 bmj-rounded-xl bmj-bg-primary bmj-flex bmj-items-center bmj-justify-center bmj-text-primary-foreground">
              B
            </div>
            <span className="bmj-xs-inline">
              BMJ UI{" "}
              <span className="bmj-text-muted bmj-font-normal">
                / Components
              </span>
            </span>
            <span className="bmj-xs-hidden">BMJ UI</span>
          </div>
          <div className="bmj-flex bmj-items-center bmj-gap-2 bmj-gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("docs")}
              className="bmj-text-xs bmj-text-sm bmj-font-medium"
            >
              Docs
            </Button>
            <ThemeToggle className="bmj-rounded-full" />
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="bmj-gap-2 bmj-text-xs bmj-text-sm"
            >
              <span className="bmj-xs-inline">Back to Home</span>
              <span className="bmj-xs-hidden">Back</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="bmj-max-w-7xl bmj-mx-auto bmj-px-4 bmj-px-6 bmj-pt-8 bmj-pt-12 bmj-space-y-20 bmj-space-y-32 bmj-min-w-0">
        {/* Intro */}
        <div className="bmj-max-w-3xl">
          <Badge
            variant="outline"
            className="bmj-mb-4 bmj-border-primary-20 bmj-text-primary bmj-bg-primary-5 bmj-text-xs"
          >
            Component Library
          </Badge>
          <h1 className="bmj-text-5xl bmj-font-bold bmj-tracking-tight bmj-mb-6 bmj-gradient-text">
            Professional primitives for <br className="bmj-sm-block" /> modern
            dashboards.
          </h1>
          <p className="bmj-text-xl bmj-text-muted bmj-leading-relaxed">
            BMJ UI provides a set of high-level, accessible, and themeable
            components designed to help you build production-ready dashboards in
            minutes.
          </p>
        </div>

        {/* Design System & Utilities */}
        <section className="bmj-space-y-10">
          <div className="bmj-flex bmj-items-center bmj-gap-3 bmj-border-b bmj-border-border-50 bmj-pb-4">
            <Palette className="bmj-icon-lg bmj-text-primary" />
            <h2 className="bmj-text-2xl bmj-font-bold">
              Design System & Utilities
            </h2>
          </div>

          <div className="bmj-grid bmj-grid-cols-1 bmj-grid-cols-2 bmj-grid-cols-4 bmj-gap-6">
            <div className="bmj-p-8 bmj-rounded-2xl bmj-glass bmj-flex bmj-flex-col bmj-items-center bmj-justify-center bmj-text-center bmj-space-y-3">
              <div className="bmj-w-10 bmj-h-10 bmj-rounded-full bmj-bg-primary-10 bmj-flex bmj-items-center bmj-justify-center">
                <Zap className="bmj-icon-md bmj-text-primary" />
              </div>
              <h4 className="bmj-font-bold bmj-text-sm">.bmj-glass</h4>
              <p className="bmj-text-xs bmj-text-muted">
                Frosted glass effect with backdrop blur.
              </p>
            </div>

            <div className="bmj-p-8 bmj-rounded-2xl bmj-border-border-50 bmj-card-hover bmj-flex bmj-flex-col bmj-items-center bmj-justify-center bmj-text-center bmj-space-y-3 bmj-bg-card">
              <div className="bmj-w-10 bmj-h-10 bmj-rounded-full bmj-bg-primary-10 bmj-flex bmj-items-center bmj-justify-center">
                <Layout className="bmj-icon-md bmj-text-primary" />
              </div>
              <h4 className="bmj-font-bold bmj-text-sm">.bmj-card-hover</h4>
              <p className="bmj-text-xs bmj-text-muted">
                Smooth elevation on interaction.
              </p>
            </div>

            <div className="bmj-p-8 bmj-rounded-2xl bmj-border-border-50 bmj-flex bmj-flex-col bmj-items-center bmj-justify-center bmj-text-center bmj-space-y-3 bmj-bg-card">
              <h4 className="bmj-font-bold bmj-text-sm bmj-gradient-text bmj-text-2xl">
                Gradient
              </h4>
              <h4 className="bmj-font-bold bmj-text-sm">.bmj-gradient-text</h4>
              <p className="bmj-text-xs bmj-text-muted">
                Professional text gradients.
              </p>
            </div>

            <div className="bmj-p-8 bmj-rounded-2xl bmj-border-border-50 bmj-flex bmj-flex-col bmj-items-center bmj-justify-center bmj-text-center bmj-space-y-3 bmj-bg-card">
              <div className="bmj-w-full bmj-h-2 bmj-bg-muted bmj-rounded-full bmj-overflow-hidden">
                <motion.div
                  className="bmj-h-full bmj-bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <h4 className="bmj-font-bold bmj-text-sm">Motion Ready</h4>
              <p className="bmj-text-xs bmj-text-muted">
                Optimized for motion/react animations.
              </p>
            </div>
          </div>
        </section>

        {/* Layout Components */}
        <section className="bmj-space-y-10">
          <div className="bmj-flex bmj-items-center bmj-gap-3 bmj-border-b bmj-border-border-50 bmj-pb-4">
            <Layout className="bmj-icon-lg bmj-text-primary" />
            <h2 className="bmj-text-2xl bmj-font-bold">Layout & Navigation</h2>
          </div>

          <div className="bmj-grid bmj-grid-cols-1 bmj-lg-col-span-2 bmj-gap-8">
            {/* DashboardLayout */}
            <Card className="bmj-card-hover bmj-border-border-50">
              <CardHeader>
                <div className="bmj-flex bmj-items-center bmj-justify-between">
                  <CardTitle>DashboardLayout</CardTitle>
                  <Badge variant="secondary">Shell</Badge>
                </div>
                <CardDescription>
                  The main container that orchestrates Sidebar, Topbar, and
                  Content.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-space-y-6">
                <div className="bmj-aspect-video bmj-rounded-xl bmj-bg-muted-30 bmj-border bmj-border-dashed bmj-border-border bmj-flex bmj-flex-col bmj-overflow-hidden">
                  <div className="bmj-h-6 bmj-border-b bmj-border-border-50 bmj-bg-background-50" />
                  <div className="bmj-flex bmj-flex-1">
                    <div className="bmj-w-12 bmj-border-r bmj-border-border-50 bmj-bg-background-30" />
                    <div className="bmj-flex-1 bmj-p-4 bmj-space-y-2">
                      <div className="bmj-h-4 bmj-w-3 bmj-bg-muted bmj-rounded" />
                      <div className="bmj-grid bmj-grid-cols-3 bmj-gap-2">
                        <div className="bmj-h-12 bmj-bg-muted bmj-rounded" />
                        <div className="bmj-h-12 bmj-bg-muted bmj-rounded" />
                        <div className="bmj-h-12 bmj-bg-muted bmj-rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-xs bmj-leading-relaxed bmj-overflow-hidden bmj-relative bmj-group bmj-w-full bmj-max-w-full">
                  <pre className="bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">{`<DashboardLayout 
  sidebar={<AppSidebar />} 
  topbar={<Topbar />}
>
  <YourContent />
</DashboardLayout>`}</pre>
                  <CopyButton
                    text={`<DashboardLayout 
  sidebar={<AppSidebar />} 
  topbar={<Topbar />}
>
  <YourContent />
</DashboardLayout>`}
                  />
                </div>
              </CardContent>
            </Card>

            {/* AppSidebar */}
            <Card className="bmj-card-hover bmj-border-border-50">
              <CardHeader>
                <div className="bmj-flex bmj-items-center bmj-justify-between">
                  <CardTitle>AppSidebar</CardTitle>
                  <Badge variant="secondary">Navigation</Badge>
                </div>
                <CardDescription>
                  A collapsible, fully customizable sidebar with nested
                  navigation.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-space-y-6">
                <div className="bmj-h-full bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-background bmj-flex">
                  <div className="bmj-w-16 bmj-border-r bmj-border-border-50 bmj-p-3 bmj-space-y-4">
                    <div className="bmj-w-full bmj-aspect-square bmj-rounded bmj-bg-primary-10" />
                    <div className="bmj-w-full bmj-aspect-square bmj-rounded bmj-bg-muted" />
                    <div className="bmj-w-full bmj-aspect-square bmj-rounded bmj-bg-muted" />
                  </div>
                  <div className="bmj-flex-1 bmj-p-4">
                    <div className="bmj-h-4 bmj-w-24 bmj-bg-muted bmj-rounded bmj-mb-4" />
                    <div className="bmj-space-y-2">
                      <div className="bmj-h-8 bmj-w-full bmj-bg-primary-5 bmj-rounded bmj-border bmj-border-primary-10" />
                      <div className="bmj-h-8 bmj-w-full bmj-bg-muted-30 bmj-rounded" />
                    </div>
                  </div>
                </div>
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-xs bmj-leading-relaxed bmj-overflow-x-auto bmj-relative bmj-group bmj-w-full bmj-max-w-full">
                  <pre className="bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">{`<AppSidebar 
  items={navigationItems} 
  activeItem="Dashboard" 
/>`}</pre>
                  <CopyButton
                    text={`<AppSidebar 
  items={navigationItems} 
  activeItem="Dashboard" 
/>`}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Topbar */}
            <Card className="bmj-card-hover bmj-border-border-50 bmj-lg-col-span-2">
              <CardHeader>
                <div className="bmj-flex bmj-items-center bmj-justify-between">
                  <CardTitle>Topbar</CardTitle>
                  <Badge variant="secondary">Header</Badge>
                </div>
                <CardDescription>
                  A responsive header component with search, notifications, and
                  user profile.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-space-y-6">
                <div className="bmj-h-16 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-background-50 bmj-flex bmj-items-center bmj-px-6 bmj-justify-between">
                  <div className="bmj-flex bmj-items-center bmj-gap-4">
                    <PanelLeft className="bmj-icon-md bmj-text-muted" />
                    <div className="bmj-md-flex bmj-items-center bmj-gap-2 bmj-px-3 bmj-py-1-5 bmj-rounded-xl bmj-bg-muted-50 bmj-border bmj-border-border-50 bmj-w-64">
                      <Search className="bmj-icon-sm bmj-text-muted" />
                      <span className="bmj-text-xs bmj-text-muted">
                        Search...
                      </span>
                    </div>
                  </div>
                  <div className="bmj-flex bmj-items-center bmj-gap-4">
                    <Bell className="bmj-icon-md bmj-text-muted" />
                    <div className="bmj-w-8 bmj-h-8 bmj-rounded-full bmj-bg-primary-10 bmj-border bmj-border-primary-20" />
                  </div>
                </div>
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-xs bmj-leading-relaxed bmj-overflow-x-auto bmj-relative bmj-group bmj-w-full bmj-max-w-full">
                  <pre className="bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">{`<Topbar 
  user={currentUser} 
  onSearch={(q) => console.log(q)} 
/>`}</pre>
                  <CopyButton
                    text={`<Topbar 
  user={currentUser} 
  onSearch={(q) => console.log(q)} 
/>`}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Base Components */}
        <section className="bmj-space-y-10">
          <div className="bmj-flex bmj-items-center bmj-gap-3 bmj-border-b bmj-border-border-50 bmj-pb-4">
            <Box className="bmj-icon-lg bmj-text-primary" />
            <h2 className="bmj-text-2xl bmj-font-bold">Base Components</h2>
          </div>

          <div className="bmj-grid bmj-grid-cols-1 bmj-md-grid-cols-2 bmj-gap-8">
            {/* Buttons & Badges */}
            <Card className="bmj-border-border-50">
              <CardHeader>
                <CardTitle>Buttons & Badges</CardTitle>
                <CardDescription>
                  Essential interactive elements with multiple variants.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-space-y-6">
                <div className="bmj-flex bmj-flex-wrap bmj-gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="bmj-flex bmj-flex-wrap bmj-gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Inputs & Selects */}
            <Card className="bmj-border-border-50">
              <CardHeader>
                <CardTitle>Inputs & Selection</CardTitle>
                <CardDescription>
                  Form elements for data entry and selection.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-space-y-6">
                <div className="bmj-space-y-2">
                  <label className="bmj-text-xs bmj-font-medium bmj-text-muted">
                    Search Input
                  </label>
                  <div className="bmj-relative">
                    <Search className="bmj-absolute bmj-left-3 bmj-top-1/2 bmj-translate-y-[-50%] bmj-icon-sm bmj-text-muted" />
                    <Input placeholder="Search..." className="bmj-pl-10" />
                  </div>
                </div>
                <div className="bmj-space-y-2">
                  <label className="bmj-text-xs bmj-font-medium bmj-text-muted">
                    Select Menu
                  </label>
                  <Select defaultValue="apple">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Tabs & Navigation */}
            <Card className="bmj-border-border-50">
              <CardHeader>
                <CardTitle>Tabs & Navigation</CardTitle>
                <CardDescription>
                  Organize content into multiple views.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="account" className="bmj-w-full">
                  <TabsList className="bmj-grid bmj-grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="account"
                    className="bmj-p-4 bmj-border bmj-rounded-xl bmj-mt-2 bmj-bg-muted-10"
                  >
                    Manage your account settings here.
                  </TabsContent>
                  <TabsContent
                    value="password"
                    className="bmj-p-4 bmj-border bmj-rounded-xl bmj-mt-2 bmj-bg-muted-10"
                  >
                    Change your password here.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Tables & Lists */}
            <Card className="bmj-border-border-50">
              <CardHeader>
                <CardTitle>Tables & Lists</CardTitle>
                <CardDescription>
                  Display tabular data with consistent styling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bmj-rounded-xl bmj-border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bmj-w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="bmj-text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="bmj-font-medium">
                          INV001
                        </TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell className="bmj-text-right">
                          $250.00
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="bmj-font-medium">
                          INV002
                        </TableCell>
                        <TableCell>Pending</TableCell>
                        <TableCell className="bmj-text-right">
                          $150.00
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Feedback & Overlays */}
            <Card className="bmj-border-border-50">
              <CardHeader>
                <CardTitle>Feedback & Overlays</CardTitle>
                <CardDescription>
                  Modals, dropdowns, and loading states.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-flex bmj-flex-wrap bmj-gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button variant="outline">
                        Open Menu{" "}
                        <ChevronDown className="bmj-ml-2 bmj-icon-sm" />
                      </Button>
                    }
                  />
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button variant="outline" size="icon">
                          <Eye className="bmj-icon-sm" />
                        </Button>
                      }
                    />
                    <TooltipContent>
                      <p>View Details</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Sheet>
                  <SheetTrigger
                    render={<Button variant="outline">Open Sheet</Button>}
                  />
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Sheet Content</SheetTitle>
                      <SheetDescription>
                        This is a slide-out panel for additional information.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <div className="bmj-flex bmj-items-center bmj-gap-3 bmj-flex-1 bmj-min-w-[200px]">
                  <Skeleton className="bmj-h-10 bmj-w-10 bmj-rounded-full" />
                  <div className="bmj-space-y-2 bmj-flex-1">
                    <Skeleton className="bmj-h-4 bmj-w-full" />
                    <Skeleton className="bmj-h-4 bmj-w-[80%]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Separators & Layout */}
            <Card className="bmj-border-border-50">
              <CardHeader>
                <CardTitle>Separators & Layout</CardTitle>
                <CardDescription>
                  Visual dividers and layout primitives.
                </CardDescription>
              </CardHeader>
              <CardContent className="bmj-space-y-4">
                <div className="bmj-space-y-1">
                  <h4 className="bmj-text-sm bmj-font-medium bmj-leading-none">
                    BMJ UI
                  </h4>
                  <p className="bmj-text-sm bmj-text-muted">
                    A professional dashboard kit.
                  </p>
                </div>
                <Separator className="bmj-my-4" />
                <div className="bmj-flex bmj-h-5 bmj-items-center bmj-gap-4 bmj-text-sm">
                  <div>Blog</div>
                  <Separator orientation="vertical" />
                  <div>Docs</div>
                  <Separator orientation="vertical" />
                  <div>Source</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Display Components */}
        <section className="bmj-space-y-10">
          <div className="bmj-flex bmj-items-center bmj-gap-3 bmj-border-b bmj-border-border-50 bmj-pb-4">
            <BarChart3 className="bmj-icon-lg bmj-text-primary" />
            <h2 className="bmj-text-2xl bmj-font-bold">Data Visualization</h2>
          </div>

          <div className="bmj-space-y-12">
            {/* StatCard */}
            <div className="bmj-grid bmj-grid-cols-1 bmj-lg-col-span-3 bmj-gap-12 bmj-items-start">
              <div className="bmj-space-y-4">
                <h3 className="bmj-text-xl bmj-font-bold">StatCard</h3>
                <p className="bmj-text-muted">
                  Displays key performance indicators with optional trend
                  indicators and icons.
                </p>
                <ul className="bmj-space-y-2 bmj-text-sm bmj-text-muted">
                  <li className="bmj-flex bmj-items-center bmj-gap-2">
                    <Zap className="bmj-icon-xs bmj-text-primary" /> Built-in
                    loading states
                  </li>
                  <li className="bmj-flex bmj-items-center bmj-gap-2">
                    <Zap className="bmj-icon-xs bmj-text-primary" /> Trend
                    direction support
                  </li>
                  <li className="bmj-flex bmj-items-center bmj-gap-2">
                    <Zap className="bmj-icon-xs bmj-text-primary" /> Custom icon
                    support
                  </li>
                </ul>
              </div>
              <div className="bmj-lg-col-span-2 bmj-grid bmj-grid-cols-1 bmj-md-grid-cols-2 bmj-gap-6">
                <StatCard
                  title="Total Revenue"
                  value="$128,430"
                  trend={{ value: 14.2, isPositive: true }}
                  icon={DollarSign}
                  description="vs last month"
                />
                <StatCard
                  title="Total Revenue"
                  value="$128,430"
                  loading={true}
                />
              </div>
            </div>

            {/* ChartCard */}
            <div className="bmj-grid bmj-grid-cols-1 bmj-lg-col-span-3 bmj-gap-12 bmj-items-start">
              <div className="bmj-space-y-4">
                <h3 className="bmj-text-xl bmj-font-bold">ChartCard</h3>
                <p className="bmj-text-muted">
                  A wrapper for Recharts that provides consistent styling,
                  tooltips, and loading states. Supports multiple chart types.
                </p>
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-xs bmj-leading-relaxed bmj-overflow-hidden bmj-relative bmj-group bmj-w-full bmj-max-w-full">
                  <pre className="bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">{`<ChartCard 
  title="Sales Overview" 
  data={data} 
  dataKey="amount" 
  categoryKey="date" 
  type="bar" // "area" | "bar" | "line"
/>`}</pre>
                  <CopyButton
                    text={`<ChartCard 
  title="Sales Overview" 
  data={data} 
  dataKey="amount" 
  categoryKey="date" 
  type="bar" // "area" | "bar" | "line"
/>`}
                  />
                </div>
              </div>
              <div className="bmj-lg-col-span-2 bmj-space-y-6">
                <div className="bmj-grid bmj-grid-cols-1 bmj-md-grid-cols-2 bmj-gap-6">
                  <ChartCard
                    title="Area Chart"
                    data={chartData}
                    dataKey="value"
                    categoryKey="name"
                    type="area"
                  />
                  <ChartCard
                    title="Bar Chart"
                    data={chartData}
                    dataKey="value"
                    categoryKey="name"
                    type="bar"
                    color="var(--chart-2, #22c55e)"
                  />
                  <ChartCard
                    title="Line Chart"
                    data={chartData}
                    dataKey="value"
                    categoryKey="name"
                    type="line"
                    color="var(--chart-3, #f59e0b)"
                  />
                  <ChartCard
                    title="Scatter Plot"
                    data={[
                      { x: 10, y: 30 },
                      { x: 20, y: 50 },
                      { x: 30, y: 40 },
                      { x: 40, y: 80 },
                      { x: 50, y: 60 },
                      { x: 60, y: 90 },
                    ]}
                    dataKey="y"
                    categoryKey="x"
                    type="scatter"
                    color="var(--chart-4, #8b5cf6)"
                  />
                  <ChartCard
                    title="Loading State"
                    data={[]}
                    dataKey="value"
                    categoryKey="name"
                    loading={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design System */}
        <section className="bmj-space-y-10">
          <div className="bmj-flex bmj-items-center bmj-gap-3 bmj-border-b bmj-border-border-50 bmj-pb-4">
            <Palette className="bmj-icon-lg bmj-text-primary" />
            <h2 className="bmj-text-2xl bmj-font-bold">Design System</h2>
          </div>

          <div className="bmj-grid bmj-grid-cols-1 bmj-md-grid-cols-3 bmj-gap-12">
            <div className="bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-2">
                <div className="bmj-w-2 bmj-h-6 bmj-bg-primary bmj-rounded-full" />
                <h3 className="bmj-font-bold">Typography</h3>
              </div>
              <div className="bmj-space-y-4 bmj-p-6 bmj-rounded-2xl bmj-border bmj-border-border-50 bmj-bg-muted-10">
                <div className="bmj-space-y-1">
                  <p className="bmj-text-xs bmj-font-bold bmj-text-muted bmj-uppercase bmj-tracking-widest">
                    Display
                  </p>
                  <p className="bmj-text-2xl bmj-font-bold bmj-tracking-tight">
                    Inter Bold
                  </p>
                </div>
                <div className="bmj-space-y-1">
                  <p className="bmj-text-xs bmj-font-bold bmj-text-muted bmj-uppercase bmj-tracking-widest">
                    Body
                  </p>
                  <p className="bmj-text-sm bmj-text-muted bmj-leading-relaxed">
                    Designed for readability in data-heavy interfaces.
                  </p>
                </div>
                <div className="bmj-space-y-1">
                  <p className="bmj-text-xs bmj-font-bold bmj-text-muted bmj-uppercase bmj-tracking-widest">
                    Data
                  </p>
                  <p className="bmj-text-sm bmj-font-mono">JetBrains Mono</p>
                </div>
              </div>
            </div>

            <div className="bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-2">
                <div className="bmj-w-2 bmj-h-6 bmj-bg-primary bmj-rounded-full" />
                <h3 className="bmj-font-bold">Color Palette</h3>
              </div>
              <div className="bmj-grid bmj-grid-cols-2 bmj-gap-3">
                {[
                  { name: "Primary", class: "bmj-bg-primary" },
                  { name: "Secondary", class: "bmj-bg-secondary" },
                  { name: "Muted", class: "bmj-bg-muted" },
                  { name: "Accent", class: "bmj-bg-accent" },
                  { name: "Border", class: "bmj-bg-border" },
                  {
                    name: "Card",
                    class: "bmj-bg-card bmj-border bmj-border-border-50",
                  },
                ].map((color) => (
                  <div key={color.name} className="bmj-space-y-2">
                    <div
                      className={cn("bmj-h-12 bmj-rounded-xl", color.class)}
                    />
                    <p className="bmj-text-xs bmj-font-bold bmj-text-muted bmj-uppercase bmj-text-center">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-2">
                <div className="bmj-w-2 bmj-h-6 bmj-bg-primary bmj-rounded-full" />
                <h3 className="bmj-font-bold">Interactions</h3>
              </div>
              <div className="bmj-space-y-4">
                <div className="bmj-p-8 bmj-rounded-2xl bmj-border bmj-border-border-50 bmj-bg-card bmj-card-hover bmj-flex bmj-items-center bmj-justify-center bmj-text-sm bmj-font-medium">
                  Hover for elevation
                </div>
                <div className="bmj-flex bmj-gap-3">
                  <Button size="sm" className="bmj-flex-1">
                    Primary
                  </Button>
                  <Button variant="outline" size="sm" className="bmj-flex-1">
                    Outline
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bmj-relative bmj-py-24 bmj-rounded-2xl bmj-bg-primary bmj-text-primary-foreground bmj-overflow-hidden">
          <div className="bmj-absolute bmj-top-0 bmj-right-0 bmj-w-64 bmj-h-64 bmj-bg-white-10 bmj-blur-100px bmj-rounded-full bmj-mr-32 bmj-mt-32" />
          <div className="bmj-absolute bmj-bottom-0 bmj-left-0 bmj-w-64 bmj-h-64 bmj-bg-black-10 bmj-blur-100px bmj-rounded-full bmj-ml-32 bmj-mb-32" />

          <div className="bmj-relative bmj-max-w-2xl bmj-mx-auto bmj-text-center bmj-px-6">
            <h2 className="bmj-text-4xl bmj-font-bold bmj-mb-6">
              Start building your dashboard today.
            </h2>
            <p className="bmj-text-xl bmj-text-primary-foreground-80 bmj-mb-10">
              BMJ UI is open source and ready for your next big project.
            </p>
            <div className="bmj-flex bmj-flex-col bmj-sm-flex-row bmj-items-center bmj-justify-center bmj-gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onBack()}
                className="bmj-rounded-full bmj-px-10 bmj-h-14 bmj-text-lg bmj-font-semibold bmj-w-full bmj-sm-w-auto"
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bmj-rounded-full bmj-px-10 bmj-h-14 bmj-text-lg bmj-font-semibold bmj-bg-transparent bmj-border-primary-foreground-20 bmj-hover-bg-white-10 bmj-w-full bmj-sm-w-auto"
              >
                <Code2 className="bmj-mr-2 bmj-icon-md" /> View on GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bmj-py-12 bmj-border-t bmj-border-border-40 bmj-mt-20">
        <div className="bmj-max-w-7xl bmj-mx-auto bmj-px-6 bmj-flex bmj-flex-col bmj-md-flex-row bmj-items-center bmj-justify-between bmj-gap-6">
          <div className="bmj-flex bmj-items-center bmj-gap-2 bmj-font-bold bmj-text-lg bmj-tracking-tight bmj-opacity-50">
            <div className="bmj-w-6 bmj-h-6 bmj-rounded bmj-bg-foreground bmj-flex bmj-items-center bmj-justify-center bmj-text-background bmj-text-xs">
              B
            </div>
            <span>BMJ UI</span>
          </div>
          <p className="bmj-text-sm bmj-text-muted">
            Built with precision for the modern developer.
          </p>
        </div>
      </footer>
    </div>
  );
}
