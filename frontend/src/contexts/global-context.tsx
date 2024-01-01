import { createContext, useState } from "react";

// Define the initial state of the global context
interface GlobalContextValueTypes {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Create the global context
export const GlobalContext = createContext<GlobalContextValueTypes | undefined>(
  undefined
);

// Create a provider component to wrap the app with the global context
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const globalContextValues: GlobalContextValueTypes = {
    count,
    setCount,
  };
  return (
    <GlobalContext.Provider value={globalContextValues}>
      {children}
    </GlobalContext.Provider>
  );
};
