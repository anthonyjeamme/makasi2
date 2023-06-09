import { TSectionLocation } from "../section/Section.types";
import {
  TRemoveSectionAction,
  TMoveSectionAction,
  TUpdateFieldAction,
  TCreateSectionAction,
  TUpdateSectionParamAction,
} from "./actions.types";

/**
 *
 */
export const createUpdateFieldAction = (
  pageId: string,
  sectionId: string,
  fieldName: string,
  value: any,
  oldValue: any
): TUpdateFieldAction => ({
  type: "update-field",
  dt: Date.now(),
  pageId,
  sectionId,
  fieldName,
  value,
  oldValue,
});

/**
 *
 */
export const createRemoveSectionAction = (
  location: TSectionLocation
): TRemoveSectionAction => ({
  type: "remove-section",
  dt: Date.now(),
  ...location,
});

/**
 *
 */
export const createMoveSectionAction = (
  location: TSectionLocation,
  toIndex: number
): TMoveSectionAction => ({
  type: "move-section",
  dt: Date.now(),
  toIndex,
  ...location,
});

/**
 *
 */
export const createCreateSectionAction = (
  sectionData: any,
  index: number,
  pageId: string
): TCreateSectionAction => ({
  type: "create-section",
  dt: Date.now(),
  index,
  pageId,
  sectionData,
});

/**
 *
 */
export const createUpdateSectionParamAction = (
  pageId: string,
  sectionId: string,
  paramKey: string,
  paramValue: any,
  oldValue: any
): TUpdateSectionParamAction => ({
  type: "update-section-param",
  dt: Date.now(),
  pageId,
  sectionId,
  paramKey,
  paramValue,
  oldValue,
});
