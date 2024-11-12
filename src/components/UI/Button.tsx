"use client";
type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      type={props?.type || "button"} // button, reset, submit
      onClick={props.onClick}
      className={props.className}
    >
      {props.label}
    </button>
  );
};

export default Button;
