import {
  backgroundParamType,
  TBackgroundParamDefinition,
  TBackgroundParamValue,
} from "./BackgroundParam.types";

export const backgroundParamDefinition = (
  defaultValue: TBackgroundParamValue = {
    type: "color",
    color: "--dark",
  }
): TBackgroundParamDefinition => ({
  type: backgroundParamType,
  defaultValue,
});
