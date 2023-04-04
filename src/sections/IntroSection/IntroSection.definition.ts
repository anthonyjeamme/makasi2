import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const introSectionDefinition: TSectionDefinition = {
  id: "intro-section",
  label: "Intro",
  Component: dynamic(() => import("./IntroSection"), { ssr: true }),
  getDefaultFieldsData: () => ({
    overtitle: {
      text: "STAY TUNED",
    },
    title: {
      text: "Hello world",
    },
    mailmessage: {
      text: "Hello world",
    },
    subtitle: {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores porro ad quibusdam totam voluptatum quia",
    },
  }),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
