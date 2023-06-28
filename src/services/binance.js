import axios from "axios";

const BASE_URL = "https://api.binance.com/api/v3";

export const getExchangeInfo = async () => {
  const { data } = await axios.get(`${BASE_URL}/exchangeInfo`);
  return data;
};

export const getAvgPrice = async (symbol) => {
  const { data } = await axios.get(`${BASE_URL}/avgPrice`, {
    params: { symbol },
  });
  return data;
};
