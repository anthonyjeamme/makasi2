import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const danspratlingTrustSectionDefinition: TSectionDefinition = {
  id: "danspratling/trust-section",
  label: "Dan Spratling / Confiance",
  Component: dynamic(() => import("./Trust"), { ssr: true }),
  getDefaultFieldsData: () => ({}),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
