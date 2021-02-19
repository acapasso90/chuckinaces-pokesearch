import React from "react";

export default function PokeInfo(props){
    const official = "official-artwork";
    let loaded = props.loading;
    let pokePicture = props.data.sprites.other.[official].front_default;
    let pokeName = props.data.name;

    // Gets weight in hectograms from API
    let unformattedWeight = props.data.weight;
    // Converts to lbs by dividing by 4.536
    let formattedWeight = (unformattedWeight / 4.536);
       // Rounds converted weight to nearest tenth
       let roundedFormattedWeight = Math.round(10*formattedWeight)/10;
    // Converts to kg by dividing by 10
    let metricWeight = (unformattedWeight / 10);
    // Gets height in decimeters
    let unformattedHeight = props.data.height;
    //Converts to feet by diving by 3.048
    let formattedHeight = (unformattedHeight / 3.048);
    // Rounds converted height to nearest tenth
    let roundedFormattedHeight = Math.round(10*formattedHeight)/10;
    // Converts to meters by dividing by 10
    let metricHeight = (unformattedHeight / 10);
console.log(props.data.height);

if (loaded === "loaded"){return(
    <div className="PokeInfo">
        <div className="row">
            <div className="column">
        <img src={pokePicture} alt={pokeName} className="officialImg" />
       <h1 className="pokeName">{pokeName} </h1> 
        </div>
        <div className="column" className="weightColumn">
    <h1>Weight: {roundedFormattedWeight}lbs / {metricWeight}kg </h1>
    <h1>Height: {roundedFormattedHeight}ft / {metricHeight}m</h1>
        </div>
        </div>
    </div>
)}
else {
    return("loading")}

}