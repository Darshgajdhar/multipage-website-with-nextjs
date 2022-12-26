import { ApiDetails, FavouriteDetails } from "../../interfaces/interfaces";
import Favourite from "./Favourite";

const FavouriteContainer = ({ dataList }: FavouriteDetails) => (
  <Favourite dataList={dataList} />
);

export default FavouriteContainer;
