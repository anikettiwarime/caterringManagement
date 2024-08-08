import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  options: {
    placeholder: string;
    items: SelectOption[];
  };
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  className,
  value,
  onChange,
}) => (
  <select
    id={id}
    name={name}
    className={className}
    value={value}
    onChange={onChange}
  >
    <option value="" disabled hidden>
      {options.placeholder}
    </option>
    {options.items.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
