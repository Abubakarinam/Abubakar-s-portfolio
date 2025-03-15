
import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2712&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Gold accent elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-3xl"></div>

      {/* Content */}
      <div className="container relative z-10 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">
              Creative <span className="gold-text">Development</span> <br /> & 
              <span className="gold-text"> Design</span> Solutions
            </h1>
            <div className="h-px w-24 bg-gold mx-auto my-8"></div>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              <span className="font-semibold gold-text">Frontend Developer | Creative Designer | Content Creator</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in animate-delay-300">
            <Button 
              variant="default" 
              className="bg-gold hover:bg-gold/90 text-white" 
              onClick={() => document.getElementById('development')?.scrollIntoView({behavior: 'smooth'})}
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 bg-black/40 text-white hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 bg-black/40 text-white hover:bg-white/10 hover:text-white"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" /> Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
