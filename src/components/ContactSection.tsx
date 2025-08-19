import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Looking for internship opportunities, collaborations, or just a good
            tech chat — feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="bg-secondary/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-secondary/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="(e.g., Internship opportunity, Collaboration, General inquiry)"
                  className="bg-secondary/50 border-border focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="bg-secondary/50 border-border focus:border-primary transition-colors min-h-32"
                />
              </div>
            </div>

            <Button variant="contact" size="lg" className="w-full text-lg py-6">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, innovative
                projects, and ways to bring your ideas to life through
                technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="p-2 rounded-lg gradient-primary">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">
                    parekhvatsal36@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="p-2 rounded-lg gradient-accent">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">+91 9930609365</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 border border-border">
                <div className="p-2 rounded-lg gradient-primary">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-muted-foreground">Mumbai, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
