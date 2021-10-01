import type { AppProps } from "next/app";

import * as ga from "../lib/ga";
import { Navbar } from "../components/Navbar";

import "../styles/globals.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function NilsengApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
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
