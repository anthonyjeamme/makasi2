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
        white: {
          title: "Blanc",
          description: "",
          value: "#ffffff",
        },
        dark: {
          title: "Foncé",
          description: "",
          value: "#172b49",
        },
        light: {
          title: "Clair",
          description: "",
          value: "#f4f5fd",
        },
        error: {
          title: "Erreur",
          description: "",
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
