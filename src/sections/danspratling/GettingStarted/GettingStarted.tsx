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
          <img
            src="https://www.datocms-assets.com/38195/1606582323-dengro-preview-grid.png?fm=webp&h=550&w=510"
            {...className("illustration")}
          />

          <div {...className("text")}>
            <Heading field="title" defaultTag="h2" />
            <Text field="paragraph" {...className("paragraph")} />

            <button>Level up your business</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
