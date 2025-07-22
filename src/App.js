import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [startingGravity, setStartingGravity] = useState(1.05);
  const [finalGravity, setFinalGravity] = useState(1.01);
  const [abv, setAbv] = useState(0);
  const [alcoholType, setAlcoholType] = useState('beer');
  const [alcoholDescription, setAlcoholDescription] = useState('');

  useEffect(() => {
    setAbv(
      (
        (startingGravity - finalGravity) * 131.25
      ).toFixed(2)
    );
  }, [startingGravity, finalGravity]);

  return (
    <div className="App">
      <header>
        <h1>ABV Calculator</h1>
      </header>

      <section className="form">
        <div className="form-group">
          <label
            className="form-label"
            htmlFor="starting-gravity"
          >
            Original Gravity (OG)
          </label>
          <input 
            type="number" 
            className="form-input"
            id="starting-gravity"
            value={startingGravity} 
            onChange={(e) => setStartingGravity(parseFloat(e.target.value) || 1.00)}
          />
        </div>
        
        <div className="form-group">
          <label
            className="form-label"
            htmlFor="final-gravity"
          >
            Final Gravity (FG)
          </label>
          <input 
            type="number" 
            className="form-input"
            id="final-gravity"
            value={finalGravity} 
            onChange={(e) => setFinalGravity(parseFloat(e.target.value) || 1.00)}
          />
        </div>
      </section>

      <div className="calculator-display">
        <div className="result-label">Alcohol By Volume</div>
        <div className="result-value">
          {abv}%
        </div>
      </div>

      <section className="form">
        <div className="form-group">
          <label
            className="form-label"
            htmlFor="alcohol-type"
          >
            What type of alcohol are you making?
          </label>
          <select
            className="form-input"
            id="alcohol-type"
            value={alcoholType}
            onChange={(e) => setAlcoholType(e.target.value)}
          >
            <option value="beer">Beer</option>
            <option value="wine">Wine</option>
            <option value="cider">Cider</option>
            <option value="mead">Mead</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label
            className="form-label"
            htmlFor="alcohol-description"
          >
            What did you use to make it? (optional)
          </label>
          <textarea
            className="form-textarea"
            id="alcohol-name"
            value={alcoholDescription}
            onChange={(e) => setAlcoholDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button className="form-button">
            Find a Name
          </button>
        </div>
        <div>
          {/* TODO: Add a list of names */}
        </div>
      </section>
    </div>
  );
}

export default App;
