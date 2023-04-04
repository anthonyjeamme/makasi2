import { FC } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Image.module.scss";

const className = classNameModule(styles);

interface TImageProps {
  //
}

export const Image: FC<TImageProps> = ({ src }) => {
  return (
    <div {...className("Image")}>
      <img
        style={{
          maxHeight: 500,
          maxWidth: 500,
        }}
        src={
          "https://images.unsplash.com/photo-1680122754388-16e4e226daa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        }
      />
    </div>
  );
};
