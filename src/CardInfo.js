import React, {useState, useEffect} from "react";
import CardPrices from "./CardPrices.js";
import HoloPrices from "./HoloPrices.js";
import ReverseHoloPrices from "./ReverseHoloPrices.js";
import FirstEditionNormalPrices from "./FirstEditionNormalPrices.js";
import FirstEditionHoloPrices from "./FirstEditionHoloPrices.js";
export default function CardInfo(props){
    let loaded = props.loading;
    let data = props.data
    let id = props.data.id;
    let name = props.data.name;
    if (name === "Hop"){name = "f*ing Hop";}
    if (name === "Sizzlipede"){name = "Bacon";}
    let rarity = props.data.rarity;
    if (!rarity){rarity = "n/a"}
    let set = props.data.set.name;
    let release =  props.data.set.releaseDate;
    let series = props.data.set.series;
    let imageUrl = props.data.images.large;
    const [image, setImage] = useState(imageUrl)
    let pricetypes = props.data.tcgplayer;
    let pricesUpdated = null;
    let pricesUpdatedUrl = null;
    let newPricelist =  null;
    let newPriceOneType = null;
    let newPriceTwoType = null;
    let holoPriceList = null;
    let reverseHoloPriceList = null;   
    const normal = document.querySelector(".normal");
    const [priceData, setPriceData] = useState("");
    const [holoPriceData, setHoloPriceData] = useState("");
    const [reverseholoPriceData, setReverseHoloPriceData] = useState("");
    const [firstEditionPriceData, setFirstEditionPriceData] = useState("");
    const [firstEditionHoloPriceData, setFirstEditionHoloPriceData] = useState("");


        useEffect(() => { 
            setImage(data.images.large)     }
, [id]);


useEffect(() => { 
    if (pricetypes){newPricelist = Object.values(pricetypes)[2];
  pricesUpdated = props.data.tcgplayer.updatedAt;
  pricesUpdatedUrl = props.data.tcgplayer.url;

  //Grabs the first value in the array of prices. If there's multiple the first is typically normal
  newPriceOneType = Object.values(newPricelist)[0];
  newPriceTwoType = Object.values(newPricelist)[1];  
  // sets holofoil pricelist
  holoPriceList = pricetypes.prices.holofoil; 
  // sets reverse holo price list
  reverseHoloPriceList = pricetypes.prices.reverseHolofoil;   
  if ( newPriceOneType != undefined && newPricelist){
// if prices includes HoloFoil and Normal types sets Normal to first object in array and holo prices to second.
if (Object.getOwnPropertyNames(newPricelist).includes("holofoil") && Object.getOwnPropertyNames(newPricelist).includes("normal")){
newPriceTwoType = Object.values(newPricelist)[1];   
setPriceData({priceLow: newPriceOneType.low,
priceMid: newPriceOneType.mid,
priceHigh: newPriceOneType.high, 
pricemarket: newPriceOneType.market,
loaded: loaded,
pricesUpdated,
pricesUpdatedUrl})
setHoloPriceData({priceLow: holoPriceList.low,
priceMid: holoPriceList.mid,
priceHigh: holoPriceList.high, 
pricemarket: holoPriceList.market,
pricesUpdated,
pricesUpdatedUrl})
} 
// if there is one price available and it is holo set holo pricing
else if (newPriceOneType != undefined && (Object.getOwnPropertyNames(newPricelist).includes("holofoil")))
{setHoloPriceData({priceLow: holoPriceList.low,
priceMid: holoPriceList.mid,
priceHigh: holoPriceList.high, 
pricemarket: holoPriceList.market,
pricesUpdated,
pricesUpdatedUrl})}
else {setHoloPriceData("null");}
// if prices includes reverseHoloFoil and Normal types sets Normal to first object in array and holo prices to second.
if (Object.getOwnPropertyNames(newPricelist).includes("reverseHolofoil") && Object.getOwnPropertyNames(newPricelist).includes("normal")){
newPriceTwoType = Object.values(newPricelist)[1];   
setPriceData({priceLow: newPriceOneType.low,
priceMid: newPriceOneType.mid,
priceHigh: newPriceOneType.high, 
pricemarket: newPriceOneType.market,
pricesUpdated,
loaded: loaded,
pricesUpdatedUrl})
setReverseHoloPriceData({priceLow: reverseHoloPriceList.low,
priceMid: reverseHoloPriceList.mid,
priceHigh: reverseHoloPriceList.high, 
pricemarket: reverseHoloPriceList.market,
pricesUpdated,
loaded: loaded,
pricesUpdatedUrl})
} 
// if there is one price available and it is reverse holo set reverse holo pricing
else if ( newPriceOneType != undefined  && (Object.getOwnPropertyNames(newPricelist).includes("reverseHolofoil"))){
setReverseHoloPriceData({priceLow: reverseHoloPriceList.low,
    priceMid: reverseHoloPriceList.mid,
    priceHigh: reverseHoloPriceList.high, 
    pricemarket: reverseHoloPriceList.market,
pricesUpdated,
loaded: loaded,
pricesUpdatedUrl})}
else {setReverseHoloPriceData("null");}

// if prices includes 1st Edition and Normal types sets Normal to first object in array and holo prices to second.
if (Object.getOwnPropertyNames(newPricelist).includes("1stEditionNormal") && Object.getOwnPropertyNames(newPricelist).includes("normal")){  
setPriceData({priceLow: newPriceOneType.low,
priceMid: newPriceOneType.mid,
priceHigh: newPriceOneType.high, 
pricemarket: newPriceOneType.market,
pricesUpdated,
loaded: loaded,
pricesUpdatedUrl})
setFirstEditionPriceData({priceLow: newPriceTwoType.low,
priceMid: newPriceTwoType.mid,
priceHigh: newPriceTwoType.high, 
pricemarket: newPriceTwoType.market,
pricesUpdated,
loaded: loaded,
pricesUpdatedUrl})
}else{setFirstEditionPriceData(null)}

// if prices includes 1st Edition and Normal types sets Normal to first object in array and holo prices to second.
if (Object.getOwnPropertyNames(newPricelist).includes("1stEditionHolofoil") && Object.getOwnPropertyNames(newPricelist).includes("holofoil")){  
    setHoloPriceData({priceLow: newPriceOneType.low,
    priceMid: newPriceOneType.mid,
    priceHigh: newPriceOneType.high, 
    pricemarket: newPriceOneType.market,
    pricesUpdated,
    loaded: loaded,
    pricesUpdatedUrl})
    setFirstEditionHoloPriceData({priceLow: newPriceTwoType.low,
    priceMid: newPriceTwoType.mid,
    priceHigh: newPriceTwoType.high, 
    pricemarket: newPriceTwoType.market,
    pricesUpdated,
    loaded: loaded,
    pricesUpdatedUrl})
    }else{setFirstEditionHoloPriceData(null)}
} 
if (pricesUpdatedUrl === null || pricesUpdatedUrl === undefined){pricesUpdatedUrl = "URL Unavailable"}

// if there is one price available and it is normal set normal pricing
if ( newPriceOneType != undefined  && (Object.getOwnPropertyNames(newPricelist).includes("normal"))){
setPriceData({priceLow: newPriceOneType.low,
priceMid: newPriceOneType.mid,
priceHigh: newPriceOneType.high, 
pricemarket: newPriceOneType.market,
pricesUpdated,
loaded: loaded,
pricesUpdatedUrl})}
else{setPriceData("null");}}
}
, [id]);

    if (loaded === "loaded"){
     return(<div className="CardInfo">
         <div className="row">
             <div className="cardimageColumn">
             <h1 className="pokeName" id="pokeName">{name}</h1> 
            <img src={image} alt={name} className="cardImage" key={image} loading="lazy"/>
</div>
<div className="cardInfoColumn">
<ul>
    <li className="id" id="liHeader">ID#</li>
    <li>{id}</li>
    <li className="rarity" id="liHeader">Rarity</li>
    <li>{rarity}</li>
    <li className="set" id="liHeader">Set</li>
    <li>{set}</li>
    <li className="series" id="liHeader">Series</li>
    <li>{series}</li>
    <li className="released" id="liHeader">Released on</li>
    <li>{release}</li>
</ul>
    </div>
<div className="cardPriceColumn">
    
    <CardPrices data={priceData} /> <br /> 
    <div className="holo"> <HoloPrices data={holoPriceData} /> </div> <br /> 
    <div className="firstEditionHolo"> <FirstEditionHoloPrices data={firstEditionHoloPriceData} /></div>    <br />
    <div className="reverseholo"> <ReverseHoloPrices data={reverseholoPriceData} /></div> <br />
    <div className="firstEdition"> <FirstEditionNormalPrices data={firstEditionPriceData} /></div>
    </div>
    </div>
</div>)}
else{return("loading");}}