"use client";
import useInput from "@/hooks/useInput";
import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { FormEvent, useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "./Input";

const ContactForm = () => {
    const refTurnstile = useRef<TurnstileInstance>(null);
    const [canSubmit, setCanSubmit] = useState(false);
    const nome = useInput("");
    const email = useInput("");
    const telefone = useInput("");
    const cidade = useInput("");

    const styles = {
        container: "flex w-full ",
        input: "w-full h-10 p-3",
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        refTurnstile.current?.reset(); // <------------- After each submit, recycling turnstile for next usage.
        window.alert("submitted!");
        console.log("submited");
    };

    return (
        <form
            method="post"
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col justify-center gap-2 items-center w-full sm:w-2/3 md:w-1/2"
        >
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
                    required
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
                    required
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
                required
            ></textarea>
            <div className="flex justify-between items-center w-full">
                <Turnstile
                    id="turnstile-2"
                    ref={refTurnstile}
                    siteKey="0x4AAAAAAA0K92xyl2-CVboC"
                    onSuccess={() => setCanSubmit(true)}
                    className="cf-turnstile"
                />
                <Button
                    className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800
                        focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-base h-12 px-10 py-1 text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 duration-200
                    disabled:text-zinc-700 disabled:bg-white disabled:border-zinc-500 disabled:hover:text-zinc-700"
                    label="Enviar"
                    // disabled={!canSubmit}
                    type="submit"
                />
            </div>
        </form>
    );
};

export default ContactForm;
