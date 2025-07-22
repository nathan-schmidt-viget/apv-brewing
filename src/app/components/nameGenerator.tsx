"use client";

import React, { useState } from "react";
import gemini from "./ai/gemini";
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
      const names: NameSuggestion[] = await gemini(
        alcoholType,
        alcoholDescription
      );
      setAlcoholNames(names);
    } catch (error) {
      console.error("Error generating names:", error);
      setAlcoholNames([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='flex-col flex gap-3'>
      <h2 className='header'>Generate a Name</h2>
      <div className='form'>
        <div className='form-group'>
          <label className='form-label' htmlFor='alcohol-type'>
            What type of alcohol are you making?
          </label>
          <select
            className='form-input'
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
        <div className='form-group'>
          <label className='form-label' htmlFor='alcohol-description'>
            What did you use to make it? (optional)
          </label>
          <textarea
            className='form-textarea'
            id='alcohol-description'
            value={alcoholDescription}
            onChange={handleDescriptionChange}
            placeholder='Describe your ingredients, process, or inspiration...'
          />
        </div>
        <div className='form-group'>
          <button
            className='form-button'
            disabled={isLoading}
            onClick={handleGenerateNames}
          >
            {isLoading ? "Generating..." : "Generate a Name"}
          </button>
        </div>
        <Names names={alcoholNames} isLoading={isLoading} />
      </div>
    </section>
  );
}
