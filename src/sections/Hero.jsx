

export const  Hero = () => {
    return (
    < section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG*/}
        <div className="absolute inset-0 ">
            <img src="/hero-bg.jpg" alt="Hero Image "
             className="w-full h-full object-cover opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/> 
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation:`slow-drift  ${5 + Math.random() * 10}s linear infinite`,
                    animationDelay: `${Math.random() * 5}s`,
                }}
                />
            ))}
        </div>
        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left column - Text Contetn */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                        <span className="w-2 h-2 bg-primary rounded-full"/>Full-Stack Engineer * Pern Specialist   
                        </span>
                    </div>
                </div>
                    {/* right column - Image */}
            </div>
        </div>
    </ section>
    );
}