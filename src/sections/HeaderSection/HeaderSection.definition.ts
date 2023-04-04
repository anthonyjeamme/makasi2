import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const headerSectionDefinition: TSectionDefinition = {
  id: "header-section",
  Component: dynamic(() => import("./HeaderSection"), { ssr: true }),
  getDefaultFieldsData: () => ({
    title: {
      tag: "h1",
      text: "Title",
    },
    subtitle: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
    },
  }),
  getDefaultParams: () => ({
    background: {
      __param_type: "background",
      type: "color",
      color: "--dark",
    },
    sizing: {
      __param_type: "sizing",
      value: "medium",
    },
    color: "white",
  }),
};
