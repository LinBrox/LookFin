import React from "react";
import "./Card.css";

let imageSrc: string =
  "https://imageio.forbes.com/blogs-images/danidiplacido/files/2017/09/batman-312342_960_720.png?format=png&width=1440";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

// Aligator Brackets do Type Checking technically do not need the ": Props" at the end
const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Image" />
      <div className="details">
        <h2>
          {companyName}({ticker})
        </h2>
        <p>£{price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio eius ex
        fugit perferendis saepe quibusdam itaque, beatae expedita perspiciatis
        officiis deserunt repellendus maiores, vero quam explicabo id aperiam.
        In, inventore.
      </p>
    </div>
  );
};

export default Card;
