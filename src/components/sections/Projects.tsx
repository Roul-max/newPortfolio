import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/src/data/portfolioData";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { cn } from "@/src/utils/cn";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl text-center lg:text-left"
        >
          <span className="section-kicker inline-flex justify-center lg:justify-start">Case Studies</span>
          <h2 className="section-title mt-4">Signature products with measurable impact.</h2>
          <div className="section-divider mt-6 mx-auto lg:mx-0" />
          <p className="text-lg text-muted-foreground mt-6">
            A curated selection of SaaS platforms, AI tools, and growth-focused experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn("")}
            >
              <Card
                className={cn(
                  "group h-full flex flex-col overflow-hidden border-border/60 bg-background/70 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1",
                  index === 0 && "md:min-h-[420px]"
                )}
              >
                <div className={cn("relative overflow-hidden bg-muted", "aspect-video")}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-primary/20 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">
                    {project.description}
                  </CardDescription>
                  {project.impact && (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Outcome
                      <span className="text-[11px] font-medium normal-case tracking-normal text-primary/80">
                        {project.impact}
                      </span>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/50">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="default" size="sm" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
