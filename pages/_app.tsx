import "../styles/globals.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";

function NilsengApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default NilsengApp;
