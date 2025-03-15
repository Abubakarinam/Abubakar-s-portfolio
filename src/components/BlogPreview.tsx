
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential UI Design Principles Every Frontend Developer Should Know",
    excerpt:
      "Learn the fundamental UI design principles that can elevate your frontend development skills and create more intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "April 15, 2023",
    readTime: "7 min read",
    category: "Design",
  },
  {
    id: 2,
    title: "Integrating AI Tools into Your Frontend Workflow",
    excerpt:
      "Discover how to leverage AI tools to automate repetitive tasks and enhance your productivity as a frontend developer.",
    image: "https://images.unsplash.com/photo-1677442135743-d6c12ba43fed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    date: "May 22, 2023",
    readTime: "9 min read",
    category: "AI",
  },
  {
    id: 3,
    title: "Creating Effective YouTube Thumbnails: A Data-Driven Approach",
    excerpt:
      "Learn how to design YouTube thumbnails that drive clicks and engagement based on analysis of top-performing content.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    date: "June 8, 2023",
    readTime: "6 min read",
    category: "Content Creation",
  },
];

const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-heading">From The Blog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and industry perspectives
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection
              key={post.id}
              animation="fade-in"
              delay={index * 150}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col group">
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center mb-3">
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full">
                      {post.category}
                    </span>
                    <div className="mx-2 w-1 h-1 rounded-full bg-muted" />
                    <span className="text-xs text-muted-foreground flex items-center">
                      <CalendarDays className="w-3 h-3 mr-1" /> {post.date}
                    </span>
                    <div className="mx-2 w-1 h-1 rounded-full bg-muted" />
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="justify-start p-0 text-gold hover:text-gold/80 hover:underline"
                    onClick={() => window.open(`/blog/${post.id}`, '_blank')}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="default"
            className="bg-gold hover:bg-gold/90 text-white"
            onClick={() => window.open('/blog', '_blank')}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
