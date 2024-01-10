import { createContext, useContext, useState } from "react";

interface IExpandPageContext {
  isPageExpanded: boolean;
  handleExpandPage: () => void;
  handleShrinkPage: () => void;
  togglePageExpand: () => void;
}

const ExpandPageContext = createContext<IExpandPageContext>(
  {} as IExpandPageContext
);

export const useExpandPageContext = () => useContext(ExpandPageContext);

const ExpandPageProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPageExpanded, setIsPageExpanded] = useState(false);

  const handleExpandPage = () => {
    setIsPageExpanded(true);
  };

  const handleShrinkPage = () => {
    setIsPageExpanded(false);
  };

  const togglePageExpand = () => {
    setIsPageExpanded((p) => !p);
  };

  const value = {
    isPageExpanded,
    handleExpandPage,
    handleShrinkPage,
    togglePageExpand,
  };

  return (
    <ExpandPageContext.Provider value={value}>
      {children}
    </ExpandPageContext.Provider>
  );
};

export default ExpandPageProvider;
