import { GetServerSideProps } from "next";
import Head from "next/head";
import { AboutDetails } from "../../src/interfaces/interfaces";
import AboutContainer from "../../src/modules/About/AboutContainer";
import { getAnimeListById } from "../../src/store/API/AnimeList";
import { makeStore } from "../../src/store/configureStore";

const About = ({ dataList }: AboutDetails) => (
  <>
    <Head>
      <title>About Page</title>
      <meta name="description" content="Hello there, This is About Page" />
    </Head>
    <AboutContainer dataList={dataList} />
  </>
);

export default About;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const id = params?.about;
  const store = makeStore();
  const data = await store.dispatch(getAnimeListById.initiate({ id }));

  return {
    props: {
      dataList: data?.data,
    },
  };
};
