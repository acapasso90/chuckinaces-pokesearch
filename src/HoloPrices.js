import React from "react";

export default function HoloPrices(props){

    
if (props.data != "null" && props.data != ""){ const holoMarket = props.data.pricemarket;
const holoHigh = props.data.priceHigh;
const holoLow = props.data.priceLow;
const holoMid = props.data.priceMid;}
if (props.reverse != "null" && props.reverse != "") {
    const reverseMarket = props.reverse.pricemarket;
    const reverseHigh = props.reverse.priceHigh;
    const reverseLow = props.reverse.priceLow;
    const reverseMid = props.reverse.priceMid;
}
return(<div className="HoloPrices">


</div>)} 