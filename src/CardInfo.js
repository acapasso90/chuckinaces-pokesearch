import React, {useState, useEffect} from "react";
import CardPrices from "./CardPrices.js";
import HoloPrices from "./HoloPrices.js";

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
    let newPriceTwoType = null;
    
    const [priceData, setPriceData] = useState("");
    const [holoPriceData, setHoloPriceData] = useState("");
    const [reverseholoPriceData, setReverseHoloPriceData] = useState("");

        useEffect(() => {
            if (pricetypes){let priceListLength = Object.values(pricetypes).length;
                if (priceListLength >= 3 ) { newPricelist = Object.values(pricetypes)[2];}
          pricesUpdated = props.data.tcgplayer.updatedAt;
          //Grabs the first value in the array of prices. If there's multiple the first is typically normal
          newPriceOneType = Object.values(newPricelist)[0];
       // if prices includes HoloFoil and Normal types sets Normal to first object in array and holo prices to second.
       if (Object.getOwnPropertyNames(newPricelist).includes("holofoil") && Object.getOwnPropertyNames(newPricelist).includes("normal")){
        newPriceTwoType = Object.values(newPricelist)[1];   
        setPriceData({priceLow: newPriceOneType.low,
        priceMid: newPriceOneType.mid,
        priceHigh: newPriceOneType.high, 
        pricemarket: newPriceOneType.market,
   pricesUpdated,
   pricesUpdatedUrl})
   setHoloPriceData({priceLow: newPriceTwoType.low,
    priceMid: newPriceTwoType.mid,
    priceHigh: newPriceTwoType.high, 
    pricemarket: newPriceTwoType.market,
pricesUpdated,
pricesUpdatedUrl})
} 
else {setHoloPriceData("null");}
       // if prices includes reverseHoloFoil and Normal types sets Normal to first object in array and holo prices to second.
       if (Object.getOwnPropertyNames(newPricelist).includes("reverseHolofoil") && Object.getOwnPropertyNames(newPricelist).includes("normal")){
            newPriceTwoType = Object.values(newPricelist)[1];   
            setPriceData({priceLow: newPriceOneType.low,
            priceMid: newPriceOneType.mid,
            priceHigh: newPriceOneType.high, 
            pricemarket: newPriceOneType.market,
       pricesUpdated,
       pricesUpdatedUrl})
       setReverseHoloPriceData({priceLow: newPriceTwoType.low,
        priceMid: newPriceTwoType.mid,
        priceHigh: newPriceTwoType.high, 
        pricemarket: newPriceTwoType.market,
    pricesUpdated,
    pricesUpdatedUrl})
    } 
    else {setReverseHoloPriceData("null");} 
                 pricesUpdatedUrl = props.data.tcgplayer.url;
            setPriceData({priceLow: newPriceOneType.low,
                priceMid: newPriceOneType.mid,
                priceHigh: newPriceOneType.high, 
                pricemarket: newPriceOneType.market,
           pricesUpdated,
           pricesUpdatedUrl})}
        }, [id]);
        

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
    <HoloPrices data={holoPriceData} reverse={reverseholoPriceData} />
    </div>
</div>)}

else{return("loading");}}