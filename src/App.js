import "./App.css";
import Card from "./components/index";
import { useState, useEffect } from "react";
import Header from "./components/header";

const APILInk = "https://rickandmortyapi.com/api/character/?page=1";

function App() {
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    fetch(APILInk)
      .then((response) => response.json())
      .then((response) => {
        setInfoData(response.results);
        console.info(response.results);
      });
  }, []);
  console.log(infoData);
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <Header />
      <Card infoData={infoData} />
    </div>
  );
}

export default App;
