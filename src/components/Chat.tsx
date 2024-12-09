import React from 'react';
import { Send, Paperclip } from 'lucide-react';

export function Chat() {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center gap-2 bg-white/10 rounded-xl pl-4 pr-2 py-2">
          <Paperclip className="w-5 h-5 text-gray-300" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Dime qué estás buscando..."
            className="flex-1 text-sm bg-transparent text-white placeholder-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-white text-gray-900 rounded-lg p-1.5 hover:bg-gray-100 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}