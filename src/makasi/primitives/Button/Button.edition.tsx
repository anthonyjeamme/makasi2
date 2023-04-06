import { FC, useRef, useState } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Button.edition.module.scss";
import { ThemeColorSelector } from "@/makasi/core/params/common/ThemeColorSelector/ThemeColorSelector";
import { useClickOutside } from "@/makasi/utils/useClickOutside/useClickOutside";
import { useSectionField } from "@/makasi/core/section/section.context";
import { TPrimitiveButtonData } from "./Button.types";

const className = classNameModule(styles);

interface TButtonEditionProps {
  field: string;
}

const ButtonEdition: FC<TButtonEditionProps> = ({ field }) => {
  const { data, onChange } = useSectionField<TPrimitiveButtonData>(field);
  const [hasFocus, setHasFocus] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useClickOutside(hasFocus, setHasFocus, rootRef);

  return (
    <div
      ref={rootRef}
      {...className("ButtonEdition", { active: hasFocus })}
      onFocus={() => {
        setHasFocus(true);
      }}
    >
      <header>
        <button
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          Super
        </button>

        <div>
          <label>Texte</label>
          <ThemeColorSelector
            value={data.textColor}
            onChange={(textColor) => {
              onChange({
                textColor,
              });
            }}
          />
        </div>
        <div>
          <label>Fond</label>
          <ThemeColorSelector
            value={data.backgroundColor}
            onChange={(backgroundColor) => {
              onChange({
                backgroundColor,
              });
            }}
          />
        </div>
      </header>

      <div
        {...className("Button")}
        style={{
          backgroundColor: getCSSProperty(data.backgroundColor),
          color: getCSSProperty(data.textColor),
        }}
        contentEditable
        ref={buttonRef}
        onBlur={(e) => {
          const buttonElement = buttonRef.current;
          if (!buttonElement) return;

          if (data.content === buttonElement.innerText) return;

          onChange({
            content: buttonElement.innerText,
          });
        }}
      >
        {data.content || "Bouton"}
      </div>
    </div>
  );
};

export default ButtonEdition;

const getCSSProperty = (value: string) =>
  !value
    ? undefined
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
