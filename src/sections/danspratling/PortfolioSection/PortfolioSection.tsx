import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./PortfolioSection.module.scss";
import { TSectionData } from "@/makasi/core/section/Section.types";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";
import { Background } from "@/makasi/primitives/Background/Background";

const className = classNameModule(styles);

interface TPortfolioSectionProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const PortfolioSection: FC<TPortfolioSectionProps> = ({ data }) => {
  return (
    <Background data={data.params.background}>
      <div {...className("PortfolioSection")}>
        <div {...className("container")}>
          <div {...className("computer")}>
            <img
              src="https://www.datocms-assets.com/38195/1606730039-macbook-frame.png?fm=webp"
              {...className("computer-image")}
            />

            <img
              src="https://www.datocms-assets.com/38195/1614939702-deploy-preview-377-bonsai-marketing-netlify-app-macbook-pro.png?dpr=0.75&fm=webp"
              {...className("preview")}
            />
          </div>

          <div {...className("mobile")}>
            <img
              src="https://www.datocms-assets.com/38195/1606730037-iphone-frame.png?fm=webp"
              {...className("mobile-image")}
            />

            <img
              src="https://www.datocms-assets.com/38195/1614939712-deploy-preview-377-bonsai-marketing-netlify-app-iphone-x-adjusted.png?fm=webp"
              {...className("preview")}
            />
          </div>
        </div>
      </div>
    </Background>
  );
};

export default PortfolioSection;
