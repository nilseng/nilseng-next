import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface IProps {
  [key: string]: any;
}

const RotatingBox = (props: IProps) => {
  const mesh = useRef<Mesh>();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const [scale] = useState(Math.random());

  const [angle, setAngle] = useState<number>();

  useEffect(() => {
    if (mesh.current) {
      setAngle(
        Math.acos(
          mesh.current.position.x /
            Math.sqrt(
              Math.pow(mesh.current.position.x, 2) +
                Math.pow(mesh.current.position.y, 2)
            )
        ) * (Math.random() < 0.5 ? -1 : 1)
      );
    }
  }, []);

  useFrame(() => {
    if (mesh.current && (angle || angle === 0)) {
      mesh.current.position.x = Math.cos(angle);
      mesh.current.position.y = Math.sin(angle);
      setAngle(angle + 0.01);
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={
        active ? [scale * 1.5, scale * 1.5, scale * 1.5] : [scale, scale, scale]
      }
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? props.hoverColor : props.color} />
    </mesh>
  );
};

export default RotatingBox;
