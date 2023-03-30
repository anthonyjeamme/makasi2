import uniqid from "uniqid";

import { createContext, FC, ReactNode, useContext } from "react";
import {
  createCreateSectionAction,
  createMoveSectionAction,
  createRemoveSectionAction,
  createUpdateFieldAction,
} from "../actions/actions.utils";

import { usePage } from "../page/page.context";
import { TSectionData } from "./Section.types";

type TSectionContext = {
  data: TSectionData;
};

const sectionContext = createContext<TSectionContext>({
  data: {
    id: "",
    fieldsData: {},
    name: "",
    params: {},
  },
});

interface TSectionProviderProps {
  children: ReactNode;
  sectionId: string;
}

export const SectionProvider: FC<TSectionProviderProps> = ({
  children,
  sectionId,
}) => {
  const { getSectionData } = usePage();
  const sectionData = getSectionData(sectionId);

  if (!sectionData) return null;

  return (
    <sectionContext.Provider
      value={{
        data: sectionData,
      }}
    >
      {children}
    </sectionContext.Provider>
  );
};

export const useSection = () => useContext(sectionContext);

export const useSectionEdition = () => {
  const { data } = useContext(sectionContext);
  const { getPageId, pageData, pushAction, getDefinitions } = usePage();

  const getLocation = () => ({
    pageId: getPageId(),
    sectionId: data.id,
    sectionIndex: pageData.sections.findIndex(
      (section) => section.id === data.id
    ),
  });

  const remove = () => {
    pushAction?.(createRemoveSectionAction(getLocation()));
  };

  const moveUp = () => {
    const location = getLocation();
    if (location.sectionIndex === 0) return;
    pushAction?.(createMoveSectionAction(location, location.sectionIndex - 1));
  };

  const moveDown = () => {
    const location = getLocation();
    pushAction?.(createMoveSectionAction(location, location.sectionIndex + 1));
  };

  const addSectionBefore = () => {
    const location = getLocation();

    const [sectionDefinition] = getDefinitions();

    if (!sectionDefinition) return;

    const sectionData = {
      id: uniqid(),
      name: sectionDefinition.id,
      params: sectionDefinition.getDefaultParams(),
      fieldsData: sectionDefinition.getDefaultFieldsData(),
    };

    pushAction?.(
      createCreateSectionAction(
        sectionData,
        location.sectionIndex,
        location.pageId
      )
    );
  };

  const addSectionAfter = () => {
    const location = getLocation();

    const [sectionDefinition] = getDefinitions();

    if (!sectionDefinition) return;

    const sectionData = {
      id: uniqid(),
      name: sectionDefinition.id,
      params: sectionDefinition.getDefaultParams(),
      fieldsData: sectionDefinition.getDefaultFieldsData(),
    };

    pushAction?.(
      createCreateSectionAction(
        sectionData,
        location.sectionIndex + 1,
        location.pageId
      )
    );
  };

  return {
    getLocation,
    remove,
    moveUp,
    moveDown,
    addSectionBefore,
    addSectionAfter,
  };
};

/**
 *
 */
export function useSectionField<TData>(name: string): {
  data: TData;
  onChange: (data: Partial<TData>) => void;
} {
  const { data } = useContext(sectionContext);
  const { pushAction } = usePage();

  return {
    data: data.fieldsData[name],
    onChange: (value) => {
      const oldValue = Object.keys(value).reduce<Record<string, any>>(
        (acc, key) => {
          acc[key] = data.fieldsData[name][key];
          return acc;
        },
        {}
      );

      pushAction?.(
        createUpdateFieldAction("xx", data.id, name, value, oldValue)
      );
    },
  };
}
