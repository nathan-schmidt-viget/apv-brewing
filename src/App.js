import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [startingGravity, setStartingGravity] = useState(0);
  const [finalGravity, setFinalGravity] = useState(0);
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
        <h1>Brewing APV Calculator</h1>
      </header>
      <section className="flex flex-col">
        <label>
          Starting Gravity
          <input type="number" value={startingGravity} onChange={(e) => setStartingGravity(e.target.value)} />
        </label>
        <label>
          Final Gravity
          <input type="number" value={finalGravity} onChange={(e) => setFinalGravity(e.target.value)} />
        </label>
        <div>
          ABV: {abv}%
        </div>
      </section>
    </div>
  );
}

export default App;
