import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [startingGravity, setStartingGravity] = useState(1.05);
  const [finalGravity, setFinalGravity] = useState(1.01);
  const [abv, setAbv] = useState(0);

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
    </div>
  );
}

export default App;
