"use client";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  function onChange() {}

  const styleInputs = {
    className: "border p-1 w-full",
    containerStyle: "flex flex-col border justify-start items-start w-full",
    labelStyle: "p-2",
    inputStyle: "h-12 w-full",
  };

  return (
    <div className="flex flex-col p-3 border">
      <h1>Formulario de contatos</h1>
      <h2>nome,email,telefone,cidade,msg</h2>

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
          placeholder="Nos escreva sua mensagem"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactForm;
