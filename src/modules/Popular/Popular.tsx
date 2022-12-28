import CardListContainer from "../../common/CardList/CardListContainer";
import { PopularDetails } from "../../interfaces/interfaces";

const Popular = ({ dataList }: PopularDetails) => (
  <CardListContainer
    title="Popular"
    dataList={dataList.data.map((item) => item.entry)}
  />
);

export default Popular;
