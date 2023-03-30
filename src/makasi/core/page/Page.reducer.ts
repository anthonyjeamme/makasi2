import { TUpdateAction } from "../actions/actions.types";
import { applyCreateSectionAction } from "../actions/actions/applyCreateSectionAction";
import { applyMoveSectionAction } from "../actions/actions/applyMoveSectionAction";
import { applyRemoveSectionAction } from "../actions/actions/applyRemoveSectionAction";
import { applyUpdateFieldAction } from "../actions/actions/applyUpdateFieldAction";
import { TPageData } from "./Page.types";

export const pageReducer = (
  state: TPageData,
  action: TUpdateAction
): TPageData => {
  switch (action.type) {
    case "update-field":
      return applyUpdateFieldAction(state, action);

    case "move-section":
      return applyMoveSectionAction(state, action);

    case "remove-section":
      return applyRemoveSectionAction(state, action);

    case "create-section":
      return applyCreateSectionAction(state, action);

    default:
      return state;
  }
  //
};
