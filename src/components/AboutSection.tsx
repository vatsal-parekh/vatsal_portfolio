const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>
        
        <div className="text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm a B.Tech student in Electronics and Telecommunication with a strong interest in robotics, computer vision, and web development. I enjoy building practical systems like autonomous robots and live dashboards, and I'm always looking for ways to bridge hardware with software. I believe in teamwork, problem-solving, and delivering real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;