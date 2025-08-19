import { Shirt, Trophy, MapPin } from "lucide-react";

const interests = [
  {
    icon: Shirt,
    title: "Fashion",
    description: "Part of college fashion committee",
    color: "text-primary",
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Cricket, football, badminton, skateboarding",
    color: "text-accent",
  },
  {
    icon: MapPin,
    title: "Travel",
    description: "Visited 4 countries, love exploring cultures & food",
    color: "text-primary-glow",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Personal <span className="text-gradient">Interests</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond coding and robotics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={interest.title}
                className="group p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-500 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div
                    className={`p-4 rounded-lg bg-secondary/50 ${interest.color} mx-auto w-fit`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {interest.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
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

export default InterestsSection;
