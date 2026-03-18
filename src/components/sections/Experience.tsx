import { motion } from "motion/react";
import { portfolioData } from "@/src/data/portfolioData";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-muted/40 -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl text-center lg:text-left"
        >
          <span className="section-kicker inline-flex justify-center lg:justify-start">Experience</span>
          <h2 className="section-title mt-4">Building products with measurable outcomes.</h2>
          <div className="section-divider mt-6 mx-auto lg:mx-0" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-4 sm:pl-6 md:pl-10 space-y-10">
            <div className="absolute left-1.5 sm:left-2 md:left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-3 sm:-left-4 md:-left-5 top-6 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-2xl bg-background border border-border/70 text-primary shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>

                <div className="glass-card rounded-3xl p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold">{exp.role}</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  <h4 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {exp.company}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wide"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
