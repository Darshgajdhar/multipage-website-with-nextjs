import { AboutDetails } from "../../interfaces/interfaces";
import About from "./About";

const AboutContainer = ({ dataList }: AboutDetails) => (
  <About dataList={dataList} />
);

export default AboutContainer;
