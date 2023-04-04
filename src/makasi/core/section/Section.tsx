import { FC } from "react";

import { usePage } from "../PageEdition/page.context";
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
  const { getSectionComponent } = usePage();
  const { data } = useSection();

  const Component = getSectionComponent(data.name);

  if (!Component) {
    return <div>NOT FOUND</div>;
  }
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <SectionEdition />
      <Component data={data} />
    </div>
  );
};
