const API_BASE_URL = 'http://localhost:8000/api';

export interface HeadphonePreferences {
  budget: string;
  usage: string;
  type: string;
  soundQuality: string;
}

export interface Headphone {
  id: string;
  name: string;
  brand: string;
  price: number;
  features: string[];
  image_url: string;
  match_score: number;
}

export async function getHeadphoneRecommendations(preferences: HeadphonePreferences): Promise<Headphone[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/recommendations/headphones`, {
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