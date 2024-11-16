import { ChangeEvent } from "react";
interface InputProps {
    type: "text" | "number" | "email" | "password";
    label?: string;
    value: string | number;
    name: string;
    placeholder?: string;
    error: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    containerClassname?: string;
    labelClassname?: string;
    inputClassname?: string;
}

const Input = ({
    type,
    label,
    value,
    name,
    placeholder,
    error,
    disabled,
    required,
    onChange,
    containerClassname,
    labelClassname,
    inputClassname,
}: InputProps) => {
    return (
        <div className={`${containerClassname || ""}`}>
            <label
                className={`text-[#344054] ${labelClassname || ""}`}
                htmlFor={label}
            >
                {label}
                {label && required && (
                    <span className="text-red-700 ml-1">*</span>
                )}
            </label>
            <input
                className={`text-[#344054] bg-white border ${
                    inputClassname || ""
                } `}
                type={type}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                required={required}
            />
            {error && <p className="error">Input filed cant be empty!</p>}
        </div>
    );
};

export default Input;
