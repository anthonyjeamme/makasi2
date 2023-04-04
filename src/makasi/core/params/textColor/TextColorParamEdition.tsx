import { FC } from "react";

import { ThemeColorSelector } from "../common/ThemeColorSelector/ThemeColorSelector";
import { useTheme } from "../../contexts/ThemeContext/ThemeContext";
import { useSectionEdition } from "../../section/section.context";
import { TTextColorParamValue } from "./textColorParam.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./TextColorParamEdition.module.scss";
const className = classNameModule(styles);

interface TTextColorParamEditionProps {
  paramKey: string;
  value: TTextColorParamValue;
}

export const TextColorParamEdition: FC<TTextColorParamEditionProps> = ({
  paramKey,
  value,
}) => {
  const { updateParam } = useSectionEdition();
  const { getColors } = useTheme();

  return (
    <div {...className("TextColorParamEdition")}>
      <div {...className("label")}>Couleur du texte</div>

      <ThemeColorSelector
        value={value.color}
        onChange={(color) => {
          updateParam(paramKey, { color });
        }}
      />

      {/* <select
        onChange={(e) => {
          updateParam(paramKey, { color: e.target.value });
        }}
      >
        {getColors().map(({ key, value }) => (
          <option key={key} value={`--${key}`}>
            {value.title}
          </option>
        ))}
      </select> */}
    </div>
  );
};
