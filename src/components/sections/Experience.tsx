import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/data/portfolio";
import { MapPin } from "lucide-react";

export const Experience = () => {
  return (
    <section id="work" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="02" title="Where I've worked" kicker="experience" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((job, idx) => (
              <motion.div
                key={`${job.company}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 flex items-center justify-center">
                  <div
                    className={`w-7 h-7 rounded-full border ${
                      job.current
                        ? "border-primary bg-primary/20 animate-glow-pulse"
                        : "border-border bg-background"
                    } flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        job.current ? "bg-primary" : "bg-muted-foreground"
                      }`}
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <div>
                      {job.start} — {job.end}
                    </div>
                    <div className="flex items-center gap-1 mt-1 normal-case tracking-normal">
                      <MapPin size={11} /> {job.location}
                    </div>
                  </div>

                  <div className="lg:col-span-9 space-y-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl tracking-tight">
                        {job.role}
                      </h3>
                      <div className="font-mono text-sm text-primary mt-1">
                        @ {job.company}
                        {job.current && (
                          <span className="ml-2 text-secondary">· now</span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2 text-foreground/75 text-[15px] leading-relaxed">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-primary mt-2 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.stack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono text-muted-foreground border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
