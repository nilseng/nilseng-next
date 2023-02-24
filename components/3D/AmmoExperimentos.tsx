import { useMemo } from "react";
import Ammo from "../../lib/ammo.js";

export const AmmoExperimentos = () => {
  useMemo(() => {
    Ammo().then((ammo: any) => console.log(ammo));
  }, []);

  return <p></p>;
};
