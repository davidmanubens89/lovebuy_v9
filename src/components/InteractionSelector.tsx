import React from 'react';
import { Categories } from './Categories';
import { Chat } from './Chat';

export function InteractionSelector() {
  const [selectedOption, setSelectedOption] = React.useState<'categories' | 'chat'>('categories');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex bg-white/10 p-1 rounded-lg backdrop-blur-sm">
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedOption === 'categories'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-white hover:text-gray-100'
            }`}
            onClick={() => setSelectedOption('categories')}
          >
            Categorías
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedOption === 'chat'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-white hover:text-gray-100'
            }`}
            onClick={() => setSelectedOption('chat')}
          >
            Chatea conmigo
          </button>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
        {selectedOption === 'categories' ? <Categories /> : <Chat />}
      </div>
    </div>
  );
}