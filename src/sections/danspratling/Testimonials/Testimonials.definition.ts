import { backgroundParamDefinition } from "@/makasi/core/params/background/BackgroundParam";
import { textColorParamDefinition } from "@/makasi/core/params/textColor/textColorParam";
import { TSectionDefinition } from "@/makasi/core/section/Section.types";
import dynamic from "next/dynamic";

export const danspratlingTestimonialsSectionDefinition: TSectionDefinition = {
  id: "danspratling/testimonials-section",
  label: "Dan Spratling / Témoignages",
  Component: dynamic(() => import("./Testimonials"), { ssr: true }),
  getDefaultFieldsData: () => ({}),
  params: {
    background: backgroundParamDefinition(),
    textColor: textColorParamDefinition(),
  },
};
