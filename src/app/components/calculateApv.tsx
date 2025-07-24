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
    <section className='flex flex-col gap-3'>
      <h1 className='text-white text-3xl font-bold tracking-tight text-center m-0'>
        ABV Calculator
      </h1>
      <div className='flex flex-col gap-4 bg-gray-800 rounded-2xl border border-gray-700 p-4'>
        <div className='flex flex-col gap-1'>
          <label
            className='text-gray-300 text-sm font-semibold tracking-wide'
            htmlFor='starting-gravity'
          >
            Original Gravity (OG)
          </label>
          <input
            type='number'
            className='bg-gray-700 rounded-xl border border-gray-600 text-white text-lg font-semibold py-2 px-3 text-center transition-all duration-200 w-full focus:bg-gray-600 focus:border-blue-500 focus:outline-none placeholder:text-gray-400'
            id='starting-gravity'
            value={startingGravity}
            min={1.01}
            step={0.001}
            onChange={handleStartingGravityChange}
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label
            className='text-gray-300 text-sm font-semibold tracking-wide'
            htmlFor='final-gravity'
          >
            Final Gravity (FG)
          </label>
          <input
            type='number'
            className='bg-gray-700 rounded-xl border border-gray-600 text-white text-lg font-semibold py-2 px-3 text-center transition-all duration-200 w-full focus:bg-gray-600 focus:border-blue-500 focus:outline-none placeholder:text-gray-400'
            id='final-gravity'
            value={finalGravity}
            min={1.0}
            onChange={handleFinalGravityChange}
          />
        </div>
      </div>

      <div className='text-center bg-gray-800 rounded-2xl border border-gray-700 p-5'>
        <div className='text-gray-400 text-sm font-medium mb-1'>
          Alcohol By Volume
        </div>
        <div className='text-green-500 text-4xl font-bold tracking-tight'>
          {abv}%
        </div>
      </div>
    </section>
  );
}
