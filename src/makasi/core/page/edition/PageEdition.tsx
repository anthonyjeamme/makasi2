import { createContext, FC } from "react";
import { TPageData } from "../Page.types";

interface TPageEditionProps {
  pageData: TPageData;
}

interface TPageEditionContext {
  pageData: TPageData;
}

const pageEditionContext = createContext<TPageEditionContext>({
  // @ts-ignore
  pageData: null,
});

const PageEdition: FC<TPageEditionProps> = ({ pageData }) => {
  return (
    <pageEditionContext.Provider value={{ pageData }}>
      <main>PageEdition</main>
    </pageEditionContext.Provider>
  );
};

export default PageEdition;
