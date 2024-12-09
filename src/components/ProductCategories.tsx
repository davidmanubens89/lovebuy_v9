import React from 'react';
import { Smartphone, Laptop, Watch, Tablet, Headphones, Camera } from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&q=80&w=800&h=600'
  },
  {
    icon: Laptop,
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&q=80&w=800&h=600'
  },
  {
    icon: Tablet,
    name: 'Tablets',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&q=80&w=800&h=600'
  },
  {
    icon: Watch,
    name: 'Smartwatches',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&q=80&w=800&h=600'
  },
  {
    icon: Headphones,
    name: 'Auriculares',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&q=80&w=800&h=600'
  },
  {
    icon: Camera,
    name: 'Cámaras',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&q=80&w=800&h=600'
  }
];

export function ProductCategories() {
  return (
    <section id="productos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Categorías de Productos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex items-center space-x-2 text-white">
                    <category.icon className="h-6 w-6" />
                    <h3 className="text-xl font-semibold">{category.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}