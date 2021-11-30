import "../styles/globals.css";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`body { margin: 0;}`}</style>
        <title>The Ultimate Guide to First-Principles Thinking</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/fpt_guide.gif
        " />
        <meta property="og:image" content={"/thumbnail.png"} />
        <meta name="description" content="This guide is the most comprehensive resource on first principles thinking, featuring handpicked resources from the best thinkers alive today!" />
      </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
