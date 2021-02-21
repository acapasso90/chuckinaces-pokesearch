import React, {useState, useEffect} from "react";
import CardPrices from "./CardPrices.js";

export default function CardInfo(props){
    let loaded = props.loading;
    let id = props.data.id;
    let name = props.data.name;
    let rarity = props.data.rarity;
    let image = props.data.images.large;
    let set = props.data.set.name;
    let release =  props.data.set.releaseDate;
    let series = props.data.set.series;
    let pricetypes = props.data.tcgplayer;
    let pricesUpdated = props.data.tcgplayer.updatedAt;
    let pricesUpdatedUrl = props.data.tcgplayer.url;

    const [priceData, setPriceData] = useState("");
//turns object response from API into array
  const newPricelist = Object.values(pricetypes)[2];
 const newPricetypes = Object.values(newPricelist);
 //
 const newPriceOneType = Object.values(newPricelist)[0];
      // searches priceTypes for normal pricing and sets values if present


      useEffect(() => {
        setPriceData({priceLow: newPriceOneType.low,
            priceMid: newPriceOneType.mid,
            priceHigh: newPriceOneType.high,
            pricemarket: newPriceOneType.market,
       pricesUpdated,
       pricesUpdatedUrl}
            )
    }, [id]);
    


    if (loaded === "loaded"){
     return(<div className="CardInfo">
         <div className="row">
             <div className="cardColumn">
             <h1>{name}</h1> 
<img src={image} alt="name" className="cardImage" />
</div>
<div className="cardColumn">
<ul>
    <li>id: {id}</li>
    <li>rarity: {rarity}</li>
    <li>set: {set}</li>
    <li>series: {series}</li>
    <li>released on: {release}</li>
</ul>
    </div>
    <CardPrices data={priceData} />
    </div>
</div>)}

else{return("loading");}}