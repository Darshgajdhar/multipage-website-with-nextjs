import { LayoutDetails } from "../../interfaces/interfaces";
import Layout from "./Layout";

const LayoutContainer = ({ children, title }: LayoutDetails) => {
  return <Layout title={title}>{children}</Layout>;
};

export default LayoutContainer;
