import Head from "next/head";
import { FavouriteDetails } from "../../src/interfaces/interfaces";
import FavouriteContainer from "../../src/modules/Favourite/FavouriteContainer";
import { getAnimeList } from "../../src/store/API/AnimeList";
import { makeStore } from "../../src/store/configureStore";

const Favourite = ({ dataList }: FavouriteDetails) => (
  <>
    <Head>
      <title>Favourite</title>
      <meta name="description" content="Hello there, This is Favourite Page" />
    </Head>
    <FavouriteContainer dataList={dataList} />
  </>
);

export default Favourite;

export const getServerSideProps = async () => {
  const store = makeStore();
  const page = 1;
  const data = await store.dispatch(getAnimeList.initiate({ page }));

  return {
    props: {
      dataList: data?.data,
    },
  };
};
