import React from 'react';
import { spread } from './spread';

type BinaryProps = {
  value: string;
  className: string;
};

export const Binary: React.FC<BinaryProps> = ({ value, className }) => {
  const digits = spread(value);
  return (
    <div className={`row ${className}`}>
      {digits.map((digit, i) => (
        <span key={i} className={`digit b${digit}`} />
      ))}
    </div>
  );
};
