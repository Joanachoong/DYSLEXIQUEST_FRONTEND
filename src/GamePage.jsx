import React, { useState, useEffect } from 'react';
import './GamePage.css';

// Import background images
import forestBackground from './assets/forest_friend_background.png';
import galaxyBackground from './assets/galaxy_quest_background.png';
import castleBackground from './assets/magical_castle_background.png';
import islandBackground from './assets/secret_island_background.png';

const GamePage = ({ onBackToWelcome, selectedAdventure }) => {
  // Log the selected adventure and background image for debugging
  useEffect(() => {
    console.log('Selected Adventure:', selectedAdventure);
    console.log('Background Image:', getBackgroundImage(selectedAdventure?.name));
  }, [selectedAdventure]);
  const [currentTurn, setCurrentTurn] = useState(1);
  const [maxTurns] = useState(10);
  const [showSettings, setShowSettings] = useState(false);
  const [answeredOptions, setAnsweredOptions] = useState({});
  
  // Mock correct answer - in real implementation, this would come from your game state
  const correctAnswer = "Option 2";

  const handleNewGame = () => {
    onBackToWelcome();
  };

  const handleOptionClick = (option) => {
    const isCorrect = option === correctAnswer;
    
    setAnsweredOptions(prev => ({
      ...prev,
      [option]: isCorrect
    }));

    if (isCorrect) {
      // Wait a moment to show the correct answer feedback before moving to next question
      setTimeout(() => {
        setCurrentTurn(prev => prev + 1);
        setAnsweredOptions({}); // Reset answers for next question
      }, 1000);
    }
  };

  const getOptionStatus = (option) => {
    if (answeredOptions[option] === undefined) return '';
    return answeredOptions[option] ? 'correct' : 'incorrect';
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  // Get background image based on adventure
  const getBackgroundImage = (adventureName) => {
    if (!adventureName) return null;
    const name = adventureName.toLowerCase();
    switch(name) {
      case 'forest friends':
        return forestBackground;
      case 'galaxy quest':
        return galaxyBackground;
      case 'magical castle':
        return castleBackground;
      case 'secret island':
        return islandBackground;
      default:
        return null;
    }
  };

  const containerStyle = {
    backgroundImage: selectedAdventure?.name ? 
      `url(${getBackgroundImage(selectedAdventure.name)})` : 
      'none'
  };

  return (
    <div 
      className="game-container" 
      style={containerStyle}>
      <div className="game-content">
        <div className="game-header">
          <div className="question-number">
            Question {currentTurn}
          </div>
          <button className="new-game-button" onClick={handleNewGame}>
            New Game
          </button>
        </div>

        <div className="story-box">
          <div className="story-content">
            *AI Generated Story and Prompt*
          </div>
        </div>

        <div className="action-question">
          <h3>What do you want to do next?</h3>
        </div>

        <div className="action-options">
          <button 
            className={`action-btn ${getOptionStatus('Option 1')}`}
            onClick={() => handleOptionClick('Option 1')}
          >
            Option 1
            <span className="answer-indicator"></span>
          </button>
          <button 
            className={`action-btn ${getOptionStatus('Option 2')}`}
            onClick={() => handleOptionClick('Option 2')}
          >
            Option 2
            <span className="answer-indicator"></span>
          </button>
          <button 
            className={`action-btn ${getOptionStatus('Option 3')}`}
            onClick={() => handleOptionClick('Option 3')}
          >
            Option 3
            <span className="answer-indicator"></span>
          </button>
          <button 
            className={`action-btn ${getOptionStatus('Option 4')}`}
            onClick={() => handleOptionClick('Option 4')}
          >
            Option 4
            <span className="answer-indicator"></span>
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="settings-overlay">
          <div className="settings-panel">
            <div className="settings-header">
              <h3>Accessibility Settings</h3>
              <button className="close-settings" onClick={toggleSettings}>
                ×
              </button>
            </div>
            
            <div className="settings-content">
              <div className="setting-group">
                <label>Text Size:</label>
                <div className="setting-options">
                  <button className="setting-btn">Small</button>
                  <button className="setting-btn active">Medium</button>
                  <button className="setting-btn">Large</button>
                </div>
              </div>
              
              <div className="setting-group">
                <label>Display Theme:</label>
                <div className="setting-options">
                  <button className="setting-btn">Retro MS DOS</button>
                  <button className="setting-btn active">High Contrast</button>
                </div>
              </div>
              
              <div className="setting-group">
                <label>Font Style:</label>
                <div className="setting-options">
                  <button className="setting-btn">Monospace (Traditional)</button>
                  <button className="setting-btn active">OpenDyslexic</button>
                  <button className="setting-btn">Alkimian Hyperlegible</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
