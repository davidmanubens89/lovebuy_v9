import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}