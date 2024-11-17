import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";

export function Email(props: any) {
    const { url } = props;

    return (
        <Html>
            <Head />
            <Preview>
                Thank you for joining our waitlist and for your patience
            </Preview>
            <Body className="flex flex-col">
                <Container className="">
                    <Heading className="text-xl">Coming Soon.</Heading>
                    <Button href={url}>Clique meu site</Button>
                    {url}
                    <Text className="text-sm text-blue-600">
                        Thank you {url} for joining our waitlist and for your
                        patience. We will send you a note when we have something
                        new to share.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
