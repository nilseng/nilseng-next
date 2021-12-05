import Image from "next/image";
import meImg from "../public/images/me.png";

const AboutMe = () => {
  return (
    <>
      <div
        className="absolute top-0 h-screen w-screen bg-gradient-to-r from-green-600 to-blue-600"
        style={{ zIndex: -10 }}
      ></div>
      <div
        className="absolute top-0 h-screen w-screen bg-gradient-to-t from-yellow-100  overflow-scroll"
        style={{ zIndex: -1 }}
      >
        <div className="absolute top-32 right-0 sm:right-16 text-white xl:w-1/3 md:1/2 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-white border-opacity-40 rounded-3xl p-6 md:p-8">
          <p className="text-3xl w-4/5">Teodor Nilseng Danielsen</p>
          <div className="py-4 px-2">
            <p className="text-sm">Fullstack Software Developer</p>
            <p className="text-xl mt-8">Favourite tech</p>
            <p className="text-sm">Typescript, React, Tailwind, Node.js, Express, MongoDB</p>
            <p className="text-xl mt-8">Active projects</p>
            <p className="text-sm">
              <a href="https://www.aksjegrafen.com" target="_blank" rel="noreferrer" className="text-gray-50 text-sm">
                Aksjegrafen
              </a>
              {", "}
              <a
                href="https://www.backcountrybook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-50 text-sm"
              >
                BackcountryBook
              </a>
              {" and "}
              <a href="https://www.pureokrs.com" target="_blank" rel="noreferrer" className="text-gray-50 text-sm">
                PureOKRs
              </a>{" "}
            </p>
          </div>
        </div>
        <div
          className="absolute top-20 right-0 md:right-4 text-white w-32 h-32 md:w-44 md:h-44 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-white border-opacity-40 rounded-3xl p-4 md:p-6"
          style={{ borderRadius: "50%" }}
        >
          <div className="w-full h-full overflow-hidden" style={{ borderRadius: "50%" }}>
            <Image src={meImg} placeholder="blur" alt="Teodor" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
