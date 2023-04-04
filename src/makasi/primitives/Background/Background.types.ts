export type TBackgroundParam = TImageBackground | TColorBackground;

export type TImageBackground = {
  type: "image";
  provider: "unsplash";
  url: string;
};

export type TColorBackground = {
  type: "color";
  color: string;
};
