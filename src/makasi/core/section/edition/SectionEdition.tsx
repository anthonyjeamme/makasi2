import { FC, useState } from "react";
import { ArrowDown, ArrowUp, List, Plus, Trash, X } from "phosphor-react";

import { classNameModule } from "@/utils/className/className";

import { createRemoveSectionAction } from "../../actions/actions.utils";
import { usePage } from "../../page/page.context";
import { useSection, useSectionEdition } from "../section.context";

import styles from "./SectionEdition.module.scss";
const className = classNameModule(styles);

interface TSectionEditionProps {
  //
}

export const SectionEdition: FC<TSectionEditionProps> = () => {
  const [paramIsOpen, setParamIsOpen] = useState(false);

  const { remove, moveUp, moveDown, addSectionBefore, addSectionAfter } =
    useSectionEdition();

  return (
    <div {...className("SectionEdition")}>
      <div {...className("top-right")}>
        <button onClick={moveUp}>
          <ArrowUp />
        </button>

        <button onClick={moveDown}>
          <ArrowDown />
        </button>

        <button onClick={remove}>
          <Trash />
        </button>
        <button
          onClick={() => {
            setParamIsOpen(!paramIsOpen);
          }}
        >
          <List />
        </button>
      </div>

      <div {...className("before-button")}>
        <button onClick={addSectionBefore}>
          <Plus />
        </button>
      </div>

      <div {...className("after-button")}>
        <button onClick={addSectionAfter}>
          <Plus />
        </button>
      </div>
      {paramIsOpen && (
        <div {...className("params")}>
          <header>
            <button
              onClick={() => {
                setParamIsOpen(false);
              }}
            >
              <X />
            </button>
          </header>
          <div {...className("content")}>Params</div>
        </div>
      )}
    </div>
  );
};
