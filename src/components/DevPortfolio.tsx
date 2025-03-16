
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1404&q=80",
    tech: ["React", "Js", "Tailwind CSS"],                                          
    githubUrl: "https://github.com/Abubakarinam/ecommerce-website",
    liveUrl: "#",
  },  
  
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A sleek weather app with location-based forecasts and historical data",
    image: "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638886301/EducationHub/photos/lightning-bolts.jpg",
    tech: ["JavaScript", "OpenWeather API", "REACT.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  
  {
    id: 5,
    title: "Shoes  website",
    description: "An ecommerce website for shoes",
    image: "data:image/jpeg;base64,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",
    tech: ["React", "GraphQL", "Express"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "Tic-Tac-Toe",
    description: "A Tic-Tac-Toe game with ",
    image: "data:image/webp;base64,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",
    tech: ["React",  "Tailwind CSS"],
    githubUrl: "https://github.com/Abubakarinam/tic-tac-toe",
    liveUrl: "#",
  },
];

const DevPortfolio: React.FC = () => {
  const openGitHub = (url: string) => {
    window.open(url, '_blank');
  };

  const openLiveDemo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="development" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-heading">Frontend Development</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent projects showcasing my technical skills and problem-solving abilities
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="slide-in-bottom"
              delay={index * 100}
            >
              <div className="group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between mt-auto">
                    <Button
                      variant="link"
                      className="p-0 text-muted-foreground hover:text-gold"
                      onClick={() => openGitHub(project.githubUrl)}
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </Button>
                    <Button
                      variant="link"
                      className="p-0 text-muted-foreground hover:text-gold"
                      onClick={() => openLiveDemo(project.liveUrl)}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="default"
            className="bg-gold hover:bg-gold/90 text-white"
            onClick={() => window.open('https://github.com/Abubakarinam', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" /> View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevPortfolio;
