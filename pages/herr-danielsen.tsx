import Image from "next/image";
import { ChangeEvent, useState } from "react";
import bodo_glimt from "../public/images/bodo_glimt.gif";

const Page = () => {
  const [city, setCity] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div
        className="flex flex-col justify-center items-center text-gray-50 p-2"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <h1 className="text-3xl text-center py-10 px-2">Gratulerer med dagen, kjære pappa!</h1>
        <p className="text-center px-4">Vi starter med en liten oppgave; hvilken by ligger disse koordinatene i?</p>
        <code className="text-center p-4 text-gray-200">67.281194,14.393979</code>
        <input className="text-gray-900 w-96" value={city} onChange={(e) => handleChange(e)} />
        {city && city.toLowerCase() === "bodø" && (
          <>
            <p className="text-center text-green-500 py-10">Riktig!🎉</p>
            <p className="text-center">Scroll videre😄</p>
          </>
        )}
      </div>
      {city && city.toLowerCase() === "bodø" && (
        <div className="flex flex-col justify-center items-center w-full text-gray-50 bg-gray-700 h-screen">
          <div style={{ width: "853px", height: "480px" }}>
            <Image src={bodo_glimt} quality={100} width={"853px"} height={"480px"} alt={`Pappa 69 år image`} />
          </div>
          <div className="px-2 py-10">
            <p>
              Vi vil gjerne gi deg tur til Bodø for å se litt fotball 7. april😄 Vi har kjøpt billetter til deg og
              mamma, samt fly opp, tog ned og rom på Clarion hotell. God tur!
            </p>
            <p className="pt-4">Vi du ser nøye på GIFen, ser du kanskje kjentfolk😉</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
