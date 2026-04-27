import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Plus, Minus, Github, ExternalLink } from "lucide-react";

const categories = ["All", "Platform", "Website", "Security", "AI", "Mobile"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(projects[0].id);

  const filtered = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="03" title="Selected work" kicker="case studies" />

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-widest border transition-colors ${
                filter === c
                  ? "border-primary text-primary bg-primary/10"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="border-t border-border">
          {filtered.map((p) => {
            const isOpen = open === p.id;
            return (
              <motion.div
                key={p.id}
                layout
                className="border-b border-border group"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : p.id)}
                  className="w-full text-left py-6 lg:py-8 flex items-start gap-6 hover:bg-card/30 transition-colors px-2 -mx-2"
                >
                  <span className="font-mono text-xs text-primary mt-2 w-8 shrink-0">
                    {p.id}
                  </span>
                  <div className="flex-1 grid lg:grid-cols-12 gap-4 items-start">
                    <div className="lg:col-span-6">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <div className="font-mono text-xs text-muted-foreground mt-2">
                        {p.company}
                      </div>
                    </div>
                    <div className="lg:col-span-3 font-mono text-xs text-muted-foreground uppercase tracking-widest pt-3">
                      {p.category}
                    </div>
                    <div className="lg:col-span-2 font-mono text-xs text-muted-foreground pt-3">
                      {p.year}
                    </div>
                    <div className="lg:col-span-1 flex justify-end pt-2">
                      <span
                        className={`w-8 h-8 border border-border flex items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-primary border-primary text-primary-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-2 lg:pl-14 pr-2 grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-7 space-y-5">
                          {p.image && (
                            <a
                              href={p.links?.live || p.links?.repo || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block relative overflow-hidden border border-border group/img bg-card"
                            >
                              <img
                                src={p.image}
                                alt={`${p.title} preview`}
                                loading="lazy"
                                width={1024}
                                height={640}
                                className="w-full h-auto transition-transform duration-700 group-hover/img:scale-[1.03]"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                            </a>
                          )}
                          <Block label="Problem" body={p.problem} />
                          <Block label="Approach" body={p.approach} />
                          <Block label="Challenges" body={p.challenges} />
                          <Block
                            label="What I'd do differently"
                            body={p.different}
                            accent
                          />
                        </div>
                        <div className="lg:col-span-5 space-y-6">
                          <div>
                            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                              Results
                            </div>
                            <ul className="space-y-2">
                              {p.results.map((r) => (
                                <li
                                  key={r}
                                  className="flex gap-2 text-foreground/80 text-sm"
                                >
                                  <span className="text-primary">→</span>
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                              Stack
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {p.stack.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-1 text-xs font-mono border border-border text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-3 pt-2">
                            {p.links?.live && (
                              <a
                                href={p.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-2 font-mono text-xs uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                              >
                                <ExternalLink size={12} /> Live demo
                              </a>
                            )}
                            {p.links?.repo && (
                              <a
                                href={p.links.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-2 font-mono text-xs uppercase tracking-widest border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                              >
                                <Github size={12} /> View code
                              </a>
                            )}
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-primary self-center"
                            >
                              Request case study <ArrowUpRight size={12} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Block = ({
  label,
  body,
  accent,
}: {
  label: string;
  body: string;
  accent?: boolean;
}) => (
  <div>
    <div
      className={`font-mono text-xs uppercase tracking-widest mb-2 ${
        accent ? "text-secondary" : "text-primary"
      }`}
    >
      {label}
    </div>
    <p className="text-foreground/80 leading-relaxed text-[15px]">{body}</p>
  </div>
);
