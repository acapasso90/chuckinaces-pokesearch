import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import CardInfo from "./CardInfo.js";
import ScrollTop from "./ScrollTop.js";


export default function CardSearch(){
    const [pokemon, Setpokemon] = useState("pikachu*vmax");
    const [pokemonDisplay, setPokemonDisplay] = useState("tag*team");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const [arrayLength, setArrayLength] = useState("");
const [setLength, setSetLength] = useState("")
const [pokemonLowercase, setPokemonLowercase] = useState("")
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
           <div className="content-wrap">
               <ScrollTop />
           <div className="header">
        <h1>The ChuckinAces PokéSearch </h1>
        </div>
        <h3 className="searchInstructions">Search by Pokémon Name </h3>
<form onSubmit={handleSubmit}>
<input type="search" onChange={setPokemon} placeholder="Enter Pokémon name" 
className="searchBar" />
 <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
</form>
<p className="pokeSearchInstructions">Use a * between 2-word named cards (ex. <span className="pink">Ball*Guy. Venusaur*V. Galarian*Mr*Rime.</span>) Can put * after incomplete name to pull up many (<span className="pink">Char*</span> pulls up Charmander, Charmeleon, Charizard).  Can search <span className="pink">V for all Vmax.</span></p>
<br />
<div className="priceInstructions"><span className="pink"> <p>Card prices only includes Lightly Played condition or better </p> </span></div> 
<div className="row" id="currentDisplayRow">
<h2><div className="currentlyShowing">Currently displaying: <span className="pink">{pokemonDisplay} </span></div>
<div className="setLength">Number of cards:  <span className="pink">{setLength} </span></div></h2> 
</div>
<div className="backdropCards">
{pokeinfo.slice(0, arrayLength).map(function(pokemonNum){
            return(<CardInfo data={pokemonNum} loading={loadedStatus} />)})} </div>
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