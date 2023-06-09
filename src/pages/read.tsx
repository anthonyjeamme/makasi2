import fs from "fs";

import { GetServerSideProps } from "next";
import Page from "@/makasi/core/Page/Page";
import { TPageData } from "@/makasi/core/PageEdition/Page.types";
import { headerSectionDefinition } from "@/sections/HeaderSection/HeaderSection.definition";
import { paragraphSectionDefinition } from "@/sections/ParagraphSection/ParagraphSection.definition";
import { FC } from "react";
import dynamic from "next/dynamic";
import { WebsiteProvider } from "@/makasi/core/website/website.context";
import { imageSectionDefinition } from "@/sections/ImageSection/ImageSection.definition";
import { introSectionDefinition } from "@/sections/IntroSection/IntroSection.definition";
import { danspratlingHeaderSectionDefinition } from "@/sections/danspratling/HeaderSection/HeaderSection.definition";
import { danspratlingSections } from "@/sections/danspratling";

interface THomeProps {
  pageData: TPageData;
}

export const Home: FC<THomeProps> = ({ pageData }) => {
  return (
    <WebsiteProvider>
      <Page pageData={pageData} sectionsDefinitions={sectionsDefinitions} />
    </WebsiteProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pageData = JSON.parse(fs.readFileSync("data/home.json", "utf-8"));

  return {
    props: {
      pageData,
    },
  };
};

const sectionsDefinitions = [
  ...danspratlingSections,
  introSectionDefinition,
  headerSectionDefinition,
  paragraphSectionDefinition,
  imageSectionDefinition,
];
