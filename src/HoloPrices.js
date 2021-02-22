import React from "react";

export default function HoloPrices(props){

if (props.data != "null" && props.data != ""){let holoMarket = props.data.pricemarket.toFixed(2);
    if (holoMarket === "0" || holoMarket === null){holoMarket = "n/a"} else{holoMarket = `$ ${holoMarket}`; }
const holoHigh = props.data.priceHigh.toFixed(2);
const holoLow = props.data.priceLow.toFixed(2);
const holoMid = props.data.priceMid.toFixed(2);
return(<div className="HoloPrices">
 <div className="cardColumn">
    <h2>Holo Market Price: {holoMarket}</h2>
<div className="row">
    <div className="lowColumn">
        <h3>Holo Low</h3>
       <p> ${holoLow}</p>
    </div>
    <div className="midColumn">
        <h3>Holo Mid</h3>
       <p> ${holoMid}</p>
    </div>
    <div className="highColumn">
        <h3>Holo High</h3>
       <p> ${holoHigh}</p>
    </div>
</div>
</div>

</div>)}
if (props.reverse != "null" && props.reverse != "") {
    let reverseMarket = props.reverse.pricemarket.toFixed(2);
    if (reverseMarket === "0" || reverseMarket === null){reverseMarket = "n/a"} else{reverseMarket = `$ ${reverseMarket}`; }
    const reverseHigh = props.reverse.priceHigh.toFixed(2);
    const reverseLow = props.reverse.priceLow.toFixed(2);
    const reverseMid = props.reverse.priceMid.toFixed(2);
    return(<div className="ReverseHoloPrices">
    <div className="cardColumn">
       <h2>Reverse Holo Market Price: {reverseMarket}</h2>
   <div className="row">
       <div className="lowColumn">
           <h3>Reverse Holo Low</h3>
          <p> ${reverseLow}</p>
       </div>
       <div className="midColumn">
           <h3>Reverse Holo Mid</h3>
          <p> ${reverseMid}</p>
       </div>
       <div className="highColumn">
           <h3>Reverse Holo High</h3>
          <p> ${reverseHigh}</p>
       </div>
   </div>
   </div>
   
   </div>)
}
else return(null)} 