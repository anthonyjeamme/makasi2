import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./ParagraphSection.module.scss";
import { Text } from "@/makasi/primitives/Text/Text";

const className = classNameModule(styles);

interface TParagraphSectionProps {
  //
}

const ParagraphSection: FC<TParagraphSectionProps> = () => {
  return (
    <div {...className("ParagraphSection")}>
      <div {...className("container")}>
        <Text field="text" />
      </div>
    </div>
  );
};

export default ParagraphSection;
