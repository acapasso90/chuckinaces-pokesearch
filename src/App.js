import PokeSearch from "./PokeSearch.js";
import Header from "./Header.js";
import notFound from "./notFound.gif";
import CardSearch from "./CardSearch.js";
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
   <div className="container">
     <Header />
     <NavLink to="/" style={{ textDecoration: 'none'} } className="headerLinks" id="firstHeaderlink">♠ Sizes ♥</NavLink>
     <NavLink to="/cards" style={{ textDecoration: 'none' }} className="headerLinks">♦ Cards ♣</NavLink>
   </div>
    </div>
    <Switch>
         <Route path="/" exact component={PokeSearch} />
         <Route path="/cards"  component={CardSearch} />
    <Route render={() => <div className="notFound"> <h1>404: page not found</h1><img src={notFound} alt="notfound" /> </div>} />
    </Switch>
    </Router>
  );
}

export default App;
