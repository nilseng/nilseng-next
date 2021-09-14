import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const ShootingStars = dynamic(
  () =>
    import("../components/random-fun/ShootingStars").then(
      (mod: any) => mod.ShootingStars
    ),
  { ssr: false }
);
import styles from "../styles/Home.module.css";

const Landing: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teodor&apos;s Portfolio</title>
        <meta
          name="description"
          content="Teodor's portfolio, blog and random stuff."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ShootingStars />
      </main>
    </div>
  );
};

export default Landing;
