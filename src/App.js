import React from "react";
import NavBar from "./Component/Navbar/NavBar";
import"./App.css"
import Banner from "./Component/Banner/Banner";
import Rowpost from "./Component/Rowpost/Rowpost";
import { originals,actons } from "./urls";
function App() {
  return (
<div className="App">
  <NavBar/>
  <Banner/>
  <Rowpost  url={originals} title='Netflix Originals'/>
  <Rowpost  url={actons} title='Action' isSmall/>
  </div>
  );
}

export default App;
