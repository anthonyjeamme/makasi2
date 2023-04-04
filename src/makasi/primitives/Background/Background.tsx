import { FC, ReactNode, useEffect, useState } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Background.module.scss";
import {
  TBackgroundParam,
  TColorBackground,
  TImageBackground,
} from "./Background.types";
import { getResponsiveImageURL } from "./Background.utils";

const className = classNameModule(styles);

interface TBackgroundProps {
  //
  children: ReactNode;
  data: TBackgroundParam;
}

export const Background: FC<TBackgroundProps> = ({ children, data }) => {
  if (data.type === "image")
    return <BackgroundImage data={data}>{children}</BackgroundImage>;

  if (data.type === "color")
    return <ColorBackground data={data}>{children}</ColorBackground>;

  return null;
};

interface TBackgroundImageProps {
  children: ReactNode;
  data: TImageBackground;
}

const BackgroundImage: FC<TBackgroundImageProps> = ({ data, children }) => {
  const [url, setURL] = useState<null | string>(null);

  useEffect(() => {
    setURL(getResponsiveImageURL(data));
  }, []);

  return (
    <div
      {...className("Background")}
      style={{
        backgroundImage: url ? `url(${url})` : "unset",
      }}
    >
      {children}
    </div>
  );
};

interface TColorBackgroundProps {
  children: ReactNode;
  data: TColorBackground;
}

const ColorBackground: FC<TColorBackgroundProps> = ({ children, data }) => {
  return (
    <div
      {...className("Background")}
      style={{
        backgroundColor: data.color,
      }}
    >
      {children}
    </div>
  );
};
