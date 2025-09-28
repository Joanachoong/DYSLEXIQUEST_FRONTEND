import React from 'react';
import './WelcomePage.css';
import sunImage from './assets/sun.png';
import moonImage from './assets/moon.png';
import forestFriend from './assets/forest_friend.png';
import galaxyQuest from './assets/galaxy_quest.png';
import magicalCastle from './assets/magical_castle.png';
import secretIsland from './assets/secret_island.png';

const WelcomePage = ({ onAdventureSelect, onOpenSettings }) => {
  const adventureTypes = [
    {
      id: 'forest',
      name: 'FOREST FRIENDS',
      image: forestFriend,
      description: 'Explore the magical forest and meet friendly creatures'
    },
    {
      id: 'space',
      name: 'GALAXY QUEST',
      image: galaxyQuest,
      description: 'Journey through space and discover new worlds'
    },
    {
      id: 'magical',
      name: 'MAGICAL CASTLE',
      image: magicalCastle,
      description: 'Enter the enchanted castle and solve magical mysteries'
    },
    {
      id: 'mystery',
      name: 'SECRET ISLAND',
      image: secretIsland,
      description: 'Uncover secrets on a mysterious island'
    }
  ];

  const handleAdventureSelect = (adventure) => {
    onAdventureSelect(adventure);
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-banner">
          <img src={sunImage} alt="Sun" className="sun-icon" />
          <div className="title-container">
            <h1 className="welcome-title">WELCOME</h1>
            <h1 className="welcome-title">DYSLEXIQUEST</h1>
            <h1 className="welcome-title">GAME</h1>
          </div>
          <img src={moonImage} alt="Moon" className="moon-icon" />
        </div>
        
        <div className="selection-banner">
          <h2 className="selection-title">CHOOSE YOUR ADVENTURE TYPE :</h2>
        </div>
        
        <div className="adventure-grid">
          {adventureTypes.map((adventure) => (
            <div
              key={adventure.id}
              className="adventure-card"
              onClick={() => handleAdventureSelect(adventure)}
            >
              <div className="adventure-illustration">
                <img 
                  src={adventure.image} 
                  alt={adventure.name}
                  className="adventure-image"
                />
              </div>
              <h3 className="adventure-name">{adventure.name}</h3>
              <p className="adventure-description">{adventure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;