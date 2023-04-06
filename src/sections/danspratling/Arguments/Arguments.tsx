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
          <Argument n={0} />
          <Argument n={1} />
          <Argument n={2} />
          <Argument n={3} />
          <Argument n={4} />
          <Argument n={5} />
        </div>

        <div {...className("link")}>
          <Text field="linktext" />
        </div>
      </div>
    </div>
  );
};

export default Arguments;

const Argument = ({ n }: { n: number }) => (
  <div {...className("Argument")}>
    <div>
      <div {...className("icon")}>
        <MagnifyingGlass />
      </div>
    </div>

    <div {...className("text")}>
      <Heading field={`arg-title-${n}`} defaultTag="h3" />

      <Text field={`arg-text-${n}`} {...className("text-paragraph")} />
    </div>
  </div>
);
