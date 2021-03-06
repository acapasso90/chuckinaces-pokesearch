import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import CardInfo from "./CardInfo.js";
import CardSetInstructions from "./CardSetInstructions.js"
import ScrollTop from "./ScrollTop.js";


export default function CardSearch(){
    const [pokemon, Setpokemon] = useState("Detective*Pikachu");
    const [pokemonDisplay, setPokemonDisplay] = useState(" ");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const [arrayLength, setArrayLength] = useState("");
const [setLength, setSetLength] = useState("")
const [pokemonLowercase, setPokemonLowercase] = useState("")
const [instructions, setInstructions] = useState("");


// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data.data);
    setArrayLength(response.data.length);
    setPokemonDisplay(pokemon.replace('*', '  '));
setLoaded(true);
setSetLength(response.data.count);
setLoadedStatus("loaded");}

// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
    Setpokemon(pokemonLowercase);
   }


function setData(response){
    setInstructions(response.data.data);
}

// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
    setPokemonLowercase(event.target.value);
}


useEffect(() => {
    let mounted = true;
    const apiKey = "3e8fc7e6-c2d0-495f-8766-fe8ac6b18ae6";
    const cancelTokenSource = axios.CancelToken.source();
    if (mounted) {axios.get(`https://api.pokemontcg.io/v2/cards?q=set.name:${pokemon}&api_key=${apiKey}`, {
        cancelToken: cancelTokenSource.token
      }).then(setInfo);}
      {axios.get('https://api.pokemontcg.io/v2/sets', {
        cancelToken: cancelTokenSource.token
      }).then(setData);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [pokemon]);


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
    <div className="CardSetSearch" >
           <div className="content-wrap">
           <ScrollTop />
           <div className="header">
        <h1>The ChuckinAces PokéSearch </h1>
        </div>
        <h3 className="searchInstructions">Search by Set Name </h3>
<form onSubmit={handleSubmit}>
<input type="search" onChange={setPokemon} placeholder="Enter a set name" 
className="searchBar" />
 <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
</form>
<p className="pokeSearchInstructions" >Use a * between 2-word named sets (ex. <span className="pink">Vivid*Voltage.</span>)</p>
<CardSetInstructions data={instructions} />
<div className="priceInstructions"><p><span className="pink"> Card prices only includes Lightly Played condition or better </span></p></div> 
<div className="row" id="currentDisplayRow">
<h2><div className="currentlyShowing">Currently displaying: <span className="pink">{pokemonDisplay} </span></div>
<div className="setLength">Number of cards:  <span className="pink">{setLength}  </span></div> </h2> 
</div>
<div className="backdropCards">
{pokeinfo.slice(0, arrayLength).map(function(pokemonNumber){
            return(<CardInfo data={pokemonNumber} loading={loadedStatus}/>)})}</div>
                 <footer>💀scent was here</footer>
        </div>
    </div>
    )}
//  searches default pokemon and shows loading pokeball gif
else{
    return(
<div className="loading">
<div className="header">
        <h1>The ChuckinAces PokéSearch</h1>
        </div>
<h1>Loading Pokés</h1>
    <img src={loading} alt="loading" />
</div>)
}}