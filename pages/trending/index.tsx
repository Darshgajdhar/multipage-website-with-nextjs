import { ApiDetails, TrendingDetails } from "../../src/interfaces/interfaces";
import TrendingContainer from "../../src/modules/Trending/TrendingContainer";
import { getAnimeList } from "../../src/store/API/AnimeList";
import { makeStore } from "../../src/store/configureStore";

const Trending = ({ dataList }: TrendingDetails) => {
  console.log({ dataList });
  return <TrendingContainer dataList={dataList} />;
};
export default Trending;

export const getServerSideProps = async () => {
  const store = makeStore();
  const data = await store.dispatch(getAnimeList.initiate());

  return {
    props: {
      dataList: data?.data,
    },
  };
};
