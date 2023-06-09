export type TUpdateAction =
  | TUpdateFieldAction
  | TRemoveSectionAction
  | TMoveSectionAction
  | TCreateSectionAction
  | TUpdateSectionParamAction;

export type TUpdateFieldAction = {
  type: "update-field";
  dt: number;
  pageId: string;
  sectionId: string;
  fieldName: string;
  value: any;
  oldValue: any;
};

export type TRemoveSectionAction = {
  type: "remove-section";
  dt: number;
  pageId: string;
  sectionId: string;
};

export type TMoveSectionAction = {
  type: "move-section";
  dt: number;
  pageId: string;
  sectionId: string;
  sectionIndex: number;
  toIndex: number;
};

export type TCreateSectionAction = {
  type: "create-section";
  dt: number;
  pageId: string;
  sectionData: any;
  index: number;
};

export type TUpdateSectionParamAction = {
  type: "update-section-param";
  dt: number;
  pageId: string;
  sectionId: string;
  paramKey: string;
  paramValue: any;
  oldValue: any;
};
