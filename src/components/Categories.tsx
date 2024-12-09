import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Laptop, Watch, Tablet, Headphones, Camera } from 'lucide-react';

const categories = [
  {
    icon: Smartphone,
    name: 'Smartphones',
    description: 'Encuentra el móvil perfecto para ti',
    path: '/recommendation/smartphones'
  },
  {
    icon: Laptop,
    name: 'Laptops',
    description: 'Portátiles para trabajo y gaming',
    path: '/recommendation/laptops'
  },
  {
    icon: Tablet,
    name: 'Tablets',
    description: 'Para creatividad y entretenimiento',
    path: '/recommendation/tablets'
  },
  {
    icon: Watch,
    name: 'Smartwatches',
    description: 'Tecnología en tu muñeca',
    path: '/recommendation/smartwatches'
  },
  {
    icon: Headphones,
    name: 'Auriculares',
    description: 'Sonido inmersivo y calidad',
    path: '/recommendation/headphones'
  },
  {
    icon: Camera,
    name: 'Cámaras',
    description: 'Captura momentos especiales',
    path: '/recommendation/cameras'
  }
];

export function Categories() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => navigate(category.path)}
          className="p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-left group"
        >
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
            <category.icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
          <p className="text-sm text-gray-300">{category.description}</p>
        </button>
      ))}
    </div>
  );
}