import Head from "next/head";
import { SVGProps, useEffect, useRef, useState } from "react";

const Page = () => {
  const [isSpinInited, setIsSpinInited] = useState<boolean>(false);
  const animateRef = useRef<SVGAnimateTransformElement>(null);
  const [isConsultantSelected, setIsConsultantSelected] = useState<boolean>(false);

  const spin = () => {
    setIsConsultantSelected(false);
    if (!isSpinInited) setIsSpinInited(true);
    setTimeout(() => {
      setIsConsultantSelected(true);
    }, 2000);
    setTimeout(() => {
      window.alert("Hjulet anbefaler Teodor Nilseng Danielsen!");
    }, 2100);
  };

  useEffect(() => {
    if (isSpinInited) {
      animateRef.current?.beginElement();
    }
  }, [isSpinInited]);

  return (
    <>
      <Head>
        <title>Spin the wheel!</title>
        <meta name="description" content="Consultant selector." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="absolute top-0 h-screen w-screen bg-gradient-to-r from-green-400 to-blue-600"
        style={{ zIndex: -10 }}
      ></div>
      <div
        className="absolute top-0 h-screen w-screen bg-gradient-to-t from-yellow-100 overflow-scroll"
        style={{ zIndex: -1 }}
      >
        <svg height="100%" width="100%" viewBox="0 0 1000 1000">
          <g>
            <g>
              {isSpinInited && (
                <animateTransform
                  ref={animateRef}
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 500 500"
                  to="360 500 500"
                  begin="0"
                  dur="1s"
                  repeatCount="2"
                />
              )}
              <circle cx="500" cy="500" r="400" fill="#f8f9fa" opacity={"40%"} />
              {isConsultantSelected && <circle cx="900" cy="500" r="10" fill="#00ff00" opacity={"40%"} />}
              <text
                className={isConsultantSelected ? "font-bold" : ""}
                x="725"
                y="500"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                Teodor Nilseng Danielsen
              </text>
              <text x="725" y="500" textAnchor="middle" alignmentBaseline="middle" transform="rotate(60 500 500)">
                En annen konsulent
              </text>
              <text x="725" y="500" textAnchor="middle" alignmentBaseline="middle" transform="rotate(120 500 500)">
                Reodor Dilseng Nadielsen
              </text>
              <text x="725" y="500" textAnchor="middle" alignmentBaseline="middle" transform="rotate(180 500 500)">
                En tredje konsulent
              </text>
              <text x="725" y="500" textAnchor="middle" alignmentBaseline="middle" transform="rotate(240 500 500)">
                Noen André
              </text>
              <text x="725" y="500" textAnchor="middle" alignmentBaseline="middle" transform="rotate(300 500 500)">
                Noen Tredjé
              </text>
            </g>
            <g style={{ cursor: "pointer" }} onClick={spin}>
              <circle cx="500" cy="500" r="50" fill="#f8f9fa" opacity={"40%"} />
              <text
                className="font-bold"
                x="500"
                y="500"
                textAnchor="middle"
                alignmentBaseline="middle"
                style={{ userSelect: "none" }}
              >
                Snurr!
              </text>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Page;
