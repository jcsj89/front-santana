"use client";
import Input from "@/components/form/Input";
import useInput from "@/hooks/useInput";
import React from "react";

const page = () => {
  const nameInput = useInput("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {}

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-amber-600">
      <Input
        type="text"
        label="Nome"
        placeholder="Digite seu nome"
        name="Test"
        {...nameInput}
      />
      <Input
        type="text"
        label="Nome"
        placeholder="Digite seu nome"
        name="Test"
        {...nameInput}
      />
      <div>{nameInput.value}</div>
    </div>
  );
};

export default page;
