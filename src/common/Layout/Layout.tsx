import Head from "next/head";
import { LayoutDetails } from "../../interfaces/interfaces";
import FooterContainer from "../Footer/FooterContainer";
import NavbarContainer from "../Navbar/NavbarContainer";
import { LayoutWrapper } from "./style";

const Layout = ({ children }: LayoutDetails) => {
  return (
    <>
      <LayoutWrapper>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavbarContainer />
        <LayoutWrapper>{children}</LayoutWrapper>
        <FooterContainer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
