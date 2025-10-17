import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/stadium", label: "Stadium" },
    { href: "/lineups", label: "Lineups" },
    { href: "/schedule", label: "Schedule" },
    { href: "/news", label: "News" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-primary shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-primary-foreground">COLTS</div>
        </Link>
        
        <nav className="flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                location.pathname === link.href
                  ? "bg-secondary text-secondary-foreground"
                  : "text-primary-foreground hover:bg-primary-foreground/10"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
