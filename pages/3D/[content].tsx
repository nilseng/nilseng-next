import { useEffect, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { addTail, Canvas, extend, ReactThreeFiber, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { throttle } from "lodash-es";

import Spheres from "../../components/3D/Spheres";
import Boxes from "../../components/3D/Boxes";

import styles from "./3D.module.scss";

const sceneContentMap: { [key: string]: JSX.Element } = {
  spheres: <Spheres />,
  boxes: <Boxes />,
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const content = params?.content && typeof params?.content === "string" ? params.content : null;
  return {
    props: {
      content,
    },
  };
};

export async function getStaticPaths() {
  const paths = Object.keys(sceneContentMap).map((p) => ({
    params: { content: p },
  }));
  return {
    paths,
    fallback: false,
  };
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
    }
  }
}

extend({ OrbitControls });

interface ISceneContentProps {
  setFps: any;
  sceneContent: JSX.Element;
}

const SceneControls = ({ setFps, sceneContent }: ISceneContentProps) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  let last = Date.now();
  const fn: any = useMemo(() => throttle((fps) => setFps(fps.toFixed(0)), 60), [setFps]);

  useFrame(() => {
    let now = Date.now();
    fn(1 / ((now - last) / 1000));
    last = now;
  });
  useEffect(() => addTail(() => fn(0)), [fn]);

  return (
    <>
      <orbitControls args={[camera, domElement]} keyPanSpeed={20} />
      <ambientLight />
      <pointLight position={[5, 5, 10]} />
      {sceneContent}
    </>
  );
};

const Scene = ({ content }: { content: string }) => {
  const [fps, setFps] = useState();

  return (
    <div className={styles["scene-container"]}>
      <div
        className="absolute right-10 top-24 flex flex-col justify-center items-center w-40 h-30 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-50 rounded-xl"
        style={{ zIndex: 1 }}
      >
        <div className="text-3xl text-gray-50 rounded m-2">{fps}</div>
        <div className="text-sm text-white rounded m-2">FPS</div>
      </div>
      <div
        className="absolute left-10 top-24 flex flex-col justify-center w-96 bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-50 rounded-xl"
        style={{ zIndex: 1 }}
      >
        <div className="text-lg text-gray-50 rounded m-2">About</div>
        <p className="text-sm text-white rounded m-2">
          This 3D visualization is created with react-three-fiber which is a React renderer for the JavaScript 3D
          library Three.js.
        </p>
        <p className="text-sm text-white rounded m-2">Scroll to zoom or click and drag to change your point of view.</p>
      </div>
      <Canvas>{content && <SceneControls setFps={setFps} sceneContent={sceneContentMap[content]} />}</Canvas>
    </div>
  );
};

export default Scene;
