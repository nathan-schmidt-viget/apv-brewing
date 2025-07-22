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
        <div className='flex flex-col items-center justify-center gap-1'>
          <svg
            className='mr-3 -ml-1 size-8 animate-spin text-blue-100'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              stroke-width='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
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
