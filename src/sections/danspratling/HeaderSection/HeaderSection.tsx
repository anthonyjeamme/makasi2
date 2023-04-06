import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./HeaderSection.module.scss";
import { Text } from "@/makasi/primitives/Text/Text";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Button } from "@/makasi/primitives/Button/Button";

const className = classNameModule(styles);

interface THeaderSectionProps {
  //
}

const HeaderSection: FC<THeaderSectionProps> = () => {
  return (
    <div {...className("HeaderSection")}>
      <div {...className("container")}>
        <Text field="overtitle" {...className("overtitle")} />
        <Heading field="title" />

        <Button field="button" />
      </div>
    </div>
  );
};

export default HeaderSection;
