"use client";

import { useState } from "react";

const sugarTypes = [
  {
    name: "White Sugar",
    value: "white",
    density: 1.59,
    sugarContent: 100, // 100% sugar content
  },
  {
    name: "Brown Sugar",
    value: "brown",
    density: 1.35,
    sugarContent: 97, // 97% sugar content
  },
  {
    name: "Honey",
    value: "honey",
    density: 1.42,
    sugarContent: 79.6, // 79.6% sugar content (from MeadMakr)
  },
  {
    name: "Maple Syrup",
    value: "maple",
    density: 1.37,
    sugarContent: 66, // 66% sugar content
  },
];

const sweetnessLevels = [
  { name: "Dry", value: 1.0, description: "FG = 1.000" },
  { name: "Semi-Dry", value: 1.01, description: "FG = 1.010" },
  { name: "Semi-Sweet", value: 1.02, description: "FG = 1.020" },
  { name: "Sweet", value: 1.03, description: "FG = 1.030" },
  { name: "Very Sweet", value: 1.05, description: "FG = 1.050" },
];

export default function CalculateSugar() {
  const [batchVolume, setBatchVolume] = useState(5); // gallons
  const [targetABV, setTargetABV] = useState(10); // percentage
  const [yeastABV, setYeastABV] = useState(14); // yeast alcohol tolerance
  const [sweetness, setSweetness] = useState(1.02); // final gravity
  const [sugarType, setSugarType] = useState<string>("honey");
  const [units, setUnits] = useState<"us" | "metric">("us");

  const handleBatchVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBatchVolume(parseFloat(e.target.value));
  };

  const handleTargetABVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetABV(parseFloat(e.target.value));
  };

  const handleYeastABVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYeastABV(parseFloat(e.target.value));
  };

  const handleSweetnessChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSweetness(parseFloat(e.target.value));
  };

  const handleSugarTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSugarType(e.target.value);
  };

  const handleUnitsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUnits(e.target.value as "us" | "metric");
  };

  // Calculate target original gravity based on yeast ABV tolerance and final gravity
  const calculateTargetOG = (abv: number, fg: number) => {
    // Using the standard formula: ABV = (OG - FG) * 131.25
    // Rearranged: OG = (ABV / 131.25) + FG
    return abv / 131.25 + fg;
  };

  // Calculate required sugar amount
  const calculateSugarAmount = () => {
    const targetOG = calculateTargetOG(yeastABV, sweetness);
    const sugar = sugarTypes.find((s) => s.value === sugarType);

    if (!sugar) return { pounds: 0, grams: 0, targetOG: 0 };

    // Convert batch volume to liters for calculations
    const batchVolumeLiters =
      units === "us" ? batchVolume * 3.78541 : batchVolume;

    // Calculate sugar needed in grams
    // Standard brewing formula: Sugar (g) = (Target OG - 1.000) * Batch Volume (L) * 1000 / 0.96
    // Then adjust for sugar content percentage
    const sugarGrams =
      ((targetOG - 1.0) * batchVolumeLiters * 1000) /
      0.96 /
      (sugar.sugarContent / 100);

    // Convert to pounds for US units
    const sugarPounds = sugarGrams / 453.592;

    return {
      pounds: sugarPounds,
      grams: sugarGrams,
      targetOG: targetOG,
    };
  };

  const results = calculateSugarAmount();
  const selectedSugar = sugarTypes.find((s) => s.value === sugarType);
  const selectedSweetness = sweetnessLevels.find((s) => s.value === sweetness);

  // Since we're using yeast tolerance as the target, this is always false
  const isABVExceeded = false;

  return (
    <div className='flex flex-col gap-6 bg-gray-800 rounded-xl p-6 border border-gray-700'>
      <div className='text-center'>
        <h1 className='text-white text-3xl font-bold tracking-tight mb-2'>
          Sugar Calculator
        </h1>
        <p className='text-gray-400 text-sm'>
          Calculate the exact amount of sugar needed to reach maximum potential
          alcohol
        </p>
      </div>

      {/* Units Selection */}
      <div className='flex gap-4'>
        <label className='flex-1'>
          <span className='text-gray-300 text-sm font-semibold tracking-wide block mb-2'>
            Units
          </span>
          <select
            className='bg-gray-700 rounded-xl border border-gray-600 text-white text-lg font-semibold py-2 px-3 text-center transition-all duration-200 w-full focus:bg-gray-600 focus:border-blue-500 focus:outline-none'
            value={units}
            onChange={handleUnitsChange}
          >
            <option value='us'>US Customary</option>
            <option value='metric'>Metric</option>
          </select>
        </label>
      </div>

      {/* Batch Volume */}
      <label>
        <span className='text-gray-300 text-sm font-semibold tracking-wide block mb-2'>
          Batch Volume
        </span>
        <div className='flex items-center gap-2'>
          <input
            type='range'
            min={units === "us" ? 1 : 4}
            max={units === "us" ? 20 : 75}
            step={units === "us" ? 0.5 : 1}
            className='flex-1'
            value={batchVolume}
            onChange={handleBatchVolumeChange}
          />
          <span className='text-white font-semibold min-w-[60px] text-right'>
            {batchVolume} {units === "us" ? "gal" : "L"}
          </span>
        </div>
        <div className='text-gray-400 text-xs mt-1'>
          min: {units === "us" ? "1 gal" : "4 L"} max:{" "}
          {units === "us" ? "20 gal" : "75 L"}
        </div>
      </label>

      {/* Yeast ABV Tolerance */}
      <label>
        <span className='text-gray-300 text-sm font-semibold tracking-wide block mb-2'>
          Yeast ABV Tolerance
        </span>
        <div className='flex items-center gap-2'>
          <input
            type='range'
            min={0}
            max={20}
            step={0.5}
            className='flex-1'
            value={yeastABV}
            onChange={handleYeastABVChange}
          />
          <span className='text-white font-semibold min-w-[60px] text-right'>
            {yeastABV}%
          </span>
        </div>
        <div className='text-gray-400 text-xs mt-1'>min: 0% max: 20%</div>
        {isABVExceeded && (
          <div className='text-red-400 text-xs mt-1 font-semibold'>
            ⚠️ Target ABV exceeds yeast tolerance
          </div>
        )}
      </label>

      {/* Sweetness Level */}
      <label>
        <span className='text-gray-300 text-sm font-semibold tracking-wide block mb-2'>
          Sweetness
        </span>
        <select
          className='bg-gray-700 rounded-xl border border-gray-600 text-white text-lg font-semibold py-2 px-3 text-center transition-all duration-200 w-full focus:bg-gray-600 focus:border-blue-500 focus:outline-none'
          value={sweetness}
          onChange={handleSweetnessChange}
        >
          {sweetnessLevels.map((level) => (
            <option key={level.value} value={level.value}>
              {level.name} ({level.description})
            </option>
          ))}
        </select>
      </label>

      {/* Sugar Type */}
      <label>
        <span className='text-gray-300 text-sm font-semibold tracking-wide block mb-2'>
          Sugar Type
        </span>
        <select
          className='bg-gray-700 rounded-xl border border-gray-600 text-white text-lg font-semibold py-2 px-3 text-center transition-all duration-200 w-full focus:bg-gray-600 focus:border-blue-500 focus:outline-none'
          value={sugarType}
          onChange={handleSugarTypeChange}
        >
          {sugarTypes.map((sugar) => (
            <option key={sugar.value} value={sugar.value}>
              {sugar.name} ({sugar.sugarContent}% sugar)
            </option>
          ))}
        </select>
      </label>

      {/* Results */}
      <div className='bg-gray-700 rounded-xl p-4 border border-gray-600'>
        <h3 className='text-white font-bold text-lg mb-3'>
          Batch Specifications
        </h3>
        <div className='space-y-2 text-gray-300'>
          <div className='flex justify-between'>
            <span>Target OG:</span>
            <span className='font-semibold text-white'>
              {results.targetOG.toFixed(3)}
            </span>
          </div>
          <div className='flex justify-between'>
            <span>Starting Brix:</span>
            <span className='font-semibold text-white'>
              {((results.targetOG - 1.0) * 260).toFixed(1)}
            </span>
          </div>
          <div className='flex justify-between'>
            <span>Max Potential ABV:</span>
            <span className='font-semibold text-green-400'>{yeastABV}%</span>
          </div>
        </div>

        <h3 className='text-white font-bold text-lg mt-4 mb-3'>
          Ingredients Required
        </h3>
        <div className='space-y-2 text-gray-300'>
          <div className='flex justify-between'>
            <span>{selectedSugar?.name} Needed:</span>
            <span className='font-semibold text-white'>
              {units === "us"
                ? `${results.pounds.toFixed(1)} lbs`
                : `${results.grams.toFixed(0)} g`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
