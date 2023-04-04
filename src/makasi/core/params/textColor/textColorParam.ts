import {
  TTextColorParamDefinition,
  TTextColorParamValue,
} from "./textColorParam.types";

export const textColorParamDefinition = (
  defaultValue: TTextColorParamValue = { color: "--light" }
): TTextColorParamDefinition => ({
  type: "__text_color",
  defaultValue,
});
