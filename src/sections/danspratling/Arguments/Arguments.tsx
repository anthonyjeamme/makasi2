import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Arguments.module.scss";
import { Heading } from "@/makasi/primitives/Heading/Heading";

const className = classNameModule(styles);

interface TArgumentsProps {
  //
}

const Arguments: FC<TArgumentsProps> = () => {
  return (
    <div {...className("Arguments")}>
      <div {...className("container")}>
        <Heading field="title" defaultTag="h2" />
        ARguments
      </div>
    </div>
  );
};

export default Arguments;
