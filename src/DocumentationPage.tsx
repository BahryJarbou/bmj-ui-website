import * as React from "react";
import { Button } from "./components/ui/button";
import { ThemeToggle } from "./components/ThemeToggle";
import { ScrollArea } from "./components/ui/scroll-area";
import { Separator } from "./components/ui/separator";
import {
  BookOpen,
  ChevronRight,
  Terminal,
  Palette,
  Layout,
  Zap,
  ArrowLeft,
  ExternalLink,
  Check,
  Copy,
  Code2,
} from "lucide-react";
import { motion } from "motion/react";

const sections = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", id: "intro" },
      { title: "Installation", id: "install" },
      { title: "CSS Configuration", id: "css-config" },
      { title: "Theming", id: "theming" },
    ],
  },
  {
    title: "Core Components",
    items: [
      { title: "DashboardLayout", id: "layout" },
      { title: "AppSidebar", id: "app-sidebar" },
      { title: "Topbar", id: "topbar" },
    ],
  },
  {
    title: "Base Components",
    items: [
      { title: "Button & Badge", id: "base-button" },
      { title: "Inputs & Select", id: "base-forms" },
      { title: "Table & Tabs", id: "base-data" },
      { title: "Overlays", id: "base-feedback" },
    ],
  },
  {
    title: "Data Visualization",
    items: [
      { title: "StatCard", id: "stat-card" },
      { title: "ChartCard", id: "chart-card" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Best Practices", id: "best-practices" },
      { title: "Customization", id: "customization" },
      { title: "Utilities", id: "utilities" },
      { title: "Responsiveness", id: "responsiveness" },
    ],
  },
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

export function DocumentationPage({
  onBack,
  onNavigate,
}: {
  onBack: () => void;
  onNavigate: (view: "landing" | "dashboard" | "components" | "docs") => void;
}) {
  const [activeSection, setActiveSection] = React.useState("intro");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bmj-min-h-screen bmj-bg-background bmj-flex bmj-flex-col">
      {/* Header */}
      <header className="bmj-border-b bmj-border-border-40 bmj-bg-background-60 bmj-blur-xl bmj-sticky-top-0 bmj-py-2">
        <div className="bmj-max-w-7xl bmj-mx-auto bmj-px-6 bmj-h-16 bmj-flex bmj-items-center bmj-justify-between">
          <div className="bmj-flex bmj-items-center bmj-gap-2 bmj-font-bold bmj-text-xl bmj-tracking-tight">
            <div className="bmj-w-8 bmj-h-8 bmj-rounded-xl bmj-bg-primary bmj-flex bmj-items-center bmj-justify-center bmj-text-primary-foreground">
              B
            </div>
            <span className="bmj-xs-inline">
              BMJ UI{" "}
              <span className="bmj-text-muted bmj-font-normal">
                / Documentation
              </span>
            </span>
            <span className="bmj-xs-hidden">BMJ UI</span>
          </div>
          <div className="bmj-flex bmj-items-center bmj-gap-2 bmj-gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("components")}
              className="bmj-text-xs bmj-text-sm bmj-font-medium"
            >
              Components
            </Button>
            <ThemeToggle className="bmj-rounded-full" />
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="bmj-gap-2 bmj-text-xs bmj-text-sm"
            >
              <ArrowLeft className="bmj-icon-sm" />
              <span className="bmj-xs-inline">Back to Home</span>
              <span className="bmj-xs-hidden">Back</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="bmj-flex-1 bmj-max-w-7xl bmj-mx-auto bmj-w-full bmj-flex">
        {/* Sidebar */}
        <aside className="bmj-w-64 bmj-border-r bmj-border-border-40 bmj-md-block bmj-sticky-top-16 bmj-h-full">
          <ScrollArea className="bmj-h-full bmj-p-6">
            <div className="bmj-space-y-8">
              {sections.map((section) => (
                <div key={section.title} className="bmj-space-y-3">
                  <h4 className="bmj-text-xs bmj-font-bold bmj-text-muted bmj-uppercase bmj-tracking-widest bmj-px-2">
                    {section.title}
                  </h4>
                  <div className="bmj-space-y-1">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`bmj-w-full bmj-text-left bmj-px-2 bmj-py-1-5 bmj-rounded-xl bmj-text-sm bmj-transition-all bmj-flex bmj-items-center bmj-justify-between bmj-group ${
                          activeSection === item.id
                            ? "bmj-bg-primary-10 bmj-text-primary bmj-font-medium"
                            : "bmj-text-muted bmj-hover-text-foreground bmj-hover-bg-muted"
                        }`}
                      >
                        {item.title}
                        <ChevronRight
                          className={`bmj-w-3 bmj-h-3 bmj-opacity-0 bmj-group-hover-opacity-100 bmj-transition-all ${activeSection === item.id ? "bmj-opacity-100" : ""}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Content */}
        <main className="bmj-flex-1 bmj-p-6 bmj-lg-p-12 bmj-max-w-3xl bmj-mx-auto bmj-w-full bmj-min-w-0">
          {/* Mobile Navigation */}
          <div className="bmj-md-hidden bmj-mb-8 bmj-overflow-x-auto bmj-pb-2 bmj-scrollbar-hide">
            <div className="bmj-flex bmj-gap-2 bmj-w-max">
              {sections
                .flatMap((s) => s.items)
                .map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => scrollTo(item.id)}
                    className="bmj-rounded-full bmj-text-xs"
                  >
                    {item.title}
                  </Button>
                ))}
            </div>
          </div>

          <div className="bmj-space-y-24 bmj-pb-32">
            {/* Introduction */}
            <section id="intro" className="bmj-scroll-mt-24 bmj-space-y-6">
              <h1 className="bmj-text-4xl bmj-font-bold bmj-tracking-tight">
                Introduction
              </h1>
              <p className="bmj-text-lg bmj-text-muted bmj-leading-relaxed">
                BMJ UI is a headless component library built for developers who
                need to build professional dashboards quickly without
                sacrificing design quality.
              </p>
              <div className="bmj-grid bmj-grid-cols-1 bmj-sm-grid-cols-2 bmj-gap-4 bmj-pt-4">
                <div className="bmj-p-4 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-muted-30">
                  <Zap className="bmj-w-5 bmj-h-5 bmj-text-primary bmj-mb-2" />
                  <h4 className="bmj-font-bold bmj-mb-1 bmj-text-sm">
                    Rapid Development
                  </h4>
                  <p className="bmj-text-xs bmj-text-muted">
                    Pre-built primitives for common dashboard patterns.
                  </p>
                </div>
                <div className="bmj-p-4 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-muted-30">
                  <Palette className="bmj-w-5 bmj-h-5 bmj-text-primary bmj-mb-2" />
                  <h4 className="bmj-font-bold bmj-mb-1 bmj-text-sm">
                    Highly Customizable
                  </h4>
                  <p className="bmj-text-xs bmj-text-muted">
                    Built on Tailwind CSS for easy styling and theming.
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Installation */}
            <section id="install" className="bmj-scroll-mt-24 bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Terminal className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Installation</h2>
              </div>
              <p className="bmj-text-base bmj-text-muted">
                Install the library and its peer dependencies via your preferred
                package manager.
              </p>
              <div className="bmj-space-y-4">
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-hidden bmj-w-full bmj-max-w-full">
                  <code className="bmj-text-primary bmj-whitespace-pre-wrap bmj-break-words bmj-break-all">
                    npm install bmj-ui lucide-react motion recharts
                  </code>
                  <CopyButton text="npm install bmj-ui lucide-react motion recharts" />
                </div>
                <p className="bmj-text-sm bmj-text-muted">
                  Ensure you have{" "}
                  <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                    tailwindcss
                  </code>{" "}
                  and{" "}
                  <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                    typescript
                  </code>{" "}
                  configured in your project.
                </p>
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* CSS Configuration */}
            <section id="css-config" className="bmj-scroll-mt-24 bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Code2 className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">
                  CSS Configuration
                </h2>
              </div>
              <p className="bmj-text-base bmj-text-muted">
                To include the full BMJ UI styles, simply import the CSS file in
                your main entry point (e.g.,{" "}
                <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                  main.tsx
                </code>{" "}
                or{" "}
                <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                  App.tsx
                </code>
                ).
              </p>

              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-hidden bmj-w-full bmj-max-w-full">
                <code className="bmj-text-primary bmj-whitespace-pre-wrap bmj-break-words bmj-break-all">
                  import 'bmj-ui/styles.css';
                </code>
                <CopyButton text="import 'bmj-ui/styles.css';" />
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Theming */}
            <section id="theming" className="bmj-scroll-mt-24 bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Palette className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Theming</h2>
              </div>
              <p className="bmj-text-base bmj-text-muted">
                BMJ UI uses CSS variables for theming, allowing you to easily
                match your brand colors.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all">
                  {`:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --radius: 0.625rem;
}`}
                </pre>
                <CopyButton
                  text={`:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --radius: 0.625rem;
}`}
                />
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Components: DashboardLayout */}
            <section id="layout" className="bmj-scroll-mt-24 bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Layout className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">DashboardLayout</h2>
              </div>
              <p className="bmj-text-muted">
                The core shell component that provides the sidebar and topbar
                structure.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all">
                  {`import { DashboardLayout } from "bmj-ui";

export default function App() {
  return (
    <DashboardLayout>
      <h1>Your Content</h1>
    </DashboardLayout>
  );
}`}
                </pre>
                <CopyButton
                  text={`import { DashboardLayout } from "bmj-ui";

export default function App() {
  return (
    <DashboardLayout>
      <h1>Your Content</h1>
    </DashboardLayout>
  );
}`}
                />
              </div>
            </section>

            {/* Components: AppSidebar */}
            <section
              id="app-sidebar"
              className="bmj-scroll-mt-24 bmj-space-y-6"
            >
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Layout className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">AppSidebar</h2>
              </div>
              <p className="bmj-text-muted">
                A collapsible sidebar component with support for navigation
                items, grouping, and user profiles.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all">
                  {`import { AppSidebar } from "bmj-ui";
import { LayoutDashboard, Users, Settings } from "lucide-react";

const items = [
  { title: "Dashboard", icon: LayoutDashboard, url: "#" },
  { title: "Customers", icon: Users, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
];

export default function MyLayout() {
  return (
    <AppSidebar 
      items={items} 
      activeItem="Dashboard"
      onItemClick={(title) => console.log(title)}
    />
  );
}`}
                </pre>
                <CopyButton
                  text={`import { AppSidebar } from "bmj-ui";
import { LayoutDashboard, Users, Settings } from "lucide-react";

const items = [
  { title: "Dashboard", icon: LayoutDashboard, url: "#" },
  { title: "Customers", icon: Users, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
];

export default function MyLayout() {
  return (
    <AppSidebar 
      items={items} 
      activeItem="Dashboard"
      onItemClick={(title) => console.log(title)}
    />
  );
}`}
                />
              </div>
              <div className="bmj-space-y-4">
                <h4 className="bmj-font-bold bmj-text-sm">Props</h4>
                <div className="bmj-overflow-x-auto">
                  <table className="bmj-w-full bmj-text-sm bmj-text-left bmj-border-collapse">
                    <thead>
                      <tr className="bmj-border-b bmj-border-border">
                        <th className="bmj-py-2 bmj-pr-4 bmj-font-bold">
                          Prop
                        </th>
                        <th className="bmj-py-2 bmj-pr-4 bmj-font-bold">
                          Type
                        </th>
                        <th className="bmj-py-2 bmj-font-bold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bmj-text-muted">
                      <tr className="bmj-border-b bmj-border-border-50">
                        <td className="bmj-py-2 bmj-pr-4 bmj-font-mono bmj-text-primary">
                          items
                        </td>
                        <td className="bmj-py-2 bmj-pr-4 bmj-font-mono bmj-text-xs">
                          SidebarItem[]
                        </td>
                        <td className="bmj-py-2">
                          Array of navigation items with title, icon, and url.
                        </td>
                      </tr>
                      <tr className="bmj-border-b bmj-border-border-50">
                        <td className="bmj-py-2 bmj-pr-4 bmj-font-mono bmj-text-primary">
                          activeItem
                        </td>
                        <td className="bmj-py-2 bmj-pr-4 bmj-font-mono bmj-text-xs">
                          string
                        </td>
                        <td className="bmj-py-2">
                          The title of the currently active navigation item.
                        </td>
                      </tr>
                      <tr>
                        <td className="bmj-py-2 bmj-pr-4 bmj-font-mono bmj-text-primary">
                          onItemClick
                        </td>
                        <td className="bmj-py-2 bmj-pr-4 bmj-font-mono bmj-text-xs">
                          (title: string) =&gt; void
                        </td>
                        <td className="bmj-py-2">
                          Callback function triggered when an item is clicked.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Components: StatCard */}
            <section id="stat-card" className="bmj-scroll-mt-24 bmj-space-y-6">
              <h2 className="bmj-text-3xl bmj-font-bold">StatCard</h2>
              <p className="bmj-text-muted">
                A component for displaying key performance indicators (KPIs).
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                  {`<StatCard 
  title="Total Sales" 
  value="1,234" 
  trend={{ value: 12, isPositive: true }}
  icon={ShoppingCart}
/>`}
                </pre>
                <CopyButton
                  text={`<StatCard 
  title="Total Sales" 
  value="1,234" 
  trend={{ value: 12, isPositive: true }}
  icon={ShoppingCart}
/>`}
                />
              </div>
            </section>

            {/* Components: ChartCard */}
            <section id="chart-card" className="bmj-scroll-mt-24 bmj-space-y-6">
              <h2 className="bmj-text-3xl bmj-font-bold">ChartCard</h2>
              <p className="bmj-text-muted">
                A versatile chart wrapper supporting multiple visualization
                types.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                  {`<ChartCard 
  title="Revenue Growth" 
  data={data} 
  dataKey="value" 
  categoryKey="name" 
  type="area" // "area" | "bar" | "line" | "scatter"
  color="var(--primary)"
/>`}
                </pre>
                <CopyButton
                  text={`<ChartCard 
  title="Revenue Growth" 
  data={data} 
  dataKey="value" 
  categoryKey="name" 
  type="area" // "area" | "bar" | "line" | "scatter"
  color="var(--primary)"
/>`}
                />
              </div>
              <div className="bmj-space-y-4">
                <h4 className="bmj-font-bold bmj-text-sm">Props</h4>
                <ul className="bmj-space-y-2 bmj-text-sm bmj-text-muted bmj-list-disc bmj-pl-6">
                  <li>
                    <code className="bmj-text-primary">type</code>: The
                    visualization style. Defaults to "area". Use "scatter" for
                    relationship mapping.
                  </li>
                  <li>
                    <code className="bmj-text-primary">data</code>: Array of
                    objects containing the chart data.
                  </li>
                  <li>
                    <code className="bmj-text-primary">dataKey</code>: The key
                    in the data objects for the Y-axis values.
                  </li>
                  <li>
                    <code className="bmj-text-primary">categoryKey</code>: The
                    key in the data objects for the X-axis labels.
                  </li>
                </ul>
              </div>
            </section>

            {/* Components: Topbar */}
            <section id="topbar" className="bmj-scroll-mt-24 bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Layout className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Topbar</h2>
              </div>
              <p className="bmj-text-muted">
                A sticky header component that provides global search,
                notifications, theme toggling, and user account management.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                  {`import { Topbar } from "bmj-ui";

export default function MyLayout() {
  return (
    <div className="bmj-flex bmj-flex-col bmj-min-h-screen">
      <Topbar />
      <main className="bmj-flex-1 bmj-p-6">
        {/* Your content */}
      </main>
    </div>
  );
}`}
                </pre>
                <CopyButton
                  text={`import { Topbar } from "bmj-ui";

export default function MyLayout() {
  return (
    <div className="bmj-flex bmj-flex-col bmj-min-h-screen">
      <Topbar />
      <main className="bmj-flex-1 bmj-p-6">
        {/* Your content */}
      </main>
    </div>
  );
}`}
                />
              </div>
              <div className="bmj-space-y-4">
                <h4 className="bmj-font-bold bmj-text-sm">Features</h4>
                <ul className="bmj-space-y-2 bmj-text-sm bmj-text-muted bmj-list-disc bmj-pl-6">
                  <li>
                    <span className="bmj-text-foreground bmj-font-medium">
                      Responsive Search
                    </span>
                    : Hidden on mobile, accessible via icon.
                  </li>
                  <li>
                    <span className="bmj-text-foreground bmj-font-medium">
                      Theme Toggle
                    </span>
                    : Integrated support for light and dark modes.
                  </li>
                  <li>
                    <span className="bmj-text-foreground bmj-font-medium">
                      User Menu
                    </span>
                    : Comprehensive dropdown for profile, billing, and settings.
                  </li>
                  <li>
                    <span className="bmj-text-foreground bmj-font-medium">
                      Backdrop Blur
                    </span>
                    : Uses glassmorphism effects for a modern feel.
                  </li>
                </ul>
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Base Components */}
            <section
              id="base-button"
              className="bmj-scroll-mt-24 bmj-space-y-6"
            >
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Layout className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Button & Badge</h2>
              </div>
              <p className="bmj-text-muted">
                Standard interactive elements with multiple variants for
                different contexts.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                  {`import { Button, Badge } from "bmj-ui";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Click me</Button>
      <Badge variant="secondary">New</Badge>
    </div>
  );
}`}
                </pre>
                <CopyButton
                  text={`import { Button, Badge } from "bmj-ui";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Click me</Button>
      <Badge variant="secondary">New</Badge>
    </div>
  );
}`}
                />
              </div>
            </section>

            <section id="base-forms" className="bmj-scroll-mt-24 bmj-space-y-6">
              <h2 className="bmj-text-3xl bmj-font-bold">Inputs & Select</h2>
              <p className="bmj-text-muted">
                Form components for collecting user input with consistent
                styling.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                  {`import { Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "bmj-ui";

export default function FormExample() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter name..." />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}
                </pre>
                <CopyButton
                  text={`import { Input, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "bmj-ui";

export default function FormExample() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter name..." />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Option 1</SelectItem>
          <SelectItem value="2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`}
                />
              </div>
            </section>

            <section id="base-data" className="bmj-scroll-mt-24 bmj-space-y-6">
              <h2 className="bmj-text-3xl bmj-font-bold">Table & Tabs</h2>
              <p className="bmj-text-muted">
                Components for organizing and displaying structured data.
              </p>
              <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-hidden bmj-w-full bmj-max-w-full">
                <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                  {`import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Tabs, TabsList, TabsTrigger, TabsContent } from "bmj-ui";

export default function DataExample() {
  return (
    <Tabs defaultValue="table">
      <TabsList>
        <TabsTrigger value="table">Table View</TabsTrigger>
        <TabsTrigger value="info">Info</TabsTrigger>
      </TabsList>
      <TabsContent value="table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}`}
                </pre>
                <CopyButton
                  text={`import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Tabs, TabsList, TabsTrigger, TabsContent } from "bmj-ui";

export default function DataExample() {
  return (
    <Tabs defaultValue="table">
      <TabsList>
        <TabsTrigger value="table">Table View</TabsTrigger>
        <TabsTrigger value="info">Info</TabsTrigger>
      </TabsList>
      <TabsContent value="table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}`}
                />
              </div>
            </section>

            <section
              id="base-feedback"
              className="bmj-scroll-mt-24 bmj-space-y-6"
            >
              <h2 className="bmj-text-3xl bmj-font-bold">
                Overlays & Feedback
              </h2>
              <p className="bmj-text-muted">
                Dialogs, sheets, tooltips, and dropdown menus for contextual
                actions and information.
              </p>
              <div className="bmj-space-y-8">
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-hidden bmj-w-full bmj-max-w-full">
                  <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                    {`import { 
  Dialog, 
  Sheet, 
  Tooltip, 
  DropdownMenu,
  Skeleton 
} from "bmj-ui";

export default function OverlayExample() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Helpful info">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
      
      <Sheet>
        <SheetTrigger>Open Sidebar</SheetTrigger>
        <SheetContent side="left">
          Navigation content...
        </SheetContent>
      </Sheet>
    </div>
  );
}`}
                  </pre>
                  <CopyButton
                    text={`import { 
  Dialog, 
  Sheet, 
  Tooltip, 
  DropdownMenu,
  Skeleton 
} from "bmj-ui";

export default function OverlayExample() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Helpful info">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
      
      <Sheet>
        <SheetTrigger>Open Sidebar</SheetTrigger>
        <SheetContent side="left">
          Navigation content...
        </SheetContent>
      </Sheet>
    </div>
  );
}`}
                  />
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section
              id="best-practices"
              className="bmj-scroll-mt-24 bmj-space-y-6"
            >
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <BookOpen className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Best Practices</h2>
              </div>
              <ul className="bmj-space-y-4 bmj-text-muted bmj-list-disc bmj-pl-6">
                <li>
                  Use{" "}
                  <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                    StatCard
                  </code>{" "}
                  for high-level metrics at the top of the page.
                </li>
                <li>
                  Keep sidebar navigation items between 5-8 for optimal
                  scannability.
                </li>
                <li>
                  Leverage the{" "}
                  <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                    bmj-glass
                  </code>{" "}
                  utility for floating UI elements.
                </li>
                <li>
                  Ensure all charts have clear labels and accessible color
                  contrasts.
                </li>
                <li>
                  Use{" "}
                  <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                    overflow-x-auto
                  </code>{" "}
                  on table containers to ensure mobile compatibility.
                </li>
              </ul>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Customization */}
            <section
              id="customization"
              className="bmj-scroll-mt-24 bmj-space-y-6"
            >
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Palette className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Customization</h2>
              </div>
              <p className="bmj-text-muted">
                BMJ UI is designed to be highly flexible. You can customize
                components through Tailwind classes, CSS variables, or by
                wrapping them in your own logic.
              </p>
              <div className="bmj-space-y-8">
                <div className="bmj-space-y-4">
                  <h4 className="bmj-font-bold bmj-text-lg">
                    1. Overriding Styles
                  </h4>
                  <p className="bmj-text-sm bmj-text-muted">
                    Most components accept a{" "}
                    <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                      className
                    </code>{" "}
                    prop that merges with internal styles using{" "}
                    <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                      tailwind-merge
                    </code>
                    .
                  </p>
                  <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-font-mono bmj-text-sm bmj-border bmj-border-border-50 bmj-relative bmj-group bmj-overflow-x-auto bmj-w-full bmj-max-w-full">
                    <pre className="bmj-text-xs bmj-leading-relaxed bmj-whitespace-pre-wrap bmj-break-words bmj-break-all bmj-max-w-full">
                      {`<StatCard 
  title="Revenue" 
  value="$12k" 
  className="bg-primary text-primary-foreground border-none shadow-xl"
/>`}
                    </pre>
                    <CopyButton
                      text={`<StatCard 
  title="Revenue" 
  value="$12k" 
  className="bg-primary text-primary-foreground border-none shadow-xl"
/>`}
                    />
                  </div>
                </div>

                <div className="bmj-space-y-4">
                  <h4 className="bmj-font-bold bmj-text-lg">
                    2. Component Composition
                  </h4>
                  <p className="bmj-text-sm bmj-text-muted">
                    Since BMJ UI is built on top of Base UI and Tailwind, you
                    can easily compose new components by combining existing
                    primitives.
                  </p>
                  <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-border bmj-border-border-50 bmj-space-y-4">
                    <h5 className="bmj-font-bold bmj-text-sm">Pro Tip</h5>
                    <p className="bmj-text-xs bmj-text-muted">
                      Use the{" "}
                      <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                        bmj-glass
                      </code>{" "}
                      utility class to quickly create consistent floating panels
                      that match the library's aesthetic.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Utilities */}
            <section id="utilities" className="bmj-scroll-mt-24 bmj-space-y-6">
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Zap className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Utilities</h2>
              </div>
              <p className="bmj-text-muted">
                BMJ UI includes several custom Tailwind utilities to speed up
                your development.
              </p>
              <div className="bmj-grid bmj-grid-cols-1 bmj-sm-grid-cols-2 bmj-gap-6">
                <div className="bmj-p-6 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-card bmj-space-y-2">
                  <h4 className="bmj-font-bold bmj-text-sm">.bmj-glass</h4>
                  <p className="bmj-text-xs bmj-text-muted">
                    Applies a frosted glass effect with backdrop blur and subtle
                    borders.
                  </p>
                </div>
                <div className="bmj-p-6 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-card bmj-space-y-2">
                  <h4 className="bmj-font-bold bmj-text-sm">.bmj-card-hover</h4>
                  <p className="bmj-text-xs bmj-text-muted">
                    Adds smooth elevation and translation on hover for
                    interactive cards.
                  </p>
                </div>
                <div className="bmj-p-6 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-card bmj-space-y-2">
                  <h4 className="bmj-font-bold bmj-text-sm">
                    .bmj-gradient-text
                  </h4>
                  <p className="bmj-text-xs bmj-text-muted">
                    Creates a professional gradient effect for large headings.
                  </p>
                </div>
                <div className="bmj-p-6 bmj-rounded-xl bmj-border bmj-border-border-50 bmj-bg-card bmj-space-y-2">
                  <h4 className="bmj-font-bold bmj-text-sm">.scrollbar-hide</h4>
                  <p className="bmj-text-xs bmj-text-muted">
                    Hides scrollbars while maintaining scroll functionality
                    (useful for mobile tabs).
                  </p>
                </div>
              </div>
            </section>

            <Separator className="bmj-opacity-50" />

            {/* Responsiveness */}
            <section
              id="responsiveness"
              className="bmj-scroll-mt-24 bmj-space-y-6"
            >
              <div className="bmj-flex bmj-items-center bmj-gap-3">
                <Layout className="bmj-icon-lg bmj-text-primary" />
                <h2 className="bmj-text-3xl bmj-font-bold">Responsiveness</h2>
              </div>
              <p className="bmj-text-muted">
                BMJ UI is built with a mobile-first approach. We've added a
                custom breakpoint for finer control.
              </p>
              <div className="bmj-space-y-4">
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-border bmj-border-border-50">
                  <h4 className="bmj-font-bold bmj-text-sm bmj-mb-2">
                    Custom Breakpoint: xs
                  </h4>
                  <p className="bmj-text-sm bmj-text-muted">
                    Defined at{" "}
                    <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                      480px
                    </code>
                    . Use <code className="bmj-xs-inline">xs:</code> prefix for
                    ultra-mobile optimizations.
                  </p>
                </div>
                <div className="bmj-p-4 bmj-rounded-xl bmj-bg-muted-50 bmj-border bmj-border-border-50">
                  <h4 className="bmj-font-bold bmj-text-sm bmj-mb-2">
                    Table Responsiveness
                  </h4>
                  <p className="bmj-text-sm bmj-text-muted">
                    Wrap your{" "}
                    <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                      Table
                    </code>{" "}
                    components in a{" "}
                    <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                      div
                    </code>{" "}
                    with{" "}
                    <code className="bmj-bg-muted bmj-px-1 bmj-rounded">
                      className="bmj-overflow-x-auto"
                    </code>{" "}
                    to ensure they don't break layouts on small screens.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
