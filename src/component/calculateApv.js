import { useState, useEffect } from 'react';

export default function CalculateApv() {
  const [startingGravity, setStartingGravity] = useState(1.01);
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
    <section className="flex-col flex gap-3">
      <h1 className="header">
        ABV Calculator
      </h1>
      <div className="form">
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
            min={1.01}
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
            min={1.00}
            onChange={(e) => setFinalGravity(parseFloat(e.target.value) || 1.00)}
          />
        </div>
      </div>

      <div className="calculator-display">
        <div className="result-label">Alcohol By Volume</div>
        <div className="result-value">
          {abv}%
        </div>
      </div>
    </section>
  );
}
