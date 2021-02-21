import React from "react";

export default function CardPrices(props){
console.log(props.data);
let priceLow = props.data.priceLow;
let priceMid = props.data.priceMid;
let priceHigh = props.data.priceHigh;
let pricemarket = props.data.priceMarket;
    return(
    <div className="CardPrices">
 <div className="cardColumn">
    <h2>Market Price: ${pricemarket}</h2>
<div className="row">
    <div className="cardColumn">
        <h3>Low</h3>
       <p> ${priceLow}</p>
    </div>
    <div className="cardColumn">
        <h3>Mid</h3>
       <p> ${priceMid}</p>
    </div>
    <div className="cardColumn">
        <h3>High</h3>
       <p> ${priceHigh}</p>
    </div>
</div>
</div>
</div>)
}