import { GetServerSideProps } from "next";
import Page from "@/makasi/core/page/Page";
import { TPageData } from "@/makasi/core/PageEdition/Page.types";
import { headerSectionDefinition } from "@/sections/HeaderSection/HeaderSection.definition";
import { paragraphSectionDefinition } from "@/sections/ParagraphSection/ParagraphSection.definition";
import { FC } from "react";

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

const pageData = {
  id: "home",
  metadata: {
    title: "Page d'exemple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image:
      "https://images.unsplash.com/photo-1679939099455-6fb0ec91e794?auto=format&fit=crop&w=500&q=60",
    canonical: "https://google.com",
    url: "https://google.com",
  },
  sections: [
    {
      id: "lfvh5n1g",
      name: "header-section",
      params: {
        background: {
          type: "image",
          provider: "unsplash",
          url: "https://images.unsplash.com/photo-1550945364-6373abbd7a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
        },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Titre" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lfvh5n1gx",
      name: "header-section",
      params: {
        background: {
          type: "color",
          color: "--dark",
        },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Titre" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
  ],
  layout: {},
};
