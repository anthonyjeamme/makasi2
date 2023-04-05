import { createElement, FC } from "react";
import dynamic from "next/dynamic";

import { classNameModule } from "@/utils/className/className";

import { TPrimitiveHeadingData } from "./Heading.types";

import styles from "./Heading.module.scss";
import { useEditionContext } from "@/makasi/core/contexts/EditionContext/EditionContext";
import { useField } from "@/makasi/core/Pagee/Page";
const className = classNameModule(styles);

interface THeadingProps {
  field: string;
}

export const Heading: FC<THeadingProps> = ({ field }) => {
  const { edition } = useEditionContext();

  if (edition) {
    const HeadingEdition = dynamic(
      () => import("./Heading.edition").then((module) => module.HeadingEdition),
      {
        ssr: false,
      }
    );

    return <HeadingEdition field={field} />;
  }

  return <HeadingRead field={field} />;
};

const HeadingRead = ({ field }: { field: string }) => {
  const { data } = useField<TPrimitiveHeadingData>(field);

  if (!data?.text) return null;
  return createElement(
    data?.tag || "h1",
    { ...className("Heading") },
    data?.text || ""
  );
};
