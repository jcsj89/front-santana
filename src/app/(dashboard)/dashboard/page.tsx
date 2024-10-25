"use client";
import InputComponent from "@/components/form/InputComponent";

const dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center border">
      <InputComponent
        name="teste"
        type="text"
        value=""
        placeholder="nome"
        onChange={() => {}}
        label="Nome"
        className="border p-5" //div extttterna
      />
      <InputComponent
        name="pass"
        type="password"
        value=""
        placeholder="nome"
        onChange={() => {}}
        label="Senha"
        className="border p-5"
      />
    </div>
  );
};

export default dashboard;
