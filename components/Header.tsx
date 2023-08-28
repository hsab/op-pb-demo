import React from 'react';
import { PiList, PiSliders, PiMagnifyingGlass } from 'react-icons/pi';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <header className="px-4 pt-4">
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="flex h-6 w-6 flex-col items-center justify-center">
            <PiList color="#1D2B2E" size="22px" />
          </div>

          <Dropdown
            options={[
              'Pending requests',
              'Approved',
              'In progress',
              'Completed',
            ]}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex h-6 w-6 flex-col items-center justify-center">
            <PiSliders color="#1D2B2E" size="22px" />
          </div>
          <div className="flex h-6 w-6 flex-col items-center justify-center">
            <PiMagnifyingGlass color="#1D2B2E" size="22px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
