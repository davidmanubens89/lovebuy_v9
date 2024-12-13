import { useState } from 'react';
import { buyingGuideExplanations } from '../../data/buyingGuideExplanations';
import { Dialog } from '@headlessui/react';

export function HowItWorks() {
  const [selectedGuide, setSelectedGuide] = useState<keyof typeof buyingGuideExplanations | null>(null);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const guideButtons = [
    { key: 'headphoneType', label: 'Tipos de auriculares' },
    { key: 'plannedUse', label: 'Uso planificado' },
    { key: 'soundQuality', label: 'Calidad de audio' },
    { key: 'noiseCancellation', label: 'Cancelación de ruido' },
    { key: 'hoursOfUse', label: 'Batería y horas de uso' },
    { key: 'microphoneQuality', label: 'Calidad del micrófono' },
    { key: 'features', label: 'Funciones especiales' },
  ];

  const steps = [
    {
      title: 'Dinos tu presupuesto',
      explanation: 'Selecciona el rango de presupuesto que tienes disponible. Podrás revisar las mejores opciones genéricas para tu rango, o continuar para refinar según tus necesidades y preferencias.'
    },
    {
      title: 'Selecciona preferencias y necesidades',
      explanation: (
        <div className="space-y-4">
          <p className="mb-4">
            Conoce y revisa todos los elementos importantes a considerar para recomendarte el mejor producto.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {guideButtons.map((button) => (
              <button
                key={button.key}
                onClick={() => setSelectedGuide(button.key as keyof typeof buyingGuideExplanations)}
                className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      title: 'Obtén recomendaciones personalizadas',
      explanation: 'Recibirás recomendaciones personalizadas de productos, junto con explicaciones detalladas de cómo cada recomendación se ajusta a tus necesidades y preferencias específicas.'
    }
  ];

  const handleStepClick = (index: number) => {
    setSelectedStep(selectedStep === index ? null : index);
  };

  return (
    <div className="mb-16 mt-12">
      <h2 className="text-2xl font-semibold mb-12 text-left">Cómo funciona</h2>
      
      {/* Steps flow diagram */}
      <div className="flex items-center justify-between mb-8 w-full">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative h-12 flex-1 cursor-pointer md:cursor-default"
            onClick={() => handleStepClick(index)}
          >
            <svg
              viewBox="0 0 250 48"
              className="absolute top-0 left-0 w-full h-full"
              preserveAspectRatio="none"
            >
              {index === 0 && (
                <path
                  d="M0 0h225l25 24-25 24H0v-48z"
                  fill="#9CA3AF"
                  className="transition-colors duration-300 hover:fill-gray-600"
                />
              )}
              {index === 1 && (
                <path
                  d="M0 0h225l25 24-25 24H0l25-24L0 0z"
                  fill="#9CA3AF"
                  className="transition-colors duration-300 hover:fill-gray-600"
                />
              )}
              {index === steps.length - 1 && (
                <path
                  d="M0 0h225v48H0l25-24L0 0z"
                  fill="#9CA3AF"
                  className="transition-colors duration-300 hover:fill-gray-600"
                />
              )}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white px-6">
              <span className="text-sm font-medium text-center">
                {step.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile explanation box (only shows when step is selected) */}
      <div className="md:hidden">
        {selectedStep !== null && (
          <div 
            className="border border-gray-200 rounded-lg p-4 text-center mb-8 animate-fadeIn"
          >
            {steps[selectedStep].explanation}
          </div>
        )}
      </div>

      {/* Desktop explanation boxes (hidden on mobile) */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 text-center"
          >
            {step.explanation}
          </div>
        ))}
      </div>

      {/* Guide Dialog */}
      {selectedGuide && (
        <Dialog
          open={true}
          onClose={() => setSelectedGuide(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-2xl rounded-lg bg-white p-6">
              <Dialog.Title className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>{buyingGuideExplanations[selectedGuide].icon}</span>
                <span>{buyingGuideExplanations[selectedGuide].title}</span>
              </Dialog.Title>
              
              <div className="prose max-w-none">
                <p>{buyingGuideExplanations[selectedGuide].explanation}</p>
                <p className="font-medium mt-4">{buyingGuideExplanations[selectedGuide].importance}</p>
              </div>

              <button
                onClick={() => setSelectedGuide(null)}
                className="mt-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Cerrar
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
} 