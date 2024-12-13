import React from 'react';
import type { Product } from '../../types/product';

interface BudgetRecommendationProps {
  product?: Product;
  loading?: boolean;
}

export function BudgetRecommendation({ product, loading }: BudgetRecommendationProps) {
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-pulse space-y-4 w-full">
          <div className="h-48 bg-gray-200 rounded-lg w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-full flex items-center justify-center text-center p-6">
        <div className="text-gray-500">
          <p className="text-lg font-medium">Default recommendation</p>
          <p className="mt-2 text-sm">Selecciona un rango de presupuesto para ver la recomendación</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-6 flex flex-col">
      <div className="relative h-48 mb-4">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.brand}</p>
      <p className="text-lg font-bold text-indigo-600 mt-2">{product.price}€</p>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Características destacadas:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 