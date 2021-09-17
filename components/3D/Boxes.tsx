import React from "react";
import { getRandomColor } from "./utils";

import RotatingBox from "./RotatingBox";

const Boxes = () => {
  return (
    <>
      {new Array(100).fill(1).map((_, i) => (
        <RotatingBox
          key={i}
          position={[
            Math.random() * 8 - 4,
            Math.random() * 8 - 4,
            Math.random() * 8 - 4,
          ]}
          color={getRandomColor()}
          hoverColor={getRandomColor()}
        />
      ))}
    </>
  );
};

export default Boxes;
