import { Code2, Cpu, Database, Shield, ShieldCheck, Zap } from "lucide-react"

const higlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "Writing maintenable, scalable code that stands the test of time."
    },
    {
    icon:   ShieldCheck,
    title: "Quality Assurance & Testing",
    description: "Implementing bulletproof QA strategies. Confidently maintaining application stability through Jest unit testing, Cypress automated E2E testing suites, and manual inspection protocols."
  },
  {
    icon:  Cpu,
    title: "Hardware-to-Web Bridge",
    description: "Leveraging a solid foundation in Telecommunications Engineering to connect low-level network systems with high-level modern web architectures."
  },
  {
    icon:  Database,
    title: "Robust Backend Engineering",
    description: "Designing efficient relational databases, secure API layers, and smooth data streams utilizing PostgreSQL, Node.js, and Prisma."
  },
  {
    icon: ShieldCheck,
    title: "Quality & Testing Driven",
    description: "Ensuring bulletproof application stability and performance through rigorous Quality Assurance protocols, Jest unit testing, and Cypress end-to-end suites."
  },
  {
    icon:  Zap,
    title: "Optimized Performance",
    description: "Engineering speed from the server configuration layer up to frontend rendering pipelines for seamless, responsive layout systems."
  }

]

export const  About = () => {
    return (
    < section id="about" className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side content */}
            <div className="space-y-8">
                <div className="animate-fade-in ">
                <span className="text-secondary-foreground text-sm font-medium uppercase">About me</span>
                </div>
            

            <h2 className="text-4xl  md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                    {""}
                     one component at a time.
                </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                    I’m a Telecommunications Engineer and Fullstack Developer who enjoys building reliable web applications and understanding how systems work from the network level to the user interface. My engineering background helps me approach development with a strong focus on performance, stability, and solving real problems.
                </p>
                <p>
                    I mainly work with the PERN stack (PostgreSQL, Express, React, and Node.js), building scalable backend systems and responsive frontend applications. I also work with tools like Prisma and Tailwind CSS to create clean, fast, and user-friendly products.
                </p>
                <p>
                    I care a lot about writing maintainable code and making sure applications work properly through testing and QA. Using tools like Jest and Cypress, I focus on building software that is stable, secure, and easy to improve over time.
                </p>
            </div>
          </div>
        </div>
    </div>
    </ section>
    )
}