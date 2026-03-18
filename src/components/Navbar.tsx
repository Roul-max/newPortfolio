import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/src/hooks/useTheme";
import { Button } from "./ui/Button";
import { navLinks, portfolioData } from "@/src/data/portfolioData";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 text-base sm:text-lg font-display font-bold tracking-tight">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_10px_30px_-18px_rgba(14,75,79,0.8)]">
              {portfolioData.hero.name.split(" ")[0].charAt(0)}
            </span>
            <span>
              {portfolioData.hero.name.split(" ")[0]}
              <span className="text-muted-foreground">.studio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-border/70 pl-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <a href="#contact">
                <Button size="sm">Let's Talk</Button>
              </a>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <>
          <div
            className={`fixed inset-0 z-40 bg-background/40 transition-backdrop md:hidden ${
              isScrolled ? "backdrop-blur-sm" : "backdrop-blur-0"
            }`}
          />
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full z-50 glass border-t border-border/50 p-4 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-border">
              <a href="#contact">
                <Button className="w-full">Let's Talk</Button>
              </a>
            </li>
          </ul>
        </motion.div>
        </>
      )}
    </header>
  );
}
