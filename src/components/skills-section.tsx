
import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Figma", "Netlify", "Vercel"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Here are the technologies and skills I've developed throughout my journey as a developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-xl mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="font-display font-bold text-2xl mb-6 text-center">Skill Proficiency</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Frontend Development", percentage: 90 },
              { name: "UI/UX Design", percentage: 85 },
              { name: "Backend Development", percentage: 75 },
              { name: "DevOps", percentage: 65 }
            ].map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
