import { portfolioData } from "@/src/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 py-12 sm:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <a href="#home" className="text-xl font-display font-bold tracking-tighter">
              {portfolioData.hero.name.split(" ")[0]}
              <span className="text-muted-foreground">.studio</span>
            </a>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Building premium SaaS experiences with strategy, polish, and speed.
            </p>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            {portfolioData.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} {portfolioData.hero.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
