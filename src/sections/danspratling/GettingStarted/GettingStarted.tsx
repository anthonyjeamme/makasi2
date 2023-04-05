import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./GettingStarted.module.scss";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Text } from "@/makasi/primitives/Text/Text";

const className = classNameModule(styles);

interface TGettingStartedProps {
  //
}

const GettingStarted: FC<TGettingStartedProps> = () => {
  return (
    <div {...className("GettingStarted")}>
      <div {...className("container")}>
        <div>
          <Heading field="title" defaultTag="h2" />
          <Text field="paragraph" {...className("paragraph")} />

          <button>Level up your business</button>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
