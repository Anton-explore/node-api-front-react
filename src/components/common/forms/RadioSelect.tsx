import React, { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface Option {
  label: string;
  value: string;
}

interface RadioSelectProps {
  title: string;
  name: string;
  options: Option[];
  error?: FieldError;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  defaultValue?: string;
}

const RadioSelect: React.FC<RadioSelectProps> = ({
  title,
  name,
  options,
  inputProps,
  error,
  defaultValue,
}) => {
  return (
    <div className="card card-body mb-3">
      <h5>{title}</h5>
      {options.map((option) => (
        <div className="form-check" key={option.value}>
          <input
            className="form-check-input"
            type="radio"
            {...inputProps}
            value={option.value}
            id={`${name}-${option.value}`}
            defaultChecked={defaultValue === option.value}
          />
          <label className="form-check-label" htmlFor={`${name}-${option.value}`}>
            {option.label}
          </label>
        </div>
      ))}
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default RadioSelect;