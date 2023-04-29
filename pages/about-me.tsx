import Head from "next/head";
import Image from "next/image";

import meImg from "../public/images/me.png";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Teodor's portfolio, blog and random stuff." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="absolute top-0 h-full w-screen bg-gradient-to-r from-green-400 to-blue-600"
        style={{ zIndex: -10 }}
      ></div>
      <div
        className="absolute top-0 h-full w-screen bg-gradient-to-t from-yellow-100  overflow-scroll"
        style={{ zIndex: -2 }}
      ></div>
      <div className="absolute top-0 flex flex-wrap h-full w-screen overflow-scroll" style={{ zIndex: -1 }}>
        <div className="flex flex-col justify-center md:w-1/2 px-5 md:pr-20 pt-40 md:pt-0">
          <div className="relative text-gray-50 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-white border-opacity-40 rounded-3xl p-6 md:p-8">
            <div
              className="absolute -top-10 -right-5 md:-right-10 text-white w-32 h-32 md:w-44 md:h-44 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-white border-opacity-40 rounded-3xl p-4 md:p-6"
              style={{ borderRadius: "50%" }}
            >
              <div className="w-full h-full overflow-hidden" style={{ borderRadius: "50%" }}>
                <Image src={meImg} placeholder="blur" alt="Teodor" />
              </div>
            </div>
            <p className="text-3xl w-4/5">Teodor Nilseng Danielsen</p>
            <div className="py-4 px-2">
              <p className="text-sm">Fullstack Software Developer</p>
              <p className="text-xl mt-8">Favourite tech</p>
              <p className="text-sm">Typescript, React, Tailwind, Node.js, Express, MongoDB</p>
              <p className="text-xl mt-8">Active projects</p>
              <p className="text-sm">
                <a href="https://www.aksjegrafen.com" target="_blank" rel="noreferrer" className="text-sm font-bold">
                  Aksjegrafen
                </a>
                {", "}
                <a
                  href="https://www.backcountrybook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold"
                >
                  BackcountryBook
                </a>
                {" and "}
                <a href="https://www.pureokrs.com" target="_blank" rel="noreferrer" className="text-sm font-bold">
                  PureOKRs
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 text-gray-700 p-10">
          <p className="pb-4">Som Chat GPT sier det:</p>
          <p>
            Jeg heter Teodor Nilseng Danielsen og er en full-stack programvareutvikler med over 3 års erfaring. I
            tillegg til min bakgrunn som utvikler, har jeg 4 års erfaring som rådgiver og forretningsutvikler, samt et
            års erfaring med business intelligence - i hovedsak Power BI. Jeg har en mastergrad i Industriell teknologi
            og økonomiledelse fra NTNU, og har jobbet for store organisasjoner som Kongsberg Digital, Telenor Group og
            DNB. Jeg har den siste tiden jobbet mest med TypeScript, Angular, React, Node.js og MongoDB, og har også
            erfaring med Python og Java. Jeg har jobbet i ulike bransjer, inkludert finans, olje og gass og
            telekommunikasjon, og jeg er opptatt av å bygge kvalitetsnettapplikasjoner som løser virkelige problemer. Ta
            gjerne en titt på min portefølje for å se noen av mine nylige prosjekter.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
