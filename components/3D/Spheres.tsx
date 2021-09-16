import React from "react";

import RotatingSphere from "./RotatingSphere";

const Spheres = () => {
  return (
    <>
      {new Array(100).fill(1).map((_, i) => (
        <RotatingSphere key={i} color={"#f8f9fa"} />
      ))}
    </>
  );
};

export default Spheres;
