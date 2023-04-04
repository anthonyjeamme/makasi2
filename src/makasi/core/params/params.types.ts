import {
  TBackgroundParamValue,
  TBackgroundParamDefinition,
} from "./background/BackgroundParam.types";

import {
  TTextColorParamValue,
  TTextColorParamDefinition,
} from "./textColor/textColorParam.types";

export type TSectionParamDefinition =
  | TBackgroundParamDefinition
  | TTextColorParamDefinition;

export type TSectionParamValue = TBackgroundParamValue | TTextColorParamValue;
