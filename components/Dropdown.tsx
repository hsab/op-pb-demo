'use client';

import React, { useState } from 'react';

const Dropdown = ({ options }: { options: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="bg-white-dark inline-flex flex-row items-center gap-[2px] rounded-[4px] p-2 pl-3 text-base font-medium text-black duration-300 hover:bg-gray-600 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-base leading-5">{options[index]}</div>
          <div className="flex flex-col items-center justify-center w-4 h-4 ">
            <div
              className={`h-[6px] w-[6px]  border-b border-l border-black duration-300 group-hover:border-white ${
                isOpen
                  ? 'translate-y-[1px] rotate-[135deg]'
                  : 'translate-y-[-1px] -rotate-45'
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`bg-white-dark absolute left-0 mt-2 w-full origin-top-right rounded-normal p-1 duration-300  min-w-[164px] ${
          isOpen ? 'scale-y-1 shadow-center' : 'scale-y-0 shadow-none'
        }`}
      >
        <div
          className="flex flex-col items-start"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {options.map((option, idx) => {
            return (
              <button
                key={option}
                className="w-full px-2 py-2 text-sm text-left text-gray-700 duration-200 whitespace-nowrap rounded-normal hover:bg-gray-600 hover:text-white"
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
      {isOpen && <div />}
    </div>
  );
};

export default Dropdown;
