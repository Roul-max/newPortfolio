import { motion } from "motion/react";
import { portfolioData } from "@/src/data/portfolioData";
import { Card, CardContent } from "../ui/Card";
import { Camera, Code2, Globe, Server, Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-muted/40 -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left"
          >
            <span className="section-kicker inline-flex justify-center lg:justify-start">About</span>
            <h2 className="section-title">Designing software that feels effortless.</h2>
            <div className="section-divider mx-auto lg:mx-0" />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {portfolioData.about.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Product strategy + UI systems",
                "Cross-functional leadership",
                "Performance-first engineering",
                "Composable design systems",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>

            {portfolioData.interests && portfolioData.interests.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Interests</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.interests.map((interest) => {
                    const iconMap: Record<string, typeof Camera> = {
                      camera: Camera,
                      globe: Globe,
                      code: Code2,
                      terminal: Terminal,
                    };
                    const Icon = iconMap[interest.icon] ?? Code2;
                    return (
                      <div
                        key={interest.name}
                        className="flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 text-xs font-semibold"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <span>{interest.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>

          <div className="grid gap-6">
            {[
              {
                icon: Globe,
                title: "Frontend Architecture",
                description: "Designing polished, accessible UI with scalable systems and expressive motion.",
              },
              {
                icon: Server,
                title: "Backend Platforms",
                description: "Building secure APIs, data pipelines, and multi-tenant SaaS infrastructure.",
              },
              {
                icon: Code2,
                title: "Quality Engineering",
                description: "Shipping reliable code with thoughtful QA, observability, and documentation.",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                <Card className="h-full bg-background/70 border-border/60 hover:border-primary/40 transition-colors">
                  <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm mt-2">
                        {feature.description}
                      </p>
                    </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
