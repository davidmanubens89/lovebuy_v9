import { Product } from "../types/product";

const API_BASE_URL = 'http://localhost:8000/api';

export async function getRecommendations(
  category: string,
  preferences: Record<string, string>
): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/recommendations/${category}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    });

    if (!response.ok) {
      throw new Error('Failed to get recommendations');
    }

    const data = await response.json();
    return data.recommendations;
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
}