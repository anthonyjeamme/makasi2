import { CSSProperties, FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./IntroSection.module.scss";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Background } from "@/makasi/primitives/Background/Background";
import { TSectionData } from "@/makasi/core/section/Section.types";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";
import { Text } from "@/makasi/primitives/Text/Text";
import {
  Briefcase,
  Campfire,
  Cat,
  Coffee,
  CookingPot,
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
  LinkedinLogo,
  Mountains,
  Rocket,
  TwitterLogo,
} from "phosphor-react";

const className = classNameModule(styles);

interface TIntroSectionProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const IntroSection: FC<TIntroSectionProps> = ({ data }) => {
  return (
    <Background data={data.params.background}>
      <div
        {...className("IntroSection")}
        style={
          {
            "--color": getCSSProperty(data.params.textColor.color),
          } as CSSProperties
        }
      >
        <div {...className("over-title")}>
          <Text field="overtitle" />
        </div>

        <Heading field="title" />
        <div {...className("subtitle")}>
          <Text field="subtitle" />
        </div>

        <div {...className("mail")}>
          <div>
            <Text field="mailmessage" />
          </div>
          <input placeholder="Entrez votre mail" />
          <div>
            <button>S{"'"}INSCRIRE</button>
          </div>
        </div>

        <div {...className("icons")}>
          <div>
            <Rocket weight="duotone" />
          </div>
          <div>
            <Briefcase weight="duotone" />
          </div>
          <div>
            <Campfire weight="duotone" />
          </div>
          <div>
            <Coffee weight="duotone" />
          </div>
          <div>
            <Mountains weight="duotone" />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default IntroSection;

const getCSSProperty = (value: string) =>
  !value
    ? null
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
