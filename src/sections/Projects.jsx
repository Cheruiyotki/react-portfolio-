
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
         
        </div>
    </ section>
}