import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Trust.module.scss";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { TSectionData } from "@/makasi/core/section/Section.types";
import { TBackgroundParamValue } from "@/makasi/core/params/background/BackgroundParam.types";
import { TTextColorParamValue } from "@/makasi/core/params/textColor/textColorParam.types";

const className = classNameModule(styles);

interface TTrustProps {
  data: TSectionData<{
    background: TBackgroundParamValue;
    textColor: TTextColorParamValue;
  }>;
}

const Trust: FC<TTrustProps> = () => {
  return (
    <div {...className("Trust")}>
      <div {...className("container")}>
        <Heading field="title" defaultTag="h2" />

        <div {...className("logos")}>
          <div>
            <img src="https://www.datocms-assets.com/38195/1606691068-pigeon.png?fit=clip&h=60&sat=-100&w=180" />
          </div>

          <div>
            <img src="https://www.datocms-assets.com/38195/1606691118-dengro.png?fit=clip&h=60&sat=-100&w=180" />
          </div>

          <div>
            <img src="https://www.datocms-assets.com/38195/1606691159-portman.png?fit=clip&h=60&sat=-100&w=180" />
          </div>

          <div>
            <img src="https://www.datocms-assets.com/38195/1606691186-st-austell.png?fit=clip&h=60&sat=-100&w=180" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;
