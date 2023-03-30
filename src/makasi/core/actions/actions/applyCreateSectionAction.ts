import { TPageData } from "../../page/Page.types";
import { TCreateSectionAction } from "../actions.types";

export const applyCreateSectionAction = (
  pageData: TPageData,
  action: TCreateSectionAction
): TPageData => ({
  ...pageData,
  sections: [
    ...pageData.sections.slice(0, action.index),
    action.sectionData,
    ...pageData.sections.slice(action.index),
  ],
});
