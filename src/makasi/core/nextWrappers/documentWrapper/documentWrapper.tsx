import { CSSProperties, FC, ReactNode } from "react";

export const MakasiDocumentHead: FC<{
  websiteData: TWebsiteData;
}> = ({ websiteData }) => {
  return (
    <>
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={getGoogleProviderFontURL(websiteData)} rel="stylesheet" /> */}
    </>
  );
};

export const MakasiDocumentBody: FC<{
  websiteData: TWebsiteData;
  children: ReactNode;
}> = ({ children, websiteData }) => {
  return (
    <div
      style={
        {
          // fontFamily: getMainFont(websiteData),
          "--dark": "#172b49",
          "--light": "#f4f5fd",
          "--error": "#e74c3c",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

const getGoogleProviderFontURL = (websiteData: TWebsiteData) => {
  const googleFonts = websiteData.fonts.filter(
    (font) => font.provider === "google"
  );

  const particles = [];

  for (const googleFont of googleFonts) {
    particles.push("family=" + googleFont.family.replace(/ /g, "+"));
  }

  return (
    "https://fonts.googleapis.com/css2?" + particles.join("&") + "&display=swap"
  );
};

export const getMainFont = (websiteData: TWebsiteData) => {
  for (const font of websiteData.fonts) {
    if (font.main) return `'${font.family}', ${font.type}`;
  }

  return undefined;
};

export type TWebsiteData = {
  fonts: {
    main?: boolean;
    provider: "google";
    family: string;
    type: "serif" | "sans-serif";
  }[];
};
