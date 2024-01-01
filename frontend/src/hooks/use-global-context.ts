import { GlobalContext } from "@/contexts/global-context";
import { useContext } from "react";

export const useGlobalContext = () => useContext(GlobalContext);
