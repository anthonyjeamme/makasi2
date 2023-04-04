export const backgroundParamType = "__background";

export type TBackgroundParamDefinition = {
  type: "__background";
  defaultValue: TBackgroundParamValue;
};

export type TBackgroundParamValue =
  | TImageBackgroundValue
  | TColorBackgroundValue;

export type TImageBackgroundValue = {
  type: "image";
  url: string;
};

export type TColorBackgroundValue = {
  type: "color";
  color: string;
};
