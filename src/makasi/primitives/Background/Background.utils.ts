import { TImageBackground } from "./Background.types";

export const getResponsiveImageURL = (image: TImageBackground) => {
  if (image.provider === "unsplash") {
    const url = new URL(image.url);

    const width = Math.floor(window.innerWidth / 100) * 100;

    return `${url.origin}${url.pathname}?w=${width}&q=80`;
  }

  return image.url;
};
