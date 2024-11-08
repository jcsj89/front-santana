"use client";
import Form from "@/components/site/contact/Form";

const contatos = () => {
    return (
        <div className="flex">
            <div className="flex flex-col w-1/2 items-center">
                <h2 className="font-black text-4xl border">Contate-nos</h2>
                <p className="w-1/2 text-justify">
                    Você é sempre bem-vindo para entrar em contato conosco.
                    Nosso atendimento ao cliente está disponível de segunda a
                    sexta, das 9h00 às 20h00. e sábado a domingo, das 10h00 às
                    18h00. (GMT +3). Estamos ansiosos para ouvir de você!
                </p>
                <Form></Form>
            </div>
            <div className="flex flex-col w-1/2 bg-red-400">map</div>
        </div>
    );
};

export default contatos;
