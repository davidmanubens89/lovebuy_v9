from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import os

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HeadphonePreferences(BaseModel):
    budget: str
    usage: str
    type: str
    soundQuality: str

# Mock database of headphones
current_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(current_dir, 'data', 'headphones.json'), 'r') as f:
    data = json.load(f)
    headphones_db = data['headphones']

@app.get("/")
async def read_root():
    return {"message": "Welcome to TechAI API"}

@app.post("/api/recommendations/headphones")
async def get_headphone_recommendations(preferences: HeadphonePreferences):
    # Simple scoring system for recommendations
    scored_headphones = []
    
    for headphone in headphones_db:
        score = 0
        
        # Budget matching
        if preferences.budget == headphone["budget_range"]:
            score += 3
            
        # Usage matching
        if preferences.usage == headphone["primary_use"]:
            score += 2
            
        # Type matching
        if preferences.type == headphone["type"]:
            score += 2
            
        # Sound quality matching
        if preferences.soundQuality == headphone["sound_profile"]:
            score += 2
            
        if score > 0:
            scored_headphones.append({
                **headphone,
                "match_score": score
            })
    
    # Sort by score and return top 3
    recommendations = sorted(
        scored_headphones, 
        key=lambda x: x["match_score"], 
        reverse=True
    )[:3]
    
    return {"recommendations": recommendations}