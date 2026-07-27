import {
  Html,
  Font,
  Body,
  Head,
  Heading,
  Img,
  Button,
  Hr,
  Column,
  Row,
  Preview,
  Container,
  Tailwind,
  Text,
  Section,
} from "react-email";

export function NewEmail() {
  return (
    <Tailwind>
      <Html>
        <Head>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body style={{ fontSize: "16px" }}>
          <Img
            src="https://ap-university-storage.s3.us-east-1.amazonaws.com/udla/ing_ciberseguridad.jpg"
            alt="Cat"
            width="600"
            height="305"
          />

          <Heading as="h1">Hola, {firstName} </Heading>

          <Button href="https://brendaeunice.com/" style={ButtonStyles}>
            Click me
          </Button>

          <Hr />

          {/* <Row style={{ border: "solid 1px #ff5900" }}> */}
          <Row className="border-1 border-red-500">
            <Column>Content1</Column>
            <Column>Content2</Column>
            <Column>Content3</Column>
          </Row>
          <Row>
            <Column>1</Column>
            <Column>2</Column>
            <Column>3</Column>
          </Row>
          <Hr />

          <Preview>Top 5 Features of Our Service</Preview>
          <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[24px]">
            <Heading className="mb-[42px] text-center text-[24px] leading-[32px]">
              Top 5 Features of Our Service
            </Heading>
            {[
              {
                number: 1,
                title: "Innovative Solutions",
                description:
                  "We deliver innovative solutions that drive success and growth.",
              },
              {
                number: 2,
                title: "Exceptional Performance",
                description:
                  "Our services deliver high-quality performance and efficiency.",
              },
              {
                number: 3,
                title: "Reliable Support",
                description:
                  "We have robust support to keep your operations running smoothly.",
              },
              {
                number: 4,
                title: "Advanced Security",
                description:
                  "We implement cutting-edge security measures to protect your data and assets.",
              },
              {
                number: 5,
                title: "Scalable Growth",
                description:
                  "We develop customized strategies for sustainable and scalable growth.",
              },
            ].map((feature) => (
              <Section className="mb-[36px]">
                <Row className="pr-[32px] pl-[12px]">
                  <Column
                    width="24"
                    height="24"
                    align="center"
                    valign="top"
                    className="pr-[18px] h-[24px] w-[24px]"
                  >
                    <Row>
                      <Column
                        align="center"
                        valign="middle"
                        width="24"
                        height="24"
                        className="h-[24px] w-[24px] rounded-full bg-indigo-600 font-semibold text-white text-[12px] leading-none"
                      >
                        {feature.number}
                      </Column>
                    </Row>
                  </Column>
                  <Column valign="top">
                    <Heading
                      as="h2"
                      className="mt-[0px] mb-[8px] text-gray-900 text-[18px] leading-[28px]"
                    >
                      {feature.title}
                    </Heading>
                    <Text className="m-0 text-gray-500 text-[14px] leading-[24px]">
                      {feature.description}
                    </Text>
                  </Column>
                </Row>
              </Section>
            ))}
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}

export default NewEmail;

const ButtonStyles = {
  color: "#ffffff",
  padding: "20px 20px",
  backgroundColor: "#ff5900",
  borderRadius: "40px",
  marginTop: "30px",
  justifyContent: "center",
  display: "flex",
};

const firstName = "{firstName}";
