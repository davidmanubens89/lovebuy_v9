import React from 'react';
import { HelpCircle } from 'lucide-react';
import { BudgetRecommendation } from './BudgetRecommendation';
import type { Product } from '../../types/product';

interface Option {
  id: string;
  label: string;
  description?: string;
  value: string;
}

interface QuestionCardProps {
  title: string;
  options: Array<{
    id: string;
    label: string;
    description?: string;
    value: string;
  }>;
  selectedValue: string;
  onSelect: (value: string) => void;
  helpText?: string;
  isBudgetQuestion?: boolean;
  layout?: 'vertical' | 'horizontal';
  defaultRecommendation?: Product;
  loading?: boolean;
  showDefaultRecommendationBelow?: boolean;
}

export function QuestionCard({
  title,
  options,
  selectedValue,
  onSelect,
  helpText,
  isBudgetQuestion,
  layout = 'vertical',
  defaultRecommendation,
  loading,
  showDefaultRecommendationBelow
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {helpText && (
        <p className="text-gray-600 mb-4 flex items-center gap-2">
          <HelpCircle className="w-5 h-5" />
          {helpText}
        </p>
      )}
      
      <div className={`grid ${layout === 'horizontal' ? 'grid-cols-3 gap-4' : 'grid-cols-1 gap-3'}`}>
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.value)}
            className={`
              p-4 rounded-lg border-2 transition-all
              ${selectedValue === option.value
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <div className="font-medium">{option.label}</div>
            {option.description && (
              <div className="text-sm text-gray-500 mt-1">{option.description}</div>
            )}
          </button>
        ))}
      </div>

      {showDefaultRecommendationBelow && (
        <div className="mt-6">
          {loading ? (
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="animate-spin inline-block w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
              <p className="text-gray-600 mt-2">Cargando recomendación...</p>
            </div>
          ) : defaultRecommendation ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Recomendación por defecto</h3>
              {/* Add your default recommendation content here */}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-600">
              Selecciona un rango de presupuesto para ver la recomendación
            </div>
          )}
        </div>
      )}
    </div>
  );
}