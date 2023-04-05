import { createContext, FC, useContext } from "react";

import { TPageContext, TPageData } from "./Page.types";
import { withPageProvider } from "./page.context";
import { Section } from "../section/Section";
import { PageHead } from "./PageHead";
import { ThemeProvider } from "../contexts/ThemeContext/ThemeContext";
import { EditionContext } from "../contexts/EditionContext/EditionContext";

interface TPageProps {
  pageData: TPageData;
}

const pageContext = createContext<TPageContext>({
  pageData: {
    id: "",
    layout: {},
    metadata: {
      canonical: "",
      description: "",
      image: "",
      title: "",
      url: "",
    },
    sections: [],
  },
  getSectionData: () => null,
  getSectionComponent: () => () => null,
  getDefinitions: () => [],
  getPageId: () => "",
  getSectionDefinition: () => null,
  addSection: () => null,
});

export const usePageData = () => useContext(pageContext);

export const Page: FC<TPageProps> = ({ pageData }) => {
  return (
    <EditionContext>
      <ThemeProvider
        colors={{
          primary: {
            title: "Primaire",
            description: "",
            value: "#6d59a8",
          },
          secondary: {
            title: "Secondaire",
            description: "",
            value: "#23252F",
          },
          white: {
            title: "Blanc",
            description: "Blanc basique",
            value: "#ffffff",
          },
          accent: {
            title: "Accent",
            description: "",
            value: "#E15120",
          },
          highlight: {
            title: "Hightlight",
            description: "",
            value: "#ffd166",
          },
          neutral: {
            title: "Neutre",
            description: "",
            value: "#23252F",
          },
          neutralmuted: {
            title: "Neutre muté",
            description: "",
            value: "#1A1C23",
          },
          dark: {
            title: "Foncé",
            description: "Couleur du texte",
            value: "#172b49",
          },
          light: {
            title: "Clair",
            description: "Couleur de fond",
            value: "#f4f5fd",
          },
          error: {
            title: "Erreur",
            description: "Couleur pour les erreurs",
            value: "#e74c3c",
          },
        }}
      >
        <div id="portal-root" />
        <main
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        >
          <PageHead pageData={pageData} />
          {pageData.sections.map((section) => (
            <div key={section.id}>
              <Section key={section.id} sectionId={section.id} />
            </div>
          ))}
        </main>
      </ThemeProvider>
    </EditionContext>
  );
};

export default withPageProvider(Page);
