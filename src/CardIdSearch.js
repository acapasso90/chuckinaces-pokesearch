import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import CardInfo from "./CardInfo.js";
import ScrollTop from "./ScrollTop.js";

export default function CardIdSearch(){
    const [instructions, setInstructions] = useState("");
    const [pokemon, Setpokemon] = useState("smp-SM233");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const [pokemonLowercase, setPokemonLowercase] = useState("")
// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data.data);
setLoaded(true);
setLoadedStatus("loaded");}


// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
    Setpokemon(pokemonLowercase);
   }


// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
    setPokemonLowercase(event.target.value);
}


useEffect(() => {
    let mounted = true;
    const cancelTokenSource = axios.CancelToken.source(); 
    if (mounted) {axios.get(`https://api.pokemontcg.io/v2/cards/${pokemon}`, {
        cancelToken: cancelTokenSource.token
      }).then(setInfo);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [pokemon]);


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
    <div className="CardIdSearch" >
           <div className="content-wrap">
               <ScrollTop />
           <div className="header">
        <h1>The ChuckinAces PokéSearch</h1>
        </div>
        <h3 className="searchInstructions">Search by Card ID</h3>
<form onSubmit={handleSubmit}>
<input type="search" onChange={setPokemon} placeholder="Enter card ID# (ex: ex9-65)" 
className="searchBar" />
 <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
</form>
<p><div className="priceInstructions"><span className="pink"> Card prices only includes Lightly Played condition or better</span></div> </p>
<div className="row" id="currentDisplayRow">
<h2><div>Currently Displaying: <span className="pink">{pokemon} </span></div>
</h2> 
</div>
<CardInfo data={pokeinfo}   loading={loadedStatus}/>
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

