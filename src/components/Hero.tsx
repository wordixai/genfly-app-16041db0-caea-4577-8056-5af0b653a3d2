import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="md:w-2/3">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Experience Coffee <span className="text-amber-400">Perfection</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Artisanal coffee and delicious bites in a cozy atmosphere.
            Join us for an unforgettable culinary experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-6 text-lg">
              View Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;