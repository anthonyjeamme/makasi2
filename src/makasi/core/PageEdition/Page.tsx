import { createContext, FC, useContext } from "react";

import { useWebsite } from "../website/website.context";
import { TPageContext, TPageData } from "./Page.types";
import { withPageProvider } from "./page.context";
import { Section } from "../section/Section";
import { PageHead } from "./PageHead";

interface TPageProps {
  pageData: TPageData;
}

const pageContext = createContext<TPageContext>({
  // @ts-ignore
  pageData: null,
  getSectionData: () => null,
  getSectionComponent: () => () => null,
  getDefinitions: () => [],
});

export const usePageData = () => useContext(pageContext);

export const Page: FC<TPageProps> = ({ pageData }) => {
  const { editionMode } = useWebsite();

  return (
    <main
      onContextMenu={(e) => {
        if (editionMode) e.preventDefault();
      }}
    >
      <PageHead pageData={pageData} />
      {pageData.sections.map((section) => (
        <div key={section.id}>
          <Section key={section.id} sectionId={section.id} />
        </div>
      ))}
    </main>
  );
};

export default withPageProvider(Page);
