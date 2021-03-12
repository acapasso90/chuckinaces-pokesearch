import React, {useEffect} from "react";

export default function PokeInfo(props){
    const official = "official-artwork";
    let loaded = props.loading;
    let pokePicture = props.data.sprites.other.[official].front_default;
    let pokeName = props.data.name;
    if (pokeName === "mimikyu-disguised"){pokeName = `Scary Pikachu`}
    if (pokeName === "sizzlipede"){pokeName = "Bacon";}
     if (pokeName === "wailmer"){pokeName = "Whaleload"}
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



    useEffect(() => {
        let mounted = true;
        if (mounted) {const official = "official-artwork";
        let loaded = props.loading;
        let pokePicture = props.data.sprites.other.[official].front_default;
        let pokeName = props.data.name;
        if (pokeName === "mimikyu-disguised"){pokeName = `Scary Pikachu`}
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
        let metricHeight = (unformattedHeight / 10);}
        }, [props.data]);
    



if (loaded === "loaded"){return(
    <div className="PokeInfo">
        <div className="row">
            <div className="column">
        <img src={pokePicture} alt={pokeName} className="officialImg" />
       <h1 className="pokeName">{pokeName} </h1> 
        </div>
        <div className="statsColumn">
        <h2 className="statTitle">Base Stats</h2>
        <div className="stats">
        {props.data.stats.slice(0, 6).map(function(stats){
    let statName = stats.stat.name;
let stat = stats.base_stat;
return(<div className="stats">
    {statName} : {stat}
    
    </div>);})}
    </div>
        </div>
        <div className="column" className="weightColumn">
        <div className="heightRow">
        <h2 className="height">Height  <div className="heightDetails"> {roundedFormattedHeight} ft / {metricHeight} m  </div></h2> </div>
        <div className="weightRow">
        <h2 className="weight"> Weight <div className="weightDetails"> {roundedFormattedWeight} lbs / {metricWeight} kg  </div> </h2> </div>
        </div>
        </div>
    </div>
)}
else {
    return("loading")}

}