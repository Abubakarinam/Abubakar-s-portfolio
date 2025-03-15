
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 
    | "fade-in"
    | "fade-in-right"
    | "fade-in-left"
    | "scale-in"
    | "slide-in-bottom";
  delay?: number;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const delayStyle = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        className,
        isVisible ? `animate-${animation}` : "opacity-0",
      )}
      style={delay > 0 ? delayStyle : undefined}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
