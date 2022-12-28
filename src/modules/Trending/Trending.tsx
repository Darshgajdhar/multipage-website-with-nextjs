import CardListContainer from "../../common/CardList/CardListContainer";
import { TrendingDetails } from "../../interfaces/interfaces";

const Trending = ({ dataList }: TrendingDetails) => (
  <CardListContainer dataList={dataList.data} title="Trending" />
);

export default Trending;
