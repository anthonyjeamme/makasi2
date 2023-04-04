import { createContext, FC, ReactNode, useContext } from "react";

type TWebsiteContext = {
  //
};

const websiteContext = createContext<TWebsiteContext>({
  //
});

interface TWebsiteProviderProps {
  children: ReactNode;
}

export const WebsiteProvider: FC<TWebsiteProviderProps> = ({ children }) => {
  return (
    <websiteContext.Provider
      value={
        {
          //
        }
      }
    >
      {children}
    </websiteContext.Provider>
  );
};

export const useWebsite = () => useContext(websiteContext);
