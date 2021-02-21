import React from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

export default function CardInfo(props){
    let loaded = props.loading;
    let id = props.data.id;
    let name = props.data.name;
    let rarity = props.data.rarity;
    let image = props.data.images.large;
    let set = props.data.set.name;
    let series = props.data.set.series;
    let pricetypes = props.data.tcgplayer
    let normalMarket = null;
    let normalLow = null;
    let normalHigh = null;
    let normalMid = null;
      // searches priceTypes for normal pricing and sets values if present
    if (Object.values(pricetypes).indexOf('normal')){ normalMarket = props.data.tcgplayer.prices.normal.market;
        normalLow = props.data.tcgplayer.prices.normal.low;
        normalHigh = props.data.tcgplayer.prices.normal.high;
        normalMid = props.data.tcgplayer.prices.normal.mid;
    console.log(normalMid)}

    if (loaded === "loaded"){
     return(<div className="CardInfo">
<img src={image} alt="name" className="cardImage" />
    </div>)
}
else{return("loading");}}