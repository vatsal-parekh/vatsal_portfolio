import ProjectCard from "./ProjectCard";

// Mock project data - in a real app, this would come from an API or CMS
const projects = [
  {
    title: "Autonomous Farm Robot",
    description: "Team Project | Implemented A* and DWA navigation algorithms in ROS 2; tested in Gazebo simulation. Created Flask backend for live streaming, integrated with React frontend. Built YOLOv8 datasets for crop detection.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    technologies: ["Python", "Flask", "OpenCV", "ROS2", "YOLOv8", "A*", "DWA*"],
    githubUrl: "https://github.com/vatsal-parekh",
    featured: true
  },
  {
    title: "Farm Dashboard",
    description: "Developed backend Flask server for live video feed; integrated into teammate's React frontend. Real-time monitoring system for agricultural automation.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop",
    technologies: ["Flask", "React", "Tailwind CSS", "REST APIs"],
    githubUrl: "https://github.com/vatsal-parekh"
  },
  {
    title: "CanSat 2025 (Team DJS Arya)",
    description: "All India Rank #1 | World Rank #15 | NASA + AAS competition. Worked on document QA, marketing & outreach (50+ companies), technical docs review, and rocket livery/poster designs.",
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
    technologies: ["Project Management", "Technical Documentation", "Design", "Marketing"],
    githubUrl: "https://github.com/vatsal-parekh"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in robotics, computer vision, and web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;