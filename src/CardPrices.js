import React from "react";

export default function CardPrices(props){
let priceLow = props.data.priceLow;
if (priceLow != null) {priceLow = props.data.priceLow.toFixed(2);  priceLow = `$${priceLow}`;}
else if (priceLow === null || priceLow === undefined) {priceLow = "n/a"}
let priceMid = props.data.priceMid;
if (priceMid != null) {priceMid = props.data.priceMid.toFixed(2);  priceMid = `$${priceMid}`;}
else if (priceMid === null || priceMid === undefined) {priceMid = "n/a";}
let priceHigh = props.data.priceHigh;
if (priceHigh != null) {priceHigh = props.data.priceHigh.toFixed(2); priceHigh = `$${priceHigh}`;}
else if (priceHigh === null || priceHigh === undefined) {priceHigh = "n/a"; }
let pricemarket = props.data.pricemarket;
if (pricemarket != null){pricemarket = props.data.pricemarket.toFixed(2); pricemarket = `$ ${pricemarket}`; }
else if (pricemarket === null || pricemarket === undefined){pricemarket = "n/a";}
let pricesUpdated = props.data.pricesUpdated;
let pricesUpdatedUrl = props.data.pricesUpdatedUrl;
console.log(pricemarket.length);

if (pricesUpdatedUrl === null){  return(
    <div className="CardPrices">
 <div className="cardColumn">
    <h2>Market Price: {pricemarket}</h2>
<div className="row">
    <div className="priceColumn">
        <h3>Low</h3>
       <p> {priceLow}</p>
    </div>
    <div className="priceColumn">
        <h3>Mid</h3>
       <p> {priceMid}</p>
    </div>
    <div className="priceColumn">
        <h3>High</h3>
       <p> {priceHigh}</p>
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
       <p> {priceLow}</p>
    </div>
    <div className="priceColumn">
        <h3>Mid</h3>
       <p> {priceMid}</p>
    </div>
    <div className="priceColumn">
        <h3>High</h3>
       <p> {priceHigh}</p>
    </div>
</div>
Prices last updated on {pricesUpdated} using prices from <a href={pricesUpdatedUrl} target= "_blank">TCGPlayer</a>
</div>
</div>)
}}