import { ComponentType, FC } from "react";

export type TSectionData = {
  id: string;
  name: string;
  fieldsData: Record<string, any>;
  params: Record<string, any>;
};

export type TSectionDefinition = {
  id: string;
  Component: ComponentType<any>;
  getDefaultFieldsData: () => Record<string, any>;
  getDefaultParams: () => Record<string, any>;
};

export type TSectionLocation = {
  pageId: string;
  sectionId: string;
  sectionIndex: number;
};
