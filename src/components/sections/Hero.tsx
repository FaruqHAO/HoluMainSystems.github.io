import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-overlay"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* Aurora blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left col: type-led */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 font-mono text-xs text-primary"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              <span className="tracking-widest uppercase">
                Available for Senior Roles · Q2 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.9] tracking-tighter"
            >
              Faruq <br />
              <span className="italic text-primary">Odetola.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl space-y-4"
            >
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-secondary">const</span>{" "}
                <span className="text-primary">role</span> ={" "}
                <span className="text-foreground">"Senior Full Stack Engineer"</span>
                <span className="text-muted-foreground">;</span>
              </p>
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                I architect & ship{" "}
                <span className="text-primary font-medium">scalable backend systems</span>,
                APIs and distributed apps. five years across .NET, Azure and modern web —
                from solo contributor to engineering lead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium hover:shadow-[0_0_30px_hsl(165_100%_70%/0.5)] transition-all"
              >
                View selected work
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors"
              >
                Get in touch
              </a>
              <a
                href="mailto:faruqodetola1@gmail.com"
                className="font-mono text-sm text-muted-foreground hover:text-primary link-underline"
              >
                {profile.email}
              </a>
            </motion.div>
          </div>

          {/* Right col: stat card */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="border border-border bg-card/40 backdrop-blur p-6 space-y-5 relative">
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground uppercase tracking-widest">
                <span>// status</span>
                <span className="text-primary">●  online</span>
              </div>

              <div>
                <div className="font-mono text-xs text-muted-foreground mb-1">Based in</div>
                <div className="flex items-center gap-2 font-display text-2xl">
                  <MapPin size={18} className="text-primary" />
                  Doha, Qatar
                </div>
                <div className="font-mono text-xs text-muted-foreground mt-1">
                  Valid Work Visa 
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <Stat value="5" label="years building" />
                <Stat value="20+" label="systems shipped" />
                <Stat value="100+" label="users authenticated" />
                <Stat value="60%" label="faster deploys" />
              </div>
            </div>

            <div className="font-mono text-xs text-muted-foreground px-1">
              Currently leading IT & engineering at{" "}
              <span className="text-foreground">Ehjz Trading</span>.
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="absolute bottom-0 inset-x-0 border-t border-border bg-background/40 backdrop-blur overflow-hidden">
        <div className="marquee flex whitespace-nowrap py-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array(2)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                {[
                  ".NET Core",
                  "Azure",
                  "Microservices",
                  "React",
                  "Docker",
                  "CI/CD",
                  "PostgreSQL",
                  "Kotlin",
                  "Google Cloud AI",
                  "Blazor",
                  "JWT / Azure AD",
                ].map((t) => (
                  <span key={t} className="px-8 flex items-center gap-8">
                    {t} <span className="text-primary">✦</span>
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="font-display text-3xl text-foreground">{value}</div>
    <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
      {label}
    </div>
  </div>
);
