
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const projects: Project[] = [
    {
      id: 0,
      title: "Plantech",
      description: "Designed and developed a responsive web app using modern tech to simplify plant care. The platform enables users to visualize and manage plant setups with a clean UI and interactive design.",
      image: "https://res.cloudinary.com/dd4xje8fc/image/upload/v1747510299/Plantec_thumbnail_k4m0w3.png",
      tech: ["React", "Vite", "Material UI", "Farmer Motion"],
      demoUrl: "https://plant-tech-nine.vercel.app/",
      codeUrl: "https://github.com/SidhnatPandey/plant_tech",
    },
    {
      id: 1,
      title: "Army Servillance System",
      description: "Developed a real-time sensor feed dashboard using Next.js, TypeScript, and Leaflet GIS, with WebSocket-based SSE for dynamic terrain tracking and live object updates.",
      // image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16",
      image: "https://images.unsplash.com/photo-1562400179-cc68926e2191?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMEFybXklMjBzZXJ2aWxsYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
      tech: ["React", "Python", "Flask", "Postgres"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Secreto",
      description: "A modern, responsive web app deployed on Vercel, highlighting clean design and frontend development skills.",
      image :"https://media.istockphoto.com/id/1169668297/photo/network-security-concept-cyber-protection-anti-virus-software.webp?a=1&b=1&s=612x612&w=0&k=20&c=1ZS-GXCCH4HB7RVU0rSagfLwr_xqGfDY3U_DePao5n8=",
      tech: ["React", "Bootstrap", "JavaScript", "Peer.js"],
      demoUrl: "https://secreto-delta.vercel.app/",
      codeUrl: "https://github.com/SidhnatPandey/Secret",
    },
    {
      id: 3,
      title: "Student Task Tracking",
      description: "A productivity app for managing and tracking tasks of the students on the The Special School Application with collaborative features and real-time updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      tech: ["React.js", "Firebase", "Tailwind CSS", "Java"],
      demoUrl: "https://github.com/SidhnatPandey/SIH-2022-Web-App-The-Special-School-",
      codeUrl: "https://github.com/SidhnatPandey/SIH-2022-Web-App-The-Special-School-",
    },
  ];

  const categories = ["all", "web", "mobile", "design"];
  
  const filteredProjects = projects;
  
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore some of my recent work. Each project represents unique challenges and solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className="rounded-full text-sm capitalize"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-foreground/70">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button variant="default" size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
