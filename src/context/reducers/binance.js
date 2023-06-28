import { DispatchTypes } from "../";

export const binanceInitialState = {
  exchangeInfo: {
    loading: false,
    error: null,
    data: null,
  },
};

const BinanceReducer = (currentState, action) => {
  switch (action.type) {
    case DispatchTypes.Binance.SET_BINANCE_START:
      currentState[action.section].loading = true;
      return { ...currentState };
    case DispatchTypes.Binance.SET_BINANCE_SUCCESS:
      currentState[action.section].loading = false;
      currentState[action.section].data = action.data;
      return { ...currentState };
    case DispatchTypes.Binance.SET_BINANCE_ERROR:
      currentState[action.section].loading = false;
      currentState[action.section].data = null;
      currentState[action.section].error = action.error;
      return { ...currentState };
    default:
      return currentState;
  }
};

export default BinanceReducer;
