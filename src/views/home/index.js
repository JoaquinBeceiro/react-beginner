import React, { useState, useCallback, useEffect, useContext } from "react";
import { BinanceService } from "services";
import { GlobalContext, DispatchTypes } from "context";
import { DropdownComponent } from "components";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedSymbol, setSelectedSymbol] = useState();
  const [symbolAvgPrice, setSymbolAvgPrice] = useState();

  const context = useContext(GlobalContext);
  const [binanceState, binanceDispatch] = context.globalBinance;

  const getExchangeInfo = useCallback(async () => {
    binanceDispatch({
      type: DispatchTypes.Binance.SET_BINANCE_START,
      section: "exchangeInfo",
    });
    try {
      const data = await BinanceService.getExchangeInfo();
      binanceDispatch({
        type: DispatchTypes.Binance.SET_BINANCE_SUCCESS,
        section: "exchangeInfo",
        data,
      });
    } catch (error) {
      binanceDispatch({
        type: DispatchTypes.Binance.SET_BINANCE_SUCCESS,
        section: "exchangeInfo",
        error,
      });
    }
  }, [binanceDispatch]);

  const getAvgPrice = async (symbol) => {
    try {
      const data = await BinanceService.getAvgPrice(symbol);
      setSymbolAvgPrice(data);
    } catch (e) {
      setSymbolAvgPrice("-");
    }
  };

  useEffect(() => {
    getExchangeInfo();
  }, [getExchangeInfo]);

  useEffect(() => {
    if (selectedSymbol) {
      getAvgPrice(selectedSymbol);
    }
  }, [selectedSymbol]);

  const handleSymbolChange = (selected) => {
    if (selected) {
      const { value } = selected;
      setSelectedSymbol(value);
    } else {
      setSelectedSymbol(null);
      setSymbolAvgPrice(null);
    }
  };

  const symbolsOptions =
    binanceState.exchangeInfo?.data?.symbols?.map(
      ({ symbol, baseAsset, quoteAsset }) => ({
        label: `${baseAsset} to ${quoteAsset}`,
        value: symbol,
      })
    ) || [];

  const selectedSymbolObject =
    binanceState.exchangeInfo?.data?.symbols?.find(
      ({ symbol }) => symbol === selectedSymbol
    ) || null;

  return (
    <S.Container>
      <S.Content>
        <S.Title>Crypto query system</S.Title>
        <DropdownComponent
          isLoading={binanceState.exchangeInfo.loading}
          isDisabled={binanceState.exchangeInfo.loading}
          isClearable={true}
          options={symbolsOptions}
          onChange={handleSymbolChange}
        />
        {selectedSymbolObject && (
          <S.SymbolInfoContainer>
            <li>
              <strong>Selected</strong>
              <span>{selectedSymbolObject.symbol}</span>
            </li>
            <li>
              <strong>Base Asset</strong>
              <span>{selectedSymbolObject.baseAsset}</span>
            </li>
            <li>
              <strong>Quote Asset</strong>
              <span>{selectedSymbolObject.quoteAsset}</span>
            </li>
            <li>
              <strong>AVG price</strong>
              <span>
                {symbolAvgPrice ? symbolAvgPrice.price : "Loading..."}
              </span>
            </li>
          </S.SymbolInfoContainer>
        )}
      </S.Content>

      <S.Footer>
        <div>
          Joaquin Beceiro | <Link to="about">About Page</Link>
        </div>
      </S.Footer>
    </S.Container>
  );
};

export default Home;
