import { FC, useState } from "react";
import { ArrowDown, ArrowUp, List, Plus, Trash, X } from "phosphor-react";

import { classNameModule } from "@/utils/className/className";

import { createRemoveSectionAction } from "../../actions/actions.utils";
import { usePage } from "../../PageEdition/page.context";
import { useSection, useSectionEdition } from "../section.context";

import Unsplash from "@/Test/Unsplash/Unsplash";

import styles from "./SectionEdition.module.scss";
import {
  TBackgroundParam,
  TColorBackground,
  TImageBackground,
} from "@/makasi/primitives/Background/Background.types";
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
          <div {...className("content")}>
            <SidePanel />
          </div>
        </div>
      )}
    </div>
  );
};

const SidePanel = () => {
  const { data } = useSectionEdition();

  return (
    <div {...className("SidePanel")}>
      {Object.entries(data.params).map(([fieldName, param]) => (
        <Param key={fieldName} fieldName={fieldName} param={param} />
      ))}
    </div>
  );
};

const Param: FC<{
  param: any;
  fieldName: string;
}> = ({ param, fieldName }) => {
  if (param.__param_type === "background")
    return <BackgroundParam fieldName={fieldName} param={param} />;

  if (param.__param_type === "sizing")
    return <SizingParam fieldName={fieldName} param={param} />;

  return null;
};

type TSizingParam = {
  value: "small" | "medium" | "large";
};

const SizingParam: FC<{
  param: TSizingParam;
  fieldName: string;
}> = ({ param, fieldName }) => {
  const { updateParam } = useSectionEdition();

  const bindValue = (value: "small" | "medium" | "large") => {
    return {
      ...className({ active: param.value === value }),
      onClick: () => {
        updateParam(fieldName, {
          value,
        });
      },
    };
  };

  return (
    <div {...className("SizingParam")}>
      <button {...bindValue("small")}>Petit</button>
      <button {...bindValue("medium")}>Moyen</button>
      <button {...bindValue("large")}>Grand</button>
    </div>
  );
};

const BackgroundParam: FC<{
  param: TBackgroundParam;
  fieldName: string;
}> = ({ param, fieldName }) => {
  const { updateParam } = useSectionEdition();

  return (
    <div {...className("BackgroundParam")}>
      <header>
        <button
          {...className({ active: param.type === "image" })}
          onClick={() => {
            if (param.type === "image") return;

            updateParam(fieldName, {
              type: "image",
              provider: "unsplash",
              url: "https://images.unsplash.com/photo-1550945364-6373abbd7a2d?auto=format&fit=crop&w=1742&q=80",
            } as TImageBackground);
          }}
        >
          Image
        </button>
        <button
          {...className({ active: param.type === "color" })}
          onClick={() => {
            if (param.type === "color") return;

            updateParam(fieldName, {
              type: "color",
              color: "red",
            } as TColorBackground);
          }}
        >
          Couleur
        </button>
      </header>
      {param.type === "image" && (
        <div>
          <Unsplash
            handleSelectImage={(image) => {
              updateParam(fieldName, {
                type: "image",
                provider: "unsplash",
                url: image,
              } as Partial<TImageBackground>);
            }}
          />
        </div>
      )}
      {param.type === "color" && (
        <div>
          <input
            defaultValue={param.color}
            onBlur={(e) => {
              updateParam(fieldName, {
                color: e.target.value,
              } as TColorBackground);
            }}
          />
        </div>
      )}
    </div>
  );
};
