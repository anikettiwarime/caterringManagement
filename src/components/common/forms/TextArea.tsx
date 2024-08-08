import React from 'react';

interface TextAreaProps {
  id: string;
  name: string;
  placeholder: string;
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  placeholder,
  className,
  value,
  onChange,
}) => (
  <textarea
    id={id}
    name={name}
    placeholder={placeholder}
    className={className}
    value={value}
    onChange={onChange}
  ></textarea>
);

export default TextArea;
