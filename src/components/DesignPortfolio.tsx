import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// Card Designs
const cardDesigns = [
  {
    id: 1,
    title: "Minimalist Business Card",
    image: "PIC/1.png",
  },
  {
    id: 2,
    title: "Back                 ",
    image: "PIC/2.png",
  },
  {
    id: 3,
    title: "Dates bussines card",
    image:
      "PIC/Ramadan Dates For Iftar Instagram Post.png",
  },
  {
    id: 4,
    title: "Creative Agency Card",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
];

// Thumbnail Designs
const thumbnailDesigns = [
  {
    id: 1,
    title: "Tech Tutorial Thumbnail",
    image:
      "PIC/79baa49da4a457cf84d1a0f29806dc4ced110a70c248d525d6da57c2_wm_c81edb42-d823-4070-8948-26a9377fb2bb_20250312101000.jpg",
  },
  {
    id: 2,
    title: "Gaming Channel Thumbnail",
    image:
      "PIC/5b4495bc2b5f3ba80132af7d37b070969d0c88504fa75242b51e5e36_wm_79900e20-6bfa-4500-8d0d-404b0b138240_20250312102601.jpg",
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

        {/* Tabs Section */}
        <Tabs
          defaultValue="business-cards"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="business-cards">Business Cards</TabsTrigger>
              <TabsTrigger value="thumbnails">YouTube Thumbnails</TabsTrigger>
            </TabsList>
          </div>

          {/* Business Cards Section */}
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
                      <h3 className="font-medium text-lg mb-2">
                        {design.title}
                      </h3>
                      <p className="text-sm text-white/80">Click to view</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>

          {/* Thumbnails Section */}
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
                    <div className="aspect-video rounded overflow-hidden">
                      <img
                        src={design.image}
                        alt={design.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Click to view full size
                      </p>
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
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="w-full h-auto rounded-md"
              />
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
