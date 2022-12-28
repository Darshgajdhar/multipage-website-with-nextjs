import Image from "next/image";
import { FooterWrapper } from "./style";

const Footer = () => (
  <footer>
    <FooterWrapper>
      <Image
        alt="Logo"
        src={"https://zoro.to/images/logo.png"}
        height="50"
        width="200"
      />
    </FooterWrapper>
  </footer>
);

export default Footer;
