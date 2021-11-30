import { NotionRenderer, BlockMapType } from "react-notion";
import Head from "next/head";
import Link from "next/link";
// import fetch from "node-fetch";

export async function getServerSideProps() {
  const res = await fetch(
    "https://notion-api.splitbee.io/v1/page/5205ee376ebc4050a8bb94b9da83dcac"
  );
  const data = await res.json();

  return { props: { blockMap: data } };
}

export default function Home({ blockMap }) {
  return (
    <div>
      <Head>
        <style>{`body { margin: 0;}`}</style>
        <title>The Ultimate Guide to First-Principles Thinking</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/fpt_guide.gif
        " />
        <meta property="og:image" content={"/thumbnail.png"} />
        <meta name="description" content="This guide is the most comprehensive resource on first principles thinking, featuring handpicked resources from the best thinkers alive today!" />
      </Head>
      <NotionRenderer
        blockMap={blockMap}
        fullPage
        // hideHeader
        customBlockComponents={{
          page: ({ blockValue, renderComponent }) => (
            <Link href={`/${blockValue.id}`}>{renderComponent()}</Link>
          ),
        }}
      />
    </div>
  );
}
