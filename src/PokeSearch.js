import React, {useState, useEffect} from "react"
import axios from "axios";
import Footer from "./Footer.js";
import loading from "./loading.gif";
import PokeInfo from "./PokeInfo.js";
import ScrollTop from "./ScrollTop.js";

export default function PokeSearch(){
const [pokemon, Setpokemon] = useState("spoink");
const [pokeinfo, setPokeinfo] = useState("");
const [loaded, setLoaded] = useState(false);
const [loadedStatus, setLoadedStatus] = useState(" ");
const searchIcon = <i class="fas fa-search"></i>;
let pokemonLowercase = null;
// sets Pokemon info and sets loaded status for PokeInfo.js
function setInfo(response){
    setPokeinfo(response.data)
setLoaded(true);
setLoadedStatus("loaded");
}


// prevents page refreshing and searches pokemon with pokemon set in setPokemon
function handleSubmit(event){  event.preventDefault();
    Setpokemon(pokemonLowercase);
}

// on text input pokemon is changed to what is typed
function setPokemon(event){
    event.preventDefault();
 pokemonLowercase = (event.target.value).toLowerCase();
}



useEffect(() => {
    let mounted = true;
    const cancelTokenSource = axios.CancelToken.source();
    if (mounted) {axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        cancelToken: cancelTokenSource.token
      }).then(setInfo);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, [pokemon]);

// once loaded shows input forms and displays PokeInfo from default search
if(loaded){return(
        <div className="PokeSearch" key={pokeinfo}>
            <ScrollTop />
                 <div className="header">
        <h1>The ChuckinAces PokéSearch App</h1>
        </div>
            <h3 className="searchInstructions">
            Search by Pokémon Number or Name</h3>
    <form onSubmit={handleSubmit}>
    <input type="text" onChange={setPokemon} placeholder="Enter Pokémon name / number" 
    className="searchBar" />
    <button type="submit" className="submitButton"> <i className="fas fa-search"></i></button>
    </form>
    <p className="pokeSearchInstructions">Zamazenta and Zacian need -hero <span className="pink">(ex: Zamazenta-Hero)</span>.
                   Darmanitan needs "-standard" <span className="pink">(ex: Darmanitan-Standard / Darmanitan-Standard-Galar)</span>. 
                   Pumpkaboo needs sizes "-small/-average/-large/-super" <span className="pink">(ex: Pumpkaboo-super)</span>. 
                   Mimikyu needs -disguised <span className="pink">(ex: Mimikyu-Disguised)</span>.
                    </p>
    <PokeInfo data={pokeinfo} loading={loadedStatus} />
    <Footer />
        </div>)}
//  searches default pokemon and shows loading pokeball gif
else{
    return(
<div className="loading">
<div className="header">
        <h1>The ChuckinAces PokéSearch App</h1>
        </div>
<h1>Loading Pokés</h1>
    <img src={loading} alt="loading" />
</div>

)}
}