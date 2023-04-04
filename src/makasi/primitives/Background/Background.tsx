import { FC, ReactNode, useEffect, useRef, useState } from "react";

import Image, { ImageLoaderProps } from "next/image";
import {
  TBackgroundParamValue,
  TColorBackgroundValue,
  TImageBackgroundValue,
} from "@/makasi/core/params/background/BackgroundParam.types";

interface TBackgroundProps {
  //
  children: ReactNode;
  data: TBackgroundParamValue;
}

export const Background: FC<TBackgroundProps> = ({ children, data }) => {
  if (data.type === "image")
    return <BackgroundImage data={data}>{children}</BackgroundImage>;

  if (data.type === "color")
    return <ColorBackground data={data}>{children}</ColorBackground>;

  return <>{children}</>;
};

interface TBackgroundImageProps {
  children: ReactNode;
  data: TImageBackgroundValue;
}

const BackgroundImage: FC<TBackgroundImageProps> = ({ data, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
  data: TColorBackgroundValue;
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
