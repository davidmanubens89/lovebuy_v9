import React from 'react';
import type { Headphone } from '../../services/api';

interface RecommendationResultsProps {
  recommendations: Headphone[];
}

export function RecommendationResults({ recommendations }: RecommendationResultsProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 text-center">
        Recomendaciones para ti
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {recommendations.map((headphone) => (
          <div
            key={headphone.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={headphone.image_url}
              alt={headphone.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{headphone.name}</h3>
                <span className="text-lg font-bold text-indigo-600">
                  {headphone.price.toLocaleString('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                  })}
                </span>
              </div>
              
              <p className="text-sm text-gray-500 mb-4">
                {headphone.brand}
              </p>
              
              <div className="space-y-2">
                {headphone.features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full inline-block mr-2"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}