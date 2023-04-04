import { FC } from "react";
import uniqid from "uniqid";
import { classNameModule } from "@/utils/className/className";

import styles from "./SectionPicker.module.scss";
import { Modal, TModalHook } from "@/makasi/utils/Modal/Modal";
import { usePage } from "../page.context";
import { TSectionDefinition } from "../../section/Section.types";
import { TSectionParamValue } from "../../params/params.types";
import { createCreateSectionAction } from "../../actions/actions.utils";

const className = classNameModule(styles);

type TSectionPickerProps = TModalHook<{ index: number }>;

export const SectionPicker: FC<TSectionPickerProps> = ({
  payload,
  ...modalProps
}) => {
  const { getDefinitions, pushAction, getPageId } = usePage();

  const definitions = getDefinitions();

  return (
    <Modal {...modalProps}>
      <div {...className("SectionPicker")}>
        <div {...className("definitions")}>
          {definitions.map((sectionDefinition) => (
            <div
              {...className("definition")}
              key={sectionDefinition.id}
              role="button"
              onClick={() => {
                if (!payload) return;
                const params = getNewSectionDefaultParams(sectionDefinition);

                const sectionData = {
                  id: uniqid(),
                  name: sectionDefinition.id,
                  params,
                  fieldsData: sectionDefinition.getDefaultFieldsData(),
                };

                pushAction?.(
                  createCreateSectionAction(
                    sectionData,
                    payload?.index,
                    getPageId()
                  )
                );

                modalProps.close();
              }}
            >
              {sectionDefinition.label}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

const getNewSectionDefaultParams = (sectionDefinition: TSectionDefinition) => {
  return Object.entries(sectionDefinition.params).reduce<
    Record<string, TSectionParamValue>
  >((acc, [paramKey, paramDefinition]) => {
    acc[paramKey] = paramDefinition.defaultValue;
    return acc;
  }, {});
};
