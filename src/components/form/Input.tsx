import React from "react";

interface InputProps {
  onChange: () => void;
  value: string;
  name: string;
  class: string;
}

const Input = (props: InputProps) => {
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      name={props.name}
    ></input>
  );
};

export default Input;
