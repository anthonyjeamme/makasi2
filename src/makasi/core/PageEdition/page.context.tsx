import {
  FC,
  useRef,
  Reducer,
  ReactNode,
  useEffect,
  useContext,
  useReducer,
  createContext,
  ComponentType,
} from "react";

import { TUpdateAction } from "../actions/actions.types";
import { useWebsite } from "../website/website.context";
import { TPageContext, TPageData } from "./Page.types";
import { pageReducer } from "./Page.reducer";

import { TSectionDefinition } from "../section/Section.types";
import { SectionPicker } from "./SectionPicker/SectionPicker";
import { useModal } from "@/makasi/utils/Modal/Modal";

export const withPageProvider =
  (Component: ComponentType<any>) =>
  // eslint-disable-next-line react/display-name
  ({
    pageData,
    sectionsDefinitions,
  }: {
    pageData: TPageData;
    sectionsDefinitions: TSectionDefinition[];
  }) => {
    return (
      <PageProvider
        pageData={pageData}
        sectionsDefinitions={sectionsDefinitions}
      >
        {(pageData) => <Component pageData={pageData} />}
      </PageProvider>
    );
  };
const pageContext = createContext<TPageContext>({
  // @ts-ignore
  pageData: {},
  getSectionData: () => null,
  getSectionComponent: () => () => null,
  getDefinitions: () => [],
});

interface TPageProviderProps {
  children: (pageData: TPageData) => ReactNode;
  sectionsDefinitions: TSectionDefinition[];
  pageData: TPageData;
}

export const PageProvider: FC<TPageProviderProps> = ({
  children,
  pageData: inputPageData,
  sectionsDefinitions,
}) => {
  const [pageData, dispatch] = useReducer<Reducer<TPageData, TUpdateAction>>(
    pageReducer,
    inputPageData
  );

  const sectionPickerModal = useModal<{ index: number }>();
  const actionsRef = useRef<TUpdateAction[]>([]);
  const nextActionsRef = useRef<TUpdateAction[]>([]);

  function sendAction(actions: TUpdateAction[]) {
    fetch("/api/sendActions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actions,
      }),
    });
  }

  useEffect(() => {
    // if (editionMode) {
    //   const handleKeyDown = (e: KeyboardEvent) => {
    //     if (e.key === "z" && e.ctrlKey) {
    //       e.preventDefault();
    //       const lastAction = actionsRef.current.pop();
    //       if (!lastAction) return;
    //       nextActionsRef.current.push(lastAction);
    //       sendAction([lastAction]);
    //       switch (lastAction.type) {
    //         case "update-field":
    //           setPageData((pageData) => backAction(pageData, lastAction));
    //           break;
    //       }
    //     }
    //     if (e.key === "y" && e.ctrlKey) {
    //       e.preventDefault();
    //       const nextAction = nextActionsRef.current.pop();
    //       if (!nextAction) return;
    //       actionsRef.current.push(nextAction);
    //       sendAction([nextAction]);
    //       setPageData((pageData) => applyAction(pageData, nextAction));
    //     }
    //   };
    //   window.addEventListener("keydown", handleKeyDown);
    //   return () => {
    //     window.removeEventListener("keydown", handleKeyDown);
    //   };
    // }
  }, []);

  return (
    <pageContext.Provider
      value={{
        getPageId: () => pageData.id,
        pageData,
        pushAction: (action) => {
          nextActionsRef.current = [];
          actionsRef.current.push(action);

          dispatch(action);
          sendAction([action]);
        },
        getSectionData: (sectionId) => {
          return pageData.sections.find((section) => section.id === sectionId);
        },
        getSectionComponent: (sectionId) => {
          return (
            sectionsDefinitions.find((section) => section.id === sectionId)
              ?.Component || null
          );
        },
        getDefinitions: () => sectionsDefinitions,
        getSectionDefinition: (sectionType: string) =>
          sectionsDefinitions.find(
            (sectionDefinition) => sectionDefinition.id === sectionType
          ) || null,

        addSection: (index: number) => {
          sectionPickerModal.open({ index });
        },
      }}
    >
      <SectionPicker {...sectionPickerModal} />
      {children(pageData)}
    </pageContext.Provider>
  );
};

export const usePage = () => useContext(pageContext);
