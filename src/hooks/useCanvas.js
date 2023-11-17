import { createContext, useContext } from "react";

export const CanvasContext = createContext(undefined);

export const useCanvasContext = () => {
  return useContext(CanvasContext);
};
