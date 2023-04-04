import { createContext, FC, ReactNode, useContext } from "react";

const editionContext = createContext({
  edition: false,
});

interface TEditionContextProps {
  children: ReactNode;
}

export const EditionContext: FC<TEditionContextProps> = ({ children }) => {
  return (
    <editionContext.Provider value={{ edition: true }}>
      {children}
    </editionContext.Provider>
  );
};

export const useEditionContext = () => useContext(editionContext);
