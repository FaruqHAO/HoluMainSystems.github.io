import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { skills } from "@/data/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="04" title="Toolkit" kicker="skills & stack" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {skills.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-background p-6 lg:p-8 hover:bg-card/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="font-mono text-xs uppercase tracking-widest text-primary">
                  {group.category}
                </div>
                <span className="font-display text-2xl text-muted-foreground/40 group-hover:text-primary transition-colors">
                  0{idx + 1}
                </span>
              </div>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] text-foreground/85 font-mono"
                  >
                    <span className="text-primary mr-2">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
