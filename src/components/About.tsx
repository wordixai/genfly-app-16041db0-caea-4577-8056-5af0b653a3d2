const About = () => {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" 
              alt="Cafe interior" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-800 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="font-bold text-xl">Est. 2015</p>
              <p>Serving the community</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">From Bean to Cup</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2015, Brew & Bites began as a small passion project by two coffee enthusiasts determined to bring exceptional coffee experiences to our community.
            </p>
            <p className="text-gray-700 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring fair compensation for farmers while delivering the highest quality coffee to your cup.
            </p>
            <p className="text-gray-700 mb-6">
              Our in-house bakery creates fresh pastries and savory bites daily, using locally sourced ingredients whenever possible. We believe in supporting our local community and creating a warm, welcoming space for everyone.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Coffee beans" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Coffee cup" className="w-10 h-10 object-cover rounded-full" />
              </div>
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1565600444102-063f8a7a1e37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Pastry" className="w-10 h-10 object-cover rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;