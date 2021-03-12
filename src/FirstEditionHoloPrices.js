import React, {useEffect} from "react";

export default function FirstEditionHoloPrices(props){
    useEffect(() => {
        if (props.data){
            let mounted = true;
            if(mounted){
            let loaded = props.data.loaded;
            let firstHoloMarket = props.data.pricemarket;
            if (firstHoloMarket  > 0){firstHoloMarket = firstHoloMarket.toFixed(2);}
            let url = props.data.pricesUpdatedUrl
            let date = props.data.pricesUpdated
            if (firstHoloMarket === "0" || firstHoloMarket === null){firstHoloMarket = "n/a"} else{firstHoloMarket = `$ ${firstHoloMarket}`; }
        let firstHoloHigh = props.data.priceHigh;
        if (firstHoloHigh  > 0){firstHoloHigh = firstHoloHigh.toFixed(2);}
        let firstHoloLow = props.data.priceLow;
        if (firstHoloLow  > 0 ){ firstHoloLow = firstHoloLow.toFixed(2);}
        let firstHoloMid = props.data.priceMid;
        if (firstHoloMid  > 0 ){ firstHoloMid = firstHoloMid.toFixed(2);}}
      }}, [props.data]);

if (props.data != "null" && props.data != "" && props.data !=null){
    let loaded = props.data.loaded;
    let firstHoloMarket = props.data.pricemarket;
    if (firstHoloMarket  > 0){firstHoloMarket = firstHoloMarket.toFixed(2);}
    let url = props.data.pricesUpdatedUrl
    let date = props.data.pricesUpdated
    if (firstHoloMarket === "0" || firstHoloMarket === null){firstHoloMarket = "n/a"} else{firstHoloMarket = `$ ${firstHoloMarket}`; }
let firstHoloHigh = props.data.priceHigh;
if (firstHoloHigh  > 0){firstHoloHigh = firstHoloHigh.toFixed(2);}
let firstHoloLow = props.data.priceLow;
if (firstHoloLow  > 0 ){ firstHoloLow = firstHoloLow.toFixed(2);}
let firstHoloMid = props.data.priceMid;
if (firstHoloMid  > 0 ){ firstHoloMid = firstHoloMid.toFixed(2);}
return(<div className="FirstEditionHoloPrices">
 <div className="cardColumn" id="cardColumnPricesExtended">
    <h2>1st Edition Holo Market Price: {firstHoloMarket}</h2>
<div className="row" id="priceRow">
    <div className="lowColumn">
        <h3>Lowest</h3>
       <p> ${firstHoloLow}</p>
    </div>
    <div className="midColumn">
        <h3>Mid</h3>
       <p> ${firstHoloMid}</p>
    </div>
    <div className="highColumn">
        <h3>Highest</h3>
       <p> ${firstHoloHigh}</p>
    </div>
</div>
Prices last updated on {date} using prices from <a href={url} target= "_blank">TCGPlayer</a> <br/>
<a href={url} target="_blank"><button className="checkPriceButton">Check current prices</button></a>
</div>
</div>)}
else return(null)} 