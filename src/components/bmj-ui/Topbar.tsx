import { SidebarTrigger } from "../ui/sidebar";
import { ThemeToggle } from "../ThemeToggle";
import {
  Search,
  Bell,
  User,
  CreditCard,
  Users,
  Zap,
  LogOut,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function Topbar() {
  const handleItemClick = (label: string) => {
    toast.info(`${label} clicked`, {
      description: "This feature will be implemented soon.",
    });
  };

  return (
    <header className="bmj-topbar">
      <div className="bmj-topbar-left">
        <SidebarTrigger />
        <div className="bmj-topbar-search-container">
          <Search className="bmj-topbar-search-icon" />
          <Input
            placeholder="Search dashboard..."
            className="bmj-topbar-search-input"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="bmj-topbar-mobile-search-trigger"
        >
          <Search className="bmj-topbar-icon" />
        </Button>
      </div>

      <div className="bmj-topbar-right">
        <div className="bmj-topbar-theme-toggle-container">
          <ThemeToggle />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="bmj-topbar-notification-button"
        >
          <Bell className="bmj-topbar-icon" />
          <span className="bmj-topbar-notification-dot" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="bmj-topbar-user-button"
              />
            }
          >
            <User className="bmj-topbar-icon" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bmj-topbar-dropdown-content"
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleItemClick("Profile")}>
                <User className="bmj-topbar-menu-icon" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleItemClick("Billing")}>
                <CreditCard className="bmj-topbar-menu-icon" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleItemClick("Team")}>
                <Users className="bmj-topbar-menu-icon" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleItemClick("Subscription")}>
                <Zap className="bmj-topbar-menu-icon" />
                <span>Subscription</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                variant="destructive"
                onClick={() => handleItemClick("Log out")}
              >
                <LogOut className="bmj-topbar-menu-icon" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
