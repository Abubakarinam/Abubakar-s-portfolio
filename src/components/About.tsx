
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Code, Lightbulb, Brush } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-heading">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Crafting beautiful digital experiences with code and creativity
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-left">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 bg-white shadow-xl rounded-lg w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                <p className="text-xl md:text-2xl font-serif text-center gold-text font-bold">
                  5+ Years Experience
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold">
                Hi, I'm <span className="gold-text">John Doe</span>
              </h3>
              <p className="text-muted-foreground">
                I'm a passionate Frontend Developer and Creative Designer with a keen eye for detail and a love for creating seamless, intuitive user experiences. My journey in the digital world has equipped me with a unique blend of technical expertise and creative vision.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding or designing, I'm exploring the latest in AI technology, creating content, or finding inspiration in art and nature. My approach combines technical precision with creative problem-solving to deliver solutions that not only work flawlessly but also engage and delight users.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-medium">Frontend Development</h4>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Brush className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-medium">Creative Design</h4>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-medium">AI Integration</h4>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
