import React, { useState } from 'react';
import WelcomePage from './WelcomePage';
import GamePage from './GamePage';
import SettingsPage from './SettingsPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  const handleAdventureSelect = (adventure) => {
    setSelectedAdventure(adventure);
    setCurrentPage('game');
  };

  const handleOpenSettings = () => {
    setCurrentPage('settings');
  };

  const handleBackToWelcome = () => {
    setCurrentPage('welcome');
    setSelectedAdventure(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'welcome':
        return (
          <WelcomePage 
            onAdventureSelect={handleAdventureSelect}
            onOpenSettings={handleOpenSettings}
          />
        );
      case 'game':
        return (
          <GamePage 
            onBackToWelcome={handleBackToWelcome}
            selectedAdventure={selectedAdventure}
          />
        );
      case 'settings':
        return (
          <SettingsPage 
            onBackToWelcome={handleBackToWelcome}
          />
        );
      default:
        return (
          <WelcomePage 
            onAdventureSelect={handleAdventureSelect}
            onOpenSettings={handleOpenSettings}
          />
        );
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;
