import { EmailInterface } from "@/shared/EmailInterface";
import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";

export function Email(props: EmailInterface) {
    const {
        nome,
        cidade,
        email,
        estado,
        mensagem,
        telefone,
        instagram,
        linkedin,
    } = props;

    return (
        <Html>
            <Head />
            <Preview>Contato pelo site</Preview>
            <Tailwind>
                <Body className="flex flex-col">
                    <Container className="border p-4">
                        <Heading className="text-xl uppercase">
                            Mensagem recebida pelo site
                        </Heading>
                        {nome && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400 "
                                >
                                    Nome
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {nome}
                                </Column>
                            </Row>
                        )}
                        {email && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400"
                                >
                                    Email
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {email}
                                </Column>
                            </Row>
                        )}
                        {telefone && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400"
                                >
                                    telefone
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {telefone}
                                </Column>
                            </Row>
                        )}
                        {cidade && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400"
                                >
                                    cidade
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {cidade}
                                </Column>
                            </Row>
                        )}
                        {estado && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400"
                                >
                                    estado
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {estado}
                                </Column>
                            </Row>
                        )}
                        {instagram && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400"
                                >
                                    instagram
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {instagram}
                                </Column>
                            </Row>
                        )}
                        {linkedin && (
                            <Row cellSpacing={8}>
                                <Column
                                    align="center"
                                    className="h-[40px] w-1/3 border bg-green-400"
                                >
                                    linkedin
                                </Column>
                                <Column
                                    align="center"
                                    className="h-[40px] w-2/3 border bg-emerald-400"
                                >
                                    {linkedin}
                                </Column>
                            </Row>
                        )}
                        {mensagem && (
                            <Section className="flex flex-col border">
                                <Text className="text-xl">Mensagem</Text>
                                <Text className="text-sm text-blue-600">
                                    {mensagem}
                                </Text>
                            </Section>
                        )}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
