"use client";

import React, { useState } from 'react';

interface SwitchPageHeaderProps {
  itemHeader: string;
  items: string[];
}

export default function SwitchPageHeader({ itemHeader, items }: SwitchPageHeaderProps) {
  const [index, setIndex] = useState(0);

  const handleClick = (itemIndex: number) => {
    setIndex(itemIndex); // Define o índice do item clicado
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex mb-2">
        <span className="text-black mr-2">{itemHeader}</span>
      </div>
      <div className="relative flex space-x-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`relative cursor-pointer flex py-2 ${i === index ? 'font-bold text-primary-900' : 'text-gray-600'}`}
            onClick={() => handleClick(i)}
          >
            {item}
            {i < items.length - 1 && <p className='ml-5 text-gray-600'>|</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
