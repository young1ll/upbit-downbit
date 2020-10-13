import React from "react";
import styled from "styled-components";

const CandleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 33.3333%;
  border: 1px solid gray;
  margin-top: -1px;
  margin-left: -1px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 90%;
  font-size: 0.8rem;
  padding: 5px;
`;

const InfoTxt = styled.span`
  display: block;
  width: 50%;
`;

const InfoValue = styled.span`
  display: block;
  width: 50%;
  text-align: right;
`;

const OrderbookCoinInfo = ({
  volume24,
  tradePrice24,
  highestPrice52Week,
  highestDate52Week,
  lowestPrice52Week,
  lowestDate52Week,
}) => {
  return (
    <CandleInfoContainer>
      <InfoContainer>
        <InfoTxt>거래량</InfoTxt>
        <InfoValue>{volume24}</InfoValue>
      </InfoContainer>
      <InfoContainer>
        <InfoTxt>거래대금</InfoTxt>
        <InfoValue>{`${tradePrice24}백만`}</InfoValue>
      </InfoContainer>
      <InfoContainer>
        <InfoTxt>52주 최고</InfoTxt>
        <InfoValue>{`${highestPrice52Week} (${highestDate52Week})`}</InfoValue>
      </InfoContainer>
      <InfoContainer>
        <InfoTxt>52주 최저</InfoTxt>
        <InfoValue>{`${lowestPrice52Week} (${lowestDate52Week})`}</InfoValue>
      </InfoContainer>
    </CandleInfoContainer>
  );
};

export default React.memo(OrderbookCoinInfo);
