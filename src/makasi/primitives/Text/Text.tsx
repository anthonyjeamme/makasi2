import { FC } from "react";
import dynamic from "next/dynamic";

import { useEditionContext } from "@/makasi/core/contexts/EditionContext/EditionContext";
import { useField } from "@/makasi/core/Pagee/Page";
import { TPrimitiveTextData } from "./Text.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./Text.module.scss";
const className = classNameModule(styles);

interface TTextProps {
  field: string;
}

export const Text: FC<TTextProps> = ({ field }) => {
  const { edition } = useEditionContext();

  if (edition) {
    const TextEdition = dynamic(
      () => import("./Text.edition").then((module) => module.TextEdition),
      {
        ssr: false,
      }
    );

    return <TextEdition field={field} />;
  }

  return <TextRead field={field} />;
};

const TextRead = ({ field }: { field: string }) => {
  const { data } = useField<TPrimitiveTextData>(field);

  return <div {...className("Text")}>{data?.text || ""}</div>;
};
