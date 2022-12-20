import CardListContainer from "../../common/CardList/CardListContainer";
import LayoutContainer from "../../common/Layout/LayoutContainer";
import { ApiProps } from "../../interfaces/interfaces";

const Favourite = ({ dataList }: ApiProps) => {
  return (
    <LayoutContainer title="Favourite Series">
      <CardListContainer title="Favourite" dataList={dataList} />
    </LayoutContainer>
  );
};

export default Favourite;
