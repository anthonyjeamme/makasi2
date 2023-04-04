import { ComponentType } from "react";

import { TSectionData, TSectionDefinition } from "../section/Section.types";

export type TPageContext = {
  pageData: TPageData;
  getPageId: () => string;
  getSectionData: (sectionId: string) => any;
  getSectionComponent: (sectionId: string) => ComponentType<any> | null;
  getDefinitions: () => TSectionDefinition[];
  getSectionDefinition: (sectionType: string) => TSectionDefinition | null;
  pushAction?: (action: any) => void;
  addSection: (index: number) => void;
};

export type TPageData = {
  id: string;
  metadata: TPageDataMetadata;
  sections: TSectionData[];
  layout: TPageDataLayout;
};

export type TPageDataMetadata = {
  title: string;
  description: string;
  image: string;
  canonical: string;
  url: string;
};

export type TPageDataLayout = {
  // What here ? Topbar ? Footer ?
};
