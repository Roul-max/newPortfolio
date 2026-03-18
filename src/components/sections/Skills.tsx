import { motion } from "motion/react";
import { portfolioData } from "@/src/data/portfolioData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:sticky lg:top-28 text-center lg:text-left"
          >
            <span className="section-kicker inline-flex justify-center lg:justify-start">Toolbox</span>
            <h2 className="section-title">The stack behind every launch.</h2>
            <div className="section-divider mx-auto lg:mx-0" />
            <p className="text-base sm:text-lg text-muted-foreground">
              A focused toolkit for design systems, fast iteration, and production-grade reliability.
            </p>
            <div className="rounded-2xl border border-border/60 bg-background/70 p-5 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Delivery promise</p>
              <p className="text-sm font-semibold">Clean handoffs, documented components, and scalable foundations.</p>
              <div className="flex flex-wrap gap-2">
                {["Design systems", "API integration", "QA-ready"].map((item) => (
                  <span key={item} className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/60 bg-background/70 hover:border-primary/40 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-2 rounded-full bg-muted text-foreground text-xs font-semibold uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
