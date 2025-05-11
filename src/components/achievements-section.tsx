
import { Card, CardContent } from "@/components/ui/card";

export function AchievementsSection() {
  const achievements = [
    {
      title: "AWS Certified Solution Architect",
      organization: "Amazon Web Service in Nov 2023",
      description: "Got Certified from Amazon web service by clearing the certification exam for AWS."
    },
    {
      title: "Best Web Application Award",
      organization: "Tech Innovation Summit 2023",
      description: "Recognized for developing an innovative web application that solves real-world problems."
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Active contributor to several open-source projects with over 50 merged pull requests."
    },
    {
      title: "Front-end Developer Certification",
      organization: "Meta",
      description: "Successfully completed the advanced front-end developer certification program."
    },
    {
      title: "Hackathon Winner",
      organization: "CodeFest 2022",
      description: "First place in a 48-hour hackathon for building a sustainable technology solution."
    }
  ];
  
  return (
    <section id="achievements" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
            <span className="text-gradient">Achievements</span> & Recognition
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Celebrating milestones and recognitions throughout my professional journey.
          </p>
        </div>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/6 bg-primary p-6 flex justify-center items-center">
                    <div className="aspect-square rounded-full bg-background/10 w-16 h-16 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-foreground/70 mb-4">{achievement.organization}</p>
                    <p className="text-foreground/80">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block rounded-full bg-primary/10 px-6 py-3">
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="font-medium">10+ Client Testimonials with 5-Star Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
