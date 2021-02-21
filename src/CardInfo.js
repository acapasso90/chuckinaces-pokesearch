import React from "react";

export default function CardInfo(props){
    let loaded = props.loading;
    let id = props.data.id;
    let name = props.data.name;
    let rarity = props.data.rarity;
    let image = props.data.images.large;
    let set = props.data.set.name;
    let series = props.data.set.series;
    let pricetypes = props.data.tcgplayer
    let priceLow = null;
    let priceMid = null;
    let priceHigh = null;
    let pricemarket = null;
//turns object response from API into array
  const newPricelist = Object.values(pricetypes)[2];
 const newPricetypes = Object.values(newPricelist);
 //
 if (newPricetypes.length <=1){const newPriceOneType = Object.values(newPricelist)[0];
 priceLow = newPriceOneType.low;
priceMid = newPriceOneType.mid;
priceHigh = newPriceOneType.high;
pricemarket = newPriceOneType.market;}
      // searches priceTypes for normal pricing and sets values if present



    if (loaded === "loaded"){
if (newPricetypes.length <=1){
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
</ul>
    </div>
    <div className="cardColumn">
    <h2>Market Price: ${pricemarket}</h2>
<div className="row">
    <div className="cardColumn">
        <h3>Low</h3>
       <p> {priceLow}</p>
    </div>
    <div className="cardColumn">
        <h3>Mid</h3>
       <p> {priceMid}</p>
    </div>
    <div className="cardColumn">
        <h3>High</h3>
       <p> {priceHigh}</p>
    </div>
</div>
</div>
    </div>
</div>)}

    else{return(<div className="CardInfo">
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
</ul>
</div>
</div>
</div>)}
}

else{return("loading");}}