import { Email } from "@/components/shared/Email";
import { resend } from "@/config/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
    req: NextRequest
): Promise<NextResponse | undefined> {
    try {
        const {
            nome,
            cidade,
            email,
            estado,
            mensagem,
            telefone,
            instagram,
            linkedin,
        } = await req.json();

        const { data, error } = await resend.emails.send({
            from: `${process.env.RESEND_FROM}`,
            to: [`${process.env.RESEND_TO}`,'santanaquimica@terra.com.br','vendas@santanaquimica.com.br'],
            subject: "Contato Formulario Site",
            react: Email({
                nome,
                cidade,
                email,
                estado,
                mensagem,
                telefone,
                instagram,
                linkedin,
            }),
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        // await Promise.resolve(data);

        return NextResponse.json({ data }, { status: 200 });
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
