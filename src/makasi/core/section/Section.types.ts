import { ComponentType, FC } from "react";
import { TSectionParamValue } from "../params/params.types";

export type TSectionData<TParams = Record<string, any>> = {
  id: string;
  name: string;
  fieldsData: Record<string, any>;
  params: TParams;
};

export type TSectionDefinition = {
  id: string;
  label: string;
  Component: ComponentType<any>;
  getDefaultFieldsData: () => Record<string, any>;
  params: Record<string, { type: string; defaultValue: TSectionParamValue }>;
};

export type TSectionLocation = {
  pageId: string;
  sectionId: string;
  sectionIndex: number;
};
