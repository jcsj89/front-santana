"use client";
import { GET } from "@/app/api/cities/route";
import Input from "@/components/form/Input";
import { Select } from "@/components/form/Select";
import { TextArea } from "@/components/form/TextArea";
import Button from "@/components/UI/Button";
import useInput from "@/hooks/useInput";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

import { useEffect, useRef, useState } from "react";

interface CitiesInterface {
    estados: [{ sigla: string; nome: string; cidades: string[] }];
}

const Form = () => {
    const refTurnstile = useRef<TurnstileInstance>(null);
    const [data, setData] = useState<CitiesInterface>();
    const [canSubmit, setCanSubmit] = useState(false);

    const nome = useInput("");
    const email = useInput("");
    const telefone = useInput("");
    const estado = useInput("São Paulo");
    const cidade = useInput("");
    const instagram = useInput("");
    const linkedin = useInput("");
    const mensagem = useInput("");

    const containerClassname =
        "flex w-full lg:w-3/4 justify-center items-center lg:gap-3 ";
    const labelClassname =
        "w-1/4 text-left lg:text-right text-sm lg:text-base mr-4";
    const inputClassname = "w-3/4 lg:w-3/4 rounded-lg h-10 px-3";
    const labelTextAreaClassname =
        "w-full lg:w-1/4 text-left lg:text-right text-sm lg:text-base lg:mr-4";
    const textAreaClassname = "w-full lg:w-3/4 rounded-lg p-3";
    const containerTextAreaClassname =
        "flex flex-col lg:flex-row w-full lg:w-3/4 justify-center items-center lg:gap-3 gap-1";

    // load cities and states
    useEffect(() => {
        (async function () {
            setData(await GET());
        })();
    }, []);

    function renderizaEstados() {
        return data?.estados.map((i) => (
            <option key={i.nome} value={i.nome}>
                {i.nome}
            </option>
        ));
    }

    function renderizaCidades(estado: string) {
        const filtroEstado = data?.estados.filter((i) => i.nome === estado);

        if (filtroEstado !== undefined && filtroEstado?.length > 0) {
            return filtroEstado![0].cidades.map((c) => (
                <option key={c} value={c}>
                    {c}
                </option>
            ));
        } else {
            return undefined;
        }
    }

    const handleSubmit = async () => {
        refTurnstile.current?.reset(); // <------------- After each submit, recycling turnstile for next usage.
        window.alert("submitted!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="p-2 lg:p-5 mt-10 w-full flex flex-col items-center justify-center gap-4 "
        >
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
                required
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
                required
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
                required
            />
            <Select
                name="estado"
                value={estado.value}
                error={estado.error}
                onChange={estado.onChange}
                label="Estado"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                selectClassname={inputClassname}
                options={data && renderizaEstados()}
                optionDefault="Selecione seu estado"
            />
            <Select
                name="cidade"
                value={cidade.value}
                error={cidade.error}
                onChange={cidade.onChange}
                label="Cidade"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                selectClassname={inputClassname}
                options={data && renderizaCidades(estado.value)}
                optionDefault="Selecione sua cidade"
            />
            <Input
                name="instagram"
                value={instagram.value}
                type="text"
                error={instagram.error}
                onChange={instagram.onChange}
                label="instagram.com/"
                placeholder="zesantannajr"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />
            <Input
                name="linkedin"
                value={linkedin.value}
                type="text"
                error={linkedin.error}
                onChange={linkedin.onChange}
                label="linkedin.com/in/"
                placeholder="josecarlossantanna"
                containerClassname={containerClassname}
                labelClassname={labelClassname}
                inputClassname={inputClassname}
            />

            <TextArea
                label="Mensagem"
                name="mensagem"
                value={mensagem.value}
                error={mensagem.error}
                onChange={mensagem.onChange}
                placeholder="digite sua mensagem ..."
                containerClassname={containerTextAreaClassname}
                labelClassname={labelTextAreaClassname}
                textAreaClassname={textAreaClassname}
                rows={6}
                required
            />
            <Turnstile
                id="turnstile-1"
                ref={refTurnstile}
                siteKey="0x4AAAAAAA0K92xyl2-CVboC"
                onSuccess={() => setCanSubmit(true)}
                className="cf-turnstile"
            />
            <div className="flex w-3/4 justify-end">
                <Button
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base px-10 py-6 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 duration-200"
                    label="Enviar"
                    disabled={!canSubmit}
                    type="submit"
                />
            </div>
        </form>
    );
};

export default Form;
