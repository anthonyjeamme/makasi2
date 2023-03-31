import { Html, Head, Main, NextScript } from "next/document";

import {
  MakasiDocumentBody,
  MakasiDocumentHead,
  TWebsiteData,
} from "@/makasi/core/nextWrappers/documentWrapper/documentWrapper";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Default title">
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
      main: true,
      provider: "google",
      family: "Open Sans",
      type: "sans-serif",
    },
  ],
};
