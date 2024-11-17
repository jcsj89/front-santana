import { Resend } from "resend";
import { Email } from "./Email";

const EmailSend = () => {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

    async function teste() {
        await resend.emails.send({
            from: "santana@santanaquimica.com.br",
            to: "jcsj2010@gmail.com",
            subject: "hello world",
            react: <Email url="https://santanaquimica.com.br" />,
        });
    }
    return (
        <div>
            <button onClick={() => teste()}>enviar email</button>
        </div>
    );
};

export default EmailSend;
