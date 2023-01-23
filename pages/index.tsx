import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import BlogPost from "../components/BlogPost";

import aksjegrafen_img from "../public/images/aksjegrafen.png";
import bc_book_img from "../public/images/backcountrybook.png";
import big5ish_img from "../public/images/big5ish.png";
import pureokrs_img from "../public/images/pureokrs.png";
import purewacc_img from "../public/images/purewacc.png";

const ShootingStars = dynamic(
  () => import("../components/random-fun/ShootingStars").then((mod: any) => mod.ShootingStars),
  { ssr: false }
);

const Landing: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teodor&apos;s Portfolio</title>
        <meta name="description" content="Teodor's portfolio, blog and random stuff." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ShootingStars />
        <div className="sm:container xl:px-60 mx-auto">
          <a href="https://www.aksjegrafen.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="aksjegrafen.com"
              content={[
                `Aksjegrafen - Search for and find all Norwegian companies and their shareholders. See the data in a graph
                 visualization.`,
                `Built with Typescript, React, D3.js, Node.js, Express, MongoDB and more.`,
              ]}
              picture={aksjegrafen_img}
            />
          </a>
          <a href="https://big5ish.herokuapp.com/" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="Big5ish"
              content={[
                `Big5ish - A personality test for teams based on the well known Big 5 test.`,
                `Built with TypeScript, React, Tailwind, Node.js, Express, Apollo and Graphql.`,
              ]}
              picture={big5ish_img}
            />
          </a>
          <a href="https://www.pureokrs.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="pureokrs.com"
              content={[
                `Pure Objectives and Key Result - a goal management application.`,
                `Stack: Angular, Node.js, Express, MongoDB`,
              ]}
              picture={pureokrs_img}
            />
          </a>
          <a href="https://www.backcountrybook.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="backcountrybook.com"
              content={[
                `BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.`,
                `Built with React, Node.js, Express, MongoDB, AWS S3, Mapbox, Auth0 and more.`,
              ]}
              picture={bc_book_img}
            />
          </a>
          <a href="https://www.purewacc.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="purewacc.com"
              content={[
                `Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.`,
                `Stack: React, Node.js, Express, MongoDB`,
              ]}
              picture={purewacc_img}
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
