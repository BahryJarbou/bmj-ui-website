import * as React from "react";
import { SidebarProvider, SidebarInset } from "../ui/sidebar";
import { AppSidebar, SidebarItem } from "./AppSidebar";
import { Topbar } from "./Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarItems?: SidebarItem[];
  onSidebarItemClick?: (title: string) => void;
  activeSidebarItem?: string;
}

export function DashboardLayout({
  children,
  sidebarItems,
  onSidebarItemClick,
  activeSidebarItem,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar
        items={sidebarItems}
        onItemClick={onSidebarItemClick}
        activeItem={activeSidebarItem}
      />
      <SidebarInset className="bmj-dashboard-inset">
        <Topbar />
        <main className="bmj-dashboard-main">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
