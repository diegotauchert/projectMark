"use client";

import { ReactElement } from 'react';

type tabType = {
  text: string;
  isChecked: boolean;
  onTabClick: () => void;
};

export const Tab = ({ text, isChecked, onTabClick }: tabType): ReactElement => {
  const colorScheme = {
    active: 'border-blueHighlight',
    notActive: 'border-gray-300',
  }

  return (
    <div className="relative">
      <div 
        className={`tab flex gap-3 items-center relative border rounded-lg md:w-[210px] px-4 py-3 cursor-pointer transition duration-100 ease-in ${isChecked ? colorScheme.active : colorScheme.notActive}`}
        onClick={onTabClick}
        role="listitem"
      >
        <input 
          type="checkbox" 
          id={`input-${text}`} 
          checked={isChecked}
          readOnly
          className="w-4 h-4 bg-white border-2 border-gray-300 rounded !outline-none focus:ring-0" 
        />
        <label htmlFor={`input-${text}`} className='text-sm text-gray800 z-0 select-none'>{text}</label>
      </div>
      {isChecked 
        ? <div className="relative mx-auto -mt-1.5 w-3 h-3 bg-white before:border-blueHighlight before:block before:border-l before:border-t before:origin-center before:rotate-[225deg] before:translate-0 before:scale-75 before:h-3 before:w-3"></div> 
        : <div className="w-3 h-3 bg-transparent"></div>
      }
    </div>
  );
}