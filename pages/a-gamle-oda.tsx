import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import stortindImg from "../public/images/stortind.png";
import { createFireworksConfetti } from "../utils/createFireworksConfetti";

const ShootingStars = dynamic(
  () => import("../components/random-fun/ShootingStars").then((mod: any) => mod.ShootingStars),
  { ssr: false }
);

const AGamleOdaPage = () => {
  const [hasOdaClicked, setHasOdaClicked] = useState(false);

  const handleClick = () => {
    setTimeout(() => setHasOdaClicked(true), 4000);
    createFireworksConfetti();
  };

  return (
    <div className="absolute top-0 w-full h-screen flex flex-col justify-center items-center overflow-scroll">
      <ShootingStars />
      {hasOdaClicked ? (
        <div className="h-full w-full">
          <div className="h-full w-full flex flex-col justify-around items-center">
            <p className="text-3xl text-white text-center p-4">Gratulerer med 30-årsdagen, Oda!🤗🥳</p>
            <Link href="/a-gamle-oda#gaven">
              <a className="text-white bg-purple-900 rounded-xl p-4">Til gaven</a>
            </Link>
          </div>
          <div id="gaven" className="h-full w-full flex flex-col justify-center items-center">
            <div className="w-full max-w-xl">
              <div>
                <Image
                  src={stortindImg}
                  placeholder="blur"
                  lazyBoundary="500px"
                  className="pb-8 rounded-2xl"
                  alt={`Stortind image`}
                />
              </div>
              <div className="text-sm text-center text-gray-200 p-6">
                <p className="pb-4">
                  Kaja og jeg vil gi deg guidet klatretur på dette fjellet neste gang du er i Efjorden. Uten snø da. Og
                  hvis du tør. Hvis ikke finner vi noe annet før den ekte bursdagen. Men ellers prøver vi å få til at vi
                  begge blir med på turen! ⛰️🧗🙈
                </p>
                <p>
                  Mer informasjon er{" "}
                  <a className="font-bold" href="https://www.hvitblikk.com/guidetklatretur/eidetind-kort-dag">
                    her
                  </a>
                  😃
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button className="text-white bg-purple-900 rounded-xl p-4" onClick={handleClick}>
          Trykk her hvis du er Oda
        </button>
      )}
    </div>
  );
};

export default AGamleOdaPage;
