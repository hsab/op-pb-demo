import React from 'react';
import { PiList, PiSliders, PiMagnifyingGlass } from 'react-icons/pi';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <header className="px-4 pt-4">
      <div className="flex flex-row items-center justify-between w-full gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-col items-center justify-center w-6 h-6">
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
          <div className="flex flex-col items-center justify-center w-6 h-6">
            <PiSliders color="#1D2B2E" size="22px" />
          </div>
          <div className="flex flex-col items-center justify-center w-6 h-6">
            <PiMagnifyingGlass color="#1D2B2E" size="22px" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
