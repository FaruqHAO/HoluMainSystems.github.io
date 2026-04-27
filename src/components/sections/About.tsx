import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { profile, education } from "@/data/portfolio";
import { Briefcase, GraduationCap, Globe } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeader index="01" title="About" kicker="who I am" />

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              I'm a{" "}
              <span className="text-primary font-medium">Senior Software Engineer</span>{" "}
              with a backend bias and a full-stack reach. The work I'm proudest of lives
              behind the scenes — auth systems trusted by hundreds of users, payment
              flows that don't drop transactions, AI pipelines that turn hours of video
              into minutes of insight.
            </p>
            <p>
              Day to day, I'm in <span className="text-foreground">.NET Core, Azure</span>,
              and React. Lately I've been leading the engineering function at{" "}
              <span className="text-foreground">Ehjz Trading & Services</span> in Doha —
              owning everything from CI/CD pipelines to cybersecurity policy.
            </p>
            <p>
              I write code with the next engineer in mind. I care about reliability,
              security, and the small details that make a system feel{" "}
              <em className="font-display italic text-primary">considered</em> rather than
              just shipped.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card icon={<Briefcase size={18} />} title="Currently">
              <div className="text-foreground">Senior Full Stack Developer</div>
              <div className="text-muted-foreground text-sm">
                Ehjz for Trading & Services · Doha
              </div>
            </Card>

            <Card icon={<GraduationCap size={18} />} title="Education">
              {education.map((e) => (
                <div key={e.degree} className="mb-2 last:mb-0">
                  <div className="text-foreground text-sm">{e.degree}</div>
                  <div className="text-muted-foreground text-xs font-mono">
                    {e.school} · {e.years}
                  </div>
                </div>
              ))}
            </Card>

            <Card icon={<Globe size={18} />} title="Open to">
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {["Remote", "Hybrid", "Doha on-site", "GCC region"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="border border-border bg-card/40 backdrop-blur p-5 hover:border-primary/40 transition-colors">
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-3">
      {icon}
      {title}
    </div>
    <div>{children}</div>
  </div>
);
