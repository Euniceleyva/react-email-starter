import {
  Heading,
  Column,
  Row,
  Container,
  Text,
  Section,
} from "react-email";

export type Competencia = {
  number: number;
  title: string;
  description: string;
};

type ListComponentProps = {
  competencias: Competencia[];
};

export function EjemploListComponentTypescript({ competencias }: ListComponentProps) {
  return (
    <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[24px]">
      {competencias.map((item) => (
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
                  {item.number}
                </Column>
              </Row>
            </Column>
            <Column valign="top">
              <Heading
                as="h2"
                className="mt-[0px] mb-[8px] text-gray-900 text-[18px] leading-[28px]"
              >
                {item.title}
              </Heading>
              <Text className="m-0 text-gray-500 text-[14px] leading-[24px]">
                {item.description}
              </Text>
            </Column>
          </Row>
        </Section>
      ))}
    </Container>
  );
}
