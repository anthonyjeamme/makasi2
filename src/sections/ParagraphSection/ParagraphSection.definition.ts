import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const paragraphSectionDefinition: TSectionDefinition = {
  id: "paragraph-section",
  Component: dynamic(() => import("./ParagraphSection"), { ssr: true }),
  getDefaultFieldsData: () => ({
    text: {
      text: "Titre",
    },
  }),
  getDefaultParams: () => ({
    background:
      "https://images.unsplash.com/photo-1485847791529-09ed2263da0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    color: "--dark",
  }),
};
