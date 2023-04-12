import React, { useState } from 'react';

interface SwitchProps {
  onChange: (isChecked: boolean) => void;
  isChecked: boolean;
  label?: string;
  cardViewLabel?: string;
  tableViewLabel?: string;
}

const Switch: React.FC<SwitchProps> = ({
  onChange,
  isChecked,
  label,
  cardViewLabel = 'Card',
  tableViewLabel = 'Table',
}) => {
  const [isCardView, setIsCardView] = useState<boolean>(isChecked);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsCardView(isChecked);
    onChange(isChecked);
  };

  const toggleClassName = `toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
    isCardView ? 'bg-blue-500 border-blue-500' : 'bg-gray-400 border-gray-400'
  }`;

  return (
    <div className="flex items-center">
      <label htmlFor="switch">
        {isCardView ? cardViewLabel : tableViewLabel}
      </label>
      <div className="relative inline-block w-10 mr-2 ml-2 align-middle select-none">
        <input
          type="checkbox"
          id="switch"
          className={toggleClassName}
          checked={isCardView}
          onChange={handleSwitchChange}
        />
        <label
          htmlFor="switch"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      {label && (
        <label className="ml-4" htmlFor="switch">
          {label}
        </label>
      )}
    </div>
  );
};

export default Switch;
