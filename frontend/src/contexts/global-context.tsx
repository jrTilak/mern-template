import { GlobalContext } from "@/hooks/use-global-context";
import React, { ReactNode, useState } from "react";

export interface GlobalContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
// global provider component
export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const globalContextValue = {
    count,
    setCount,
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
