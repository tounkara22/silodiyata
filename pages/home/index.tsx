import Head from "next/head";
import HomeScreen from "../../src/components/home/home";
import { Fragment } from "react";

const HomePage = (props: any) => {
  return (
    <Fragment>
      <Head>
        <title>Silo Diyata Services</title>
      </Head>
      <HomeScreen />
    </Fragment>
  );
};

export default HomePage;
