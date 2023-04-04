import { TImageBackground } from "./Background.types";

export const getResponsiveImageURL = (
  image: TImageBackground,
  containerElement: HTMLDivElement
) => {
  if (image.provider === "unsplash") {
    const url = new URL(image.url);

    const width = Math.floor(containerElement.clientWidth / 100) * 100;

    return `${url.origin}${url.pathname}?w=${width}&q=80`;
  }

  return image.url;
};
