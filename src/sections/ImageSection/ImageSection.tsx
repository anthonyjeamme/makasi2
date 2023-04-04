import { CSSProperties, FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./ImageSection.module.scss";
import { Text } from "@/makasi/primitives/Text/Text";
import { Background } from "@/makasi/primitives/Background/Background";
import { TSectionData } from "@/makasi/core/section/Section.types";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";
import { Image } from "@/makasi/primitives/Image/Image";

const className = classNameModule(styles);

interface TImageSectionProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const ImageSection: FC<TImageSectionProps> = ({ data }) => {
  return (
    <Background data={data.params.background}>
      <div
        {...className("ImageSection")}
        style={
          {
            "--color": getCSSProperty(data.params.textColor.color),
          } as CSSProperties
        }
      >
        <div {...className("container")}>
          <div>
            <Text field="text" />
          </div>

          <div>
            <Image
            //   alt=""
            //   width={400}
            //   height={400}
            //   style={{
            //     objectFit: "cover",
            //   }}
            //   src={
            //     "https://images.unsplash.com/photo-1571504211935-1c936b327411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwyfHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400"
            //   }
            />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ImageSection;

const getCSSProperty = (value: string) =>
  !value
    ? null
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
