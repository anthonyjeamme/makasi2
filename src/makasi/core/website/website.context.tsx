import { Pencil, X } from "phosphor-react";
import { createContext, FC, ReactNode, useContext, useState } from "react";

import { classNameModule } from "@/utils/className/className";

import styles from "./website.module.scss";

const className = classNameModule(styles);

type TWebsiteContext = {
  editionMode: boolean;
  toggleEditionMode: () => void;
};

const websiteContext = createContext<TWebsiteContext>({
  editionMode: true,
  toggleEditionMode: () => undefined,
});

interface TWebsiteProviderProps {
  children: ReactNode;
}

export const WebsiteProvider: FC<TWebsiteProviderProps> = ({ children }) => {
  const [editionMode, setEditionMode] = useState<boolean>(false);

  return (
    <websiteContext.Provider
      value={{
        editionMode,
        toggleEditionMode: () => setEditionMode(!editionMode),
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1000,
        }}
      >
        <button
          {...className("EditionButton", { active: editionMode })}
          onClick={() => {
            setEditionMode(!editionMode);
          }}
        >
          {editionMode ? <X /> : <Pencil />}
        </button>
      </div>
      {children}
    </websiteContext.Provider>
  );
};

export const useWebsite = () => useContext(websiteContext);
