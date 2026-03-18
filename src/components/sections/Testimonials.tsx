import { motion } from "motion/react";
import { portfolioData } from "@/src/data/portfolioData";
import { Card, CardContent } from "../ui/Card";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl text-center lg:text-left"
        >
          <span className="section-kicker inline-flex justify-center lg:justify-start">Testimonials</span>
          <h2 className="section-title mt-4">Trusted partnerships, lasting impact.</h2>
          <div className="section-divider mt-6 mx-auto lg:mx-0" />
          <p className="text-lg text-muted-foreground mt-6">
            Founder-friendly execution with focus on speed, polish, and reliable delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/60 bg-background/70 hover:border-primary/40 transition-colors">
                <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-1 text-primary mb-4">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={`${testimonial.id}-star-${starIndex}`} className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-2xl border border-border/70">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

