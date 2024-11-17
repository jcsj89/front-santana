import { Email } from "@/components/shared/Email";
import { resend } from "@/config/resend";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { data, error } = await resend.emails.send({
        from: "Contato Site <noreply@santanadev.com.br>",
        to: ["jcsj2010@gmail.com"],
        subject: "Contato Formulario Site",
        react: Email("santanaquimica"),
        // html: "<strong>It works!</strong>",
    });

    if (error) return res.json(error);
    res.status(200).send(data);
}
