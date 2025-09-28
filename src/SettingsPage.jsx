import React, { useState } from 'react';
import './SettingsPage.css';

const SettingsPage = ({ onBackToWelcome }) => {
  const [settings, setSettings] = useState({
    fontSize: 'medium',
    contrast: 'normal',
    audioEnabled: true,
    voiceNarration: false,
    dyslexiaFriendly: true,
    colorBlindMode: false,
    reducedMotion: false,
    highContrast: false
  });

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleSaveSettings = () => {
    // Save settings to localStorage or send to backend
    localStorage.setItem('dyslexiquest-settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  const handleResetSettings = () => {
    setSettings({
      fontSize: 'medium',
      contrast: 'normal',
      audioEnabled: true,
      voiceNarration: false,
      dyslexiaFriendly: true,
      colorBlindMode: false,
      reducedMotion: false,
      highContrast: false
    });
  };

  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="settings-header">
          <h1 className="settings-title">ACCESSIBILITY SETTINGS</h1>
          <button className="back-btn" onClick={onBackToWelcome}>
            ← Back to Welcome
          </button>
        </div>

        <div className="settings-sections">
          <div className="settings-section">
            <h3 className="section-title">Text & Reading</h3>
            <div className="setting-item">
              <label>Font Size:</label>
              <select 
                value={settings.fontSize} 
                onChange={(e) => handleSettingChange('fontSize', e.target.value)}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>
            
            <div className="setting-item">
              <label>Dyslexia-Friendly Font:</label>
              <input 
                type="checkbox" 
                checked={settings.dyslexiaFriendly}
                onChange={(e) => handleSettingChange('dyslexiaFriendly', e.target.checked)}
              />
            </div>

            <div className="setting-item">
              <label>High Contrast:</label>
              <input 
                type="checkbox" 
                checked={settings.highContrast}
                onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
              />
            </div>
          </div>

          <div className="settings-section">
            <h3 className="section-title">Audio & Sound</h3>
            <div className="setting-item">
              <label>Enable Audio:</label>
              <input 
                type="checkbox" 
                checked={settings.audioEnabled}
                onChange={(e) => handleSettingChange('audioEnabled', e.target.checked)}
              />
            </div>
            
            <div className="setting-item">
              <label>Voice Narration:</label>
              <input 
                type="checkbox" 
                checked={settings.voiceNarration}
                onChange={(e) => handleSettingChange('voiceNarration', e.target.checked)}
              />
            </div>
          </div>

          <div className="settings-section">
            <h3 className="section-title">Visual Preferences</h3>
            <div className="setting-item">
              <label>Color Blind Mode:</label>
              <input 
                type="checkbox" 
                checked={settings.colorBlindMode}
                onChange={(e) => handleSettingChange('colorBlindMode', e.target.checked)}
              />
            </div>
            
            <div className="setting-item">
              <label>Reduced Motion:</label>
              <input 
                type="checkbox" 
                checked={settings.reducedMotion}
                onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
              />
            </div>
          </div>

          <div className="settings-section">
            <h3 className="section-title">Game Difficulty</h3>
            <div className="setting-item">
              <label>Reading Level:</label>
              <select 
                value={settings.contrast} 
                onChange={(e) => handleSettingChange('contrast', e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="normal">Normal</option>
                <option value="challenging">Challenging</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-actions">
          <button className="save-btn" onClick={handleSaveSettings}>
            Save Settings
          </button>
          <button className="reset-btn" onClick={handleResetSettings}>
            Reset to Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
