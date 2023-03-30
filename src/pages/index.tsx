import fs from "fs";

import { GetServerSideProps } from "next";
import Page from "@/makasi/core/page/Page";
import { TPageData } from "@/makasi/core/page/Page.types";
import { headerSectionDefinition } from "@/sections/HeaderSection/HeaderSection.definition";
import { paragraphSectionDefinition } from "@/sections/ParagraphSection/ParagraphSection.definition";
import { FC } from "react";
import dynamic from "next/dynamic";

const Unsplash = dynamic(() => import("@/Unsplash/Unsplash"), { ssr: false });

interface THomeProps {
  pageData: TPageData;
}

export const Home: FC<THomeProps> = ({ pageData }) => {
  return (
    <div>
      <Page pageData={pageData} sectionsDefinitions={sectionsDefinitions} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = JSON.parse(fs.readFileSync("data/home.json", "utf-8"));

  return {
    props: {
      pageData,
    },
  };
};

const sectionsDefinitions = [
  headerSectionDefinition,
  paragraphSectionDefinition,
];
