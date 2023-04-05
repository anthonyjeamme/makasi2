import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const danspratlingGettingStartedSectionDefinition: TSectionDefinition = {
  id: "danspratling/getting-started-section",
  label: "Dan Spratling / Démarrer",
  Component: dynamic(() => import("./GettingStarted"), { ssr: true }),
  getDefaultFieldsData: () => ({}),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
