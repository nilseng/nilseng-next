import { GetStaticProps } from "next";

import scenes from "../../components/3D/scenes.json";
import Three, { IScene } from "../../components/3D/Three";

export const getStaticProps: GetStaticProps = ({ params }) => {
  const scene = params?.scene ? params.scene : null;
  return {
    props: {
      scene,
    },
  };
};

export async function getStaticPaths() {
  const paths = Object.keys(scenes).map((s) => ({
    params: { scene: s },
  }));
  return {
    paths,
    fallback: false,
  };
}

const threeScene = ({ scene }: { scene: "ball" }) => {
  return <Three config={scenes[scene] as IScene} />;
};

export default threeScene;
