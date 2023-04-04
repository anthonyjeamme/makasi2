import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const paragraphSectionDefinition: TSectionDefinition = {
  id: "paragraph-section",
  label: "Paragraphe",
  Component: dynamic(() => import("./ParagraphSection"), { ssr: true }),
  getDefaultFieldsData: () => ({
    text: {
      text: "Titre",
    },
  }),
  params: {},
};
