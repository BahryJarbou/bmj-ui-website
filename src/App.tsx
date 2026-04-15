import * as React from "react";
import { DashboardLayout, StatCard, ChartCard } from "./components/bmj-ui/";
import { ComponentsPage } from "./ComponentsPage";
import { DocumentationPage } from "./DocumentationPage";
import { ThemeToggle } from "./components/ThemeToggle";
import {
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  ArrowRight,
  Code2,
  Palette,
  Zap,
  Layout,
  Layers,
  BarChart3,
  HelpCircle,
  Component,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ListTodo,
  Calendar,
  Clock,
  Trash2,
  Edit2,
  Plus,
  CheckCircle2,
  Circle,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { motion } from "motion/react";
import { Toaster, toast } from "sonner";
import { cn } from "./lib/utils";

const chartData: ChartDataItem[] = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
];

const recentOrders = [
  {
    id: "ORD001",
    customer: "Alice Johnson",
    product: "BMJ Pro License",
    amount: "$299.00",
    status: "Completed",
  },
  {
    id: "ORD002",
    customer: "Bob Smith",
    product: "UI Kit Bundle",
    amount: "$149.00",
    status: "Processing",
  },
  {
    id: "ORD003",
    customer: "Charlie Brown",
    product: "Enterprise Support",
    amount: "$999.00",
    status: "Completed",
  },
  {
    id: "ORD004",
    customer: "Diana Prince",
    product: "BMJ Pro License",
    amount: "$299.00",
    status: "Pending",
  },
  {
    id: "ORD005",
    customer: "Edward Norton",
    product: "UI Kit Bundle",
    amount: "$149.00",
    status: "Completed",
  },
];

const products: Product[] = [
  {
    id: "PRD001",
    name: "BMJ Pro License",
    category: "Software",
    price: "$299.00",
    stock: "850",
    status: "In Stock",
  },
  {
    id: "PRD002",
    name: "UI Kit Bundle",
    category: "Design",
    price: "$149.00",
    stock: "120",
    status: "Low Stock",
  },
  {
    id: "PRD003",
    name: "Enterprise Support",
    category: "Service",
    price: "$999.00",
    stock: "Unlimited",
    status: "In Stock",
  },
  {
    id: "PRD004",
    name: "Custom Icons Pack",
    category: "Design",
    price: "$49.00",
    stock: "0",
    status: "Out of Stock",
  },
];

const customers: Customer[] = [
  {
    id: "CUS001",
    name: "Alice Johnson",
    email: "alice@example.com",
    spent: "$1,299.00",
    status: "Active",
  },
  {
    id: "CUS002",
    name: "Bob Smith",
    email: "bob@example.com",
    spent: "$449.00",
    status: "Inactive",
  },
  {
    id: "CUS003",
    name: "Charlie Brown",
    email: "charlie@example.com",
    spent: "$2,999.00",
    status: "Active",
  },
  {
    id: "CUS004",
    name: "Diana Prince",
    email: "diana@example.com",
    spent: "$899.00",
    status: "Active",
  },
  {
    id: "CUS005",
    name: "Edward Norton",
    email: "edward@example.com",
    spent: "$149.00",
    status: "Active",
  },
  {
    id: "CUS006",
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    spent: "$599.00",
    status: "Active",
  },
  {
    id: "CUS007",
    name: "George Costanza",
    email: "george@example.com",
    spent: "$0.00",
    status: "Inactive",
  },
];

const initialTasks: Task[] = [
  {
    id: "TSK001",
    title: "Review Q1 Financials",
    dueDate: "2026-04-15",
    priority: "High",
    completed: false,
  },
  {
    id: "TSK002",
    title: "Update Component Documentation",
    dueDate: "2026-04-12",
    priority: "Medium",
    completed: true,
  },
  {
    id: "TSK003",
    title: "Client Onboarding - Acme Corp",
    dueDate: "2026-04-20",
    priority: "High",
    completed: false,
  },
  {
    id: "TSK004",
    title: "Fix Sidebar Animation Bug",
    dueDate: "2026-04-11",
    priority: "Low",
    completed: false,
  },
];

const scatterData: ScatterDataItem[] = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 },
  { x: 120, y: 500 },
  { x: 150, y: 300 },
  { x: 180, y: 600 },
  { x: 200, y: 450 },
];

const ITEMS_PER_PAGE = 5;

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: string;
  status: string;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  spent: string;
  status: string;
}

interface Task {
  id: string;
  title: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
}

interface ChartDataItem {
  name: string;
  value: number;
}

interface ScatterDataItem {
  x: number;
  y: number;
}

interface CustomerSort {
  column: "name" | "spent";
  direction: "asc" | "desc";
}

interface ProductErrors {
  name?: string;
  price?: string;
  stock?: string;
}

interface TaskErrors {
  title?: string;
  dueDate?: string;
}

interface EditingTask {
  id?: string;
  title: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
}

