import { Html, Body, Head, Img, Button } from "react-email";

export function NewEmail() {
  return (
    <Html>
      <Head></Head>
      <Body>
        <Img
          src="https://ap-university-storage.s3.us-east-1.amazonaws.com/udla/ing_ciberseguridad.jpg"
          alt="Cat"
          width="600"
          height="305"
        />
        <Button href="https://brendaeunice.com/" style={ButtonStyles}>
          Click me
        </Button>
      </Body>
    </Html>
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
  display: "flex"
};
