import { Body, Button, Html } from "@react-email/components";

export function Email(props: any) {
    const { url } = props;

    return (
        <Html lang="pt-BR">
            <Body>
                <Button href={url}>Clique meu site</Button>
                {url}
            </Body>
        </Html>
    );
}
