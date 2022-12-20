import { CardProps } from "../../interfaces/interfaces";
import CardList from "./CardList";

const CardListContainer = ({ dataList, title }: CardProps) => (
  <CardList dataList={dataList} title={title} />
);

export default CardListContainer;
