import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Cómo funciona el sistema de recomendación?',
    answer: 'Nuestro sistema de IA analiza tus necesidades, presupuesto y preferencias para sugerir los productos que mejor se adapten a ti. Consideramos múltiples factores como especificaciones técnicas, reviews de usuarios y relación calidad-precio.'
  },
  {
    question: '¿Es gratuito el servicio?',
    answer: 'Sí, el servicio básico de recomendación es completamente gratuito. Ofrecemos funciones premium para usuarios que deseen análisis más detallados y comparativas avanzadas.'
  },
  {
    question: '¿Qué tan actualizadas están las recomendaciones?',
    answer: 'Nuestra base de datos se actualiza diariamente con los últimos productos y precios del mercado para garantizar recomendaciones precisas y actuales.'
  },
  {
    question: '¿Puedo confiar en las recomendaciones?',
    answer: 'Absolutamente. Nuestro sistema es imparcial y se basa en datos objetivos. No recibimos comisiones por recomendar productos específicos, lo que garantiza recomendaciones honestas.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}