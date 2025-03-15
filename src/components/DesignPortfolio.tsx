
import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Card Designs
const cardDesigns = [
  {
    id: 1,
    title: "Minimalist Business Card",
    image: "https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 2,
    title: "Gold Accent Modern Card",
    image: "https://images.unsplash.com/photo-1598264705257-7e582975f2ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
  },
  {
    id: 3,
    title: "Photographer's Business Card",
    image: "https://images.unsplash.com/photo-1588826937080-f35276ad2565?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Creative Agency Card",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

// Thumbnail Designs
const thumbnailDesigns = [
  {
    id: 1,
    title: "Tech Tutorial Thumbnail",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    before: "https://images.unsplash.com/photo-1563206768-22e9a4db33fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2801&q=80",
  },
  {
    id: 2,
    title: "Gaming Channel Thumbnail",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    before: "https://images.unsplash.com/photo-1598550477585-039e544aefc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Cooking Tutorial Thumbnail",
    image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1406&q=80",
    before: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
  },
  {
    id: 4,
    title: "Travel Vlog Thumbnail",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    before: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
];

const DesignPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState("business-cards");
  const [selectedDesign, setSelectedDesign] = useState<any>(null);

  const handleDesignClick = (design: any) => {
    setSelectedDesign(design);
  };

  const closeModal = () => {
    setSelectedDesign(null);
  };

  return (
    <section id="design" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-heading">Creative Design</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing my eye for aesthetics and attention to detail
            </p>
          </div>
        </AnimatedSection>

        <Tabs defaultValue="business-cards" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="business-cards">Business Cards</TabsTrigger>
              <TabsTrigger value="thumbnails">YouTube Thumbnails</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="business-cards" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cardDesigns.map((design, index) => (
                <AnimatedSection
                  key={design.id}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div 
                    className="portfolio-item cursor-pointer"
                    onClick={() => handleDesignClick(design)}
                  >
                    <div className="aspect-[3/2] overflow-hidden rounded-lg">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="portfolio-content p-4">
                      <h3 className="font-medium text-lg mb-2">{design.title}</h3>
                      <p className="text-sm text-white/80">Click to view</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="thumbnails" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {thumbnailDesigns.map((design, index) => (
                <AnimatedSection
                  key={design.id}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div 
                    className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => handleDesignClick(design)}
                  >
                    <div className="p-4 border-b">
                      <h3 className="font-medium">{design.title}</h3>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="p-2">
                        <p className="text-xs text-center mb-2 text-muted-foreground">Before</p>
                        <div className="aspect-video rounded overflow-hidden">
                          <img
                            src={design.before}
                            alt={`${design.title} before`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="text-xs text-center mb-2 text-muted-foreground">After</p>
                        <div className="aspect-video rounded overflow-hidden">
                          <img
                            src={design.image}
                            alt={`${design.title} after`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">Click to view full size</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal */}
      {selectedDesign && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b">
              <h3 className="font-medium text-lg">{selectedDesign.title}</h3>
            </div>
            <div className="p-6">
              {activeTab === "business-cards" ? (
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="w-full h-auto rounded-md"
                />
              ) : (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium mb-2">Before:</p>
                    <img
                      src={selectedDesign.before}
                      alt={`${selectedDesign.title} before`}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">After:</p>
                    <img
                      src={selectedDesign.image}
                      alt={`${selectedDesign.title} after`}
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 border-t flex justify-end">
              <Button 
                variant="default"
                className="bg-gold hover:bg-gold/90 text-white"
                onClick={closeModal}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignPortfolio;
