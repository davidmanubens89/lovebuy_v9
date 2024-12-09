import React from 'react';
import { Brain, Clock, Target, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'IA Avanzada',
    description: 'Análisis inteligente de tus necesidades para recomendaciones precisas'
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Encuentra el producto ideal en minutos, no en horas'
  },
  {
    icon: Target,
    title: 'Personalización',
    description: 'Recomendaciones adaptadas a tu presupuesto y preferencias'
  },
  {
    icon: Shield,
    title: 'Confianza',
    description: 'Comparaciones imparciales y reviews verificados'
  }
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          ¿Por qué elegir nuestra plataforma?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}