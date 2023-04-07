import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./HeaderSection.module.scss";
import { Text } from "@/makasi/primitives/Text/Text";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Button } from "@/makasi/primitives/Button/Button";
import { TSectionData } from "@/makasi/core/section/Section.types";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";
import { Background } from "@/makasi/primitives/Background/Background";
import { getCSSProperty } from "@/makasi/core/utils/getCSSColor";

const className = classNameModule(styles);

interface THeaderSectionProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const HeaderSection: FC<THeaderSectionProps> = ({ data }) => {
  return (
    <Background data={data.params.background}>
      <div
        {...className("HeaderSection")}
        style={{
          color: getCSSProperty(data.params.textColor.color),
        }}
      >
        <div {...className("container")}>
          <Text field="overtitle" {...className("overtitle")} />
          <Heading field="title" />

          <Button field="button" />
        </div>
      </div>
    </Background>
  );
};

export default HeaderSection;
