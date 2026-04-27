import { motion } from "framer-motion";

export const SectionHeader = ({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-12 lg:mb-16"
  >
    <div className="flex items-baseline gap-4 mb-4">
      <span className="font-mono text-primary text-sm">{index}.</span>
      <div className="h-px bg-border flex-1 max-w-[100px]" />
      {kicker && (
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {kicker}
        </span>
      )}
    </div>
    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight">
      {title}
    </h2>
  </motion.div>
);
