import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveUrl, 
  githubUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <Button variant="hero" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button variant="portfolio" size="sm">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-gradient transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      
      {featured && (
        <div className="absolute top-4 left-4">
          <Badge className="gradient-primary text-white font-medium">
            Featured
          </Badge>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;