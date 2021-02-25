import React, {useEffect} from "react";

export default function CardPrices(props){
    let priceLow = props.data.priceLow;
if (priceLow) {priceLow = props.data.priceLow.toFixed(2);  priceLow = `$${priceLow}`;}
else if (priceLow === null || priceLow === undefined) {priceLow = "n/a"}
let priceMid = props.data.priceMid;
if (priceMid) {priceMid = props.data.priceMid.toFixed(2);  priceMid = `$${priceMid}`;}
else if (priceMid === null || priceMid === undefined) {priceMid = "n/a";}
let priceHigh = props.data.priceHigh;
if (priceHigh) {priceHigh = props.data.priceHigh.toFixed(2); priceHigh = `$${priceHigh}`;}
else if (priceHigh === null || priceHigh === undefined) {priceHigh = "n/a"; }
let pricemarket = props.data.pricemarket;
if (pricemarket){pricemarket = props.data.pricemarket.toFixed(2); pricemarket = `$ ${pricemarket}`; }
else if (pricemarket === null || pricemarket === undefined || pricemarket === 0) {pricemarket = "n/a";}
let pricesUpdated = props.data.pricesUpdated;
let pricesUpdatedUrl = props.data.pricesUpdatedUrl;
    useEffect(() => {
        if (props.data){
             priceLow = props.data.priceLow;
            if (priceLow) {priceLow = props.data.priceLow.toFixed(2);  priceLow = `$${priceLow}`;}
            else if (priceLow === null || priceLow === undefined) {priceLow = "n/a"}
             priceMid = props.data.priceMid;
            if (priceMid) {priceMid = props.data.priceMid.toFixed(2);  priceMid = `$${priceMid}`;}
            else if (priceMid === null || priceMid === undefined) {priceMid = "n/a";}
             priceHigh = props.data.priceHigh;
            if (priceHigh) {priceHigh = props.data.priceHigh.toFixed(2); priceHigh = `$${priceHigh}`;}
            else if (priceHigh === null || priceHigh === undefined) {priceHigh = "n/a"; }
            pricemarket = props.data.pricemarket;
            if (pricemarket){pricemarket = props.data.pricemarket.toFixed(2); pricemarket = `$ ${pricemarket}`; }
            else if (pricemarket === null || pricemarket === undefined || pricemarket === 0) {pricemarket = "n/a";}
            pricesUpdated = props.data.pricesUpdated;
            pricesUpdatedUrl = props.data.pricesUpdatedUrl;
      }}, [props.data]);



if (pricesUpdatedUrl === "URL Unavailable"){  return(
    <div className="CardPrices">
 <div className="cardColumn">
    <h2>Normal Market Price: {pricemarket}</h2>
<div className="row">
    <div className="lowColumn">
        <h3>Low</h3>
       <p> {priceLow}</p>
    </div>
    <div className="midColumn">
        <h3>Mid</h3>
       <p> {priceMid}</p>
    </div>
    <div className="highColumn">
        <h3>High</h3>
       <p> {priceHigh}</p>
    </div>
</div>
Prices last updated on {pricesUpdated} using prices from <a href={pricesUpdatedUrl} target= "_blank">Unavailable on TCGPlayer</a>
</div>
</div>)}
else if (pricemarket === "n/a" || props.data === "null" || props.data === null){return(null)}
    else {return(
    <div className="CardPrices">
 <div className="cardColumn" id="cardColumnPricesExtended">
    <h2>Normal Market Price: {pricemarket}</h2>
<div className="row" id="priceRow">
    <div className="lowColumn">
        <h3>Low</h3>
       <p> {priceLow}</p>
    </div>
    <div className="midColumn">
        <h3>Mid</h3>
       <p> {priceMid}</p>
    </div>
    <div className="highColumn">
        <h3>High</h3>
       <p> {priceHigh}</p>
    </div>
</div>
Prices last updated on {pricesUpdated} using prices from <a href={pricesUpdatedUrl} target= "_blank">TCGPlayer</a> <br/>
<a href={pricesUpdatedUrl} target="_blank"><button className="checkPriceButton">Check current prices</button></a>
</div>
</div>)
}}