import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const imageSectionDefinition: TSectionDefinition = {
  id: "image-section",
  label: "Image",
  Component: dynamic(() => import("./ImageSection"), { ssr: true }),
  getDefaultFieldsData: () => ({
    text: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptas provident, ducimus officiis, soluta atque nisi asperiores laudantium neque quae dolores quisquam quibusdam possimus ad eius excepturi temporibus quos culpa.",
    },
  }),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
