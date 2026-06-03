
const experiences = [
    {
    period: "2024 - Present",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 10+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "TypeScript", "PostgreSQL", "Python", "WordPress", "MySQL"],
    current:  true,
  },
  {
    period: "2023 — Present",
    role: "Telecommunications Engineering & Fullstack Web Architecture",
    company: "Dedan Kimathi University of Technology",
    description:
      "Specializing in the intersection of network layer communications and high-level software development. Actively engineering complex web ecosystems utilizing the PERN stack (PostgreSQL, Express, React, Node.js) and integrating database management systems with Prisma ORM.",
    technologies: ["React", "Node.js", "PostgreSQL", "Prisma", "TailwindCSS"],
    current: true,
  },
  {
    period: "Feb 2026 —  May 2026", 
    role: "Graduate Telecommunications & Software Attachment",
    company: "Flash WiFi (Superflash Networks)",
    description:
      "Gained hands-on engineering experience managing high-speed fiber-optic network distributions and ISP operations. Configured routing protocols, assisted in wireless network optimizations, and applied QA diagnostics to analyze packet transmission stability and system uptime metrics.",
    technologies: ["Network Routing", "Wireless Optimization", "Quality Assurance", "Troubleshooting"],
    current: false,
  },
  {
    period: "2025 August —  2025 December",
    role: "Quality Assurance & Automated Testing Specialist",
    company: " Teach 2 Giv",
    description:
      "Designing and executing comprehensive Quality Assurance workflows for web applications. Authoring robust end-to-end automated testing suites with Cypress, writing structural unit tests in Jest, and maintaining continuous manual regression testing parameters.",
    technologies: ["Quality Assurance", "Jest", "Cypress", "Git", "GitHub"],
    current:  false,
  },
  {
    period: "2011 — 2022",
    role: "Primary & Secondary Education",
    company: "Academic Foundation",
    description:
      "Completed standard elementary and high school education, developing core analytical, mathematical, and computer science fundamentals that laid the groundwork for pursuing an engineering career path.",
    technologies: ["Computer Literacy", "Mathematics", "Analytical Physics"],
    current: false,
  },
];

export const   Experience = () => {
    return ( < section id="experience" className="py-32 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"/>
         <div className="container mx-auto px-6 relative z-10">
           
           {/* Section HEader */}
           <div className="max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider animate-fade-in ">Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                Experience that 
                <span className="font-serif italic font-normal text-white ">
                    {""}
                    speaks volumes. </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
                From the fundamentals of telecommunications engineering to the complexities of fullstack web development, my career journey has been a continuous evolution of learning and growth. Each experience has contributed to my ability to build reliable, efficient, and user-friendly applications while maintaining a strong focus on performance and quality.
            </p>
           </div>

           {/* Timeline */}
           <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 bottom-0 top-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>

            {/* Experience Items */}
            <div className="space-y-12">
                {experiences.map((exp, index) => ( 
                    <div key={index} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" 
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}>

                        {/* Timeline Dot */}
                        <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                           
                         {exp.current && (
                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/> 
                         )}

                          </div>
                        {/* Content  */}
                        <div className={`pl-8 md:pl-0 ${
                            index % 2 === 0 
                            ? "md:pr-16 md:text-right" 
                            : "md:col-start-2 md:pl-16"}`}>
                            <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                <span className="text-sm text-primary font-medium">{exp.period}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                <p className="text-muted-foreground">{exp.company}</p>
                                <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 ===0 ? "md:justify-end" : ""}`}>
                                    {exp.technologies.map((tech, techIsx) => (
                                    <span key={techIsx}
                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span> 
                                ))}
                                </div>
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
           </div>
         </div>
         
    </ section>
        );
}