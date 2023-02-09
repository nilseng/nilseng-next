import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { createMesh, IMeshConfig } from "./utils";

interface IScene {
  id: string;
  bgColor?: string;
  camera?: {
    fov?: number;
    position?: {
      x?: number;
      y?: number;
      z?: number;
    };
  };
  meshes?: IMeshConfig[];
}

let renderer: any,
  scene: any,
  camera: any,
  sphere: THREE.Mesh,
  v0y: number = 0;

const init = (mainEl: React.RefObject<HTMLDivElement>, config: IScene) => {
  if (!config) return;

  camera = new THREE.PerspectiveCamera(config.camera?.fov, window.innerWidth / window.innerHeight);
  camera.position.z = config.camera?.position?.z;

  scene = new THREE.Scene();

  if (config.meshes) {
    for (const meshConfig of config.meshes) {
      const mesh = createMesh(meshConfig);
      scene.add(mesh);
    }
  }

  // Adding a sphere
  const sphereGeometry = new THREE.SphereBufferGeometry(0.5, 16, 16);
  const sphereMaterial = new THREE.MeshStandardMaterial({ color: "#faf8f9" });

  sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.castShadow = true;
  sphere.position.set(-4, 4, 0);
  scene.add(sphere);

  // Adding light
  const pointLight = new THREE.PointLight(0xffffff, 2);
  pointLight.position.set(-5, -10, 20);
  pointLight.castShadow = true;
  scene.add(pointLight);

  //Set up shadow properties for the light
  pointLight.shadow.mapSize.width = 2000;
  pointLight.shadow.mapSize.height = 2000;
  pointLight.shadow.camera.near = 0.5;
  pointLight.shadow.camera.far = 500;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.render(scene, camera);
  mainEl.current?.appendChild(renderer.domElement);
};

let requestId: number;

const animate = () => {
  if (sphere) {
    requestId = requestAnimationFrame(animate);
    sphere.position.x += 0.05;
    sphere.position.y +=
      sphere.position.y >= -1.5 || sphere.position.x > 2.5 ? v0y * (1 / 60) + (1 / 2) * -9.81 * Math.pow(1 / 60, 2) : 0;
    v0y = sphere.position.y >= -1.5 || sphere.position.x > 2.5 ? v0y - 9.81 * (1 / 60) : 0;
    if (sphere.position.y < -4) {
      sphere.position.y = 4;
      sphere.position.x = -4;
      v0y = 0;
    }
  }
  if (renderer) renderer.render(scene, camera);
};

const Three = ({ config }: any) => {
  const mainEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainEl && config) {
      init(mainEl, config);
      animate();
    }
    return () => cancelAnimationFrame(requestId);
  }, [mainEl, config]);

  return (
    <>
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
    </>
  );
};

export default Three;
