import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface RecommendationLayoutProps {
  children: React.ReactNode;
}

export function RecommendationLayout({ children }: RecommendationLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4 bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}