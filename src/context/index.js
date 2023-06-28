import React, { useReducer, createContext } from "react";
import BinanceReducer, { binanceInitialState } from "./reducers/binance";
import Types from "./types";

export const GlobalContext = createContext();

export const DispatchTypes = Types;

const AppContextProvider = ({ children }) => {
  const [binanceState, binanceDispatch] = useReducer(
    BinanceReducer,
    binanceInitialState
  );

  const values = {
    globalBinance: [binanceState, binanceDispatch],
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export default AppContextProvider;
