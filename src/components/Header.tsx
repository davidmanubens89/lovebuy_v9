import React from 'react';
import { Menu, X, Search, ShieldCheck } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Search className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">TechAI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-gray-600 hover:text-indigo-600">¿Cómo funciona?</a>
            <a href="#beneficios" className="text-gray-600 hover:text-indigo-600">Beneficios</a>
            <a href="#productos" className="text-gray-600 hover:text-indigo-600">Productos</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Comenzar
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#como-funciona" className="block text-gray-600 hover:text-indigo-600">¿Cómo funciona?</a>
            <a href="#beneficios" className="block text-gray-600 hover:text-indigo-600">Beneficios</a>
            <a href="#productos" className="block text-gray-600 hover:text-indigo-600">Productos</a>
            <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Comenzar
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}