import type { AppProps } from "next/app";

import { Navbar } from "../components/Navbar";
import * as ga from "../lib/ga";

import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.scss";

const handleRouteChange = (url: string) => {
  ga.pageview(url);
};

function NilsengApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
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
