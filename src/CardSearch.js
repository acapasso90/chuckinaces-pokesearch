import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import CardInfo from "./CardInfo.js";


export default function CardSearch(){
    const [pokemon, Setpokemon] = useState("spoink");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const [arrayLength, setArrayLength] = useState("");
const [pokemonLowercase, setPokemonLowercase] = useState("")
// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data.data);
    setArrayLength(response.data.length);
setLoaded(true);
setLoadedStatus("loaded");}

// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
    Setpokemon(pokemonLowercase);
   }


// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
    setPokemonLowercase((event.target.value).toLowerCase());
  
}


useEffect(() => {
    let mounted = true;
    const apiKey = "3e8fc7e6-c2d0-495f-8766-fe8ac6b18ae6";
    const cancelTokenSource = axios.CancelToken.source();
    if (mounted) {axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}&api_key=${apiKey}`, {
        cancelToken: cancelTokenSource.token
      }).then(setInfo);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [pokemon]);


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
    <div className="CardSearch" >
        <p>Search by pokemon name. Can put * after incomplete name to pull up many (Char* pulls up Charmander, Charmeleon, Charizard) </p>
<form onSubmit={handleSubmit}>
<input type="text" onChange={setPokemon} placeholder="Enter Pokemon name" 
className="searchBar" />
<input type="submit" placeholder="Submit" className="submitButton" />
</form>
<CardInfo data={pokeinfo[0]} loading={loadedStatus} />
    </div>)}
//  searches default pokemon and shows loading pokeball gif
else{
    return(
<div className="loading">
    <img src={loading} alt="loading" />
</div>)
}}