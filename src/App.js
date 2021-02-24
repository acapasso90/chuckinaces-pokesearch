import PokeSearch from "./PokeSearch.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import CardSearch from "./CardSearch.js";
import './App.css';

function App() {
  return (
    <div className="App">
   <div className="container">
     <Header />
    <CardSearch />
     <Footer />
   </div>
    </div>
  );
}

export default App;
