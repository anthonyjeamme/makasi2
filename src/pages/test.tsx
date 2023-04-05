import { GetServerSideProps } from "next";
import Page from "@/makasi/core/Pagee/Page";
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
      id: "lg2wkajk",
      name: "intro-section",
      params: {
        background: {
          type: "image",
          color: "--dark",
          url: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwxfHxkYXJrfGVufDB8fHx8MTY4MDY1MTY0NQ&ixlib=rb-4.0.3&q=80&w=400",
        },
        textColor: { color: "--light" },
      },
      fieldsData: {
        overtitle: { text: "ARRIVE BIENTÔT" },
        title: { text: "L'agence Web Nouvelle Génération" },
        mailmessage: { text: "Inscrivez-vous à la béta" },
        subtitle: {
          text: "Révolutionnez votre présence en ligne avec l'agence web de demain.",
        },
      },
    },
    {
      id: "section_id",
      name: "header-section",
      params: {
        background: {
          type: "color",
          url: "https://images.unsplash.com/photo-1571504211935-1c936b327411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwyfHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
          color: "--light",
        },
        textColor: { color: "--dark" },
      },
      fieldsData: {
        title: { tag: "h1", text: "A" },
        subtitle: {
          text: "Découvrez une expérience immersive au cœur de la nature sauvage, loin du bruit de la ville.",
        },
      },
    },
    {
      id: "lg2otgj9",
      name: "header-section",
      params: {
        background: {
          type: "image",
          color: "--dark",
          url: "https://images.unsplash.com/photo-1514539079130-25950c84af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw0fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
        },
        textColor: { color: "--white" },
      },
      fieldsData: {
        title: { tag: "h1", text: "Titre" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg2m6iko",
      name: "header-section",
      params: {
        background: { type: "color", color: "--error" },
        textColor: { color: "--light" },
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg2pahui",
      name: "header-section",
      params: {
        background: { type: "color", color: "--light" },
        textColor: { color: "--dark" },
      },
      fieldsData: {
        title: { tag: "h1", text: "Title" },
        subtitle: {
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
        },
      },
    },
    {
      id: "lg2jfkq9",
      name: "header-section",
      params: {
        background: {
          type: "image",
          color: "--dark",
          url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwxfHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
        },
        textColor: { color: "--light" },
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
