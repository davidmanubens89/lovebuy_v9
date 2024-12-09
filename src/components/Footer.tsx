import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">TechAI</h3>
            <p className="text-sm">
              Simplificando la búsqueda de tecnología con recomendaciones personalizadas impulsadas por IA.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition">Cómo Funciona</a></li>
              <li><a href="#" className="hover:text-white transition">Productos</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TechAI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}