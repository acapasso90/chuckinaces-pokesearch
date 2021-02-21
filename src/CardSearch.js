import React, {useState} from "react";
import axios from "axios";
import loading from "./loading.gif";



export default function CardSearch(){
    const [pokemon, Setpokemon] = useState("spoink");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data)
setLoaded(true);
setLoadedStatus("loaded");}

// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
    searchPokemon();}

// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
   const pokemonLowercase = (event.target.value).toLowerCase();
    Setpokemon(pokemonLowercase);
}

// Searches pokemon and makes axios request to setInfo
function searchPokemon () {   const apiKey = "3e8fc7e6-c2d0-495f-8766-fe8ac6b18ae6";
const apiURL = `https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&api_key=${apiKey}`;
axios.get(apiURL).then(setInfo);}


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
    <div className="CardSearch" >
        <p>Search by pokemon name. Can put * after incomplete name to pull up many (Char* pulls up Charmander, Charmeleon, Charizard) </p>
<form onSubmit={handleSubmit}>
<input type="text" onChange={setPokemon} placeholder="Enter Pokemon name" 
className="searchBar" />
<input type="submit" placeholder="Submit" className="submitButton" />
</form>

    </div>)}
//  searches default pokemon and shows loading pokeball gif
else{ searchPokemon();
    return(
<div className="loading">
    <img src={loading} alt="loading" />
</div>)
}}