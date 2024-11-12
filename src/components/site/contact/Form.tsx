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
        <form className="p-5 mt-10 w-full flex flex-col items-center justify-center gap-4">
            <Input
                name="nome"
                value={nome.value}
                type="text"
                error={nome.error}
                onChange={nome.onChange}
                label="Nome"
                placeholder="Jose da Silva"
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
                placeholder="josedasilva@mail.com"
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
                placeholder="(17) 99725-7501"
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
                placeholder="Sao Paulo"
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
                label="Instagram @/"
                placeholder="josedasilva"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <div className="flex w-3/4 justify-end">
                <Button
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-10 py-6 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 duration-200"
                    label="Enviar"
                />
            </div>
        </form>
    );
};

export default Form;
