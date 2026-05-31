import { Button, AnimatedBorderButton} from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";

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
                        <span className="inline-flex flex-col items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Telecommunications Engineer * Fullstack Developer 
                            </span>
                        <span className="text-xs  ">
                            Pern Specialist
                        </span>
                        </span>
                    </div>

                    {/* Headline and Description */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Building the bridge between<span className="text-primary glow-text"> hardware </span> and
                            <br />
                            and the modern 
                            <br />
                          <span className="font-serif italic font-normal text-white">
                            Web.
                          </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-700">  
                             Hi, I'm Wilborn Kipkoech - a Telecommunications Engineer and Fullstack Developer specializing in bridging the gap between hardware architecture and the modern web. With deep expertise across the PERN (PostgreSQL, Express, React, Node.js) stack, I build scalable, high-performance web applications that don't just look great, but are engineered from the network layer up.  
                        </p>
                    </div>

                    {/* Call to Action Buttons */}
                    <Button size="lg">Get in Touch <ArrowRight className="w-5 h-5"/> </Button>
                    <AnimatedBorderButton/>
                </div>
                    {/* right column - Image */}
            </div>
        </div>
    </ section>
    );
}