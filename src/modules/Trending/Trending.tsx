import CardListContainer from "../../common/CardList/CardListContainer";
import LayoutContainer from "../../common/Layout/LayoutContainer";
import { TrendingDetails } from "../../interfaces/interfaces";

const Trending = ({ dataList }: TrendingDetails) => (
  <LayoutContainer title="Trending Series">
    <CardListContainer dataList={dataList.data} title="Trending" />
  </LayoutContainer>
);

export default Trending;
