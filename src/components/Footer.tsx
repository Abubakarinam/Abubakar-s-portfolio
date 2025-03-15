
import React from "react";
import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold gold-text">Portfolio</h2>
            <p className="text-white/60 mt-2 max-w-md">
              Crafting beautiful digital experiences with a focus on usability,
              accessibility, and performance.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
            <div className="flex space-x-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-gold transition-colors p-0"
                onClick={() => openSocialLink('https://github.com')}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-gold transition-colors p-0"
                onClick={() => openSocialLink('https://linkedin.com')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/60 hover:text-gold transition-colors p-0"
                onClick={() => openSocialLink('https://twitter.com')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button
              variant="link"
              className="text-white/60 hover:text-white p-0 text-sm"
              onClick={() => window.open('/privacy', '_blank')}
            >
              Privacy Policy
            </Button>
            <Button
              variant="link"
              className="text-white/60 hover:text-white p-0 text-sm"
              onClick={() => window.open('/terms', '_blank')}
            >
              Terms of Service
            </Button>
            <Button
              variant="link"
              className="text-white/60 hover:text-white p-0 text-sm"
              onClick={() => window.open('/cookies', '_blank')}
            >
              Cookies
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
