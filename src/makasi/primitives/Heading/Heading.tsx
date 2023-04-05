import { createElement, FC } from "react";
import dynamic from "next/dynamic";

import { classNameModule } from "@/utils/className/className";

import { TPrimitiveHeadingData } from "./Heading.types";

import styles from "./Heading.module.scss";
import { useEditionContext } from "@/makasi/core/contexts/EditionContext/EditionContext";
import { useField } from "@/makasi/core/Page/Page";
const className = classNameModule(styles);

interface THeadingProps {
  field: string;
  defaultTag?: string;
  tags?: string[];
}

export const Heading: FC<THeadingProps> = ({
  field,
  defaultTag,
  tags = ["h1", "h2", "h3", "h4"],
}) => {
  const { edition } = useEditionContext();

  if (edition) {
    const HeadingEdition = dynamic(
      () => import("./Heading.edition").then((module) => module.HeadingEdition),
      {
        ssr: false,
      }
    );

    return <HeadingEdition field={field} defaultTag={defaultTag} tags={tags} />;
  }

  return <HeadingRead field={field} defaultTag={defaultTag} />;
};

const HeadingRead = ({
  field,
  defaultTag,
}: {
  field: string;
  defaultTag?: string;
}) => {
  const { data } = useField<TPrimitiveHeadingData>(field);

  if (!data?.text) return null;
  return createElement(
    data?.tag || defaultTag || "h1",
    { ...className("Heading") },
    data?.text || ""
  );
};
