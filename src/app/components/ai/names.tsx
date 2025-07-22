"use client";

import React, { Suspense } from "react";

interface NameSuggestion {
  name: string;
}

interface NamesProps {
  names: NameSuggestion[];
  isLoading: boolean;
}

export default function Names({
  names,
  isLoading,
}: NamesProps): React.JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {isLoading ? (
        <div className='flex flex-col gap-1'>
          <svg className='w-6 h-6 mx-auto animate-spin' viewBox='0 0 50 50'>
            <circle
              className='stroke-blue-500 stroke-2 fill-none'
              cx='25'
              cy='25'
              r='20'
              strokeLinecap='round'
            />
          </svg>
        </div>
      ) : (
        names.length > 0 && (
          <div className='flex flex-col gap-4 mt-6'>
            <h3 className='text-gray-300 text-xl text-center font-semibold tracking-wide'>
              Suggested Names
            </h3>
            <ul className='text-gray-300 flex flex-col gap-2 list-none'>
              {names.map((name: NameSuggestion, index: number) => (
                <li
                  key={index}
                  className='p-2 bg-gray-700 text-center rounded-lg'
                >
                  {name.name}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </Suspense>
  );
}
