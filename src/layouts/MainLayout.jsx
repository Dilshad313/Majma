import { Bell, Home, Package2, Users, Clock, BellRing, Calendar } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MainLayout = () => {
  // Mock user role
  const userRole = "admin"; // This can be 'staff', or 'user' in a real app

  const getNavLinks = () => {
    const commonLinks = [
      { to: "/dashboard", icon: Home, label: "Dashboard" },
      { to: "/prayer-times", icon: Clock, label: "Prayer Times" },
      { to: "/announcements", icon: BellRing, label: "Announcements" },
      { to: "/events", icon: Calendar, label: "Events" },
      { to: "/classes", icon: Users, label: "Classes" },
      { to: "/donations", icon: Package2, label: "Donations" }, // Placeholder icon
      { to: "/community", icon: Users, label: "Community" },
      { to: "/profile", icon: Users, label: "Profile" },
    ];

    if (userRole === "admin" || userRole === "staff") {
      return [
        ...commonLinks,
        { to: "/admin/users", icon: Users, label: "User Management" },
        { to: "/admin/content", icon: Package2, label: "Content Mgt" },
        { to: "/admin/finance", icon: Package2, label: "Finance" },
      ];
    }
    return commonLinks;
  };

  const navLinks = getNavLinks();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <NavLink to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Mosque MS</span>
            </NavLink>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                      isActive ? "bg-muted text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* Mobile Nav Toggle can be added here */}
          <div className="w-full flex-1">
            {/* A search bar can be added here */}
          </div>
          {/* A user dropdown menu can be added here */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
