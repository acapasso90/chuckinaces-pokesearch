import PokeSearch from "./PokeSearch.js";
import Header from "./Header.js";
import notFound from "./notFound.gif";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CardSearch from "./CardSearch.js";
import CardSetSearch from "./CardSetSearch.js"
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
   <div className="container">
     <Header />
     <NavLink to="/" style={{ textDecoration: 'none'} } className="headerLinks" id="firstHeaderlink">♠ Sizes ♥</NavLink>
     <div  className="headerLinks">
     <DropdownButton id='dropdown-button-drop-down' title="♦ Cards ♣">
     <div className="dropdownColumn">
        <NavLink to="/cards.name" style={{ textDecoration: 'none' }} className="dropdownLink" >  <Dropdown.Item href="#/action-1">By Name</Dropdown.Item> </NavLink> <br/>
        <NavLink to="/cards.set" style={{ textDecoration: 'none' }} className="dropdownLink" > <Dropdown.Item href="#/action-2">By Set</Dropdown.Item> </NavLink>
  </div>
</DropdownButton>
   </div>
   </div>
    </div>
    <Switch>
         <Route path="/" exact component={PokeSearch} />
         <Route path="/cards.name"  component={CardSearch} />
         <Route path="/cards.set"  component={CardSetSearch} />
    <Route render={() => <div className="notFound"> <h1>404: page not found</h1><img src={notFound} alt="notfound" /> </div>} />
    </Switch>
    </Router>
  );
}

export default App;
