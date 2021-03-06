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
