import dynamic from "next/dynamic";
import React from "react";
import BlogPost from "../components/BlogPost";
import Link from "next/link";

const ShootingStars = dynamic(
  () =>
    import("../components/random-fun/ShootingStars").then(
      (mod: any) => mod.ShootingStars
    ),
  { ssr: false }
);

const Blog = () => {
  return (
    <>
      <ShootingStars />
      <div className="sm:container xl:px-60 mx-auto">
        <div className="text-center text-gray-500 rounded text-sm p-4 my-4">
          I&apos;m Teodor Nilseng Danielsen. A Norwegian software engineer and
          economist. Send me an{" "}
          <Link href="mailto:teodor.nilseng@gmail.com">
            <a className="text-purple-500">email</a>
          </Link>{" "}
          if you&apos;re interested in one of my projects or just to tell me how
          on earth you&apos;ve happened to end up on this site.
        </div>
        <BlogPost
          date="2021/04/14"
          title="Github Pages"
          content={[
            `Quite happy with being able to move this web page (a React single page application) to Github pages today. The site was previously hosted on a free dyno on Heroku.
            A big drawback with free dynos on Heroku is that they don't allow serving with https when using a custom domain (like nilseng.com in my case). Another quite annoying thing
            is the 30 second or so delay users have to wait if the dyno is "sleeping". 
            `,
            `While being able to host the page for free, with https, a custom domain (which is almost free at Namecheap.com) and no sleeping dynos, I have to say having
            to use a HashRouter instead of a normal Router from react-router is a big minus (there may be a way around this, but in case it's real hard to find). In addition, the 
            docs where quite difficult to navigate. I should probably not be too surprised about a Microsoft company having Microsoft like docs though..
            `,
            `Anyways, farewell and thank you for your service free Heroku dynos, and welcome to my life Github Pages <3.`,
          ]}
        />
        <BlogPost
          date="2020/10/25"
          title="Basic physics + three.js"
          content={[
            `Going back to school and the 3 equations of motion today to create a
          rolling/falling ball animation with earth like gravity.`,
            `The ball is rendered
          using three.js.`,
            "Click here to have a look!",
          ]}
          link="/3D/falling-ball"
        />
        <BlogPost
          date="2020/10/25"
          title="Apartment sold!"
          picture="/images/apartment.jpg"
          content={["I'm selling my my cute 25 square meter apartment today."]}
        />
        <BlogPost
          date="2020/10/23"
          title="Hello World!"
          content={["My very first blogpost."]}
        />
      </div>
    </>
  );
};

export default Blog;
