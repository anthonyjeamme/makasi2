import { createContext, FC, useContext } from "react";

import { TPageData } from "../PageEdition/Page.types";
import { TSectionData, TSectionDefinition } from "../section/Section.types";
import { PageHead } from "../PageEdition/PageHead";
import { ThemeProvider } from "../contexts/ThemeContext/ThemeContext";

interface TPageProps {
  pageData: TPageData;
  sectionsDefinitions: TSectionDefinition[];
}

const Page: FC<TPageProps> = ({ pageData, sectionsDefinitions }) => {
  return (
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
      <main>
        <PageHead pageData={pageData} />
        {pageData.sections.map((section) => (
          <Section
            key={section.id}
            data={section}
            sectionsDefinitions={sectionsDefinitions}
          />
        ))}
      </main>
    </ThemeProvider>
  );
};

export default Page;

const sectionContext = createContext({
  data: null,
});

export function useField<TData>(fieldName: string): {
  data: TData;
} {
  const { data } = useContext(sectionContext);

  return {
    // @ts-ignore
    data: data.fieldsData[fieldName],
  };
}

interface TSectionProps {
  data: TSectionData;
  sectionsDefinitions: TSectionDefinition[];
}

const Section: FC<TSectionProps> = ({ data, sectionsDefinitions }) => {
  const definition = sectionsDefinitions.find(
    (definition) => definition.id === data.name
  );

  if (!definition) return null;

  const { Component } = definition;

  return (
    // @ts-ignore
    <sectionContext.Provider value={{ data }}>
      <Component data={data} />
    </sectionContext.Provider>
  );
};
