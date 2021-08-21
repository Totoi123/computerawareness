import Head from "next/head";
import Landing from "../components/Landing";
import Outcomes from "../components/Outcomes";

const Home = () => {
  return (
    <>
      <Head>
        <title>Service Learning 2021</title>
      </Head>
      <div className="container">
        <Landing />
        <Outcomes />
      </div>
    </>
  );
};

export default Home;
