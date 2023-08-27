import React from 'react';
import { VscMenu, VscSearch, VscSettings } from 'react-icons/vsc';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <header>
      <div className="flex w-full flex-row items-center justify-between gap-4 bg-white">
        <div className="flex flex-row items-center gap-6">
          <VscMenu color="#1D2B2E" size="24px" />
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
          <VscSettings color="#1D2B2E" size="24px" />
          <VscSearch color="#1D2B2E" size="24px" className="scale-x-[-1]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
