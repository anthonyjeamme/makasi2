import { createContext, FC, useContext } from "react";
import dynamic from "next/dynamic";

import { TPageData } from "../PageEdition/Page.types";
import { TSectionData, TSectionDefinition } from "../section/Section.types";
import { useWebsite } from "../website/website.context";
import { PageHead } from "../PageEdition/PageHead";

// const PageEdition = dynamic(() => import("../PageEdition/Page"), {
//   ssr: false,
// });

interface TPageProps {
  pageData: TPageData;
  sectionsDefinitions: TSectionDefinition[];
}

const Page: FC<TPageProps> = ({ pageData, sectionsDefinitions }) => {
  // const { editionMode } = useWebsite();

  // if (editionMode) {
  //   return (
  //     <PageEdition
  //       pageData={pageData}
  //       sectionsDefinitions={sectionsDefinitions}
  //     />
  //   );
  // }

  return (
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
