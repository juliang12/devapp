import { FooterContainer } from "@/components/ui/footer/FooterStyles";

const Footer = () => {
  const date = new Date();

  return (
    <FooterContainer>
      Todos los derechos reservados {date.getFullYear()}
    </FooterContainer>
  );
};

export default Footer;
