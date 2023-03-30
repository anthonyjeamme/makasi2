import { FC } from "react";

import { usePage } from "../PageEdition/page.context";
import { useWebsite } from "../website/website.context";
import { SectionEdition } from "./edition/SectionEdition";
import { SectionProvider, useSection } from "./section.context";

interface TSectionProps {
  sectionId: string;
}

export const Section: FC<TSectionProps> = ({ sectionId }) => {
  return (
    <SectionProvider sectionId={sectionId}>
      <SectionContent />
    </SectionProvider>
  );
};

const SectionContent = () => {
  const { editionMode } = useWebsite();
  const { getSectionComponent } = usePage();
  const { data } = useSection();

  const Component = getSectionComponent(data.name);

  if (!Component) {
    if (editionMode) return <div>NOT FOUND</div>;
    return null;
  }
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {editionMode && <SectionEdition />}
      <Component data={data} />
    </div>
  );
};
