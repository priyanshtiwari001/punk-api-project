import { useState,useEffect } from "react";
import Card from "./Card"
import SearchBar from "./SearchBar"
function App() {
  const [data,setData] = useState([]);
  const [searchInput,setSearchInput] = useState("");

  console.log(searchInput);

  //handle the input value
  const handleChange = (e) => {
    var lowerCaseValue = e.target.value.toLowerCase();
    setSearchInput(lowerCaseValue);
    console.log(lowerCaseValue);
  };

  

  // to fetch the data from api
    const fetchData = async () =>{
      try {
        const reponse = await fetch("https://api.punkapi.com/v2/beers");
const data = await reponse.json();
            setData(data);
      } catch (error) {
        console.log(error)
      }

    }
//console.log(data);
 useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <h1 className="text-4xl font-bold text-center my-4">PUNK API PROJECT</h1>
      <SearchBar data={data} handleChange={handleChange} searchInput={searchInput}/>
    
      <Card data={data} Input={searchInput}/>
   
    </>
  )
}

export default App
