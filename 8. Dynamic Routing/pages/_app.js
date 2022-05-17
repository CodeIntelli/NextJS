import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

//*  for more details please follow this link https://www.freecodecamp.org/news/routing-in-nextjs-beginners-guide/
//*  for more details please follow this link https://mariestarck.com/a-beginners-guide-to-dynamic-routing-in-next-js/

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
