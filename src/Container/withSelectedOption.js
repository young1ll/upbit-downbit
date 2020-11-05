import React from "react";
import { useSelector } from "react-redux";

const withSelectedOption = () => (OriginalComponent) => (props) => {
  const coinState = useSelector((state) => state.Coin);

  return (
    <OriginalComponent
      {...props}
      selectedMarket={coinState.selectedMarket}
      selectedTimeType={coinState.selectedTimeType}
      selectedTimeCount={coinState.selectedTimeCount}
      selectedAskBidOrder={coinState.selectedAskBidOrder}
      searchCoin={coinState.searchCoin}
    />
  );
};

export default withSelectedOption;
