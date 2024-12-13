import React from 'react';
import { ProductRecommendation } from './ProductRecommendation';
import { headphonesQuestions } from '../data/headphones';

export function HeadphonesRecommendation() {
  return (
    <ProductRecommendation
      category="headphones"
      questions={headphonesQuestions}
    />
  );
}