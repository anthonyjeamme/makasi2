import { TPageData } from "../../PageEdition/Page.types";
import { TRemoveSectionAction } from "../actions.types";

export const applyRemoveSectionAction = (
  pageData: TPageData,
  action: TRemoveSectionAction
): TPageData => ({
  ...pageData,
  sections: pageData.sections.filter(
    (section) => section.id !== action.sectionId
  ),
});
