import PokeSearch from "./PokeSearch.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
   <div className="container">
     <Header />
     <PokeSearch />
     <Footer />
   </div>
    </div>
  );
}

export default App;
