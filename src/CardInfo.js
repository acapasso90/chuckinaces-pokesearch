import React, {useState, useEffect} from "react";
import CardPrices from "./CardPrices.js";

export default function CardInfo(props){
    let loaded = props.loading;
    let id = props.data.id;
    let name = props.data.name;
    let rarity = props.data.rarity;
    let set = props.data.set.name;
    let release =  props.data.set.releaseDate;
    let series = props.data.set.series;
    let image = props.data.images.large;
    let pricetypes = props.data.tcgplayer;
    let pricesUpdated = null;
    let pricesUpdatedUrl = null;
    let newPricelist =  null;
    let newPriceOneType = null;

        useEffect(() => {
            if (pricetypes){let priceListLength = Object.values(pricetypes).length;
                if (priceListLength >= 3 ) { newPricelist = Object.values(pricetypes)[2];}
                 pricesUpdated = props.data.tcgplayer.updatedAt;
      newPriceOneType = Object.values(newPricelist)[0];
                 pricesUpdatedUrl = props.data.tcgplayer.url;
            setPriceData({priceLow: newPriceOneType.low,
                priceMid: newPriceOneType.mid,
                priceHigh: newPriceOneType.high, 
                pricemarket: newPriceOneType.market,
           pricesUpdated,
           pricesUpdatedUrl})}
        }, [id]);
        
    
    const [priceData, setPriceData] = useState("");
//turns object response from API into array


 //

      // searches priceTypes for normal pricing and sets values if present





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