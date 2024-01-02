import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import navItems from "./nav-items";
import { cn } from "@/lib/utils";
import { shadows } from "@/assets/constants/styles";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      className={cn(
        "flex items-center justify-between px-20 py-4 w-screen",
        shadows.sm
      )}
    >
      <Link to="/">
        <img
          src="https://www.svgrepo.com/show/427113/grid.svg"
          alt=""
          className="w-10 h-10"
        />
      </Link>
      <ul className="flex gap-8 text-muted-foreground ml-12">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={cn(
              "hover:text-primary",
              pathname === item.href ? "text-primary" : ""
            )}
          >
            <Link to={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link
          to="https://github.com/jrTilak/mern-template/issues"
          target="_blank"
        >
          <Button variant="ghost">Contribute</Button>
        </Link>

        <Link to="https://github.com/jrTilak/mern-template" target="_blank">
          <Button className="px-6">Github</Button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
