import Head from "next/head";
import { PopularDetails } from "../../src/interfaces/interfaces";
import PopularContainer from "../../src/modules/Popular/PopularContainer";
import { getAnimeListByPopularity } from "../../src/store/API/AnimeList";
import { makeStore } from "../../src/store/configureStore";

const Popular = ({ dataList }: PopularDetails) => (
  <>
    <Head>
      <title>Popular Series</title>
      <meta name="description" content="Hello there, This is Popular Page" />
    </Head>
    <PopularContainer dataList={dataList} />
  </>
);

export default Popular;

export const getServerSideProps = async () => {
  const store = makeStore();
  const data = await store.dispatch(getAnimeListByPopularity.initiate());

  return {
    props: {
      dataList: data?.data,
    },
  };
};
