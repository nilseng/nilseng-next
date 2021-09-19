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
          on earth you happened to end up on this site.
        </div>
        <BlogPost
          id="about-you"
          date="2021/09/19"
          title="It's not me, it's you"
          link="/about-you"
          content={[
            `Most web sites have an 'about us' section or similar. I've done it the other way around and created an 'about you' page where you can see some
            of the information that your browser reveals about you. It's not a lot really - just some information about your browser, potentially your device and
            your location if you allow it.
            `,
          ]}
        />
        <BlogPost
          id="nilseng@next"
          date="2021/09/19"
          title="nilseng.com @ Next.js"
          content={[
            `As a regular listener of various coding podcasts, it's been a while since I first heard about Next.js, but I never really found the time or motivation
            to try it. I did now though, and I moved this web site from a single page React app on Github Pages to Next.js and Vercel. I have to say that I really
            like it so far. It's super nice that the stuff that needs no user or browser interaction is rendered on the server and served to
            the client only when needed. The deployment process and domain name change on Vercel were also super easy and without hazzle. Now it only remains to
            be seen if the static site generation (SSG) and server side rendering (SSR) have any effect in the search engines.`,
          ]}
        />
        <BlogPost
          id="aksjegrafen"
          date="2021/09/19"
          title="The Norwegian Stock Market at a Glance (or at least one third of it...)"
          picture="/images/stock_graph.png"
          content={[
            `Every year The Norwegian tax authorities make a dataset with all stock based companies and their shareholders available to anyone who requests it.
            This is a measure to increase transparency in the Norwegian financial market. I'm working on an application, currently hosted at 
            https://norske-aksjer.herokuapp.com/, where you can search for any company or shareholder and display the ownership structure in a chart. This is to complement 
            similar services that already exist that haven't made the best of what you can do with this dataset.`,
            `For fun, I plotted the graph you see above with about 80 000 companies and 100 000 ownership relations between companies. This is about
            one third of the full dataset provided by the tax authorities for 2020 (when removing all individuals and organizations that are not stock based).
             Probably not useful at all, but it illustrates the complexity of the financial markets nicely. The graph is directed and cyclic. It's created using 
             cytoscape with an fcose layout in Google Chrome. My MacBook Pro with 16GB memory spent about 3 days to generate it, so I decided not to try to plot the full data set - at least
             for now.
             `,
          ]}
          externalUrl="https://norske-aksjer.herokuapp.com"
        />
        <BlogPost
          id="github-pages"
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
          id="inelastic"
          date="2020/10/25"
          title="Basic physics + three.js"
          content={[
            `Going back to school and the 3 equations of motion today to create a
          rolling/falling ball animation with earth like gravity.`,
            `The ball is rendered
          using three.js.`,
            "Click here to have a look!",
          ]}
          link="/three/ball"
        />
        <BlogPost
          id="apartment"
          date="2020/10/25"
          title="Apartment sold!"
          picture="/images/apartment.jpg"
          content={["I sold my cute 25 square meter apartment today."]}
        />
        <BlogPost
          id="hello-world"
          date="2020/10/23"
          title="Hello World!"
          content={["My very first blogpost."]}
        />
      </div>
    </>
  );
};

export default Blog;
