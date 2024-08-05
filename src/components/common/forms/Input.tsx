import React from 'react';

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, id, name, placeholder, className, value, onChange }) => (
  <input
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onChange}
  />
);

export default Input;
