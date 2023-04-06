import { createContext, FC, ReactNode, useContext } from "react";
import {
  createMoveSectionAction,
  createRemoveSectionAction,
  createUpdateFieldAction,
  createUpdateSectionParamAction,
} from "../actions/actions.utils";

import { usePage } from "../PageEdition/page.context";
import { TSectionData, TSectionDefinition } from "./Section.types";
import { TSectionParamValue } from "../params/params.types";

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
  const { getPageId, pageData, pushAction, getSectionDefinition, addSection } =
    usePage();

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

    addSection(location.sectionIndex);
  };

  const getNewSectionDefaultParams = (
    sectionDefinition: TSectionDefinition
  ) => {
    return Object.entries(sectionDefinition.params).reduce<
      Record<string, TSectionParamValue>
    >((acc, [paramKey, paramDefinition]) => {
      acc[paramKey] = paramDefinition.defaultValue;
      return acc;
    }, {});
  };

  const addSectionAfter = () => {
    const location = getLocation();

    addSection(location.sectionIndex + 1);
  };

  const updateParam = (paramKey: string, value: any) => {
    const location = getLocation();

    pushAction?.(
      createUpdateSectionParamAction(
        location.pageId,
        location.sectionId,
        paramKey,
        value,
        data.params[paramKey]
      )
    );
  };

  const getDefinition = () => {
    return getSectionDefinition(data.name);
  };

  return {
    data,
    getLocation,
    remove,
    moveUp,
    moveDown,
    addSectionBefore,
    addSectionAfter,
    updateParam,
    getDefinition,
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
    data: data.fieldsData?.[name] || {},
    onChange: (value) => {
      const oldValue = Object.keys(value).reduce<Record<string, any>>(
        (acc, key) => {
          acc[key] = data.fieldsData[name]?.[key] || {};
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
