import { createElement, FC, KeyboardEvent, useRef, useState } from "react";

import { classNameModule } from "@/utils/className/className";
import { useSectionField } from "@/makasi/core/section/section.context";

import styles from "./HeadingEdition.module.scss";
const className = classNameModule(styles);

interface THeadingProps {
  field: string;
}

export const HeadingEdition: FC<THeadingProps> = ({ field }) => {
  const rootRef = useRef<HTMLHeadingElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const { data, onChange } = useSectionField<{
    tag: "h1";
    text: string;
  }>(field);
  const modifiedRef = useRef(false);

  return createElement(
    data?.tag || "h1",
    {
      ...className("HeadingEdition", { edition: true, active: hasFocus }),
      contentEditable: true,
      suppressContentEditableWarning: true,
      ref: rootRef,
      onFocus: () => setHasFocus(true),
      onBlur: () => {
        setHasFocus(false);

        if (!modifiedRef.current) return;
        modifiedRef.current = false;

        const rootElement = rootRef.current;
        if (!rootElement) return;

        onChange({
          text: rootElement.innerText,
        });
      },
      onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (e.key === "Enter") e.preventDefault();
      },
      onInput: () => {
        modifiedRef.current = true;
      },
    },
    data?.text || ""
  );
};
