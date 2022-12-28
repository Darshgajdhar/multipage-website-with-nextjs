import Head from "next/head";
import HomeContainer from "../../src/modules/Home/HomeContainer";

const HomePage = () => (
  <>
    <Head>
      <title>Home Page</title>
      <meta name="description" content="Hello there, This is Home Page" />
    </Head>
    <HomeContainer />
  </>
);

export default HomePage;
