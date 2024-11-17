import { Email } from "@/components/shared/Email";
import { resend } from "@/config/resend";

export async function GET(req: Request): Promise<Response | undefined> {
    const { data, error } = await resend.emails.send({
        from: "Contato Site <noreply@santanadev.com.br>",
        to: ["jcsj2010@gmail.com"],
        subject: "Contato Formulario Site",
        react: Email("santanaquimica"),
        // html: "<strong>It works!</strong>",
    });

    if (error) return Response.json(error);
    Response.json(data);
}
