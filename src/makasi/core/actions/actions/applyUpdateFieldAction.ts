import { TPageData } from "../../page/Page.types";
import { TUpdateFieldAction } from "../actions.types";

export const applyUpdateFieldAction = (
  pageData: TPageData,
  action: TUpdateFieldAction
): TPageData => {
  return {
    ...pageData,
    sections: pageData.sections.map((section) =>
      section.id === action.sectionId
        ? {
            ...section,
            fieldsData: {
              ...section.fieldsData,
              [action.fieldName]: {
                ...section.fieldsData[action.fieldName],
                ...action.value,
              },
            },
          }
        : section
    ),
  };
};
