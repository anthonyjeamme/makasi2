import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const danspratlingArgumentsSectionDefinition: TSectionDefinition = {
  id: "danspratling/arguments-section",
  label: "Dan Spratling / Arguments",
  Component: dynamic(() => import("./Arguments"), { ssr: true }),
  getDefaultFieldsData: () => ({
    linktext: {
      text: "Find out more about my services",
    },
  }),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
