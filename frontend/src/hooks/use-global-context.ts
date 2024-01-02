import { GlobalContextType } from "@/contexts/global-context";
import { createContext, useContext } from "react";

// Create the auth context
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within an AuthProvider");
  }
  return context;
};
