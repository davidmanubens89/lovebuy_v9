import React, { useState } from 'react';
import { RecommendationLayout } from '../components/recommendation/RecommendationLayout';
import { QuestionCard } from '../components/recommendation/QuestionCard';
import { RecommendationResults } from '../components/recommendation/RecommendationResults';
import { getHeadphoneRecommendations, type Headphone } from '../services/api';

const questions = {
  budget: {
    title: "¿Cuál es tu presupuesto?",
    options: [
      { id: "1", label: "Menos de 50€", value: "under-50" },
      { id: "2", label: "50€ - 100€", value: "50-100" },
      { id: "3", label: "100€ - 200€", value: "100-200" },
      { id: "4", label: "Más de 200€", value: "over-200" }
    ],
    helpText: "Selecciona un rango de presupuesto para mostrarte las mejores opciones disponibles."
  },
  usage: {
    title: "¿Para qué usarás los auriculares principalmente?",
    options: [
      { id: "1", label: "Música", description: "Alta fidelidad y calidad de sonido", value: "music" },
      { id: "2", label: "Gaming", description: "Con micrófono y sonido posicional", value: "gaming" },
      { id: "3", label: "Deportes", description: "Resistentes al agua y seguros", value: "sports" },
      { id: "4", label: "Uso diario", description: "Para llamadas y contenido variado", value: "daily" }
    ]
  },
  type: {
    title: "¿Qué tipo de auriculares prefieres?",
    options: [
      { id: "1", label: "In-ear", description: "Compactos y portátiles", value: "in-ear" },
      { id: "2", label: "Over-ear", description: "Mayor inmersión y comodidad", value: "over-ear" },
      { id: "3", label: "On-ear", description: "Balance entre portabilidad y sonido", value: "on-ear" }
    ],
    helpText: "Cada tipo tiene sus ventajas. Los in-ear son más portátiles, los over-ear ofrecen mejor calidad de sonido, y los on-ear son un punto intermedio."
  },
  soundQuality: {
    title: "¿Qué aspecto del sonido valoras más?",
    options: [
      { id: "1", label: "Graves potentes", description: "Ideal para música electrónica y hip-hop", value: "bass" },
      { id: "2", label: "Sonido balanceado", description: "Para todo tipo de música", value: "balanced" },
      { id: "3", label: "Claridad vocal", description: "Perfecto para podcast y llamadas", value: "vocal" },
      { id: "4", label: "Alta fidelidad", description: "Máxima calidad de audio", value: "hifi" }
    ]
  }
};

export function HeadphonesRecommendation() {
  const [answers, setAnswers] = useState({
    budget: '',
    usage: '',
    type: '',
    soundQuality: ''
  });
  const [recommendations, setRecommendations] = useState<Headphone[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = async (question: keyof typeof answers, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);

    // Check if all questions are answered
    if (Object.values(newAnswers).every(answer => answer !== '')) {
      try {
        setLoading(true);
        setError(null);
        const results = await getHeadphoneRecommendations(newAnswers);
        setRecommendations(results);
      } catch (err) {
        setError('Error al obtener recomendaciones. Por favor, inténtalo de nuevo.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <RecommendationLayout>
      <div className="max-w-4xl mx-auto space-y-16">
        <QuestionCard
          title={questions.budget.title}
          options={questions.budget.options}
          selectedValue={answers.budget}
          onSelect={(value) => handleAnswer('budget', value)}
          helpText={questions.budget.helpText}
        />

        <QuestionCard
          title={questions.usage.title}
          options={questions.usage.options}
          selectedValue={answers.usage}
          onSelect={(value) => handleAnswer('usage', value)}
        />

        <QuestionCard
          title={questions.type.title}
          options={questions.type.options}
          selectedValue={answers.type}
          onSelect={(value) => handleAnswer('type', value)}
          helpText={questions.type.helpText}
        />

        <QuestionCard
          title={questions.soundQuality.title}
          options={questions.soundQuality.options}
          selectedValue={answers.soundQuality}
          onSelect={(value) => handleAnswer('soundQuality', value)}
        />

        {loading && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-600 border-t-transparent"></div>
            <p className="mt-2 text-gray-600">Buscando las mejores recomendaciones...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center">
            {error}
          </div>
        )}

        {recommendations.length > 0 && (
          <RecommendationResults recommendations={recommendations} />
        )}
      </div>
    </RecommendationLayout>
  );
}