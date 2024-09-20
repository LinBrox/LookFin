import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

interface Props {}
// Change 2
const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName="Apple" ticker="APPL" price={85.00} />
      <Card companyName="Microsoft" ticker="MSFT" price={110.00} />
      <Card companyName="GameStop" ticker="GME" price={999999.00} />
    </div>
  );
};

export default CardList;
