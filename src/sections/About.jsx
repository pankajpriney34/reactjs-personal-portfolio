import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Scalable Engineering",
    description:
      "Building maintainable, scalable applications and backend systems with clean architecture.",
  },
  {
    icon: Rocket,
    title: "End-to-End Ownership",
    description:
      "Taking products from technical design and development through deployment and delivery.",
  },
  {
    icon: Users,
    title: "Technical Collaboration",
    description:
      "Working closely with teams, mentoring developers, and solving complex technical challenges.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Exploring modern technologies, AI, and scalable solutions to solve real-world problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building scalable products,
              <span className="font-serif italic font-normal text-white">
                {" "}from idea to production.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Senior Software Engineer and Full Stack Developer with
                9+ years of experience designing and building scalable web
                applications, backend systems, APIs, and distributed solutions.
                I enjoy solving complex problems and turning ideas into
                reliable, production-ready products.
              </p>

              <p>
                My expertise spans Node.js, TypeScript, React, Angular,
                PostgreSQL, Redis, and cloud technologies. I specialize in
                backend architecture, API design, distributed systems, and
                building seamless integrations between frontend and backend
                applications.
              </p>

              <p>
                I believe in continuous learning and practical innovation. From
                scalable system design and Backend-for-Frontend (BFF) APIs to
                AI and LLM-powered applications, I enjoy exploring technologies
                that create meaningful business and user impact.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build scalable, reliable software that solves
                real problems — combining strong engineering principles with
                end-to-end ownership."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};