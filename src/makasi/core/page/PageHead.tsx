import Head from "next/head";
import { FC } from "react";
import { TPageData } from "./Page.types";

interface TPageHeadProps {
  pageData: TPageData;
}

export const PageHead: FC<TPageHeadProps> = ({ pageData }) => (
  <Head>
    <title>{pageData.metadata.title}</title>
    <meta property="og:type" content="website" />
    <meta property="og:url" content={pageData.metadata.url} />
    <link rel="canonical" href={pageData.metadata.canonical} />
    <meta property="og:title" content={pageData.metadata.title} />
    <meta property="og:image" content={pageData.metadata.image} />
    <meta name="description" content={pageData.metadata.description} />
    <meta property="og:description" content={pageData.metadata.description} />
  </Head>
);
