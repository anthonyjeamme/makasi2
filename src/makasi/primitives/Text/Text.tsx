import { FC } from "react";

import { useSectionField } from "@/makasi/core/section/section.context";
import { useWebsite } from "@/makasi/core/website/website.context";
import { classNameModule } from "@/utils/className/className";

import { TPrimitiveTextData } from "./Text.types";

import styles from "./Text.module.scss";
import dynamic from "next/dynamic";
const className = classNameModule(styles);

interface TTextProps {
  field: string;
}

export const Text: FC<TTextProps> = ({ field }) => {
  const { editionMode } = useWebsite();
  const { data } = useSectionField<TPrimitiveTextData>(field);

  if (editionMode) {
    const TextEdition = dynamic(
      () => import("./Text.edition").then((module) => module.TextEdition),
      {
        ssr: false,
        loading: () => <TextRead data={data} />,
      }
    );

    return <TextEdition field={field} />;
  }

  return <TextRead data={data} />;
};

const TextRead = ({ data }: { data: TPrimitiveTextData }) => (
  <div {...className("Text")}>{data?.text || ""}</div>
);
