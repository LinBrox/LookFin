import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

interface Props {}
// Change 2
const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="Apple" ticker="APPL" price={85.0} />
      <Card companyName="Microsoft" ticker="MSFT" price={110.0} />
      <Card companyName="GameStop" ticker="GME" price={999999.0} />
    </div>
  );
};

export default CardList;
