'use client';

import React, { useState } from 'react';

const Dropdown = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="relative inline-block min-w-[170px] text-left">
      <div className="group">
        <button
          type="button"
          className="inline-flex w-full flex-row items-center  justify-between rounded-normal border border-transparent bg-gray-200 px-2 py-1 font-semibold text-gray-800 duration-300 ease-in-out hover:bg-gray-500 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>{options[index]}</div>
          <div
            className={`ml-2  h-[6px] w-[6px]  border-b border-l border-gray-600 duration-300 ease-in-out group-hover:border-white ${
              isOpen
                ? 'translate-y-[1px] rotate-[135deg]'
                : 'translate-y-[-1px] -rotate-45'
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full origin-top-right rounded-normal bg-gray-200 ">
          <div
            className="flex flex-col py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, idx) => {
              return (
                <button
                  key={option}
                  className="mx-1 block whitespace-nowrap rounded-normal px-2 py-2 text-sm text-gray-700 duration-300 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setIndex(idx);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
