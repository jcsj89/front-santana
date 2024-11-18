import { Email } from "@/components/shared/Email";
import { resend } from "@/config/resend";
import { EmailInterface } from "@/shared/EmailInterface";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse | undefined> {
    try {

        //parei aqui, mandar campos do form no email,
        // fazer um template tb
        const formData = req.body

        const sendPromise = await resend.emails.send({
            from: "Contato Site <noreply@santanadev.com.br>",
            to: ["jcsj2010@gmail.com"],
            subject: "Contato Formulario Site",
            react: Email("https://www.santanaquimica.com.br"),
        });

        await Promise.resolve(sendPromise);

        return NextResponse.json({
            status: 200,
            message: "Email sent correctly.",
        });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
