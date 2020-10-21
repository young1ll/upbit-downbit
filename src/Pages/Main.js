import React from "react";
import CoinList from "../Components/CoinList";
import Header from "../Components/Header";
import MainChart from "../Components/MainChart";
import styled from "styled-components";
import Orderbook from "../Components/Orderbook";
import CoinInfoHeader from "../Components/CoinInfoHeader";
import OrderInfo from "../Components/OrderInfo";
import TradeList from "../Components/TradeList";

const MainContentContainer = styled.main`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const ChartAndTradeContainer = styled.div`
  width: 100%;
`;

const TradeContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Main = () => {
  return (
    <div className="container" style={{ height: "100%" }}>
      <Header />
      <MainContentContainer>
        <ChartAndTradeContainer>
          <CoinInfoHeader />
          <div
            className="mainChartContainer"
            style={{ width: "99%", height: 500 }}
          >
            <MainChart />
          </div>

          <TradeContainer>
            <Orderbook />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "53%",
                marginLeft: "10px",
              }}
            >
              <OrderInfo />
              <TradeList />
            </div>
          </TradeContainer>
        </ChartAndTradeContainer>

        <CoinList />
      </MainContentContainer>
    </div>
  );
};

export default Main;
