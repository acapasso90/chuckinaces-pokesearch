import React, {useEffect} from "react";

export default function ReverseHoloPrices(props){
    useEffect(() => {
        if (props.data){
            let mounted = true;
            if(mounted){
            let loaded = props.data.loaded;
            let holoMarket = props.data.pricemarket;
            if (holoMarket  > 0){holoMarket = holoMarket.toFixed(2);}
            let url = props.data.pricesUpdatedUrl
            let date = props.data.pricesUpdated
            if (holoMarket === "0" || holoMarket === null){holoMarket = "n/a"} else{holoMarket = `$ ${holoMarket}`; }
        let holoHigh = props.data.priceHigh;
        if (holoHigh  > 0){holoHigh = holoHigh.toFixed(2);}
        let holoLow = props.data.priceLow;
        if (holoLow  > 0 ){ holoLow = holoLow.toFixed(2);}
        let holoMid = props.data.priceMid;
        if (holoMid  > 0 ){ holoMid = holoMid.toFixed(2);}}
      }}, [props.data]);
    
    if (props.data != "null" && props.data != ""){
        let loaded = props.data.loaded;
        let holoMarket = props.data.pricemarket;
        let url = props.data.pricesUpdatedUrl
        let date = props.data.pricesUpdated
        if (holoMarket === "0" || holoMarket === null){holoMarket = "n/a"} else{holoMarket = `$ ${holoMarket}`; }
    let holoHigh = props.data.priceHigh;
    if (holoHigh  > 0 ){ holoHigh = holoHigh.toFixed(2);}
    let holoLow = props.data.priceLow;
    if (holoLow  > 0 ){ holoLow = holoLow.toFixed(2);}
    let holoMid = props.data.priceMid;
    if (holoMid  > 0 ){ holoMid = holoMid.toFixed(2);}
    return(<div className="HoloPrices">
     <div className="cardColumn">
        <h2>Reverse Holo Market Price: {holoMarket}</h2>
    <div className="row" id="priceRow">
        <div className="lowColumn">
            <h3>Low</h3>
           <p> ${holoLow}</p>
        </div>
        <div className="midColumn">
            <h3>Mid</h3>
           <p> ${holoMid}</p>
        </div>
        <div className="highColumn">
            <h3>High</h3>
           <p> ${holoHigh}</p>
        </div>
    </div>
    </div>
    Prices last updated on {date} using prices from <a href={url} target= "_blank">TCGPlayer</a>
    </div>)}
    else return(null)}