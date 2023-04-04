import { FC, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  List,
  Pencil,
  Plus,
  Trash,
  X,
} from "phosphor-react";

import { classNameModule } from "@/utils/className/className";

import { useSectionEdition } from "../section.context";

import { BackgroundParamEdition } from "../../params/background/BackgroundParamEdition";
import { TSectionParamValue } from "../../params/params.types";
import {
  backgroundParamType,
  TBackgroundParamValue,
} from "../../params/background/BackgroundParam.types";
import {
  textColorParamType,
  TTextColorParamValue,
} from "../../params/textColor/textColorParam.types";
import { TextColorParamEdition } from "../../params/textColor/TextColorParamEdition";

import styles from "./SectionEdition.module.scss";
import { useClickOutside } from "@/makasi/utils/useClickOutside/useClickOutside";
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
      <div {...className("top-left")}>
        <button onClick={moveUp}>
          <ArrowUp />
        </button>

        <button onClick={moveDown}>
          <ArrowDown />
        </button>
      </div>

      <div {...className("top-right")}>
        <RemoveButton handleRemove={remove} />
        <button
          onClick={() => {
            setParamIsOpen(!paramIsOpen);
          }}
        >
          <Pencil />
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
      <div {...className("params", { open: paramIsOpen })}>
        <header>
          <button
            onClick={() => {
              setParamIsOpen(false);
            }}
          >
            <X />
          </button>
        </header>
        <div {...className("content")}>
          <SidePanel />
        </div>
      </div>
    </div>
  );
};

interface TRemoveButtonProps {
  handleRemove: () => void;
}

const RemoveButton: FC<TRemoveButtonProps> = ({ handleRemove }) => {
  const [confirmation, setConfirmation] = useState(false);
  const rootRef = useRef<HTMLButtonElement>(null);

  useClickOutside(confirmation, setConfirmation, rootRef);

  return (
    <span>
      <button
        ref={rootRef}
        onClick={() => {
          if (confirmation) {
            handleRemove();
          } else {
            setConfirmation(true);
          }
        }}
        {...className("RemoveButton", { confirmation })}
      >
        {confirmation ? <span>Supprimer</span> : <Trash />}
      </button>
    </span>
  );
};

const SidePanel = () => {
  const { data } = useSectionEdition();

  const { getDefinition } = useSectionEdition();

  const definition = getDefinition();
  if (!definition) return null;

  return (
    <div {...className("SidePanel")}>
      {Object.entries(definition.params).map(([fieldName, paramDefinition]) => (
        <Param
          key={fieldName}
          fieldName={fieldName}
          paramDefinition={paramDefinition}
          paramValue={data.params[fieldName]}
        />
      ))}
    </div>
  );
};

const Param: FC<{
  paramDefinition: any;
  paramValue: TSectionParamValue;
  fieldName: string;
}> = ({ paramDefinition, fieldName, paramValue }) => {
  switch (paramDefinition.type) {
    case backgroundParamType:
      return (
        <BackgroundParamEdition
          paramKey={fieldName}
          value={paramValue as TBackgroundParamValue}
        />
      );

    case textColorParamType:
      return (
        <TextColorParamEdition
          paramKey={fieldName}
          value={paramValue as TTextColorParamValue}
        />
      );
  }

  return null;
};
