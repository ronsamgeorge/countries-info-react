import { useState, useEffect } from "react";
import axios from "axios";
import DisplaySearchResult from "./Components/DisplaySearchResult";

const App = () => { 
  const [countries, setCountries] = useState([]);           // save the fetch results on countries
  const [searchCountry, setSearchCountry] = useState('');   // save the search filter query

  const updateSearchCountry = (event) => {                  // updates search Countries onChange of input
    setSearchCountry(event.target.value);
  }

  // fetch list of countries through REST Countries API
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  },[]);

  // filter countries list based on the input search field
  const countriesToDisplay = countries.filter(country => country.name.includes(searchCountry.trim()))
  

  return (
    <div>
      <h1>Search Country</h1>
      Search : <input value={searchCountry} onChange={updateSearchCountry}/>

      <DisplaySearchResult countriesToDisplay={countriesToDisplay} />

    </div>
  )
}

export default App;