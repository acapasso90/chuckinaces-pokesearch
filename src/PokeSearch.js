import React, {useState} from "react"
import axios from "axios";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("spoink");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const searchIcon = <i class="fas fa-search"></i>;

// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data)
setLoaded(true);
setLoadedStatus("loaded");
}


// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
   searchPokemon();
}

// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
   const pokemonLowercase = (event.target.value).toLowerCase();
    Setpokemon(pokemonLowercase);
}

// Searches pokemon and makes axios request to setInfo
function searchPokemon () {    const APIurl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
axios.get(APIurl).then(setInfo);}


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
        <div className="PokeSearch" key={pokeinfo}>
            <p>
            Search by pokemon number or name.</p>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={setPokemon} placeholder="Enter Pokemon name / number" 
    className="searchBar" />
    <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
    </form>
    <ul>
                    <li> Zamazenta and Zacian need -hero <span className="pink">(ex: Zamazenta-Hero)</span> </li>
                    <li>  Darmanitan needs "-standard" <span className="pink">(ex: Darmanitan-Standard / Darmanitan-Standard-Galar)</span> </li>
                    <li>   Mimikyu needs -disguised <span className="pink">(ex: Mimikyu-Disguised)</span>. </li>
                    </ul>
    <PokeInfo data={pokeinfo} loading={loadedStatus} />
        </div>)}
//  searches default pokemon and shows loading pokeball gif
else{ searchPokemon();
    return(
<div className="loading">
    <img src={loading} alt="loading" />
</div>

)}
}