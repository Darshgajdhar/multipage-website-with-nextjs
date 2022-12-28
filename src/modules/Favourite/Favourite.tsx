import CardListContainer from "../../common/CardList/CardListContainer";
import { FavouriteDetails } from "../../interfaces/interfaces";

const Favourite = ({ dataList }: FavouriteDetails) => {
  return <CardListContainer title="Favourite" dataList={dataList.data} />;
};

export default Favourite;
