import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface IProps {
  [key: string]: any;
}

const RotatingSphere = (props: IProps) => {
  const mesh = useRef<Mesh>();

  const [active, setActive] = useState(false);

  const [scale] = useState(0.2);

  const [angle, setAngle] = useState<number>();
  const [direction] = useState<number>(Math.random() > 0.5 ? 1 : -1);

  useEffect(() => {
    if (mesh.current) {
      setAngle(2 * Math.PI * Math.random());
      mesh.current.position.z = Math.random() * 6 - 2;
    }
  }, []);

  useFrame(() => {
    if (mesh.current && (angle || angle === 0)) {
      mesh.current.position.x = Math.cos(angle);
      mesh.current.position.y = Math.sin(angle);
      setAngle(angle + direction * 0.02);
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={
        active ? [scale * 1.5, scale * 1.5, scale * 1.5] : [scale, scale, scale]
      }
      onClick={() => setActive(!active)}
      castShadow
      receiveShadow
    >
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default RotatingSphere;
