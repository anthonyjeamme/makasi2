import { TPageData } from "../../PageEdition/Page.types";
import { TUpdateSectionParamAction } from "../actions.types";

export const applyUpdateSectionParamAction = (
  pageData: TPageData,
  action: TUpdateSectionParamAction
): TPageData => ({
  ...pageData,
  sections: pageData.sections.map((section) =>
    section.id === action.sectionId
      ? {
          ...section,
          params: {
            ...section.params,
            [action.paramKey]: {
              ...section.params[action.paramKey],
              ...action.paramValue,
            },
          },
        }
      : section
  ),
});
