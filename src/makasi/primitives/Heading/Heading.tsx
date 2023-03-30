import { createElement, FC } from "react";
import dynamic from "next/dynamic";

import { useSectionField } from "@/makasi/core/section/section.context";
import { useWebsite } from "@/makasi/core/website/website.context";
import { classNameModule } from "@/utils/className/className";

import { TPrimitiveHeadingData } from "./Heading.types";

import styles from "./Heading.module.scss";
const className = classNameModule(styles);

interface THeadingProps {
  field: string;
}

export const Heading: FC<THeadingProps> = ({ field }) => {
  const { editionMode } = useWebsite();
  const { data } = useSectionField<TPrimitiveHeadingData>(field);

  if (editionMode) {
    const HeadingEdition = dynamic(
      () => import("./Heading.edition").then((module) => module.HeadingEdition),
      {
        ssr: false,
        loading: () => <HeadingRead data={data} />,
      }
    );

    return <HeadingEdition field={field} />;
  }

  if (!data?.text) return null;

  return <HeadingRead data={data} />;
};

const HeadingRead = ({ data }: { data: TPrimitiveHeadingData }) =>
  createElement(
    data?.tag || "h1",
    { ...className("Heading") },
    data?.text || ""
  );
