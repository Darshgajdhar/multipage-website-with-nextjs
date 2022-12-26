import { PopularDetails } from "../../interfaces/interfaces";
import Popular from "./Popular";

const PopularContainer = ({ dataList }: PopularDetails) => (
  <Popular dataList={dataList} />
);

export default PopularContainer;
