import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Contact.module.scss";
import { Heading } from "@/makasi/primitives/Heading/Heading";
import { Text } from "@/makasi/primitives/Text/Text";

const className = classNameModule(styles);

interface TContactProps {
  //
}

const Contact: FC<TContactProps> = () => {
  return (
    <div {...className("Contact")}>
      <div {...className("container")}>
        <div {...className("block")}>
          <div {...className("content")}>
            <Heading field="title" defaultTag="h2" />
            <Text field="text" {...className("paragraph")} />

            <button>Let{`'`}s book a call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
