import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  { id: "coffee", name: "Coffee" },
  { id: "tea", name: "Tea" },
  { id: "pastries", name: "Pastries" },
  { id: "lunch", name: "Lunch" }
];

const menuItems = {
  coffee: [
    { name: "Espresso", description: "Strong and concentrated coffee", price: "$3.50", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: "$4.50", image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Latte", description: "Espresso with steamed milk", price: "$4.75", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Cold Brew", description: "Smooth, cold-steeped coffee", price: "$5.00", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
  ],
  tea: [
    { name: "Green Tea", description: "Light and refreshing", price: "$3.75", image: "https://images.unsplash.com/photo-1556682851-c4580b43bd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Earl Grey", description: "Black tea with bergamot", price: "$3.75", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Chai Latte", description: "Spiced tea with steamed milk", price: "$4.50", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
  ],
  pastries: [
    { name: "Croissant", description: "Buttery, flaky pastry", price: "$3.25", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Blueberry Muffin", description: "Fresh-baked with real blueberries", price: "$3.50", image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Cinnamon Roll", description: "Warm with cream cheese frosting", price: "$4.00", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
  ],
  lunch: [
    { name: "Avocado Toast", description: "Whole grain bread with avocado and toppings", price: "$8.50", image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Caprese Sandwich", description: "Fresh mozzarella, tomato, and basil", price: "$9.75", image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { name: "Quinoa Bowl", description: "With roasted vegetables and tahini dressing", price: "$10.50", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <section id="menu" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We take pride in serving high-quality coffee and food made with the freshest ingredients.
            Our menu changes seasonally to incorporate local produce.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`${
                activeCategory === category.id 
                  ? "bg-amber-800 hover:bg-amber-900" 
                  : "text-amber-800 border-amber-800 hover:bg-amber-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-800 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-amber-800 hover:bg-amber-900 text-white px-8">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;