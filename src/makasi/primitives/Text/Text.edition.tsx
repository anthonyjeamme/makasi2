import { FC, KeyboardEvent, useRef, useState } from "react";

import { useSectionField } from "@/makasi/core/section/section.context";
import { classNameModule } from "@/utils/className/className";

import { TPrimitiveTextData } from "./Text.types";

import styles from "./Text.module.scss";
const className = classNameModule(styles);

interface TTextEditionProps {
  field: string;
  className: string;
}

export const TextEdition: FC<TTextEditionProps> = ({
  field,
  className: inputClassName,
}) => {
  const { data, onChange } = useSectionField<TPrimitiveTextData>(field);
  const rootRef = useRef<HTMLDivElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const modifiedRef = useRef(false);

  return (
    <div
      className={
        className("Text", { edition: true, active: hasFocus }).className +
        " " +
        inputClassName
      }
      ref={rootRef}
      contentEditable
      suppressContentEditableWarning
      onInput={() => {
        modifiedRef.current = true;
      }}
      onFocus={() => {
        setHasFocus(true);
      }}
      onBlur={() => {
        setHasFocus(false);
        if (!modifiedRef.current) return;
        modifiedRef.current = false;

        onChange({
          text: rootRef.current?.innerText || "",
        });
      }}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
    >
      {data?.text}
    </div>
  );
};
