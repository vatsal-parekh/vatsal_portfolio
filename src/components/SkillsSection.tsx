import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Cloud,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Robotics & Navigation",
    skills: ["Path Planning (A*, DWA)", "SLAM", "ROS2", "Gazebo", "RViz2"],
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Computer Vision",
    skills: ["OpenCV", "YOLOv8", "Dataset Preparation"],
    color: "text-accent",
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["Flask", "React (basic)", "TailwindCSS", "REST APIs"],
    color: "text-primary-glow",
  },
  {
    icon: Code,
    title: "Programming",
    skills: ["Python", "C", "C++"],
    color: "text-accent",
  },
  {
    icon: GitBranch,
    title: "Tools",
    skills: ["Git", "VS Code", "Canva"],
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Soft Skills",
    skills: ["Teamwork", "Documentation", "Management"],
    color: "text-accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills across the full development stack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg bg-secondary/50 ${category.color}`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/30 text-foreground border border-border hover:bg-accent/20 hover:text-accent hover:border-accent/20 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default SkillsSection;
