import React, { ChangeEvent, useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownFilterProps {
  options: Option[];
  selectedOption: string | null;
  onOptionSelected: (option: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  options,
  selectedOption,
  onOptionSelected,
}) => {
  return (
    <select
      data-testid="select-component"
      className="rounded-lg py-2 px-4 w-50 border border-gray-300 focus:border-blue-500 focus:outline-none mb-5"
      value={selectedOption || ''}
      onChange={onOptionSelected}
    >
      {options.map((option) => (
        <option
          data-testid={option.value}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownFilter;
