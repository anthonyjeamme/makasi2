import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const danspratlingHeaderSectionDefinition: TSectionDefinition = {
  id: "danspratling/header-section",
  label: "Dan Spratling / En-tête",
  Component: dynamic(() => import("./HeaderSection"), { ssr: true }),
  getDefaultFieldsData: () => ({}),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
