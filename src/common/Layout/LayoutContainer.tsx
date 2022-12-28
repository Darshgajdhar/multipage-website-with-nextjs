import { LayoutDetails } from "../../interfaces/interfaces";
import Layout from "./Layout";

const LayoutContainer = ({ children }: LayoutDetails) => {
  return <Layout>{children}</Layout>;
};

export default LayoutContainer;
