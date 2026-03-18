import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "../ui/Button";
import { portfolioData } from "@/src/data/portfolioData";

export function Hero() {
  const companies = Array.from(new Set(portfolioData.experience.map((exp) => exp.company)));

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-[45vh] w-[45vh] rounded-full bg-accent/30 blur-[140px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[55vh] w-[55vh] rounded-full bg-primary/25 blur-[160px] opacity-60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-center lg:text-left"
        >
          <span className="section-kicker inline-flex justify-center lg:justify-start">SaaS • Fintech • AI</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">high-trust</span>{" "}
            SaaS, fintech, and AI products.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {portfolioData.hero.tagline}
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Available for new builds
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Product strategy to launch
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto group">
                <Calendar className="mr-2 h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                Schedule a Call
              </Button>
            </a>
          </div>

          {companies.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground justify-center lg:justify-start">
              <span>Collaborated with</span>
              <div className="flex flex-wrap gap-2">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-[10px] font-semibold"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-2xl" />
          <div className="relative glass-card rounded-[28px] p-5 sm:p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border/70 shadow-lg">
                  <img
                    src={portfolioData.hero.avatar}
                    alt={portfolioData.hero.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 shadow-lg border border-border">
                  <span className="flex h-3 w-3 rounded-full bg-accent" />
                </div>
              </div>
              <div>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground">Lead Engineer</p>
                <p className="text-xl sm:text-2xl font-semibold">{portfolioData.hero.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{portfolioData.hero.title}</p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {portfolioData.hero.metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-border/60 bg-background/70 p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl font-semibold text-primary">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 rounded-2xl border border-border/60 bg-primary/10 p-4">
              <p className="text-sm font-semibold">Specialized in SaaS, fintech, and AI products.</p>
              <p className="text-xs text-muted-foreground mt-2">From discovery to launch with polished, conversion-ready UI.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
