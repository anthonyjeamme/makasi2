export const textColorParamType = "__text_color";

export type TTextColorParamDefinition = {
  type: "__text_color";
  defaultValue: TTextColorParamValue;
};

export type TTextColorParamValue = {
  color: string;
};
