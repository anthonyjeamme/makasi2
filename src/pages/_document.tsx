import { Html, Head, Main, NextScript } from "next/document";

import {
  MakasiDocumentHead,
  TWebsiteData,
} from "@/makasi/core/nextWrappers/documentWrapper/documentWrapper";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="Default title">
        <MakasiDocumentHead websiteData={websiteData} />
      </Head>
      <body
        style={{
          fontFamily: `font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
            Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;`,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const websiteData: TWebsiteData = {
  fonts: [
    // {
    //   main: true,
    //   provider: "google",
    //   family: "Open Sans",
    //   type: "sans-serif",
    // },
  ],
};
