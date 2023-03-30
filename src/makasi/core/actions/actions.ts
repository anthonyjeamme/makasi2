import { TPageData } from "../PageEdition/Page.types";
import { TUpdateFieldAction, TUpdateAction } from "./actions.types";

export const backAction = (pageData: TPageData, action: TUpdateAction) => {
  switch (action.type) {
    case "update-field":
      return backUpdateFieldAction(pageData, action);

    case "remove-section":
      return pageData; // TODO

    case "move-section":
      return pageData; // TODO

    case "create-section":
      return pageData; // TODO
  }
};

const backUpdateFieldAction = (
  pageData: TPageData,
  action: TUpdateFieldAction
) => ({
  ...pageData,
  sections: pageData.sections.map((section) =>
    section.id === action.sectionId
      ? {
          ...section,
          fieldsData: {
            ...section.fieldsData,
            [action.fieldName]: {
              ...section.fieldsData[action.fieldName],
              ...action.oldValue,
            },
          },
        }
      : section
  ),
});
