import React, {useState, useEffect} from "react";
import axios from "axios";
import loading from "./loading.gif";
import Footer from "./Footer.js";
import SubTypeInstructions from "./SubTypeInstructions.js";
import CardInfo from "./CardInfo.js";
import ScrollTop from "./ScrollTop.js";

export default function SubTypeCardCardSearch(){
    const [instructions, setInstructions] = useState("");
    const [pokemon, Setpokemon] = useState("baby");
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

function setData(response){
    setInstructions(response.data.data);
}

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
    const apiKey = "3e8fc7e6-c2d0-495f-8766-fe8ac6b18ae6";
    const cancelTokenSource = axios.CancelToken.source(); 
    if (mounted) {axios.get(`https://api.pokemontcg.io/v2/cards?q=subtypes:${pokemon}&api_key=${apiKey}`, {
        cancelToken: cancelTokenSource.token
      }).then(setInfo);}
      {axios.get(`https://api.pokemontcg.io/v2/subtypes`, {
        cancelToken: cancelTokenSource.token
      }).then(setData);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [pokemon]);


// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
    <div className="SubTypeCardCardSearch" >
           <div className="content-wrap">
               <ScrollTop />
           <div className="header">
        <h1>The ChuckinAces PokéSearch App</h1>
        </div>
        <h3 className="searchInstructions">Search by Subtype</h3>
<form onSubmit={handleSubmit}>
<input type="text" onChange={setPokemon} placeholder="Enter a Subtype" 
className="searchBar" />
 <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
</form>
<p className="pink">use * between multi-word search terms</p>
<div className="pokeSearchInstructions"><SubTypeInstructions data={instructions} /></div>
{pokeinfo.slice(0, arrayLength).map(function(pokemonNumeral){
            return(<CardInfo data={pokemonNumeral}   loading={loadedStatus}/>)})}
        </div>
    <Footer />
    </div>
    )}
//  searches default pokemon and shows loading pokeball gif
else{
    return(
<div className="loading">
<div className="header">
        <h1>The ChuckinAces PokéSearch App</h1>
        </div>
<h1>Loading Pokés</h1>
    <img src={loading} alt="loading" />
</div>)
}}

