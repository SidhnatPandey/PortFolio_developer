
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-6 animate-fade-in">
            Hi, I'm <span className="text-shimmer">Sidhant</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Front-end Developer & Designer
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Creating beautiful digital experiences with modern technologies and thoughtful design principles. Let's build something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="rounded-full">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center">
              <div className="h-px bg-border flex-1"></div>
              <span className="px-4 text-foreground/50 text-sm uppercase tracking-wider">Scroll Down</span>
              <div className="h-px bg-border flex-1"></div>
            </div>
            <div className="flex justify-center mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce text-foreground/50"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
