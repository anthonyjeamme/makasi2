import { TImageBackgroundValue } from "@/makasi/core/params/background/BackgroundParam.types";

export const getResponsiveImageURL = (
  image: TImageBackgroundValue,
  containerElement: HTMLDivElement
) => {
  if (image.url.includes("unsplash")) {
    const url = new URL(image.url);

    const width = Math.floor(containerElement.clientWidth / 100) * 100;

    return `${url.origin}${url.pathname}?w=${width}&q=80`;
  }

  return image.url;
};
