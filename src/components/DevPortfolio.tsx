
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
    tech: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task manager with real-time collaboration features",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    tech: ["React", "Firebase", "Styled Components"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A sleek weather app with location-based forecasts and historical data",
    image: "https://images.unsplash.com/photo-1532178910-7815d6919572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tech: ["JavaScript", "OpenWeather API", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Generator",
    description: "A tool that creates custom portfolio websites from user inputs",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tech: ["Vue.js", "Node.js", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Content Management System",
    description: "A custom CMS with a modern dashboard and content scheduling",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tech: ["React", "GraphQL", "Express"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 6,
    title: "AI Image Generator",
    description: "A web app that creates custom artwork from text prompts",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    tech: ["React", "OpenAI API", "Tailwind CSS"],
    githubUrl: "#",
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
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" /> View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DevPortfolio;
