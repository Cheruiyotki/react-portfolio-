import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"


const projects = [
    {
        title: "Hotel Booking App",
        description: "A fullstack hotel booking application built with the PERN stack. It features user authentication, hotel listings, booking management, and a responsive design for seamless user experience across devices.",
        image: "/projects/hotelbooking.jpeg",
        tags: ["React", "Node.js", "Express" ],
        github: "",
        link: ""
    },
    {
        title: "codeAI",
        description: "An AI-powered code completion tool designed to enhance developer productivity by providing intelligent code suggestions in real-time.",
        image: "/projects/codeAI.jpeg",
        tags: ["Python", "Machine Learning", "React" ],
        github: "",
        link: ""
    },
    {
        title: "Vacations App",
        description: "A travel planning application that allows users to discover and book vacation destinations with ease.",
        image: "/projects/platinumVacations.jpeg",
        tags: ["React", "Node.js", "Express", "PostgreSQL" ],
        github: "",
        link: ""
    },
    {
        title: "Online Tech Store",
        description: "An e-commerce platform for selling technology products with a focus on user experience and seamless integration.",
        image: "/projects/onlineTechstore.jpeg",
        tags: ["React", "Python", "Express", "PostgreSQL" ],
        github: "",
        link: ""
    }
]


export const   Projects = () => {
    return < section id="projects" className="py-32 relative overflow-hidden">
        {/* Bg glows */}
        <div className="container mx-auto px-6 relative z-10">
         <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" /> 

       {/* Section Header */}
       <div className="text-center mx-auto max-w-3xl mb-16">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Feautured Work</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground ">
            Projects that
            <span className="font-serif italic font-normal text-white"> Make an Impact</span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-300">
            A selection of projects that demonstrate my ability to build reliable and scalable web applications, showcasing my skills in both frontend and backend development, as well as my commitment to creating technology that is practical and efficient.
        </p>
       </div>

         {/* Projects Grid */}
         <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => ( 
                <div
                 key={index}
                  className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                  style={{animateDelay: `${( index +1 ) * 100}ms`}}>
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-video">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/> 

                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} target="_blank" rel="noopener noreferrer"
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <ArrowUpRight className="w-5 h-5"/>
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" 
                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                                <Github className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
  
                    {/* content  */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                            <ArrowUpRight className=" w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover-translate-y-1 transition-all"  />
                        </div>
                        <p>{project.description}</p>
                        <div className="flex flex-wrap gap-2">{project.tags.map((tag, tagIndex) => (
                            <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                        ))}</div>
                    </div>
                </div>
            ))}
         </div>

         {/* View more projects */}
         <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton>
                View More Projects
                <ArrowUpRight className="w-5 h-5" />
                </AnimatedBorderButton>
         </div>
        </div>
    </ section>
}