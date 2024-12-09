import React from 'react';
import { InteractionSelector } from './InteractionSelector';

export function Hero() {
  return (
    <section className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&q=80&w=2000"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-500/60" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              ¿Perdido entre tanta oferta de marcas y modelos?{' '}
              <span className="text-gray-100">Dejanos ayudarte</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-12">
              Como hablar con un dependiente que sabe de tecnología: tú nos cuentas lo que buscas, y nosotros te ayudamos a encontrar la mejor opción para tu bolsillo
            </p>
          </div>
        </div>
        
        {/* Interaction Selector */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <InteractionSelector />
          </div>
        </div>
      </div>
    </section>
  );
}