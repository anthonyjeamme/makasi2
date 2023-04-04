import { FC, ReactNode, useEffect, useState } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { X } from "phosphor-react";

const className = classNameModule(styles);

export type TModalHook<TPayload> = {
  close: () => void;
  open: (payload?: TPayload) => void;
  isOpen: boolean;
  payload?: TPayload;
};

export function useModal<TPayload>() {
  const [data, setData] = useState<{
    payload?: TPayload;
    isOpen: boolean;
  }>({
    isOpen: false,
  });

  return {
    close: () => {
      setData({ isOpen: false });
    },
    open: (payload?: TPayload) => {
      setData({
        isOpen: true,
        payload,
      });
    },
    isOpen: data.isOpen,
    payload: data.payload,
  };
}

type TModalProps<TPayload> = TModalHook<TPayload> & {
  children: ReactNode;
};

export function Modal<TPayload = unknown>({
  isOpen,
  close,
  children,
}: TModalProps<TPayload>) {
  const portalRootElement = document.getElementById("portal-root");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!portalRootElement) return null;

  return createPortal(
    <div {...className("Modal", { isOpen })}>
      <button {...className("close-button")} onClick={close}>
        <span>×</span>
      </button>
      <div {...className("content")}>{children}</div>
    </div>,
    portalRootElement
  );
}
