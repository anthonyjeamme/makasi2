import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Arguments.module.scss";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { MagnifyingGlass } from "phosphor-react";
import { Text } from "@/makasi/primitives/Text/Text";

const className = classNameModule(styles);

interface TArgumentsProps {
  //
}

const Arguments: FC<TArgumentsProps> = () => {
  return (
    <div {...className("Arguments")}>
      <div {...className("container")}>
        <Heading field="title" defaultTag="h2" />

        <div {...className("arguments")}>
          <Argument />
          <Argument />
          <Argument />
          <Argument />
          <Argument />
          <Argument />
        </div>

        <div {...className("link")}>
          <Text field="linktext" />
        </div>
      </div>
    </div>
  );
};

export default Arguments;

const Argument = () => (
  <div {...className("Argument")}>
    <div>
      <div {...className("icon")}>
        <MagnifyingGlass />
      </div>
    </div>

    <div {...className("text")}>
      <h3>Website Review</h3>

      <p>
        I make sure your website is performing its best by thoroughly reviewing
        it before making any changes.
      </p>
    </div>
  </div>
);
