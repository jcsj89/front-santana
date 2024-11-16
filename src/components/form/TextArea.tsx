import { ChangeEvent } from "react";

interface TextAreaProps {
    label?: string;
    value: string | number;
    name: string;
    placeholder?: string;
    error: boolean;
    disabled?: boolean;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    containerClassname?: string;
    labelClassname?: string;
    textAreaClassname?: string;
    rows: number;
    cols?: number;
}

const TextArea = ({
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
    textAreaClassname,
    rows,
    cols,
}: TextAreaProps) => {
    return (
        <div className={`${containerClassname || ""}`}>
            <label
                className={`text-[#344054] ${labelClassname || ""}`}
                htmlFor={label}
            >
                {label}
                {required && <span className="text-red-700 ml-1">*</span>}
            </label>
            <textarea
                className={`text-[#344054] bg-white border ${
                    textAreaClassname || ""
                } `}
                id={label}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                rows={rows || 5}
                cols={cols}
                maxLength={2048}
                required={required}
            ></textarea>
            {error && <p className="error">Input filed cant be empty!</p>}
        </div>
    );
};

export { TextArea };
