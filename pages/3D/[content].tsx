import { useEffect, useMemo, useState } from "react";
import { GetStaticProps } from "next";
import {
  addTail,
  Canvas,
  extend,
  ReactThreeFiber,
  useFrame,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { throttle } from "lodash-es";

import Spheres from "../../components/3D/Spheres";

import styles from "./3D.module.scss";

const sceneContentMap: { [key: string]: JSX.Element } = {
  spheres: <Spheres />,
  /*  boxes: <Boxes />,
    house: <House />, */
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const content =
    params?.content && typeof params?.content === "string"
      ? params.content
      : null;
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
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
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
  const fn: any = useMemo(
    () => throttle((fps) => setFps(fps.toFixed(0)), 60),
    [setFps]
  );

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
      <div className="w-20 bg-gray-50 absolute rounded m-2 p-2">FPS: {fps}</div>
      <Canvas>
        {content && (
          <SceneControls
            setFps={setFps}
            sceneContent={sceneContentMap[content]}
          />
        )}
      </Canvas>
    </div>
  );
};

export default Scene;
