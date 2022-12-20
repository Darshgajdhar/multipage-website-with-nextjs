import { ApiProps } from "../../src/interfaces/interfaces";
import FavouriteContainer from "../../src/modules/Favourite/FavouriteContainer";

const BASE_URL = "https://api.jikan.moe/v4";

const Favourite = ({ dataList }: ApiProps) => {
  return <FavouriteContainer dataList={dataList} />;
};

export default Favourite;

export const getApiData = async () => {
  const res = await fetch(`${BASE_URL}/anime?page=1`);
  const data = await res.json();
  return data;
};

export async function getServerSideProps() {
  const data = await getApiData();
  const dataList = data?.data;
  return { props: { dataList } };
}
