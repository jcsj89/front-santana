import { ChangeEvent, FC } from "react";

enum typeInput {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
}

interface InputProps {
  type: "text";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <div className="flex gap-3 justify-center border">
      <label className="text-[#344054] mb-2" htmlFor={label}>
        {label}
      </label>
      <input
        className="w-48 text-[#344054] bg-white border border-[#d0d5dd] rounded-lg py-2 px-3"
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
};

export default Input;
