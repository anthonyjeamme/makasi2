import { CSSProperties, FC } from "react";
import { classNameModule } from "@/utils/className/className";

import { TSectionData } from "@/makasi/core/section/Section.types";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Text } from "@/makasi/primitives/Text/Text";

import styles from "./HeaderSection.module.scss";
import { Background } from "@/makasi/primitives/Background/Background";
const className = classNameModule(styles);

interface THeaderSectionProps {
  data: TSectionData;
}

const HeaderSection: FC<THeaderSectionProps> = ({ data }) => {
  return (
    <Background data={data.params.background}>
      <div
        {...className("HeaderSection")}
        style={
          {
            // "--background": getCSSProperty(data?.params?.background),
            // "--color": getCSSProperty(data?.params?.color),
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
