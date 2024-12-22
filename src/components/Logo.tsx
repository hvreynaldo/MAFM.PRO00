import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/Logo.png" 
        alt="MAFM.pro Logo" 
        className="h-8 w-auto"
      />
      <span className="text-xl font-bold text-gray-900">MAFM.pro</span>
    </div>
  );
}