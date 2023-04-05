import { FC } from "react";
import dynamic from "next/dynamic";

import { useEditionContext } from "@/makasi/core/contexts/EditionContext/EditionContext";
import { useField } from "@/makasi/core/Page/Page";
import { TPrimitiveTextData } from "./Text.types";

import { classNameModule } from "@/utils/className/className";
import styles from "./Text.module.scss";
const className = classNameModule(styles);

interface TTextProps {
  field: string;
  className?: string;
}

export const Text: FC<TTextProps> = ({ field, className = "" }) => {
  const { edition } = useEditionContext();

  if (edition) {
    const TextEdition = dynamic(
      () => import("./Text.edition").then((module) => module.TextEdition),
      {
        ssr: false,
      }
    );

    return <TextEdition field={field} className={className} />;
  }

  return <TextRead field={field} className={className} />;
};

const TextRead = ({
  field,
  className: inputClassName,
}: {
  field: string;
  className: string;
}) => {
  const { data } = useField<TPrimitiveTextData>(field);

  return (
    <div className={className("Text").className + " " + inputClassName}>
      {data?.text || ""}
    </div>
  );
};
