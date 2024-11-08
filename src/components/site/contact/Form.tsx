"use client";
import Input from "@/components/form/Input";
import Button from "@/components/UI/Button";
import useInput from "@/hooks/useInput";

const Form = () => {
    const nome = useInput("");
    const email = useInput("");
    const telefone = useInput("");
    const cidade = useInput("");
    const instagram = useInput("");

    const containerClassname = "flex w-3/4 justify-center items-center gap-3";
    const labelClassname = "w-1/4 text-right";
    const inputClassname = "w-3/4 rounded-lg h-10 px-3";

    return (
        <form className="border p-5 m-5 w-full flex flex-col items-center justify-center gap-4">
            <Input
                name="nome"
                value={nome.value}
                type="text"
                error={nome.error}
                onChange={nome.onChange}
                label="Nome"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <Input
                name="email"
                value={email.value}
                type="text"
                error={email.error}
                onChange={email.onChange}
                label="Email"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <Input
                name="telefone"
                value={telefone.value}
                type="text"
                error={telefone.error}
                onChange={telefone.onChange}
                label="Telefone"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <Input
                name="cidade"
                value={cidade.value}
                type="text"
                error={cidade.error}
                onChange={cidade.onChange}
                label="Cidade"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <Input
                name="instagram"
                value={instagram.value}
                type="text"
                error={instagram.error}
                onChange={instagram.onChange}
                label="Instagram"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <Button label="Enviar" className="border"></Button>
        </form>
    );
};

export default Form;
