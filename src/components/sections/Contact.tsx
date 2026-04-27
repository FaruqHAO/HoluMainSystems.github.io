import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/portfolio";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="06" title="Let's build something." kicker="get in touch" />

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-xl lg:text-2xl text-foreground/80 leading-relaxed font-display">
              I'm currently open to{" "}
              <span className="text-primary italic">senior backend & full-stack roles</span>{" "}
              — remote, hybrid, or on-site in Doha and the wider GCC region.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Have a system that needs architecting, a team that needs leading, or a
              gnarly integration that's been sitting on the backlog? I'd love to hear
              about it.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 font-display text-3xl sm:text-5xl text-foreground hover:text-primary transition-colors group mt-4"
            >
              {profile.email}
              <ArrowUpRight
                size={28}
                className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-px bg-border border border-border"
          >
            <Item
              icon={<Mail size={16} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <Item
              icon={<Phone size={16} />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            />
            <Item icon={<MapPin size={16} />} label="Location" value={profile.location} />
            <Item
              icon={<span className="font-mono text-xs">git</span>}
              label="GitHub"
              value="@HOLUMlDEY6041"
              href={profile.github}
            />
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

const Item = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="bg-background flex items-center gap-4 p-5 group hover:bg-card/40 transition-colors"
    >
      <div className="w-10 h-10 border border-border flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="text-foreground truncate">{value}</div>
      </div>
      {href && (
        <ArrowUpRight
          size={16}
          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        />
      )}
    </Wrap>
  );
};
