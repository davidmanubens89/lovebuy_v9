import React from 'react';
import { HelpCircle } from 'lucide-react';

interface Option {
  id: string;
  label: string;
  description?: string;
  value: string;
}

interface QuestionCardProps {
  title: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
  helpText?: string;
}

export function QuestionCard({ title, options, selectedValue, onSelect, helpText }: QuestionCardProps) {
  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="space-y-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.value)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
              selectedValue === option.value
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">{option.label}</h3>
                {option.description && (
                  <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      {helpText && (
        <div className="mt-6 flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
          <HelpCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600">{helpText}</p>
        </div>
      )}
    </div>
  );
}