export default function App() {
  const [view, setView] = React.useState<
    "landing" | "dashboard" | "components" | "docs"
  >("landing");
  const [activeTab, setActiveTab] = React.useState("overview");
  const [isLoading, setIsLoading] = React.useState(false);
  const [productList, setProductList] = React.useState<Product[]>(products);
  const [isAddProductOpen, setIsAddProductOpen] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });
  const [productErrors, setProductErrors] = React.useState<ProductErrors>({});
  const [categoryFilter, setCategoryFilter] = React.useState<string>("all");
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [productsPage, setProductsPage] = React.useState(1);
  const [customersPage, setCustomersPage] = React.useState(1);
  const [customerSort, setCustomerSort] = React.useState<CustomerSort | null>(
    null,
  );
  const [taskList, setTaskList] = React.useState<Task[]>(initialTasks);
  const [taskErrors, setTaskErrors] = React.useState<TaskErrors>({});
  const [isTaskDialogOpen, setIsTaskDialogOpen] = React.useState(false);
  const [editingTask, setEditingTask] = React.useState<EditingTask | null>(
    null,
  );

  const filteredProducts = productList.filter((product) => {
    const categoryMatch =
      categoryFilter === "all" || product.category === categoryFilter;
    const statusMatch =
      statusFilter === "all" || product.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const totalProductPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (productsPage - 1) * ITEMS_PER_PAGE,
    productsPage * ITEMS_PER_PAGE,
  );

  const sortedCustomers = React.useMemo(() => {
    if (!customerSort) return customers;

    return [...customers].sort((a, b) => {
      const column = customerSort.column;
      const valA = a[column];
      const valB = b[column];

      let comparisonA: string | number;
      let comparisonB: string | number;

      if (column === "spent") {
        comparisonA = parseFloat(valA.replace(/[$,]/g, ""));
        comparisonB = parseFloat(valB.replace(/[$,]/g, ""));
      } else {
        comparisonA = valA.toLowerCase();
        comparisonB = valB.toLowerCase();
      }

      if (comparisonA < comparisonB)
        return customerSort.direction === "asc" ? -1 : 1;
      if (comparisonA > comparisonB)
        return customerSort.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [customerSort]);

  const totalCustomerPages = Math.ceil(sortedCustomers.length / ITEMS_PER_PAGE);
  const paginatedCustomers = sortedCustomers.slice(
    (customersPage - 1) * ITEMS_PER_PAGE,
    customersPage * ITEMS_PER_PAGE,
  );

  const handleCustomerSort = (column: "name" | "spent") => {
    if (customerSort?.column === column) {
      if (customerSort.direction === "asc") {
        setCustomerSort({ column, direction: "desc" });
      } else {
        setCustomerSort(null);
      }
    } else {
      setCustomerSort({ column, direction: "asc" });
    }
  };

  React.useEffect(() => {
    setProductsPage(1);
  }, [categoryFilter, statusFilter]);

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    setProductErrors({});

    const errors: { name?: string; price?: string; stock?: string } = {};
    if (!newProduct.name.trim()) errors.name = "Product name is required";
    if (!newProduct.price || parseFloat(newProduct.price) <= 0)
      errors.price = "Price must be greater than 0";
    if (!newProduct.stock || parseInt(newProduct.stock) < 0)
      errors.stock = "Stock cannot be negative";

    if (Object.keys(errors).length > 0) {
      setProductErrors(errors);
      return;
    }

    try {
      const id = `PRD${String(productList.length + 1).padStart(3, "0")}`;
      const status =
        parseInt(newProduct.stock) > 10
          ? "In Stock"
          : parseInt(newProduct.stock) > 0
            ? "Low Stock"
            : "Out of Stock";

      setProductList([
        ...productList,
        {
          id,
          name: newProduct.name,
          category: newProduct.category || "Software",
          price: `$${parseFloat(newProduct.price).toFixed(2)}`,
          stock: newProduct.stock,
          status,
        },
      ]);

      setNewProduct({ name: "", category: "", price: "", stock: "" });
      setProductErrors({});
      setIsAddProductOpen(false);
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to add product.",
      );
    }
  };

  const handleSaveTask = (e: React.FormEvent) => {
    e.preventDefault();
    setTaskErrors({});

    const errors: { title?: string; dueDate?: string } = {};
    if (!editingTask?.title.trim()) errors.title = "Task title is required";
    if (!editingTask?.dueDate) errors.dueDate = "Due date is required";

    if (Object.keys(errors).length > 0) {
      setTaskErrors(errors);
      return;
    }

    if (editingTask.id) {
      // Edit existing
      setTaskList(
        taskList.map((t) =>
          t.id === editingTask.id ? { ...t, ...editingTask } : t,
        ),
      );
      toast.success("Task updated successfully!");
    } else {
      // Add new
      const newTask = {
        id: `TSK${String(taskList.length + 1).padStart(3, "0")}`,
        title: editingTask.title,
        dueDate: editingTask.dueDate,
        priority: editingTask.priority,
        completed: false,
      };
      setTaskList([...taskList, newTask]);
      toast.success("Task added successfully!");
    }
    setIsTaskDialogOpen(false);
    setEditingTask(null);
  };

  const handleToggleTask = (id: string) => {
    setTaskList(
      taskList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const handleDeleteTask = (id: string) => {
    setTaskList(taskList.filter((t) => t.id !== id));
    toast.success("Task deleted.");
  };

  React.useEffect(() => {
    if (view === "dashboard") {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [view]);

  if (view === "components") {
    return (
      <ComponentsPage onBack={() => setView("landing")} onNavigate={setView} />
    );
  }

  if (view === "docs") {
    return (
      <DocumentationPage
        onBack={() => setView("landing")}
        onNavigate={setView}
      />
    );
  }

  if (view === "landing") {
    return (
      <div className="bmj-landing-wrapper">
        <Toaster position="top-right" richColors />
        {/* Navigation */}
        <nav className="bmj-nav">
          <div className="bmj-nav-container">
            <div className="bmj-nav-logo">
              <div className="bmj-nav-logo-icon">B</div>
              <span>BMJ UI</span>
            </div>
            <div className="bmj-nav-links-wrapper">
              <div className="bmj-nav-links-desktop">
                <button
                  onClick={() => setView("components")}
                  className="bmj-nav-link"
                >
                  Components
                </button>
                <button
                  onClick={() => setView("docs")}
                  className="bmj-nav-link"
                >
                  Documentation
                </button>
              </div>

              {/* Mobile Nav Links (visible only on very small screens) */}
              <div className="bmj-nav-links-mobile">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setView("components")}
                  className="bmj-nav-link-mobile"
                >
                  Components
                </Button>
              </div>

              <Button
                onClick={() => setView("dashboard")}
                size="sm"
                className="bmj-nav-demo-button"
              >
                Live Demo
              </Button>
              <ThemeToggle className="bmj-nav-theme-toggle" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bmj-hero">
          <div className="bmj-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="bmj-hero-badge">
                v1.0.0 is now live
              </Badge>
              <h1 className="bmj-hero-title">
                Build dashboards <br className="hidden sm:block" /> at the speed
                of thought.
              </h1>
              <p className="bmj-hero-description">
                A headless component library meticulously crafted for rapid
                dashboard development. Professional, polished, and ready for
                production.
              </p>
              <div className="bmj-hero-actions">
                <Button
                  onClick={() => setView("dashboard")}
                  size="lg"
                  className="bmj-hero-button-primary"
                >
                  Get Started <ArrowRight className="bmj-icon-sm bmj-ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setView("docs")}
                  className="bmj-hero-button-secondary"
                >
                  <Code2 className="bmj-icon-sm bmj-mr-2" /> View Docs
                </Button>
              </div>
            </motion.div>

            {/* Preview Image/Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bmj-hero-preview"
            >
              <div className="bmj-hero-preview-glow" />
              <div className="bmj-hero-preview-card">
                <div className="bmj-hero-preview-header">
                  <div className="bmj-hero-preview-dot-red" />
                  <div className="bmj-hero-preview-dot-amber" />
                  <div className="bmj-hero-preview-dot-emerald" />
                </div>
                <div className="bmj-hero-preview-content">
                  <div className="bmj-hero-preview-skeleton-sm" />
                  <div className="bmj-hero-preview-skeleton-sm-desktop" />
                  <div className="bmj-hero-preview-skeleton-sm-desktop" />
                  <div className="bmj-hero-preview-skeleton-lg" />
                  <div className="bmj-hero-preview-skeleton-md" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="bmj-features">
          <div className="bmj-features-container">
            <div className="bmj-features-grid">
              <div className="bmj-feature-card">
                <div className="bmj-feature-icon-wrapper">
                  <Palette className="bmj-icon-lg" />
                </div>
                <h3 className="bmj-feature-title">Beautifully Crafted</h3>
                <p className="bmj-feature-description">
                  Every component is designed with precision, focusing on
                  typography, spacing, and visual hierarchy.
                </p>
              </div>
              <div className="bmj-feature-card">
                <div className="bmj-feature-icon-wrapper">
                  <Zap className="bmj-icon-lg" />
                </div>
                <h3 className="bmj-feature-title">Performance First</h3>
                <p className="bmj-feature-description">
                  Built on top of Base UI and Tailwind CSS, ensuring minimal
                  bundle size and maximum speed.
                </p>
              </div>
              <div className="bmj-feature-card">
                <div className="bmj-feature-icon-wrapper">
                  <Layout className="bmj-icon-lg" />
                </div>
                <h3 className="bmj-feature-title">Layout Primitives</h3>
                <p className="bmj-feature-description">
                  Pre-built sidebar, topbar, and dashboard layouts that work
                  seamlessly across all devices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bmj-footer">
          <div className="bmj-footer-container">
            <div className="bmj-footer-logo">
              <div className="bmj-footer-logo-icon">B</div>
              <span>BMJ UI</span>
            </div>
            <p className="bmj-footer-copyright">
              © 2026 BMJ UI. Built for the modern web.
            </p>
            <div className="bmj-footer-links">
              <a href="#" className="bmj-footer-link">
                Twitter
              </a>
              <a href="#" className="bmj-footer-link">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  const handleSidebarClick = (title: string) => {
    const tabMap: Record<string, string> = {
      Dashboard: "overview",
      Analytics: "analytics",
      Products: "products",
      Customers: "customers",
      Tasks: "tasks",
      Settings: "settings",
      Help: "help",
    };
    if (tabMap[title]) {
      setActiveTab(tabMap[title]);
    }
  };

  const activeSidebarTitle = Object.entries({
    Dashboard: "overview",
    Analytics: "analytics",
    Products: "products",
    Customers: "customers",
    Tasks: "tasks",
    Settings: "settings",
    Help: "help",
  }).find(([_, value]) => value === activeTab)?.[0];

  return (
    <DashboardLayout
      onSidebarItemClick={handleSidebarClick}
      activeSidebarItem={activeSidebarTitle}
    >
      <Toaster position="top-right" richColors />
      <div className="bmj-dashboard-content">
        <div className="bmj-dashboard-header">
          <div className="bmj-dashboard-title-wrapper">
            <h1 className="bmj-dashboard-title">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <p className="bmj-dashboard-subtitle">
              Welcome back, here's what's happening today.
            </p>
          </div>
          <div className="bmj-dashboard-actions">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setView("landing")}
              className="bmj-dashboard-action-button"
            >
              Back to Landing
            </Button>
            <Button size="sm" className="bmj-dashboard-action-button">
              Download Report
            </Button>
          </div>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="bmj-space-y-6"
        >
          <div className="bmj-dashboard-tabs-wrapper">
            <TabsList className="bmj-dashboard-tabs-list">
              <TabsTrigger
                value="overview"
                className="bmj-dashboard-tabs-trigger"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="bmj-dashboard-tabs-trigger"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="products"
                className="bmj-dashboard-tabs-trigger"
              >
                Products
              </TabsTrigger>
              <TabsTrigger
                value="customers"
                className="bmj-dashboard-tabs-trigger"
              >
                Customers
              </TabsTrigger>
              <TabsTrigger value="tasks" className="bmj-dashboard-tabs-trigger">
                Tasks
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="bmj-dashboard-tabs-trigger"
              >
                Settings
              </TabsTrigger>
              <TabsTrigger value="help" className="bmj-dashboard-tabs-trigger">
                Help
              </TabsTrigger>
              <TabsTrigger value="docs" className="bmj-dashboard-tabs-trigger">
                Docs
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="bmj-space-y-8">
            <div className="bmj-dashboard-grid-stats">
              <StatCard
                title="Total Revenue"
                value="$45,231.89"
                trend={{ value: 20.1, isPositive: true }}
                icon={DollarSign}
                description="from last month"
                loading={isLoading}
              />
              <StatCard
                title="Subscriptions"
                value="+2,350"
                trend={{ value: 180.1, isPositive: true }}
                icon={Users}
                description="from last month"
                loading={isLoading}
              />
              <StatCard
                title="Sales"
                value="+12,234"
                trend={{ value: 19, isPositive: false }}
                icon={ShoppingCart}
                description="from last month"
                loading={isLoading}
              />
              <StatCard
                title="Active Now"
                value="+573"
                trend={{ value: 201, isPositive: true }}
                icon={Activity}
                description="since last hour"
                loading={isLoading}
              />
            </div>

            <div className="bmj-dashboard-grid-main">
              <ChartCard
                title="Revenue Growth"
                description="Monthly revenue performance for the current year."
                data={chartData}
                dataKey="value"
                categoryKey="name"
                className="bmj-lg-col-span-2"
                loading={isLoading}
              />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="bmj-dashboard-sidebar-card">
                  <h3 className="bmj-dashboard-sidebar-card-title">
                    <Layers className="bmj-icon-sm bmj-text-primary" />
                    Components Used
                  </h3>
                  <div className="bmj-dashboard-sidebar-card-list">
                    {[
                      { name: "StatCard", count: 4, icon: Component },
                      { name: "ChartCard", count: 1, icon: BarChart3 },
                      { name: "DataTable", count: 1, icon: Layout },
                      { name: "Sidebar", count: 1, icon: Layers },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="bmj-dashboard-sidebar-card-item"
                      >
                        <div className="bmj-dashboard-sidebar-card-item-info">
                          <item.icon className="bmj-dashboard-sidebar-card-item-icon" />
                          <span className="bmj-dashboard-sidebar-card-item-name">
                            {item.name}
                          </span>
                        </div>
                        <Badge variant="secondary">{item.count}</Badge>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    className="bmj-dashboard-sidebar-card-button"
                  >
                    View Library <ArrowRight className="bmj-icon-sm bmj-ml-2" />
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bmj-dashboard-table-card"
            >
              <div className="bmj-dashboard-table-card-header">
                <h3 className="bmj-dashboard-table-card-title">
                  Recent Orders
                </h3>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <div className="bmj-dashboard-table-wrapper">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="bmj-h-full bmj-justify-center bmj-text-muted"
                        >
                          No recent orders found.
                        </TableCell>
                      </TableRow>
                    ) : (
                      recentOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="bmj-dashboard-table-mono">
                            {order.id}
                          </TableCell>
                          <TableCell className="bmj-font-medium">
                            {order.customer}
                          </TableCell>
                          <TableCell>{order.product}</TableCell>
                          <TableCell>{order.amount}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                order.status === "Completed"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {order.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="analytics" className="bmj-space-y-8">
            <div className="bmj-dashboard-analytics-grid">
              <ChartCard
                title="User Engagement"
                description="Daily active users over the last 7 days."
                data={chartData}
                dataKey="value"
                categoryKey="name"
                loading={isLoading}
                type="line"
              />
              <ChartCard
                title="Conversion Rate"
                description="Percentage of visitors who completed a purchase."
                data={chartData.map((d) => ({
                  ...d,
                  value: Math.floor(d.value / 20),
                }))}
                dataKey="value"
                categoryKey="name"
                loading={isLoading}
                type="bar"
              />
            </div>
            <div className="bmj-dashboard-grid-main">
              <ChartCard
                title="Customer Lifetime Value"
                description="Relationship between acquisition cost and lifetime value."
                data={scatterData}
                dataKey="y"
                categoryKey="x"
                loading={isLoading}
                type="scatter"
                className="bmj-lg-col-span-2"
                color="#f59e0b"
              />
              <div className="bmj-dashboard-analytics-stats-column">
                <StatCard
                  title="Avg. Session"
                  value="4m 32s"
                  trend={{ value: 8, isPositive: true }}
                  icon={Activity}
                  loading={isLoading}
                />
                <StatCard
                  title="Bounce Rate"
                  value="42.3%"
                  trend={{ value: 2, isPositive: false }}
                  icon={Activity}
                  loading={isLoading}
                />
                <StatCard
                  title="New Signups"
                  value="1,284"
                  trend={{ value: 15, isPositive: true }}
                  icon={Users}
                  loading={isLoading}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products" className="bmj-space-y-8">
            <div className="bmj-dashboard-filter-bar">
              <div className="bmj-dashboard-filter-group">
                <div className="bmj-dashboard-filter-label-wrapper">
                  <Filter className="bmj-icon-sm bmj-text-muted" />
                  <span className="bmj-dashboard-filter-label">Filters:</span>
                </div>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger className="bmj-dashboard-filter-select">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Software">Software</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Service">Service</SelectItem>
                    <SelectItem value="Hardware">Hardware</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bmj-dashboard-filter-select">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="In Stock">In Stock</SelectItem>
                    <SelectItem value="Low Stock">Low Stock</SelectItem>
                    <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                  </SelectContent>
                </Select>
                {(categoryFilter !== "all" || statusFilter !== "all") && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setCategoryFilter("all");
                      setStatusFilter("all");
                    }}
                    className="bmj-dashboard-filter-clear"
                  >
                    <X className="bmj-dashboard-filter-clear-icon" /> Clear
                  </Button>
                )}
              </div>
              <Dialog
                open={isAddProductOpen}
                onOpenChange={(open) => {
                  setIsAddProductOpen(open);
                  if (!open) setProductErrors({});
                }}
              >
                <DialogTrigger
                  render={
                    <Button size="sm" className="bmj-gap-2">
                      <Component className="bmj-dashboard-add-button-icon" />{" "}
                      Add Product
                    </Button>
                  }
                />
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                      Enter the details of the new product to add it to your
                      inventory.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleAddProduct}>
                    <div className="bmj-grid bmj-gap-4 bmj-p-4">
                      <div className="bmj-grid bmj-gap-2">
                        <label
                          htmlFor="name"
                          className="bmj-text-sm bmj-font-medium"
                        >
                          Product Name
                        </label>
                        <Input
                          id="name"
                          placeholder="e.g. BMJ Pro License"
                          value={newProduct.name}
                          onChange={(e) =>
                            setNewProduct({
                              ...newProduct,
                              name: e.target.value,
                            })
                          }
                          className={cn(
                            productErrors.name &&
                              "border-rose-500 focus-visible:ring-rose-500",
                          )}
                        />
                        {productErrors.name && (
                          <p className="bmj-text-xs bmj-font-medium bmj-text-rose-500">
                            {productErrors.name}
                          </p>
                        )}
                      </div>
                      <div className="bmj-grid bmj-gap-2">
                        <label
                          htmlFor="category"
                          className="bmj-text-sm bmj-font-medium"
                        >
                          Category
                        </label>
                        <Select
                          value={newProduct.category}
                          onValueChange={(value) =>
                            setNewProduct({ ...newProduct, category: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Software">Software</SelectItem>
                            <SelectItem value="Design">Design</SelectItem>
                            <SelectItem value="Service">Service</SelectItem>
                            <SelectItem value="Hardware">Hardware</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="bmj-grid bmj-grid-cols-2 bmj-gap-4">
                        <div className="bmj-grid bmj-gap-2">
                          <label
                            htmlFor="price"
                            className="bmj-text-sm bmj-font-medium"
                          >
                            Price ($)
                          </label>
                          <Input
                            id="price"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={newProduct.price}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                price: e.target.value,
                              })
                            }
                            className={cn(
                              productErrors.price &&
                                "border-rose-500 focus-visible:ring-rose-500",
                            )}
                          />
                          {productErrors.price && (
                            <p className="bmj-text-xs bmj-font-medium bmj-text-rose-500">
                              {productErrors.price}
                            </p>
                          )}
                        </div>
                        <div className="bmj-grid bmj-gap-2">
                          <label
                            htmlFor="stock"
                            className="bmj-text-sm bmj-font-medium"
                          >
                            Stock
                          </label>
                          <Input
                            id="stock"
                            type="number"
                            placeholder="0"
                            value={newProduct.stock}
                            onChange={(e) =>
                              setNewProduct({
                                ...newProduct,
                                stock: e.target.value,
                              })
                            }
                            className={cn(
                              productErrors.stock &&
                                "border-rose-500 focus-visible:ring-rose-500",
                            )}
                          />
                          {productErrors.stock && (
                            <p className="bmj-text-xs bmj-font-medium bmj-text-rose-500">
                              {productErrors.stock}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save Product</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bmj-dashboard-table-card">
              <div className="bmj-dashboard-table-card-header">
                <h3 className="bmj-dashboard-table-card-title">
                  Product Inventory
                </h3>
              </div>
              <div className="bmj-dashboard-table-wrapper">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedProducts.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="bmj-h-full bmj-justify-center bmj-text-muted"
                        >
                          No products found matching the selected filters.
                        </TableCell>
                      </TableRow>
                    ) : (
                      paginatedProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="bmj-dashboard-table-mono">
                            {product.id}
                          </TableCell>
                          <TableCell className="font-medium">
                            {product.name}
                          </TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.stock}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                product.status === "In Stock"
                                  ? "default"
                                  : product.status === "Low Stock"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {product.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
              {totalProductPages > 1 && (
                <div className="bmj-p-4 bmj-border-t bmj-flex bmj-items-center bmj-justify-between bmj-bg-muted-10">
                  <p className="bmj-dashboard-pagination-info">
                    Showing{" "}
                    <span className="bmj-font-medium">
                      {(productsPage - 1) * ITEMS_PER_PAGE + 1}
                    </span>{" "}
                    to{" "}
                    <span className="bmj-font-medium">
                      {Math.min(
                        productsPage * ITEMS_PER_PAGE,
                        filteredProducts.length,
                      )}
                    </span>{" "}
                    of{" "}
                    <span className="bmj-font-medium">
                      {filteredProducts.length}
                    </span>{" "}
                    products
                  </p>
                  <div className="bmj-dashboard-pagination-controls">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() => setProductsPage((p) => Math.max(1, p - 1))}
                      disabled={productsPage === 1}
                    >
                      <ChevronLeft className="bmj-icon-sm" />
                    </Button>
                    <span className="bmj-text-xs bmj-font-medium bmj-px-2">
                      Page {productsPage} of {totalProductPages}
                    </span>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() =>
                        setProductsPage((p) =>
                          Math.min(totalProductPages, p + 1),
                        )
                      }
                      disabled={productsPage === totalProductPages}
                    >
                      <ChevronRight className="bmj-icon-sm" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="customers" className="space-y-8">
            <div className="bmj-dashboard-table-card">
              <div className="bmj-dashboard-table-card-header">
                <h3 className="bmj-dashboard-table-card-title">
                  Customer Directory
                </h3>
                <Button size="sm" variant="outline">
                  Export CSV
                </Button>
              </div>
              <div className="bmj-dashboard-table-wrapper">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead
                        className="cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleCustomerSort("name")}
                      >
                        <div className="flex items-center gap-1">
                          Name
                          {customerSort?.column === "name" ? (
                            customerSort.direction === "asc" ? (
                              <ArrowUp className="w-3 h-3" />
                            ) : (
                              <ArrowDown className="w-3 h-3" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-muted-foreground/50" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead
                        className="cursor-pointer hover:text-foreground transition-colors"
                        onClick={() => handleCustomerSort("spent")}
                      >
                        <div className="flex items-center gap-1">
                          Total Spent
                          {customerSort?.column === "spent" ? (
                            customerSort.direction === "asc" ? (
                              <ArrowUp className="w-3 h-3" />
                            ) : (
                              <ArrowDown className="w-3 h-3" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 text-muted-foreground/50" />
                          )}
                        </div>
                      </TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedCustomers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className="bmj-dashboard-table-mono">
                          {customer.id}
                        </TableCell>
                        <TableCell className="font-medium">
                          {customer.name}
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.spent}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              customer.status === "Active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {customer.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {totalCustomerPages > 1 && (
                <div className="p-4 border-t border-border/50 flex items-center justify-between bg-muted/10">
                  <p className="bmj-dashboard-pagination-info">
                    Showing{" "}
                    <span className="font-medium">
                      {(customersPage - 1) * ITEMS_PER_PAGE + 1}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium">
                      {Math.min(
                        customersPage * ITEMS_PER_PAGE,
                        customers.length,
                      )}
                    </span>{" "}
                    of <span className="font-medium">{customers.length}</span>{" "}
                    customers
                  </p>
                  <div className="bmj-dashboard-pagination-controls">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() =>
                        setCustomersPage((p) => Math.max(1, p - 1))
                      }
                      disabled={customersPage === 1}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-xs font-medium px-2">
                      Page {customersPage} of {totalCustomerPages}
                    </span>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      onClick={() =>
                        setCustomersPage((p) =>
                          Math.min(totalCustomerPages, p + 1),
                        )
                      }
                      disabled={customersPage === totalCustomerPages}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="bmj-space-y-6">
            <div className="bmj-dashboard-header">
              <div className="bmj-dashboard-title-wrapper">
                <h3 className="bmj-dashboard-title">Task Management</h3>
                <p className="bmj-dashboard-subtitle">
                  Keep track of your team's progress and deadlines.
                </p>
              </div>
              <Dialog
                open={isTaskDialogOpen}
                onOpenChange={(open) => {
                  setIsTaskDialogOpen(open);
                  if (!open) setTaskErrors({});
                }}
              >
                <DialogTrigger
                  render={
                    <Button
                      onClick={() =>
                        setEditingTask({
                          title: "",
                          dueDate: "",
                          priority: "Medium",
                        })
                      }
                      className="bmj-gap-2"
                    >
                      <Plus className="bmj-icon-sm" /> Add Task
                    </Button>
                  }
                />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      {editingTask?.id ? "Edit Task" : "Add New Task"}
                    </DialogTitle>
                    <DialogDescription>
                      Fill in the details below to{" "}
                      {editingTask?.id ? "update" : "create"} a task.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    onSubmit={handleSaveTask}
                    className="bmj-space-y-4 bmj-p-4"
                  >
                    <div className="bmj-space-y-2">
                      <label className="bmj-text-sm bmj-font-medium">
                        Task Title
                      </label>
                      <Input
                        placeholder="e.g. Review Q1 Financials"
                        value={editingTask?.title || ""}
                        onChange={(e) =>
                          setEditingTask((prev) =>
                            prev ? { ...prev, title: e.target.value } : null,
                          )
                        }
                        className={cn(
                          taskErrors.title &&
                            "border-rose-500 focus-visible:ring-rose-500",
                        )}
                      />
                      {taskErrors.title && (
                        <p className="bmj-text-xs bmj-font-medium bmj-text-rose-500">
                          {taskErrors.title}
                        </p>
                      )}
                    </div>
                    <div className="bmj-grid bmj-grid-cols-2 bmj-gap-4">
                      <div className="bmj-space-y-2">
                        <label className="bmj-text-sm bmj-font-medium">
                          Due Date
                        </label>
                        <Input
                          type="date"
                          value={editingTask?.dueDate || ""}
                          onChange={(e) =>
                            setEditingTask((prev) =>
                              prev
                                ? { ...prev, dueDate: e.target.value }
                                : null,
                            )
                          }
                          className={cn(
                            taskErrors.dueDate &&
                              "border-rose-500 focus-visible:ring-rose-500",
                          )}
                        />
                        {taskErrors.dueDate && (
                          <p className="bmj-text-xs bmj-font-medium bmj-text-rose-500">
                            {taskErrors.dueDate}
                          </p>
                        )}
                      </div>
                      <div className="bmj-space-y-2">
                        <label className="bmj-text-sm bmj-font-medium">
                          Priority
                        </label>
                        <Select
                          value={editingTask?.priority || "Medium"}
                          onValueChange={(val: "Low" | "Medium" | "High") =>
                            setEditingTask((prev) =>
                              prev ? { ...prev, priority: val } : null,
                            )
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Low">Low</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="High">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter className="bmj-pt-12">
                      <Button type="submit" className="bmj-w-full">
                        {editingTask?.id ? "Update Task" : "Create Task"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="bmj-dashboard-tasks-grid">
              {taskList.length === 0 ? (
                <div className="bmj-p-8 bmj-justify-center bmj-border-b bmj-rounded-xl bmj-bg-muted-10">
                  <ListTodo className="bmj-icon-lg bmj-text-muted bmj-justify-center bmj-gap-4" />
                  <h4 className="bmj-font-medium bmj-text-muted">
                    No tasks found
                  </h4>
                  <p className="bmj-text-sm bmj-text-muted">
                    Get started by creating your first task.
                  </p>
                </div>
              ) : (
                taskList.map((task) => (
                  <motion.div
                    key={task.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "bmj-dashboard-task-card",
                      task.completed && "opacity-60",
                    )}
                  >
                    <div className="bmj-dashboard-task-header">
                      <div className="bmj-dashboard-task-title-wrapper">
                        <button
                          onClick={() => handleToggleTask(task.id)}
                          className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                            task.completed
                              ? "bg-primary border-primary text-primary-foreground"
                              : "border-muted-foreground/30 hover:border-primary",
                          )}
                        >
                          {task.completed && (
                            <CheckCircle2 className="w-4 h-4" />
                          )}
                        </button>
                        <h4
                          className={cn(
                            "bmj-dashboard-task-title",
                            task.completed &&
                              "bmj-dashboard-task-title-completed",
                          )}
                        >
                          {task.title}
                        </h4>
                      </div>
                      <div className="bmj-dashboard-task-actions">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => {
                            setEditingTask(task);
                            setIsTaskDialogOpen(true);
                          }}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="bmj-dashboard-task-footer">
                      <div className="bmj-dashboard-task-meta">
                        <span className="bmj-dashboard-task-meta-item">
                          <Calendar className="bmj-dashboard-task-meta-icon" />{" "}
                          {task.dueDate}
                        </span>
                        <span className="bmj-dashboard-task-meta-item">
                          <Clock className="bmj-dashboard-task-meta-icon" />
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px] px-2 py-0 h-5 font-bold uppercase tracking-wider",
                              task.priority === "High"
                                ? "border-destructive/50 text-destructive bg-destructive/10"
                                : task.priority === "Medium"
                                  ? "border-amber-500/50 text-amber-600 bg-amber-500/10"
                                  : "border-blue-500/50 text-blue-600 bg-blue-500/10",
                            )}
                          >
                            <span
                              className={cn(
                                "w-1 h-1 rounded-full mr-1.5",
                                task.priority === "High"
                                  ? "bg-destructive animate-pulse"
                                  : task.priority === "Medium"
                                    ? "bg-amber-500"
                                    : "bg-blue-500",
                              )}
                            />
                            {task.priority}
                          </Badge>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="bmj-space-y-8">
            <div className="bmj-dashboard-settings-grid">
              <div className="bmj-space-y-6">
                <div className="bmj-dashboard-settings-card">
                  <h3 className="bmj-dashboard-settings-card-title">
                    General Settings
                  </h3>
                  <div className="bmj-dashboard-settings-form">
                    <div className="bmj-flex bmj-items-center bmj-justify-between">
                      <div>
                        <p className="bmj-dashboard-settings-label">
                          Public Profile
                        </p>
                        <p className="bmj-text-xs bmj-text-muted">
                          Allow others to see your activity.
                        </p>
                      </div>
                      <div className="bmj-relative bmj-w-10 bmj-h-5 bmj-bg-primary bmj-rounded-full">
                        <div className="bmj-absolute bmj-right-0.5 bmj-top-0.5 bmj-w-4 bmj-h-4 bmj-bg-background bmj-rounded-full" />
                      </div>
                    </div>
                    <div className="bmj-flex bmj-items-center bmj-justify-between">
                      <div>
                        <p className="bmj-dashboard-settings-label">
                          Email Notifications
                        </p>
                        <p className="bmj-text-xs bmj-text-muted">
                          Receive weekly summary reports.
                        </p>
                      </div>
                      <div className="bmj-relative bmj-w-10 bmj-h-5 bmj-bg-muted bmj-rounded-full">
                        <div className="bmj-absolute bmj-left-0.5 bmj-top-0.5 bmj-w-4 bmj-h-4 bmj-bg-background bmj-rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bmj-dashboard-settings-card">
                  <h3 className="bmj-dashboard-settings-card-title">
                    Security
                  </h3>
                  <Button
                    variant="outline"
                    className="bmj-dashboard-settings-nav-item"
                  >
                    Change Password
                  </Button>
                  <Button
                    variant="outline"
                    className="bmj-dashboard-settings-nav-item mt-2"
                  >
                    Two-Factor Authentication
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bmj-dashboard-settings-card">
                  <h3 className="bmj-dashboard-settings-card-title">
                    Appearance
                  </h3>
                  <div className="bmj-dashboard-settings-form">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="bmj-dashboard-settings-label">
                          Theme Mode
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Switch between light and dark mode.
                        </p>
                      </div>
                      <ThemeToggle />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="aspect-square rounded-lg border-2 border-primary bg-background flex items-center justify-center text-[10px] font-bold">
                        Light
                      </div>
                      <div className="aspect-square rounded-lg border border-border bg-slate-950 flex items-center justify-center text-[10px] font-bold text-white">
                        Dark
                      </div>
                      <div className="aspect-square rounded-lg border border-border bg-muted flex items-center justify-center text-[10px] font-bold">
                        System
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="help" className="bmj-space-y-8">
            <div className="bmj-dashboard-help-container">
              <div className="bmj-dashboard-help-header">
                <h2 className="bmj-dashboard-help-title">How can we help?</h2>
                <p className="bmj-dashboard-help-subtitle">
                  Search our documentation or contact support.
                </p>
              </div>
              <div className="bmj-dashboard-help-grid">
                {[
                  {
                    title: "Getting Started",
                    desc: "Learn the basics of BMJ UI.",
                  },
                  {
                    title: "Components",
                    desc: "Detailed guide for every primitive.",
                  },
                  {
                    title: "Theming",
                    desc: "How to customize colors and fonts.",
                  },
                  {
                    title: "API Reference",
                    desc: "Technical specs for developers.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bmj-dashboard-help-card">
                    <h4 className="bmj-dashboard-help-card-title">
                      {item.title}
                    </h4>
                    <p className="bmj-dashboard-help-card-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bmj-dashboard-help-cta">
                <h3 className="bmj-dashboard-help-cta-title">
                  Still need help?
                </h3>
                <p className="bmj-dashboard-help-cta-desc">
                  Our support team is available 24/7 to assist you.
                </p>
                <Button>Contact Support</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="docs" className="bmj-space-y-8">
            <div className="bmj-dashboard-docs-container">
              <section className="bmj-dashboard-docs-section">
                <h2 className="bmj-dashboard-docs-title">StatCard</h2>
                <p className="bmj-dashboard-docs-desc">
                  Display key metrics with trend indicators and icons.
                </p>
                <div className="bmj-dashboard-docs-code">
                  {`<StatCard 
  title="Total Revenue" 
  value="$45,231.89" 
  trend={{ value: 20.1, isPositive: true }}
  icon={DollarSign}
  description="from last month"
/>`}
                </div>
              </section>

              <section className="bmj-dashboard-docs-section">
                <h2 className="bmj-dashboard-docs-title">DashboardLayout</h2>
                <p className="bmj-dashboard-docs-desc">
                  The main shell for your application, including a responsive
                  sidebar and topbar.
                </p>
                <div className="bmj-dashboard-docs-code">
                  {`<DashboardLayout>
  <YourContent />
</DashboardLayout>`}
                </div>
              </section>

              <section className="bmj-dashboard-docs-section">
                <h2 className="bmj-dashboard-docs-title">ChartCard</h2>
                <p className="bmj-dashboard-docs-desc">
                  A wrapper for Recharts that fits perfectly into the BMJ UI
                  aesthetic. Supports area, bar, line, and scatter charts.
                </p>
                <div className="bmj-dashboard-docs-code">
                  {`<ChartCard 
  title="Revenue Growth" 
  data={chartData}
  dataKey="value"
  categoryKey="name"
  type="area" // "area" | "bar" | "line" | "scatter"
/>`}
                </div>
              </section>

              <section className="bmj-dashboard-docs-section">
                <h2 className="bmj-dashboard-docs-title">Utilities</h2>
                <p className="bmj-dashboard-docs-desc">
                  Custom Tailwind utilities for rapid dashboard styling.
                </p>
                <div className="bmj-dashboard-docs-utils-grid">
                  <div className="bmj-dashboard-docs-utils-card">
                    <p className="bmj-dashboard-docs-utils-card-title">
                      .bmj-glass
                    </p>
                    <p className="bmj-dashboard-docs-utils-card-desc">
                      Frosted glass effect.
                    </p>
                  </div>
                  <div className="bmj-dashboard-docs-utils-card">
                    <p className="bmj-dashboard-docs-utils-card-title">
                      .bmj-card-hover
                    </p>
                    <p className="bmj-dashboard-docs-utils-card-desc">
                      Smooth hover elevation.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
