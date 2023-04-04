import { FC, ReactNode, useEffect, useRef, useState } from "react";

import {
  TBackgroundParam,
  TColorBackground,
  TImageBackground,
} from "./Background.types";
import { getResponsiveImageURL } from "./Background.utils";
import Image, { ImageLoaderProps } from "next/image";

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (!containerElement) return;

    setURL(getResponsiveImageURL(data, containerElement));
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
      }}
    >
      <Image
        loader={unsplashLoader}
        src={data.url}
        fill
        alt=""
        style={{
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {children}
    </div>
  );
};

interface TColorBackgroundProps {
  children: ReactNode;
  data: TColorBackground;
}

const unsplashLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const url = new URL(src);

  return `${url.origin}${url.pathname}?w=${width}&q=${quality || 80}`;
};

const ColorBackground: FC<TColorBackgroundProps> = ({ children, data }) => {
  return (
    <div
      style={{
        backgroundColor: getCSSProperty(data.color),
      }}
    >
      {children}
    </div>
  );
};

const getCSSProperty = (value: string) =>
  !value
    ? undefined
    : value.startsWith("--")
    ? `var(${value})`
    : value.startsWith("http")
    ? `url(${value})`
    : value;
