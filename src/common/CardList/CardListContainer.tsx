import { CardDetails } from "../../interfaces/interfaces";
import CardList from "./CardList";

const CardListContainer = ({ dataList, title }: CardDetails) => (
  <CardList dataList={dataList} title={title} />
);

export default CardListContainer;
