import { CSSProperties, FC } from "react";
import { classNameModule } from "@/utils/className/className";

import { TSectionData } from "@/makasi/core/section/Section.types";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Text } from "@/makasi/primitives/Text/Text";

import styles from "./HeaderSection.module.scss";
import { Background } from "@/makasi/primitives/Background/Background";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";
const className = classNameModule(styles);

interface THeaderSectionProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const HeaderSection: FC<THeaderSectionProps> = ({ data }) => {
  return (
    // SectionContainer ? SectionStylization ? May be a bad idea ? Less flexibility ?
    <Background data={data.params.background}>
      <div
        {...className(
          "HeaderSection"
          // `sizing-${data.params.sizing.value}`
        )}
        style={
          {
            "--color": getCSSProperty(data.params.textColor.color),
          } as CSSProperties
        }
      >
        <div {...className("container")}>
          <Heading field="title" />
          <div {...className("subtitle")}>
            <Text field="subtitle" />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default HeaderSection;

const getCSSProperty = (value: string) =>
  !value
    ? null
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
