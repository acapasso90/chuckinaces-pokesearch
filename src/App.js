import PokeSearch from "./PokeSearch.js";
import SubTypeCardSearch from "./SubTypeCardSearch.js"
import notFound from "./notFound.gif";
import DropdownButton from 'react-bootstrap/DropdownButton';
import CardSearch from "./CardSearch.js";
import CardIdSearch from "./CardIdSearch.js";
import CardSetSearch from "./CardSetSearch.js";
import CardSeriesSearch from "./CardSeriesSearch.js";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import RaritySearch from "./RaritySearch.js";

function App() {
  const dropdownTitle = `♦ Cards ♣ `;
  const hamburger = <i className="fas fa-bars"></i>;
  return (
    <Router>
    <div className="App">
   <div className="container">
     <NavLink to="/" style={{ textDecoration: 'none'} } className="headerLinks" id="firstHeaderlink"> &spades; Stats &hearts;</NavLink>
     <div  className="headerLinks">

     <DropdownButton id='dropdown-button-drop-down' className="regDropDown" title={dropdownTitle}>
     <div className="dropdownColumn">
        <NavLink to="/cards.name" style={{ textDecoration: 'none' }} className="dropdownLink"  href="#/action-1">  By Name </NavLink> <br/>
        <NavLink to="/cards.id" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By ID </NavLink> <br/>
        <NavLink to="/cards.set" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Set </NavLink> <br/>
        <NavLink to="/cards.series" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Series </NavLink><br/>
        <NavLink to="/cards.subtype" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By SubType </NavLink>  <br/>
        <NavLink to="/cards.rarity" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Rarity </NavLink>
  </div>
  </DropdownButton>
  <DropdownButton id='dropdown-button-drop-down' className="hamburgerDropdown" title={hamburger}>
     <div className="dropdownColumn">
     <NavLink to="/" style={{ textDecoration: 'none' }} className="dropdownLink"  href="#/action-1"> Stats </NavLink> <br/>
        <NavLink to="/cards.name" style={{ textDecoration: 'none' }} className="dropdownLink"  href="#/action-1"> Cards By Name </NavLink> <br/>
        <NavLink to="/cards.id" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2">Cards By ID </NavLink> <br/>
        <NavLink to="/cards.set" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2">Cards By Set </NavLink> <br/>
        <NavLink to="/cards.series" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2">Cards By Series </NavLink> <br/>
        <NavLink to="/cards.subtype" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2">Cards By SubType </NavLink> <br/>
        <NavLink to="/cards.rarity" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Rarity </NavLink>
      <br />  <a href="https://www.twitch.tv/chuckinaces" target="_blank" className="dropdownLink" id="dropdownLinkTwo" >Twitch</a>
  </div>
</DropdownButton>
   </div>
   <a href="https://www.twitch.tv/chuckinaces" target="_blank" id="lastHeaderLink">&hearts; Twitch &spades;</a>
   </div>
    <Switch>
         <Route path="/" exact component={PokeSearch} />
         <Route path="/cards.name"  component={CardSearch} />
         <Route path="/cards.id"  component={CardIdSearch} />
         <Route path="/cards.set"  component={CardSetSearch} />
         <Route path="/cards.series"  component={CardSeriesSearch} />
         <Route path="/cards.subtype"  component={SubTypeCardSearch} />
         <Route path="/cards.rarity"  component={RaritySearch} />
    <Route render={() => <div className="notFound">    <div className="header">
        <h1>The ChuckinAces PokéSearch App</h1>
        </div> <h1>404: page not found</h1><img src={notFound} alt="notfound" /> </div>} />
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
