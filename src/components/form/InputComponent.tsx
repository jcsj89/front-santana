"use client";
import { IconMoon } from "@/icons";
import * as React from "react";

interface InputComponentProps {
  name: string;
  type: string;
  value: string;
  label?: string;
  className?: string;
  containerStyle?: string;
  errors?: string;
  icon?: React.ReactElement;
  inputStyle?: string;
  iconStyle?: string;
  labelStyle?: string;
  placeholder?: string;
  required?: string;
<<<<<<< HEAD
=======
  type: 'text'|'number'|'password'|'email';
  value: string;
>>>>>>> refs/remotes/origin/main
  disabled?: boolean;
  readOnly?: boolean;
  onChange: () => void;
}

const InputComponent = (props: InputComponentProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const inputRef = React.useRef(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = () => {
    // if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={props.className}>
      <div onClick={handleClick} className={props.containerStyle}>
        <div className={props.labelStyle}>{props.label && props.label}</div>
        <div className={props.iconStyle}>{props.icon && props.icon}</div>
        <input
          ref={inputRef}
          aria-label={props.name}
          data-testid={props.name}
          tabIndex={0}
          type={showPassword ? "text" : props.type}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
          className={props.inputStyle}
          disabled={props.disabled || false}
          readOnly={props.readOnly || false}
        />
        {props.type === "password" && (
          <div className="input_icon" onClick={handleTogglePassword}>
            {showPassword ? IconMoon("w-6 h-6") : "i"}
          </div>
        )}
      </div>
      {props.errors &&
        !props.value &&
        props.required &&
        '<Errors data-testid="errors">Required!</Errors>'}
    </div>
  );
};

export default InputComponent;
