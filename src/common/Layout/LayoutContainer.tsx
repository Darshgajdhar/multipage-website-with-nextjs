import { LayoutProps } from "../../interfaces/interfaces";
import Layout from "./Layout";

const LayoutContainer = ({ children, title }: LayoutProps) => {
  return <Layout title={title}>{children}</Layout>;
};

export default LayoutContainer;
