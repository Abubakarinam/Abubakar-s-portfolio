
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    content:
      "Working with this team was a game-changer for our company. The attention to detail in both the frontend development and design aspects truly elevated our brand. The website they built not only looks stunning but also performs exceptionally well.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director, CreativeVision",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    content:
      "The YouTube thumbnails created for our channel completely transformed our click-through rates. Each design captured the essence of our videos perfectly, and the insights provided on optimizing for audience engagement were invaluable. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, DesignForward Agency",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    content:
      "The business cards designed for our agency have received countless compliments. The modern yet elegant approach perfectly represents our brand identity. The process was collaborative and the end results exceeded our expectations in every way.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gold/5">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-heading">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What clients say about my work and collaboration
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id}
              animation="fade-in"
              delay={index * 200}
            >
              <div className="bg-white p-8 rounded-lg shadow-md relative h-full flex flex-col">
                <div className="absolute -top-4 left-8 bg-gold w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-muted-foreground">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
