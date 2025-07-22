"use client";

import React, { useState, useEffect } from "react";

interface GravityInput {
  startingGravity: number;
  finalGravity: number;
}

interface AbvResult {
  abv: number;
}

export default function CalculateApv(): React.JSX.Element {
  const [startingGravity, setStartingGravity] = useState<number>(1.01);
  const [finalGravity, setFinalGravity] = useState<number>(1.01);
  const [abv, setAbv] = useState<number>(0);

  useEffect(() => {
    const calculatedAbv: number = parseFloat(
      ((startingGravity - finalGravity) * 131.25).toFixed(2)
    );
    setAbv(calculatedAbv);
  }, [startingGravity, finalGravity]);

  const handleStartingGravityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: number = parseFloat(e.target.value) || 1.0;
    setStartingGravity(value);
  };

  const handleFinalGravityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: number = parseFloat(e.target.value) || 1.0;
    setFinalGravity(value);
  };

  return (
    <section className='flex-col flex gap-3'>
      <h1 className='header'>ABV Calculator</h1>
      <div className='form'>
        <div className='form-group'>
          <label className='form-label' htmlFor='starting-gravity'>
            Original Gravity (OG)
          </label>
          <input
            type='number'
            className='form-input'
            id='starting-gravity'
            value={startingGravity}
            min={1.01}
            step={0.001}
            onChange={handleStartingGravityChange}
          />
        </div>

        <div className='form-group'>
          <label className='form-label' htmlFor='final-gravity'>
            Final Gravity (FG)
          </label>
          <input
            type='number'
            className='form-input'
            id='final-gravity'
            value={finalGravity}
            min={1.0}
            step={0.001}
            onChange={handleFinalGravityChange}
          />
        </div>
      </div>

      <div className='calculator-display'>
        <div className='result-label'>Alcohol By Volume</div>
        <div className='result-value'>{abv}%</div>
      </div>
    </section>
  );
}
