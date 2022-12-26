import CardListContainer from "../../common/CardList/CardListContainer";
import LayoutContainer from "../../common/Layout/LayoutContainer";
import { FavouriteDetails } from "../../interfaces/interfaces";

const Favourite = ({ dataList }: FavouriteDetails) => {
  return (
    <LayoutContainer title="Favourite Series">
      <CardListContainer title="Favourite" dataList={dataList.data} />
    </LayoutContainer>
  );
};

export default Favourite;
