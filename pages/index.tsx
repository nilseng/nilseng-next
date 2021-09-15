import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import BlogPost from "../components/BlogPost";

const ShootingStars = dynamic(
  () =>
    import("../components/random-fun/ShootingStars").then(
      (mod: any) => mod.ShootingStars
    ),
  { ssr: false }
);

const Landing: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teodor&apos;s Portfolio</title>
        <meta
          name="description"
          content="Teodor's portfolio, blog and random stuff."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ShootingStars />
        <div className="sm:container xl:px-60 mx-auto">
          <a
            href="https://www.backcountrybook.com"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <BlogPost
              content={[
                `BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.`,
                `Built with React, Node.js, Express, MongoDB, AWS S3, Mapbox, Auth0 and more.`,
              ]}
              picture="/images/backcountrybook.png"
            />
          </a>
          <a
            href="https://norske-aksjer.herokuapp.com"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <BlogPost
              content={[
                `Norske aksjer - Search for and find all Norwegian companies and their shareholders.`,
                `Built with React, Node.js, Express, MongoDB and more.`,
              ]}
              picture="/images/norske_aksjer.png"
            />
          </a>
          <a
            href="https://www.purewacc.com"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <BlogPost
              content={[
                `Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.`,
                `Stack: React, Node.js, Express, MongoDB`,
              ]}
              picture="/images/purewacc.png"
            />
          </a>
          <a
            href="https://www.pureokrs.com"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            <BlogPost
              content={[
                `Pure Objectives and Key Result - a goal management application.`,
                `Stack: Angular, Node.js, Express, MongoDB`,
              ]}
              picture="/images/pureokrs.png"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
