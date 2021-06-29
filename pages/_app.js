import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
