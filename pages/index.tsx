import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>안녕</title>
      </Head>

      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
};

export default Home;
