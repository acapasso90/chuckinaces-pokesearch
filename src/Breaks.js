import React from "react";
import ScrollTop from "./ScrollTop.js";
import squirtle from "./squirtle.gif"

export default function Breaks(){
const set = ["Base", "Jungle", "Fossil", "Base Set 2", "Team Rocket", "Gym Heroes", "Gym Challenge", "Neo Genesis", "Neo Discovery", "Neo Revelation", "Neo Destiny",
"Legendary Collection", "Expedition Base Set", "Aquapolis", "Skyridge", "EX Ruby & Sapphire", "EX Sandstorm", "EX Dragon", "EX Team Magma vs Team Aqua", "EX Hidden Legends",
"EX FireRed & LeafGreen", "EX Team Rocket Returns", "EX Deoxys", "EX Emerald", "EX Unseen Forces", "EX Delta Species", "EX Legend Maker", "EX Holon Phantoms", "EX Crystal Guardians",
"EX Dragon Frontiers", "EX Power Keepers", "Diamond & Pearl", "Mysterious Treasures", "Secret Wonders", "Great Encounters", "Legends Awakened", "Stormfront", "Platinum", 
"Rising Rivals", "Supreme Victors", "Arceus", "HeartGold & SoulSilver", "Unleashed", "Undaunted", "Triumphant", "Call of Legends", "Black & White", "Emerging Powers", "Noble Victories",
"Next Destinies", "Dark Explorers", "Dragons Exalted", "Boundaries Crossed", "Plasma Storm", "Plasma Freeze", "Plasma Blast", "Legendary Treasures", "XY", "Flashfire", "Furious Fists",
"Phantom Forces", "Primal Clash", "Roaring Skies", "Ancient Origins", "BREAKthrough", "BREAKpoint", "Generations", "Fates Collide", "Steam Siege", "Evolutions", "Sun & Moon", "Guardians Rising",
"Burning Shadows", "Shining Legends", "Crimson Invasion", "Ultra Prism"];
const cardNumbers = ["3", "3", "3", "2", "3", "4", "4", "1", "0", "3", "3", "0", "2", "2", "2", "0", "0", "0", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2",
"2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3",
"3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4"];

const length = set.length;
    return(<div className="Breaks">
           <div className="content-wrap">
           <div className="header">
        <h1>The ChuckinAces PokéSearch</h1>
        </div>
               <ScrollTop />
<div className="credit"> Displays number of cards to move from the back of a pack when breaking based on Set Name. 
</div>
<img src={squirtle} alt="squirtleSquad" className="squirtleGif"/>
<div className="backdropBreak">
<div className="row">
<div className="sets">
<ul>
<li className="liHeader">
<h3 > Set Name</h3></li>

{set.slice(0, length).map(function(setName){
    return(<li className="breakSetName" key={setName.toString()} > {setName}  </li>)})}
    </ul>
    </div>
    <div className="cardNumberPull">
        <ul>
            <li className="liHeader">
<h3 ># to Move from Back</h3></li>
{cardNumbers.slice(0, length).map(function(cardNumber){
    return(<li className="breakSetNumber" > {cardNumber}  </li>)})}
</ul>
    </div>
</div>
</div>
<footer>
All information used is taken from 

<a href="http://thepokegeeks.com/booster-card-tricks/" target="_blank"> The PokeGeeks</a>. (They've also made a video <a href="https://www.youtube.com/watch?v=XjXTdrXyUY8" target="_blank">here</a>.)
Ghost-type backdrop art by Ethan Walker. <br/>
<div className="scent"> 💀scent was here </div></footer> 
</div>
</div>)
}