"use client";
import { IconMail, IconMobile, IconUser } from "@/icons";
import InputComponent from "./InputComponent";

const ContactForm = () => {
  function onChange() {}

  const styleInputs = {
    className: "border p-1 w-full",
    containerStyle: "flex border justify-center items-center w-full",
    iconStyle: "mr-1",
    inputStyle: "ml-1 h-10 w-full",
  };

  return (
    <div className="flex flex-col p-3 border w-1/2">
      <h1>Formulario de contatos</h1>
      <h2>nome,email,telefone,cidade,msg</h2>

      <div>
        <InputComponent
          name="nome"
          placeholder="Digite seu nome"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          iconStyle={styleInputs.iconStyle}
          inputStyle={styleInputs.inputStyle}
          icon={IconUser("w-6 h-6")}
        />
        <InputComponent
          name="email"
          placeholder="Digite seu email"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          iconStyle={styleInputs.iconStyle}
          inputStyle={styleInputs.inputStyle}
          icon={IconMail("w-6 h-6")}
        />
        <InputComponent
          name="telefone"
          placeholder="Digite seu telefone"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          iconStyle={styleInputs.iconStyle}
          inputStyle={styleInputs.inputStyle}
          icon={IconMobile("w-6 h-6")}
        />
        <InputComponent
          name="cidade"
          placeholder="Digite sua cidade"
          value=""
          onChange={onChange}
          type="text"
          className={styleInputs.className}
          containerStyle={styleInputs.containerStyle}
          iconStyle={styleInputs.iconStyle}
          inputStyle={styleInputs.inputStyle}
          icon={IconMobile("w-6 h-6")}
        />
      </div>
    </div>
  );
};

export default ContactForm;
