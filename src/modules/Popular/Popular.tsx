import CardListContainer from "../../common/CardList/CardListContainer";
import LayoutContainer from "../../common/Layout/LayoutContainer";
import { PopularDetails } from "../../interfaces/interfaces";

const Popular = ({ dataList }: PopularDetails) => (
  <LayoutContainer title="Popular Series">
    <CardListContainer
      title="Popular"
      dataList={dataList.data.map((item) => item.entry)}
    />
  </LayoutContainer>
);

export default Popular;
