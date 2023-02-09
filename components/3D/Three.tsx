import React, { useEffect, useRef } from "react";
import {
  Camera,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import { createMesh, IMeshConfig } from "./utils";

interface IScene {
  id: string;
  camera: {
    fov?: number;
    position: {
      x: number;
      y: number;
      z: number;
    };
  };
  meshes?: IMeshConfig[];
}

const init = (mainEl: React.RefObject<HTMLDivElement>, config: IScene) => {
  const camera = new PerspectiveCamera(config.camera?.fov, window.innerWidth / window.innerHeight);
  camera.position.z = config.camera.position.z;

  const scene = new Scene();

  if (config.meshes) {
    for (const meshConfig of config.meshes) {
      const mesh = createMesh(meshConfig);
      scene.add(mesh);
    }
  }

  // Adding a sphere
  const sphereGeometry = new SphereGeometry(0.5, 16, 16);
  const sphereMaterial = new MeshStandardMaterial({ color: "#faf8f9" });

  const sphere = new Mesh<SphereGeometry, MeshStandardMaterial>(sphereGeometry, sphereMaterial);
  sphere.castShadow = true;
  sphere.position.set(-4, 4, 0);
  scene.add(sphere);

  // Adding lights
  const pointLight = new PointLight(0xffffff, 2);
  pointLight.position.set(-5, -10, 20);
  pointLight.castShadow = true;
  scene.add(pointLight);

  const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 480, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  //Set up shadow properties for the light
  pointLight.shadow.mapSize.width = 2000;
  pointLight.shadow.mapSize.height = 2000;
  pointLight.shadow.camera.near = 0.5;
  pointLight.shadow.camera.far = 500;

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.render(scene, camera);
  mainEl.current?.appendChild(renderer.domElement);

  return { sphere, renderer, scene, camera };
};

const animate = ({
  renderer,
  sphere,
  scene,
  camera,
  v0y = 0,
}: {
  renderer: WebGLRenderer;
  scene: Scene;
  sphere: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;
  camera: Camera;
  v0y?: number;
}) => {
  sphere.position.x += 0.025;
  sphere.position.y +=
    sphere.position.y >= -1.5 || sphere.position.x > 2.5 ? v0y * (1 / 60) + (1 / 2) * -9.81 * Math.pow(1 / 60, 2) : 0;
  const vy =
    sphere.position.y > -4 && (sphere.position.y >= -1.5 || sphere.position.x > 2.5) ? v0y - 9.81 * (1 / 60) : 0;
  if (sphere.position.y < -4) {
    sphere.position.y = 4;
    sphere.position.x = -4;
  }
  const requestId = requestAnimationFrame(() => animate({ renderer, sphere, scene, camera, v0y: vy }));
  renderer.render(scene, camera);
  return requestId;
};

const Three = ({ config }: any) => {
  const mainEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { sphere, renderer, scene, camera } = init(mainEl, config);
    const requestId = animate({ sphere, renderer, scene, camera });
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
