import { ApiDetails, FavouriteDetails } from "../../src/interfaces/interfaces";
import FavouriteContainer from "../../src/modules/Favourite/FavouriteContainer";
import { getAnimeList } from "../../src/store/API/AnimeList";
import { makeStore } from "../../src/store/configureStore";

const Favourite = ({ dataList }: FavouriteDetails) => {
  const testData = dataList;
  console.log({ testData });
  return <FavouriteContainer dataList={testData} />;
};

export default Favourite;

export const getServerSideProps = async () => {
  const store = makeStore();
  const data = await store.dispatch(getAnimeList.initiate());

  return {
    props: {
      dataList: data?.data,
    },
  };
};
