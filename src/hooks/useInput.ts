import { ChangeEvent, useState } from "react";

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setValue(e.target.value);
    };

    return {
        value,
        error,
        onChange: handleChange,
        setError,
        setValue
    };
};

export default useInput;
