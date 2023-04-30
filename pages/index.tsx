import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import BlogPost from "../components/BlogPost";

import aksjegrafen_img from "../public/images/aksjegrafen.png";
import bc_book_img from "../public/images/backcountrybook.png";
import big5ish_img from "../public/images/big5ish.png";
import norad_mateffekten from "../public/images/norad_mateffekten.png";
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
        <title>Teodor Nilseng Danielsen</title>
        <meta name="description" content="Teodor Nilseng Danielsen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ShootingStars />
        <div className="sm:container xl:px-60 mx-auto">
          <a href="https://www.aksjegrafen.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="aksjegrafen.com"
              content={[
                `På Aksjegrafen finner du alle Norges aksjonærer og aksjeselskaper. Søk blant selskapene, se direkte og
                indirekte relasjoner, få oversikt over komplekse eierskapsstrukturer, se finansielle nøkkeltall eller koble deg 
                på APIet for å analysere data direkte.`,
                `Bygget med TypeScript, React, D3.js, Node.js, Express, Redis og MongoDB.`,
              ]}
              picture={aksjegrafen_img}
            />
          </a>
          <a href="https://big5ish.herokuapp.com/" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="Big5ish"
              content={[
                `Big5ish er inspirert av podcasten Big 5 med Nils og Harald, og er en personlighetstest man kan ta sammen med 
                venner og kollegaer. Målet er at noe av det samme som Nils Brenna og Harald Eia skaper med kjente personer skal 
                kunne skapes av hvem som helst med de man selv omgås i hverdagen. Testen gjør at man forstår hvorfor folk 
                oppfører seg som de gjør og hvilke behov de har. Dermed kan man legge til rette for bedre kommunikasjon og bedre 
                samarbeid.`,
                `Bygget med TypeScript, React, Tailwind, Node.js, Express, Apollo og Graphql.`,
              ]}
              picture={big5ish_img}
            />
          </a>
          <a href="https://www.pureokrs.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="pureokrs.com"
              content={[
                `PureOKRs (Pure Objectives and Key Result) er et verktøy for målstyringsmetodikken OKRs som blant annet har blitt 
                brukt i Intel og Google. Metodikken har i stor grad blitt gjort kjent gjennom investoren John Doerr som også er 
                forfatteren av Measure What Matters.`,
                `PureOKRs er bygget med Angular, Node.js, Express og MongoDB.`,
              ]}
              picture={pureokrs_img}
            />
          </a>
          <a href="https://www.backcountrybook.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="backcountrybook.com"
              content={[
                `BackcountryBook er en applikasjon for å dele egne og se andres toppturer på ski. Del bilder eller ruter i form av
                GPX-filer. Utforsk fjell i 2D eller 3D.`,
                `Siden er bygget med React, Node.js, Express, MongoDB, AWS S3, Mapbox og Auth0.`,
              ]}
              picture={bc_book_img}
            />
          </a>
          <a
            href="https://www.fn.no/undervisning/undervisningsopplegg/5-7-trinn/mateffekten/lykkehjulet"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <BlogPost
              title="Norads Mateffekten - ordmaskinen"
              picture={norad_mateffekten}
              content={[
                `Mateffekten er et initiativ som fokuserer på bærekraftig matproduksjon. I samarbeid med Los&Co 
              utviklet jeg ordmaskinen - to lykkehjul som sammen genererer et nyord. Ordmaskinen ble brukt som en del av
              et undervisningsopplegg om temaet. Opplegget er et samarbeid mellom Norad og FN-sambandet.`,
              ]}
            />
          </a>
          <a href="https://www.purewacc.com" target="__blank" style={{ textDecoration: "none" }}>
            <BlogPost
              title="purewacc.com"
              content={[
                `PureWACC (Pure Weighted Average Cost of Capital) - er en applikasjon for å forenkle beregning og distribusjon 
                av totalkapitalkostnad for prosjekter som skjer på tvers av markeder og industrier.`,
                `Bygget med React, Node.js, Express og MongoDB.`,
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
