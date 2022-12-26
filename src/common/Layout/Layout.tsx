import Head from "next/head";
import { LayoutDetails } from "../../interfaces/interfaces";
import NavbarContainer from "../Navbar/NavbarContainer";
import { LayoutWrapper } from "./style";

const Layout = ({ children, title }: LayoutDetails) => {
  return (
    <>
      <LayoutWrapper>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavbarContainer />
        <LayoutWrapper>{children}</LayoutWrapper>
      </LayoutWrapper>
    </>
  );
};

export default Layout;
