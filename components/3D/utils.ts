import * as THREE from "three";

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export interface IMeshConfig {
    name: string;
    geometry: {
        type: "plane" | "sphere"
        parameters: {
            radius?: number,
            width?: number,
            height?: number,
            widthSegments?: number,
            heightSegments?: number
        }
    },
    material: {
        type: "standard",
        parameters: any
    },
    position?: [number, number, number],
    receiveShadow?: boolean,
    rotation?: [number, number, number]
}

const geometryTypeMap = {
    plane: THREE.PlaneBufferGeometry,
    sphere: THREE.SphereBufferGeometry
}

const materialTypeMap = {
    standard: THREE.MeshStandardMaterial
}

export const createMesh = (config: IMeshConfig): THREE.Mesh => {
    const geometry = new geometryTypeMap[config.geometry.type](...Object.values(config.geometry.parameters))
    const material = new materialTypeMap[config.material.type](config.material.parameters)
    const mesh = new THREE.Mesh(geometry, material);
    if (config.position) {
        mesh.position.set(...config.position)
    }
    if (config.receiveShadow) mesh.receiveShadow = config.receiveShadow
    if (config.rotation) {
        const mappedRotation = config.rotation.map(r => r * Math.PI) as [number, number, number]
        mesh.rotation.set(...mappedRotation);
    }
    return mesh
};