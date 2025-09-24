// src/components/MoodSelector.jsx

import React, { useState } from 'react';
import { moods, timePreferences } from '../utlity/moods.js';

const MoodSelector = ({ onMoodSelect, loading }) => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedTime, setSelectedTime] = useState('any');
  const [customInput, setCustomInput] = useState('');

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleGetRecommendations = () => {
    if (!selectedMood) return;

    const timePreference = timePreferences.find(t => t.id === selectedTime);
    
    onMoodSelect({
      mood: selectedMood,
      timePreference: timePreference,
      customInput: customInput.trim()
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          How are you feeling today?
        </h2>
        <p className="text-gray-600">
          Tell us your mood and we'll find the perfect movie for you
        </p>
      </div>

      {/* Mood Selection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Choose your mood:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {moods.map((mood) => (
            <div
              key={mood.id}
              onClick={() => handleMoodSelect(mood)}
              className={`
                p-4 rounded-lg cursor-pointer transition-all duration-200 border-2
                ${selectedMood?.id === mood.id 
                  ? `${mood.color} border-gray-800 shadow-lg transform scale-105` 
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                }
              `}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="font-semibold text-sm">{mood.name}</div>
                <div className="text-xs text-gray-600 mt-1">{mood.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Preference */}
      {selectedMood && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">How much time do you have?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timePreferences.map((time) => (
              <button
                key={time.id}
                onClick={() => setSelectedTime(time.id)}
                className={`
                  p-3 rounded-lg border transition-all duration-200
                  ${selectedTime === time.id 
                    ? 'bg-blue-500 text-white border-blue-600' 
                    : 'bg-white border-gray-300 hover:bg-gray-50'
                  }
                `}
              >
                <div className="text-lg">{time.emoji}</div>
                <div className="text-sm font-medium">{time.name}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Custom Input */}
      {selectedMood && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Anything specific you want? (Optional)
          </h3>
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="e.g., movies with dogs, set in space, starring Tom Hanks..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Get Recommendations Button */}
      {selectedMood && (
        <div className="text-center">
          <button
            onClick={handleGetRecommendations}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {loading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Finding perfect movies...
              </div>
            ) : (
              `Find Movies for My ${selectedMood.name} Mood`
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default MoodSelector;