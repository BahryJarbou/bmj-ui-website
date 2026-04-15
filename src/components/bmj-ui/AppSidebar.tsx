import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "../ui/sidebar";
import {
  LayoutDashboard,
  Settings,
  Users,
  BarChart3,
  Package,
  HelpCircle,
  ListTodo,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const defaultItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "#" },
  { title: "Analytics", icon: BarChart3, url: "#" },
  { title: "Products", icon: Package, url: "#" },
  { title: "Customers", icon: Users, url: "#" },
  { title: "Tasks", icon: ListTodo, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
  { title: "Help", icon: HelpCircle, url: "#" },
];

export interface SidebarItem {
  title: string;
  icon: React.ElementType;
  url: string;
}

export function AppSidebar({
  items = defaultItems,
  onItemClick,
  activeItem,
}: {
  items?: SidebarItem[];
  onItemClick?: (title: string) => void;
  activeItem?: string;
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="bmj-sidebar-header">
        <div className="bmj-sidebar-logo-container">
          <div className="bmj-sidebar-logo-box">B</div>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bmj-sidebar-logo-text"
              >
                BMJ UI
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Main Menu
                </motion.span>
              )}
            </AnimatePresence>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={activeItem === item.title}
                    onClick={() => onItemClick?.(item.title)}
                    className="bmj-sidebar-menu-button"
                    render={
                      <button
                        type="button"
                        className="bmj-sidebar-menu-button-inner"
                      >
                        <item.icon className="bmj-sidebar-menu-icon" />
                        <AnimatePresence mode="wait">
                          {!isCollapsed && (
                            <motion.span
                              initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                              animate={{
                                opacity: 1,
                                width: "auto",
                                marginLeft: 8,
                              }}
                              exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bmj-sidebar-menu-text"
                            >
                              {item.title}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bmj-sidebar-footer">
        <div className="bmj-sidebar-user-container">
          <div className="bmj-sidebar-user-avatar" />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="bmj-sidebar-user-info"
              >
                <span className="bmj-sidebar-user-name">Bahry Jarbou</span>
                <span className="bmj-sidebar-user-role">Admin</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
