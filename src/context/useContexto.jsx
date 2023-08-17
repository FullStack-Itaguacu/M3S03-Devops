import { useContext } from "react";
import { appContext } from "./ContextProvider";

export const useContexto = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  } else {
    throw new Error("appContext deb ser usado dentro de  ContextProvider");
  }
};