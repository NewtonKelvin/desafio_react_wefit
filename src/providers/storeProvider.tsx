"use client";
import { createContext } from "react";

import { Provider } from "react-redux";
import { store } from "../app/store";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const GlobalContext = createContext(null);

  return (
    <GlobalContext.Provider value={null}>
      <Provider store={store}>{children}</Provider>
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
