import { ApiProps } from "../../interfaces/interfaces";
import Favourite from "./Favourite";

const FavouriteContainer = ({ dataList }: ApiProps) => (
  <Favourite dataList={dataList} />
);

export default FavouriteContainer;
