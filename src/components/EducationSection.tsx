import { GraduationCap, Award, BookOpen, School } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "B.Tech – Electronics & Telecommunication",
    institution: "DJSCE",
    grade: "CGPA 8.7/10",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "AI & ML Honors",
    institution: "DJSCE",
    grade: "CGPA 10/10",
    color: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Class 12",
    institution: "Higher Secondary",
    grade: "78%",
    color: "text-primary-glow"
  },
  {
    icon: School,
    title: "Class 10",
    institution: "Secondary School",
    grade: "94%",
    color: "text-accent"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span> & Academics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.map((edu, index) => {
            const IconComponent = edu.icon;
            return (
              <div 
                key={edu.title}
                className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg bg-secondary/50 ${edu.color} mx-auto w-fit`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{edu.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;