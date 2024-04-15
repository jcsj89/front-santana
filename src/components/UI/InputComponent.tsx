import * as React from "react";

interface InputComponentProps {
  className: string;
  containerStyle: string;
  errors: string;
  icon: string;
  inputStyle: string;
  name: string;
  placeholder: string;
  required: string;
  type: string;
  value: string;
  disabled: boolean;
  readOnly: boolean;
  onChange: () => void;
}

const InputComponent = (props: InputComponentProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const inputRef = React.useRef(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={props.className}>
      <div onClick={handleClick} className={props.containerStyle}>
        {props.icon && <Icon dataTestId={`icon-${name}`} type={icon} />}
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
          style={props.inputStyle}
          disabled={props.disabled || false}
          readOnly={props.readOnly || false}
        />
        {props.type === "password" && (
          <div className="input_icon" onClick={handleTogglePassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        )}
      </div>
      {errors && !value && required && (
        <Errors data-testid="errors">Required!</Errors>
      )}
    </div>
  );
};

export default InputComponent;
