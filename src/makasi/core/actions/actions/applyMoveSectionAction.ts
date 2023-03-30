import produce from "immer";

import { TPageData } from "../../page/Page.types";
import { TMoveSectionAction } from "../actions.types";

export const applyMoveSectionAction = (
  pageData: TPageData,
  action: TMoveSectionAction
): TPageData => {
  return produce(pageData, (draft) => {
    const currentSection = draft.sections[action.sectionIndex];
    const replacingSection = draft.sections[action.toIndex];

    if (!currentSection || !replacingSection) return draft;

    draft.sections[action.sectionIndex] = replacingSection;
    draft.sections[action.toIndex] = currentSection;

    return draft;
  });
};
