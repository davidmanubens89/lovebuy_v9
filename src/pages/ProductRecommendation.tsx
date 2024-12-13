import React, { useState } from 'react';
import { RecommendationLayout } from '../components/recommendation/RecommendationLayout';
import { QuestionCard } from '../components/recommendation/QuestionCard';
import { RecommendationResults } from '../components/recommendation/RecommendationResults';
import { getRecommendations } from '../services/api';
import type { Product } from '../types/product';
import { HowItWorks } from '../components/recommendation/HowItWorks';

interface ProductRecommendationProps {
  category: string;
  questions: Record<string, {
    title: string;
    options: Array<{
      id: string;
      label: string;
      description?: string;
      value: string;
    }>;
    helpText?: string;
    layout?: 'vertical' | 'horizontal';
  }>;
}

export function ProductRecommendation({ category, questions }: ProductRecommendationProps) {
  const [answers, setAnswers] = useState<Record<string, string>>(() => 
    Object.keys(questions).reduce((acc, key) => ({ ...acc, [key]: '' }), {})
  );
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [defaultRecommendation, setDefaultRecommendation] = useState<Product | undefined>();
  const [loadingRecommendation, setLoadingRecommendation] = useState(false);

  const handleAnswer = async (question: string, value: string) => {
    const newAnswers = { ...answers, [question]: value };
    setAnswers(newAnswers);

    // If this is a budget question, fetch the default recommendation
    if (question === 'budget') {
      try {
        setLoadingRecommendation(true);
        const results = await getRecommendations(category, { budget: value });
        setDefaultRecommendation(results[0]);
      } catch (err) {
        console.error('Error fetching default recommendation:', err);
      } finally {
        setLoadingRecommendation(false);
      }
    }

    // Check if all questions are answered
    if (Object.values(newAnswers).every(answer => answer !== '')) {
      try {
        setLoading(true);
        setError(null);
        const results = await getRecommendations(category, newAnswers);
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
      <div className="max-w-6xl mx-auto space-y-16">
        <HowItWorks />
        
        {Object.entries(questions).map(([key, question]) => (
          <QuestionCard
            key={key}
            title={question.title}
            options={question.options}
            selectedValue={answers[key]}
            onSelect={(value) => handleAnswer(key, value)}
            helpText={question.helpText}
            isBudgetQuestion={key === 'budget'}
            layout="horizontal"
            defaultRecommendation={key === 'budget' ? defaultRecommendation : undefined}
            loading={key === 'budget' ? loadingRecommendation : false}
            showDefaultRecommendationBelow={key === 'budget'}
          />
        ))}

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