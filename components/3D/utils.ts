import * as THREE from "three";
import { DirectionalLight, PlaneGeometry, PointLight, SphereGeometry } from "three";

export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export interface IMeshConfig {
  name: string;
  geometry: {
    type: "plane" | "sphere";
    parameters: {
      radius?: number;
      width?: number;
      height?: number;
      widthSegments?: number;
      heightSegments?: number;
    };
  };
  material: {
    type: "standard";
    parameters: any;
  };
  position?: [number, number, number];
  receiveShadow?: boolean;
  castShadow?: boolean;
  rotation?: [number, number, number];
  animations: string[];
}

const geometryTypeMap = {
  plane: PlaneGeometry,
  sphere: SphereGeometry,
};

const materialTypeMap = {
  standard: THREE.MeshStandardMaterial,
};

export const createMesh = (config: IMeshConfig): THREE.Mesh => {
  const geometry = new geometryTypeMap[config.geometry.type](...Object.values(config.geometry.parameters));
  const material = new materialTypeMap[config.material.type](config.material.parameters);
  const mesh = new THREE.Mesh(geometry, material);
  if (config.position) {
    mesh.position.set(...config.position);
  }
  if (config.receiveShadow) mesh.receiveShadow = true;
  if (config.castShadow) mesh.castShadow = true;
  if (config.rotation) {
    const mappedRotation = config.rotation.map((r) => r * Math.PI) as [number, number, number];
    mesh.rotation.set(...mappedRotation);
  }
  return mesh;
};

export const createPointLight = () => {
  const pointLight = new PointLight(0xffffff, 2);
  pointLight.position.set(-5, -10, 0);
  pointLight.castShadow = true;
  return pointLight;
};

export const createDirectionalLight = () => {
  const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 10, 0);
  directionalLight.castShadow = true;
  return directionalLight;
};
