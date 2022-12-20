import Head from "next/head";
import { LayoutProps } from "../../interfaces/interfaces";
import NavbarContainer from "../Navbar/NavbarContainer";

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavbarContainer />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
