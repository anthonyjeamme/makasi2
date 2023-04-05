import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./PortfolioSection.module.scss";

const className = classNameModule(styles);

interface TPortfolioSectionProps {
  //
}

const PortfolioSection: FC<TPortfolioSectionProps> = () => {
  return (
    <div {...className("PortfolioSection")}>
      <div {...className("container")}>
        <div {...className("computer")}>
          <img
            src="https://www.datocms-assets.com/38195/1606730039-macbook-frame.png?fm=webp"
            {...className("computer-image")}
          />

          <img
            src="https://www.datocms-assets.com/38195/1638789056-www-pigeonloans-io-macbook-pro-2.png?dpr=0.75&fm=webp"
            {...className("preview")}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
