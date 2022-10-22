import type { AppProps } from "next/app";
import "../styles/common.scss";
import NextNProgress from "nextjs-progressbar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#0084ca"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
