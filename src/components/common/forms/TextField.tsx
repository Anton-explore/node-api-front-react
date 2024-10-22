import React, { InputHTMLAttributes, useState } from "react";
import { FieldError } from 'react-hook-form';

interface TextFieldProps {
  label: string;
  error?: FieldError;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

const TextField: React.FC<TextFieldProps> = ({ label, error, inputProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div className="input-group has-validation">
        <input
          {...inputProps}
          type={showPassword ? "text" : inputProps.type}
          className={getInputClasses()}
        />
        {inputProps.type === "password" && (
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={toggleShowPassword}
          >
            <i
              className={
                "bi bi-eye" + (showPassword ? "-slash" : "")
              }
            ></i>
          </button>
        )}
      </div>
      {error && <p className="invalid-feedback">{error.message}</p>}
    </div>
  );
};

export default TextField;