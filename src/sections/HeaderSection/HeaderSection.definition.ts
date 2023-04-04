import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const headerSectionDefinition: TSectionDefinition = {
  id: "header-section",
  label: "En-tête",
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
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
