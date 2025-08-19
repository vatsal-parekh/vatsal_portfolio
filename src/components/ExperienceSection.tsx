import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Gamepad2 } from "lucide-react";

const experiences = [
  {
    icon: Trophy,
    title: "DJS ARYA",
    role: "Management Head",
    description:
      "Created designs and social media content, led outreach with 50+ companies, and reviewed technical documentation for national and international CanSat competitions.",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "DJSCE IETE-ISF",
    role: "Events Committee Member",
    description:
      "Organized a MATLAB workshop (boosted efficiency by 20%) and supported logistics for the UnPlugged 2.0 main event.",
    color: "text-accent",
  },
  {
    icon: Calendar,
    title: "DJCE TRINITY",
    role: "Events Volunteer",
    description:
      "Coordinated backstage communication for a fashion show and managed the smooth execution of a mini IPL auction covering multiple sports.",
    color: "text-primary-glow",
  },
  {
    icon: Gamepad2,
    title: "MITHIBAI KSHITIJ",
    role: "Gaming & Sports Committee",
    description:
      "Organized an online eSports LAN event (secured ₹20,000 sponsorship) and managed cricket & football tournaments to boost fest growth.",
    color: "text-accent",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Experience</span> & Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and community involvement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <div
                key={experience.title}
                className="group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-secondary/50 ${experience.color} flex-shrink-0`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">
                        {experience.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="mt-2 bg-secondary/30 text-foreground border border-border"
                      >
                        {experience.role}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
