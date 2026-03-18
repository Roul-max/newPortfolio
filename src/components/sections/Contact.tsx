import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import { portfolioData } from "@/src/data/portfolioData";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="absolute inset-0 bg-muted/40 -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="section-kicker">Contact</span>
          <h2 className="section-title mt-4">Let's build the next release.</h2>
          <div className="section-divider mx-auto mt-6" />
          <p className="text-base sm:text-lg text-muted-foreground mt-6">
            Share your vision, timeline, and priorities. I'll respond with a tailored plan.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-border/60 bg-background/70">
              <CardHeader>
                <CardTitle>Project details</CardTitle>
                <CardDescription>
                  Tell me about your timeline, scope, and success criteria.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "rohitkumarrrx@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+91 87890 24145",
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    value: "Remote · Worldwide",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background/80 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.title}</p>
                        <p className="text-sm font-semibold">{item.value}</p>
                      </div>
                    </div>
                  );
                })}

                <div className="flex flex-wrap gap-3">
                  {portfolioData.socials.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                      >
                        <Icon className="h-4 w-4" />
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-border/60 glass-card">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  I'll respond within 48 hours with next steps.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">
                        Name
                      </label>
                      <input
                        id="name"
                        className="input-field h-11"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input-field h-11"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="input-field min-h-[140px] resize-y"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



