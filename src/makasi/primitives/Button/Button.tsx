import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Button.module.scss";
import { useEditionContext } from "@/makasi/core/contexts/EditionContext/EditionContext";
import dynamic from "next/dynamic";
import { useField } from "@/makasi/core/Page/Page";
import { TPrimitiveButtonData } from "./Button.types";

const className = classNameModule(styles);

interface TButtonProps {
  field: string;
}

export const Button: FC<TButtonProps> = ({ field }) => {
  const { edition } = useEditionContext();
  const { data } = useField<TPrimitiveButtonData>(field);

  if (edition) {
    const ButtonEdition = dynamic(() => import("./Button.edition"));

    return <ButtonEdition field={field} />;
  }

  return (
    <button
      {...className("Button")}
      style={{
        backgroundColor: getCSSProperty(data.backgroundColor),
        color: getCSSProperty(data.textColor),
      }}
    >
      {data.content}
    </button>
  );
};

const getCSSProperty = (value: string) =>
  !value
    ? undefined
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
