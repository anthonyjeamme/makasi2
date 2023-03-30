import { FC } from "react";
import dynamic from "next/dynamic";

import { useWebsite } from "@/makasi/core/website/website.context";
import { classNameModule } from "@/utils/className/className";
import { useField } from "@/makasi/core/page/Page";

import { TPrimitiveTextData } from "./Text.types";

import styles from "./Text.module.scss";
const className = classNameModule(styles);

interface TTextProps {
  field: string;
}

export const Text: FC<TTextProps> = ({ field }) => {
  const { editionMode } = useWebsite();

  if (editionMode) {
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
