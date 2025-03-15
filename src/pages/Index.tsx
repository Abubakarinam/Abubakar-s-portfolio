
import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DevPortfolio from "@/components/DevPortfolio";
import DesignPortfolio from "@/components/DesignPortfolio";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";

const Index: React.FC = () => {
  // Add smooth scrolling behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        const id = target.getAttribute("href");
        const element = document.querySelector(id || "");
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <DevPortfolio />
      <DesignPortfolio />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </Layout>
  );
};

export default Index;
