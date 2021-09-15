import React from "react";
import BlogPost from "../components/BlogPost";
import dynamic from "next/dynamic";
import Link from "next/link";

const ShootingStars = dynamic(
  () =>
    import("../components/random-fun/ShootingStars").then(
      (mod: any) => mod.ShootingStars
    ),
  { ssr: false }
);

const Projects = () => {
  return (
    <>
      <ShootingStars />
      <div className="sm:container xl:px-60 mx-auto">
        <Link href="https://www.backcountrybook.com">
          <a target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              content={[
                `BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.`,
                `Built with React, Node.js, Express, MongoDB, AWS S3, Mapbox, Auth0 and more.`,
              ]}
              picture="/images/backcountrybook.png"
            />
          </a>
        </Link>
        <Link href="https://norske-aksjer.herokuapp.com">
          <a target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              content={[
                `Norske aksjer - Search for and find all Norwegian companies and their shareholders.`,
                `Built with React, Node.js, Express, MongoDB and more.`,
              ]}
              picture="/images/norske_aksjer.png"
            />
          </a>
        </Link>
        <Link href="https://www.purewacc.com">
          <a target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              content={[
                `Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.`,
                `Stack: React, Node.js, Express, MongoDB`,
              ]}
              picture="/images/purewacc.png"
            />
          </a>
        </Link>
        <Link href="https://www.pureokrs.com">
          <a target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              content={[
                `Pure Objectives and Key Result - a goal management application.`,
                `Stack: Angular, Node.js, Express, MongoDB`,
              ]}
              picture="pureokrs.png"
            />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Projects;
