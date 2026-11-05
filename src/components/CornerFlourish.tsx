import React from 'react';

export const CornerFlourish: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  position,
}) => {
  const getClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2';
      case 'top-right':
        return 'top-2 right-2 rotate-90';
      case 'bottom-left':
        return 'bottom-2 left-2 -rotate-90';
      case 'bottom-right':
        return 'bottom-2 right-2 rotate-180';
    }
  };

  return (
    <svg
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 text-[#c9aa7d]/50 pointer-events-none select-none ${getClasses()}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 34V14C6 9.58172 9.58172 6 14 6H34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};
