import { useTheme } from "@/makasi/core/contexts/ThemeContext/ThemeContext";
import { useClickOutside } from "@/makasi/utils/useClickOutside/useClickOutside";
import { FC, useEffect, useRef, useState } from "react";

import { classNameModule } from "@/utils/className/className";

import styles from "./ThemeColorSelector.module.scss";
import { CaretDown, MagnifyingGlass } from "phosphor-react";

const className = classNameModule(styles);

interface TThemeColorSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ThemeColorSelector: FC<TThemeColorSelectorProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getColors } = useTheme();
  const [search, setSearch] = useState("");

  const rootRef = useRef<HTMLDivElement>(null);
  const colors = getColors();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentValue = colors.find((color) => `--${color.key}` === value);

  useClickOutside(isOpen, setIsOpen, rootRef);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    } else {
      setSearch("");
    }
  }, [isOpen]);

  return (
    <div {...className("ThemeColorSelector")} ref={rootRef}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span>
          {currentValue ? currentValue.value.title : "Couleur de thème"}
        </span>

        <span {...className("caret")}>
          <CaretDown />
        </span>
      </button>

      <div {...className("dropdown", { isOpen })}>
        <header>
          <div>
            <input
              ref={searchInputRef}
              onBlur={() => {
                searchInputRef.current?.focus();
              }}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <span {...className("icon")}>
              <MagnifyingGlass />
            </span>
          </div>
        </header>

        <div {...className("content")}>
          {colors
            .filter(
              ({ value }) =>
                value.title
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase()) ||
                value.description
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
            )
            .map(({ key, value }) => (
              <button
                key={key}
                onClick={() => {
                  onChange(`--${key}`);
                  setIsOpen(false);
                }}
              >
                <span>
                  <span {...className("title")}>{value.title}</span>
                  <span {...className("description")}>{value.description}</span>
                </span>

                <span>
                  <div
                    {...className("square")}
                    style={{
                      backgroundColor: `var(--${key})`,
                    }}
                  ></div>
                </span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
