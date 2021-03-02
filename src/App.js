import PokeSearch from "./PokeSearch.js";
import SubTypeCardSearch from "./SubTypeCardSearch.js"
import notFound from "./notFound.gif";
import DropdownButton from 'react-bootstrap/DropdownButton';
import CardSearch from "./CardSearch.js";
import CardSetSearch from "./CardSetSearch.js"
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import './App.css';
import RaritySearch from "./RaritySearch.js";

function App() {
  const dropdownTitle = `♦ Cards ♣`;
  const hamburger = <i className="fas fa-bars"></i>;
  return (
    <Router>
    <div className="App">
   <div className="container">
     <NavLink to="/" style={{ textDecoration: 'none'} } className="headerLinks" id="firstHeaderlink"> &spades; Sizes &hearts;</NavLink>
     <div  className="headerLinks">
     <DropdownButton id='dropdown-button-drop-down' className="regDropDown" title={dropdownTitle}>
     <div className="dropdownColumn">
        <NavLink to="/cards.name" style={{ textDecoration: 'none' }} className="dropdownLink"  href="#/action-1">  By Name </NavLink> <br/>
        <NavLink to="/cards.set" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Set </NavLink> <br/>
        <NavLink to="/cards.subtype" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By SubType </NavLink>  <br/>
        <NavLink to="/cards.rarity" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Rarity </NavLink>
  </div>
  </DropdownButton>
  <DropdownButton id='dropdown-button-drop-down' className="hamburgerDropdown" title={hamburger}>
     <div className="dropdownColumn">
     <NavLink to="/" style={{ textDecoration: 'none' }} className="dropdownLink"  href="#/action-1"> Sizes </NavLink> <br/>
        <NavLink to="/cards.name" style={{ textDecoration: 'none' }} className="dropdownLink"  href="#/action-1"> Cards By Name </NavLink> <br/>
        <NavLink to="/cards.set" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2">Cards By Set </NavLink> <br/>
        <NavLink to="/cards.subtype" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2">Cards By SubType </NavLink> <br/>
        <NavLink to="/cards.rarity" style={{ textDecoration: 'none' }} className="dropdownLink" id="dropdownLinkTwo" href="#/action-2"> By Rarity </NavLink>
  </div>
</DropdownButton>
   </div>
   </div>
    <Switch>
         <Route path="/" exact component={PokeSearch} />
         <Route path="/cards.name"  component={CardSearch} />
         <Route path="/cards.set"  component={CardSetSearch} />
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
