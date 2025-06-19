import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, Settings, ShieldCheck, BarChart2 } from 'lucide-react';
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
      isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "text-sidebar-foreground"
    );

  return (
    <aside className="hidden md:flex w-64 bg-sidebar border-r border-sidebar-border flex-col shrink-0">
      {/* Logo/App Name */}
      <div className="h-16 flex items-center justify-start px-6 border-b border-sidebar-border">
        <Link to="/dashboard" className="flex items-center gap-2 text-lg font-semibold text-sidebar-primary">
          <ShieldCheck className="h-6 w-6" />
          <span>AppSecure</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <NavLink to="/dashboard" className={navLinkClasses} end>
          <Home className="h-4 w-4" />
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/analytics" className={navLinkClasses}>
          <BarChart2 className="h-4 w-4" />
          Analytics
        </NavLink>
        <NavLink to="/dashboard/settings" className={navLinkClasses}>
          <Settings className="h-4 w-4" />
          Settings
        </NavLink>
      </nav>

      <div className="p-4 mt-auto border-t border-sidebar-border">
        <p className="text-xs text-sidebar-foreground/70">
          © {new Date().getFullYear()} AppSecure Inc.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;