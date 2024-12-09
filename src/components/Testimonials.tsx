import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana García',
    role: 'Diseñadora Gráfica',
    content: 'Gracias a TechAI encontré la laptop perfecta para mi trabajo creativo. ¡Las recomendaciones fueron exactamente lo que necesitaba!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80&w=150&h=150'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Desarrollador',
    content: 'El proceso fue increíblemente sencillo y las sugerencias fueron muy acertadas. Me ahorró horas de investigación.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&q=80&w=150&h=150'
  },
  {
    name: 'María Torres',
    role: 'Estudiante',
    content: 'La mejor manera de encontrar tecnología sin sentirse abrumado. Las recomendaciones se ajustaron perfectamente a mi presupuesto.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&q=80&w=150&h=150'
  }
];

export function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Lo que dicen nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}