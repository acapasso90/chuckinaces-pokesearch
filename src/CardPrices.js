import React from "react";

export default function CardPrices(props){
let priceLow = props.data.priceLow;
let priceMid = props.data.priceMid;
let priceHigh = props.data.priceHigh;
let pricemarket = props.data.pricemarket;
if (pricemarket === null){pricemarket = "n/a";}
else {pricemarket = `$${pricemarket}`;}
let pricesUpdated = props.data.pricesUpdated;
let pricesUpdatedUrl = props.data.pricesUpdatedUrl;
console.log(pricesUpdatedUrl);

if (pricesUpdatedUrl === null){  return(
    <div className="CardPrices">
 <div className="cardColumn">
    <h2>Market Price: {pricemarket}</h2>
<div className="row">
    <div className="priceColumn">
        <h3>Low</h3>
       <p> ${priceLow}</p>
    </div>
    <div className="priceColumn">
        <h3>Mid</h3>
       <p> ${priceMid}</p>
    </div>
    <div className="priceColumn">
        <h3>High</h3>
       <p> ${priceHigh}</p>
    </div>
</div>
Prices last updated on {pricesUpdated} using prices from <a href={pricesUpdatedUrl} target= "_blank">Unavailable on TCGPlayer</a>
</div>
</div>)}
    else {return(
    <div className="CardPrices">
 <div className="cardColumn">
    <h2>Market Price: {pricemarket}</h2>
<div className="row">
    <div className="priceColumn">
        <h3>Low</h3>
       <p> ${priceLow}</p>
    </div>
    <div className="priceColumn">
        <h3>Mid</h3>
       <p> ${priceMid}</p>
    </div>
    <div className="priceColumn">
        <h3>High</h3>
       <p> ${priceHigh}</p>
    </div>
</div>
Prices last updated on {pricesUpdated} using prices from <a href={pricesUpdatedUrl} target= "_blank">TCGPlayer</a>
</div>
</div>)
}}