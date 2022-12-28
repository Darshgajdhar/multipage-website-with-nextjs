import Head from "next/head";
import { ApiDetails, TrendingDetails } from "../../src/interfaces/interfaces";
import TrendingContainer from "../../src/modules/Trending/TrendingContainer";
import { getAnimeList } from "../../src/store/API/AnimeList";
import { makeStore } from "../../src/store/configureStore";

const Trending = ({ dataList }: TrendingDetails) => (
  <>
    <Head>
      <title>Trending Page</title>
      <meta name="description" content="Hello there, This is Trending Page" />
    </Head>
    <TrendingContainer dataList={dataList} />
  </>
);

export default Trending;

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
