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
          __param_type: "background",
          type: "image",
          color: "--dark",
          provider: "unsplash",
          url: "https://images.unsplash.com/photo-1499384048662-8f714ec1420d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw2fHxwYXJhcGVudGV8ZW58MHx8fHwxNjgwNTcxMzIy&ixlib=rb-4.0.3&q=80&w=400",
        },
        sizing: { __param_type: "sizing", value: "large" },
        color: "white",
      },
      fieldsData: {
        title: {
          tag: "h1",
          text: "Envolez-vous dans les airs avec notre équipe de professionnels du parapente",
        },
        subtitle: {
          text: "Découvrez des vues à couper le souffle et vivez une expérience inoubliable en tandem ou en solo",
        },
      },
    },
    {
      id: "lg1lg5up",
      name: "header-section",
      params: {
        background: {
          __param_type: "background",
          type: "color",
          color: "--dark",
        },
        sizing: { __param_type: "sizing", value: "small" },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg1lgkso",
      name: "header-section",
      params: {
        background: {
          __param_type: "background",
          type: "image",
          color: "red",
          provider: "unsplash",
          url: "https://images.unsplash.com/photo-1578312055662-53316197d01e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwzfHxwYXJhcGVudGV8ZW58MHx8fHwxNjgwNTcxMzIy&ixlib=rb-4.0.3&q=80&w=400",
        },
        sizing: { __param_type: "sizing", value: "large" },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg1lhdio",
      name: "header-section",
      params: {
        background: {
          __param_type: "background",
          type: "color",
          color: "--dark",
        },
        sizing: { __param_type: "sizing", value: "large" },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg1lil56",
      name: "header-section",
      params: {
        background: {
          __param_type: "background",
          type: "image",
          color: "--dark",
          provider: "unsplash",
          url: "https://images.unsplash.com/photo-1594735514819-6bdb44c65772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw5fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
        },
        sizing: { __param_type: "sizing", value: "large" },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg1litaw",
      name: "header-section",
      params: {
        background: {
          __param_type: "background",
          type: "image",
          color: "--dark",
          provider: "unsplash",
          url: "https://images.unsplash.com/photo-1514539079130-25950c84af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw0fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
        },
        sizing: { __param_type: "sizing", value: "large" },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg1lj2x5",
      name: "header-section",
      params: {
        background: {
          __param_type: "background",
          type: "image",
          color: "--dark",
          provider: "unsplash",
          url: "https://images.unsplash.com/photo-1553434320-e9f5757140b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw3fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
        },
        sizing: { __param_type: "sizing", value: "large" },
        color: "white",
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
  ],
  layout: {},
};
