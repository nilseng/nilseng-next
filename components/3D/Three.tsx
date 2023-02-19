import React, { useEffect, useRef } from "react";
import { Camera, Mesh, PCFSoftShadowMap, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createDirectionalLight, createMesh, IMeshConfig } from "./utils";

export interface IScene {
  camera: {
    fov?: number;
    position: {
      x: number;
      y: number;
      z: number;
    };
  };
  meshes: IMeshConfig[];
}

const init = (mainEl: React.RefObject<HTMLDivElement>, config: IScene) => {
  const scene = new Scene();

  const camera = createCamera(config);
  const meshes = createAndAddMeshes(config, scene);
  const animations = createAnimations(config, meshes);

  scene.add(createDirectionalLight());

  const renderer = createRenderer();
  renderer.render(scene, camera);

  mainEl.current?.appendChild(renderer.domElement);

  return { renderer, scene, camera, animations };
};

const createCamera = (config: IScene) => {
  const camera = new PerspectiveCamera(config.camera?.fov, window.innerWidth / window.innerHeight);
  if (config.camera.position.x) camera.position.x = config.camera.position.x;
  if (config.camera.position.y) camera.position.y = config.camera.position.y;
  if (config.camera.position.z) camera.position.z = config.camera.position.z;
  return camera;
};

const createAndAddMeshes = (config: IScene, scene: Scene) => {
  const meshes = [];
  for (const meshConfig of config.meshes) {
    const mesh = createMesh(meshConfig);
    meshes.push({ name: meshConfig.name, mesh });
    scene.add(mesh);
  }
  return meshes;
};

const createAnimations = (config: IScene, meshes: { name: string; mesh: Mesh }[]) => {
  const animations = (
    config.meshes
      ?.map((meshConfig) => {
        return meshConfig.animations?.map(
          (animationName) => () => animationMap[animationName](meshes.find((m) => m.name === meshConfig.name)?.mesh!)
        );
      })
      .flat() ?? []
  ).filter((a) => !!a);
  return animations;
};

const accelerateSphere = (sphere: Mesh, v0y: number = 0) => {
  sphere.position.x += 0.025;
  sphere.position.y +=
    sphere.position.y > -1.5 || sphere.position.x > 2.5 ? v0y * (1 / 60) + (1 / 2) * -9.81 * Math.pow(1 / 60, 2) : 0;
  const vy =
    sphere.position.y > -4 && (sphere.position.y > -1.5 || sphere.position.x > 2.5) ? v0y - 9.81 * (1 / 60) : 0;
  if (sphere.position.y < -4) {
    sphere.position.y = 8;
    sphere.position.x = -4;
  }
  return () => accelerateSphere(sphere, vy);
};

const createRenderer = () => {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  return renderer;
};

type InitialAnimationFunction = (mesh: Mesh, ...args: number[]) => AnimationFunction;
type AnimationFunction = () => AnimationFunction;

const animationMap: { [key: string]: InitialAnimationFunction } = {
  accelerateSphere,
};

const animate = ({
  renderer,
  scene,
  camera,
  animations,
}: {
  renderer: WebGLRenderer;
  scene: Scene;
  camera: Camera;
  animations: (() => AnimationFunction)[];
}) => {
  const nextAnimations = animations.map((animation) => animation());
  const requestId = requestAnimationFrame(() => animate({ renderer, scene, camera, animations: nextAnimations }));
  renderer.render(scene, camera);
  return requestId;
};

const Three = ({ config }: { config: IScene }) => {
  const mainEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { renderer, scene, camera, animations } = init(mainEl, config);
    const requestId = animate({ renderer, scene, camera, animations });
    return () => cancelAnimationFrame(requestId);
  }, [mainEl, config]);

  return (
    <div
      ref={mainEl}
      className="h-100 w-100"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></div>
  );
};

export default Three;
