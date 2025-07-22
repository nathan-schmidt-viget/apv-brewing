"use client";

import React, { useState } from "react";
import Names from "./ai/names";

interface AlcoholType {
  value: string;
  label: string;
}

interface NameSuggestion {
  name: string;
}

interface NameGeneratorProps {
  // Add any props if needed in the future
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function NameGenerator(
  props: NameGeneratorProps
): React.JSX.Element {
  const [alcoholType, setAlcoholType] = useState<string>("beer");
  const [alcoholDescription, setAlcoholDescription] = useState<string>("");
  const [alcoholNames, setAlcoholNames] = useState<NameSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const alcoholTypes: AlcoholType[] = [
    { value: "beer", label: "Beer" },
    { value: "wine", label: "Wine" },
    { value: "cider", label: "Cider" },
    { value: "mead", label: "Mead" },
    { value: "other", label: "Other" },
  ];

  const handleAlcoholTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setAlcoholType(e.target.value);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setAlcoholDescription(e.target.value);
  };

  const handleGenerateNames = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const url = `${baseUrl}/api/gemini-ai-model`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `I am making ${alcoholType} with the following description: ${alcoholDescription}.
        Generate a name for the ${alcoholType}, based on the description. List only three names: one classic, one trendy, and one random. 
        Render the names in a json format that matches [{name: ''}]`,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseText = await response.text();

      if (!responseText) {
        throw new Error("Empty response from server");
      }

      const data = JSON.parse(responseText);
      setAlcoholNames(data);
    } catch (error) {
      console.error("Error fetching response:", error);
      setAlcoholNames([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='flex flex-col gap-3'>
      <h2 className='text-white text-3xl font-bold tracking-tight text-center m-0 sr-only'>
        Generate a Name
      </h2>
      <div className='flex flex-col gap-4 bg-gray-800 rounded-2xl border border-gray-700 p-4'>
        <div className='flex flex-col gap-1'>
          <label
            className='text-gray-300 text-sm font-semibold tracking-wide'
            htmlFor='alcohol-type'
          >
            What type of alcohol did you make?
          </label>
          <select
            className='bg-gray-700 rounded-xl border border-gray-600 text-white text-lg font-semibold py-2 px-3 text-center transition-all duration-200 w-full focus:bg-gray-600 focus:border-blue-500 focus:outline-none'
            id='alcohol-type'
            value={alcoholType}
            onChange={handleAlcoholTypeChange}
          >
            {alcoholTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col gap-1'>
          <label
            className='text-gray-300 text-sm font-semibold tracking-wide'
            htmlFor='alcohol-description'
          >
            What did you use to make it?
          </label>
          <textarea
            className='bg-gray-700 rounded-xl border border-gray-600 text-white py-2 px-3 text-sm font-semibold resize-none'
            id='alcohol-description'
            value={alcoholDescription}
            onChange={handleDescriptionChange}
            placeholder='Describe your ingredients, process, or inspiration...'
            rows={3}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <button
            className='bg-blue-500 rounded-xl border-none text-white text-lg font-semibold py-3 px-3 disabled:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={isLoading}
            onClick={handleGenerateNames}
          >
            {isLoading ? "Generating..." : "Generate Names"}
          </button>
        </div>
        <Names names={alcoholNames} isLoading={isLoading} />
      </div>
    </section>
  );
}
