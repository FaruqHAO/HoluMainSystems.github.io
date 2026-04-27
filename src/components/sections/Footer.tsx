import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid sm:grid-cols-3 gap-6 text-sm">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}.<br />
          Built with React, Vite, Tailwind & Framer Motion.
        </div>
        <div className="font-mono text-xs text-muted-foreground sm:text-center">
          <span className="text-primary">design</span> + <span className="text-secondary">code</span> by Faruq
        </div>
        <div className="font-mono text-xs text-muted-foreground sm:text-right">
          <a href={`mailto:${profile.email}`} className="hover:text-primary">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
};
