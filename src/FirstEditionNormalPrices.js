import React, {useEffect} from "react";

export default function FirstEditionNormalPrices(props){
    useEffect(() => {
        if (props.data){
            let mounted = true;
            if(mounted){
            let loaded = props.data.loaded;
            let firstMarket = props.data.pricemarket;
            if (firstMarket  > 0){firstMarket = firstMarket.toFixed(2);}
            let url = props.data.pricesUpdatedUrl
            let date = props.data.pricesUpdated
            if (firstMarket === "0" || firstMarket === null){firstMarket = "n/a"} else{firstMarket = `$ ${firstMarket}`; }
        let firstHigh = props.data.priceHigh;
        if (firstHigh  > 0){firstHigh = firstHigh.toFixed(2);}
        let firstLow = props.data.priceLow;
        if (firstLow  > 0 ){ firstLow = firstLow.toFixed(2);}
        let firstMid = props.data.priceMid;
        if (firstMid  > 0 ){ firstMid = firstMid.toFixed(2);}}
      }}, [props.data]);

if (props.data != "null" && props.data != "" && props.data !=null){
    let loaded = props.data.loaded;
    let firstMarket = props.data.pricemarket;
    if (firstMarket  > 0){firstMarket = firstMarket.toFixed(2);}
    let url = props.data.pricesUpdatedUrl
    let date = props.data.pricesUpdated
    if (firstMarket === "0" || firstMarket === null){firstMarket = "n/a"} else{firstMarket = `$ ${firstMarket}`; }
let firstHigh = props.data.priceHigh;
if (firstHigh  > 0){firstHigh = firstHigh.toFixed(2);}
let firstLow = props.data.priceLow;
if (firstLow  > 0 ){ firstLow = firstLow.toFixed(2);}
let firstMid = props.data.priceMid;
if (firstMid  > 0 ){ firstMid = firstMid.toFixed(2);}
return(<div className="FirstEditionPrices">
 <div className="cardColumn" id="cardColumnPricesExtended">
    <h2>1st Edition Market Price: {firstMarket}</h2>
<div className="row" id="priceRow">
    <div className="lowColumn">
        <h3>Lowest</h3>
       <p> ${firstLow}</p>
    </div>
    <div className="midColumn">
        <h3>Mid</h3>
       <p> ${firstMid}</p>
    </div>
    <div className="highColumn">
        <h3>Highest</h3>
       <p> ${firstHigh}</p>
    </div>
</div>
Prices last updated on {date} using prices from <a href={url} target= "_blank">TCGPlayer</a> <br/>
<a href={url} target="_blank"><button className="checkPriceButton">Check current prices</button></a>
</div>
</div>)}
else return(null)} 