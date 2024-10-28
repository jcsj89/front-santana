"use client";
import useInput from "@/hooks/useInput";
import Input from "./Input";

const ContactForm = () => {
  const nome = useInput("");
  const email = useInput("");
  const telefone = useInput("");
  const cidade = useInput("");

  const styles = {
    container: "flex w-full ",
    input: "w-full h-10 p-3",
  };

  return (
    <div className="flex flex-col justify-center gap-2 items-center w-full sm:w-2/3 md:w-1/2">
      <div className="flex flex-col xl:flex-row  gap-2 w-full">
        <Input
          type="text"
          name="nome"
          value={nome.value}
          placeholder="Nome"
          error={nome.error}
          onChange={nome.onChange}
          containerClassname={styles.container}
          inputClassname={styles.input}
        />
        <Input
          type="text"
          name="email"
          value={email.value}
          placeholder="Email"
          error={email.error}
          onChange={email.onChange}
          containerClassname={styles.container}
          inputClassname={styles.input}
        />
      </div>
      <textarea
        id="story"
        name="story"
        rows={5}
        placeholder="Mensagem..."
        className="w-full p-4 border"
        maxLength={2048}
        minLength={5}
      ></textarea>

      <div className="flex justify-end w-full">
        <span className="border px-16 py-2px-16 py-2 bg-[#0F9D58] text-white">
          enviar
        </span>
      </div>

      {/* <div>
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
      /> */}
    </div>
  );
};

export default ContactForm;
