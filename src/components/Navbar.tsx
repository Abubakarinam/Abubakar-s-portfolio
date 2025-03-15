
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Development", href: "development" },
    { name: "Design", href: "design" },
    { name: "Testimonials", href: "testimonials" },
    { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Button 
          variant="link" 
          className={`text-2xl font-serif font-bold gold-text p-0 ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => scrollToSection("hero")}
        >
          Portfolio
        </Button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Button
              key={link.name}
              variant="link"
              className={`text-sm font-medium transition-colors hover:text-gold p-0 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </Button>
          ))}
          <Button
            variant="default"
            className="bg-gold hover:bg-gold/90 text-white py-2 text-sm"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 px-4">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant="link"
                className="text-lg font-medium border-b border-gray-100 pb-2 justify-start"
                onClick={() => scrollToSection(link.href)}
              >
                {link.name}
              </Button>
            ))}
            <Button
              variant="default"
              className="bg-gold hover:bg-gold/90 text-white w-full"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
