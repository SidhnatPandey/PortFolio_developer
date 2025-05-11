
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
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js, featuring product search, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16",
      tech: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills, featuring smooth animations and dark mode.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      tech: ["React", "Tailwind CSS", "TypeScript"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects with collaborative features and real-time updates.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const categories = ["all", "web", "mobile", "design"];
  
  // For demo purposes, we're not filtering projects yet
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
