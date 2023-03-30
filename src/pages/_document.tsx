import { Html, Head, Main, NextScript } from "next/document";

import {
  MakasiDocumentBody,
  MakasiDocumentHead,
  TWebsiteData,
} from "@/makasi/core/nextWrappers/documentWrapper/documentWrapper";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <MakasiDocumentHead websiteData={websiteData} />
      </Head>
      <body>
        <MakasiDocumentBody websiteData={websiteData}>
          <Main />
          <NextScript />
        </MakasiDocumentBody>
      </body>
    </Html>
  );
}

const websiteData: TWebsiteData = {
  fonts: [
    {
      provider: "google",
      family: "Six Caps",
      type: "sans-serif",
    },
    {
      main: true,
      provider: "google",
      family: "Open Sans",
      type: "sans-serif",
    },
  ],
};
