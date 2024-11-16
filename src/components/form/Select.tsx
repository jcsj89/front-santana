import { ChangeEvent } from "react";

interface TextAreaProps {
    label?: string;
    value: string | number;
    name: string;
    error: boolean;
    disabled?: boolean;
    optionDefault: string;
    options: JSX.Element[] | undefined;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    containerClassname?: string;
    labelClassname?: string;
    selectClassname?: string;
}

const Select = ({
    label,
    value,
    name,
    error,
    disabled,
    optionDefault,
    options,
    onChange,
    containerClassname,
    labelClassname,
    selectClassname,
}: TextAreaProps) => {
    return (
        <div className={`${containerClassname || ""}`}>
            <label
                className={`text-[#344054] ${labelClassname || ""}`}
                htmlFor={label}
            >
                {label}
            </label>
            <select
                className={`text-[#344054] bg-white border ${
                    selectClassname || ""
                } `}
                id={label}
                value={value}
                name={name}
                onChange={onChange}
                disabled={disabled}
            >
                {options !== undefined ? (
                    options
                ) : (
                    <option value="">{optionDefault}</option>
                )}
            </select>
            {error && <p className="error">Input filed cant be empty!</p>}
        </div>
    );
};

export { Select };
