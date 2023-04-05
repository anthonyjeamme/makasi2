import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const danspratlingContactSectionDefinition: TSectionDefinition = {
  id: "danspratling/contact-section",
  label: "Dan Spratling / Contact",
  Component: dynamic(() => import("./Contact"), { ssr: true }),
  getDefaultFieldsData: () => ({}),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
