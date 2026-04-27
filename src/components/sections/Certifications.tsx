import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="certs" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="05" title="Certifications" kicker="continuous learning" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="border border-border bg-card/30 p-5 hover:border-primary/40 hover:bg-card/60 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <Award
                  size={20}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                {c.status && (
                  <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest border border-secondary text-secondary">
                    {c.status}
                  </span>
                )}
              </div>
              <div className="font-display text-lg leading-tight mb-1">{c.name}</div>
              <div className="font-mono text-xs text-muted-foreground">{c.issuer}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
