import type { AppProps } from "next/app";

import { Navbar } from "../components/Navbar";
import * as ga from "../lib/ga";

import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.scss";

const handleRouteChange = (url: string) => {
  ga.pageview(url);
};

function NilsengApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default NilsengApp;
