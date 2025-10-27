
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <p className="text-lg text-foreground/80">
  I’m a passionate Software Developer committed to building efficient, reliable, and scalable solutions that make a real impact. With a strong foundation in computer science and hands-on experience across modern technologies, I develop applications that blend performance with clean architecture.
</p>

<p className="text-lg text-foreground/80">
  My approach emphasizes writing maintainable code, optimizing system performance, and continuously improving through learning and innovation. I enjoy tackling complex challenges, collaborating with teams, and turning ideas into well-engineered software products that drive meaningful outcomes.
</p>

            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">Education</h3>
                  <p className="text-foreground/70">Computer Science Graduate (BTech CSE 2024
                  )</p>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-2">Experience</h3>
                  <p className="text-foreground/70">2+ years in Software Development</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary rounded-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a" 
              alt="Sidhant - Developer Portrait" 
              className="rounded-lg w-full h-auto object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
