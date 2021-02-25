import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import Footer from "./Footer.js";
import CardInfo from "./CardInfo.js";


export default function CardSearch(){
    const [pokemon, Setpokemon] = useState("pikachu*vmax");
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
           <div className="content-wrap">
        <h3>Search by pokemon name </h3>
<form onSubmit={handleSubmit}>
<input type="text" onChange={setPokemon} placeholder="Enter Pokemon name" 
className="searchBar" />
 <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
</form>
<p className="pokeSearchInstructions">Use a * between 2-word named cards (ex. <span className="pink">Ball*Guy. Venusaur*V. Galarian*Mr*Mime.</span>) Can put * after incomplete name to pull up many (<span className="pink">Char*</span> pulls up Charmander, Charmeleon, Charizard).  Can search <span className="pink">"V" for all Vmax.</span> </p>
{pokeinfo.slice(0, arrayLength).map(function(pokemonNumber){
            return(<CardInfo data={pokemonNumber} loading={loadedStatus}/>)})}
        </div>
    <Footer />
    </div>
    )}
//  searches default pokemon and shows loading pokeball gif
else{
    return(
<div className="loading">
    <img src={loading} alt="loading" />
</div>)
}}