import { shadows } from "@/assets/constants/styles";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={cn("w-screen bg-gray-50 rounded-t-lg", shadows.sm)}>
      <hr className="my-6 border-muted-foreground sm:mx-auto lg:my-4 max-w-3xl rounded-xl" />
      <span className="block text-sm text-muted-foreground sm:text-center mb-4">
        Made by{" "}
        <Link
          to="https://github.com/jrTilak/"
          target="_blank"
          className="hover:underline text-primary"
        >
          jrTilak
        </Link>{" "}
        and other contributors. 🔥
      </span>
    </footer>
  );
};
export default Footer;
