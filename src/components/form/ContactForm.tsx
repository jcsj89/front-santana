"use client";
import Button from "../UI/Button";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  function onChange() {}

  const styleInputs = {
    className: "p-1 w-full ",
    containerStyle: "flex flex-col justify-start items-start w-full",
    labelStyle: "p-2",
    inputStyle: "h-12 w-full rounded-lg px-4",
  };

  return (
    <div className="flex flex-col p-3 ">
      <div>
        <InputComponent
          name="nome"
          label="Nome"
          placeholder="Digite seu nome"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          labelStyle={styleInputs.labelStyle}
          inputStyle={styleInputs.inputStyle}
        />
        <InputComponent
          name="email"
          label="Email"
          placeholder="Digite seu email"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          labelStyle={styleInputs.labelStyle}
          inputStyle={styleInputs.inputStyle}
        />
        <InputComponent
          name="telefone"
          label="Telefone"
          placeholder="Digite seu telefone"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          labelStyle={styleInputs.labelStyle}
          inputStyle={styleInputs.inputStyle}
        />
        <InputComponent
          name="cidade"
          label="Cidade"
          placeholder="Digite sua cidade"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          labelStyle={styleInputs.labelStyle}
          inputStyle={styleInputs.inputStyle}
        />
        <textarea
          id="story"
          name="story"
          rows={5}
          placeholder="Escreva aqui sua mensagem..."
          className="w-full p-2 mt-4 rounded-lg "
          maxLength={2048}
          minLength={5}
        ></textarea>
      </div>
      <Button
        label="Enviar"
        className="p-5 border my-4 text-white bg-green-500 text-2xl hover:bg-green-700 duration-200"
      />
    </div>
  );
};

export default ContactForm;
