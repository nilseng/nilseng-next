import dynamic from "next/dynamic";
import Link from "next/link";
import BlogPost from "../components/BlogPost";

import ag_shortest_path from "../public/images/ag_shortest_path.png";
import aksjegrafen_img from "../public/images/aksjegrafen.png";
import aksjegrafen_api from "../public/images/aksjegrafen_api.png";
import aksjegrafen_shortest_path from "../public/images/aksjegrafen_shortest_path.png";
import apartment_picture from "../public/images/apartment.jpg";
import big5ish_img from "../public/images/big5ish.png";
import stock_graph_picture from "../public/images/stock_graph.png";

const ShootingStars = dynamic(
  () => import("../components/random-fun/ShootingStars").then((mod: any) => mod.ShootingStars),
  { ssr: false }
);

const Blog = () => {
  return (
    <>
      <ShootingStars />
      <div className="sm:container xl:px-60 mx-auto">
        <div className="text-center text-gray-500 rounded text-sm p-4 my-4">
          Jeg er Teodor Nilseng Danielsen. En norsk konsulent og utvikler. Send meg{" "}
          <Link href="mailto:teodor.nilseng@gmail.com">
            <a className="text-purple-500">mail</a>
          </Link>{" "}
          hvis du er interessert i et prosjekt eller for å si hei 👋
        </div>
        <BlogPost
          id="aksjegrafen-neo4j"
          date="2024/09/14"
          title="Aksjegrafen - søk med grafteknologi 🔍🕸️"
          picture={ag_shortest_path}
          content={[
            `
          Aksjegrafen bruker grafdatabasen Neo4j - en database som er spesielt egnet for å lagre data som er strukturert
          som nettverk. Nettverk kalles i matematikken for grafer - derav Aksjegrafen. Fordelen med en grafdatabase er at man
          kan gjøre raske nettverkssøk. Slike søk kan brukes til for eksempel å finne ut hvem som reelt sett eier et selskap
          til tross for komplekse eierskapsstrukturer. 
          `,
          ]}
        />
        <BlogPost
          id="aksjegrafen-api"
          date="2023/04/28"
          title="Aksjegrafen - åpent API for aksjonærregisteret"
          picture={aksjegrafen_api}
          content={[
            `
          Det åpne API-et til aksjegrafen.com gir utviklere tilgang til all data om aksjonærer og selskaper i aksjonærregisteret. 
          APIet gjør det mulig for tredjepartsapplikasjoner å integrere seg på en enkel måte. Ved å bruke API-et kan utviklere 
          hente ut informasjon om aksjonærer i ulike selskaper, aksjonærstruktur og endringer i eierskap over tid. API-et kan 
          brukes av både investorer og utviklere som ønsker å lage applikasjoner for å analysere og visualisere aksje- og 
          eierskapsdata.
          `,
            `Følgende data er foreløpig tilgjengelig:`,
            `- Søk etter selskap med organisasjonsnummer eller navn.`,
            `- Søk etter aksjonær med organisasjonsnummer eller navn.`,
            `- Hent investeringene til en gitt aksjonær.`,
            `- Hent aksjonærene til et gitt selskap.`,
          ]}
        />
        <BlogPost
          id="aksjegrafen-korteste-vei"
          date="2023/04/21"
          title="Aksjegrafen - finn relasjoner mellom norske aksjeselskaper"
          picture={aksjegrafen_shortest_path}
          content={[
            `Aksjegrafen.com har nå lansert en ny funksjon som gjør det mulig å finne korteste vei mellom to selskaper. Denne 
            funksjonen gir deg muligheten til å se hvordan to selskaper er knyttet sammen gjennom et nettverk av andre selskaper 
            og roller.`,
            `Funksjonen fungerer ved å analysere informasjon om eierskap og roller i ulike selskaper, og finne den korteste veien 
            mellom to selskaper gjennom dette nettverket av relasjoner. Dette gir deg et bilde av hvordan to selskaper er 
            knyttet sammen, og kan hjelpe deg med å identifisere mulige samarbeidspartnere, interessekonflikter eller annet.`,
          ]}
        />
        <BlogPost
          id="big5ish-intro"
          date="2023/02/17"
          title="Big5ish - hvor godt kjenner du venner og kollegaer? 🧐"
          picture={big5ish_img}
          content={[
            `Som en ivrig lytter av Big 5 med Nils og Harald på Podme, har jeg bygget Big5ish som er en nettbasert 
        Big 5-test for grupper. Målet med testen er at noe av det Nils og Harald får til med sine gjester, skal kunne skapes 
        av hvem som helst med egne venner og kollegaer.`,
            `Testen fungerer ved at man får se hverandres svar og resultater fortløpende på en felles skjerm, mens man svarer på 
        spørsmål om seg selv på sin egen mobiltelefon. Litt som en Kahoot. Deltakerne gjetter også underveis på de andres 
        scorer på de ulike domenene. På denne måten får alle deltakerne testet egen personlighet, analysert gruppa som helhet 
        og sammenlignet egne oppfatninger av de andre med hva resultatene i testen faktisk viser.`,
            `Testen kan foreløpig sjekkes ut på:`,
          ]}
          externalUrl="https://big5ish.herokuapp.com/"
        />
        <BlogPost id="bytter-til-norsk" date="2023/02/17" title="Bytter til norsk jeg ass." content={["🏴󠁧󠁢󠁥󠁮󠁧󠁿🇺🇸 ➡️ 🇳🇴"]} />
        <BlogPost
          id="freelance-y1"
          date="2023/01/05"
          title="Reflections on freelancing Y1 💼👨🏻‍💻"
          content={[
            `My first year as an independent software development consultant has been just what I hoped for - lots of learning, 
            interesting challenges and good people.`,
            `The first step when starting up as an independent consultant is deciding on whether and how to set up a company.
            With the Norwegian wellfare system the best choice is to go for a stock based company (AS), hire yourself as an 
            employee and have the same rights to social security as you would being employed somewhere else. With the accounting 
            software Fiken, accounting and administration is easy.`,
            `The more difficult and important second step is to land a project which is both interesting and has acceptable rates.
            For me it was without doubt worth it to get help from Witted - a company connecting customers and freelancers. Since
            I'm neither good at nor interested in sales and marketing, it made sense to get someone else to handle this part and
            I expect it would for most developers. I got my first small project within education after about a month, and then a 
            one year contract with a customer in the financial industry after another month. The process of getting projects is 
            definitely not the coolest part of freelancing, but in the end it was definitely worth the wait and the effort - both 
            financially and otherwise💸🤓.`,
            `My main project in 2022 was building a web application for the fintech company Kredd. The application allows 
            individuals to apply for loans and makes automated decisions based on available data about the customer. The application
            was built with an Angular frontend and Node.js backend both written in TypeScript. The project is hosted on AWS. The 
            Kredd team consists of very few, but skilled and intelligent people, which means both high impact and responsibility - 
            a perfect combination for growth and interesting work🎉.`,
            `Now, I'm off looking for new projects, crossing my fingers that the second year of freelancing will be about as good
            as the first.🤞🚀`,
          ]}
        />
        <BlogPost
          id="aksjegrafen"
          date="2021/10/25"
          title="Aksjegrafen.com sees the first light of day!"
          picture={aksjegrafen_img}
          content={[
            `After some intensive weekend and evening work, I'm launching the initial version of aksjegrafen.com. You can 
          now find all Norwegian companies and shareholders and see them in a graph vizualization (or network if you will). Add as many shareholders and investors as
          you'd like to, and see direct and indirect ownership relationships.  
          `,
            `The graph is built using a d3-force simulation and SVGs. This simulation is usually used for complex networks, particle analysis and such,
          but may just as well be used to position investors and their investments nicely.`,
            `I'm going for a minimalistic neumorphic design with light and dark themes. `,
          ]}
          externalUrl="https://www.aksjegrafen.com"
        />
        <BlogPost
          id="about-you"
          date="2021/09/19"
          title="It's not me, it's you"
          link="/about-you"
          content={[
            `Most web sites have an 'about us' section or similar. I've done it the other way around and created an 'about you' page where you can see some
            of the information that your browser reveals about you. It's not a lot really - just some information about your browser, potentially your device and
            your location if you allow it. Click here to see more.
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
          picture={stock_graph_picture}
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
          picture={apartment_picture}
          content={["I sold my cute 25 square meter apartment today."]}
        />
        <BlogPost id="hello-world" date="2020/10/23" title="Hello World!" content={["My very first blogpost."]} />
      </div>
    </>
  );
};

export default Blog;
