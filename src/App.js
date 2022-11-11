import { useState, useEffect } from "react";
import axios from "axios";

const DisplaySearchResult = (props) => {
  if (props.countriesToDisplay.length > 10) {
    return (
      <div>
        <p>Too many matches, narrow down the searh filter</p>        
      </div>
    )
  }

  return(
    <ul>
      {props.countriesToDisplay.map(country => <li key={country.name}>{country.name}</li>)}
    </ul>
    
  )
}

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  const updateSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  },[]);

  const countriesToDisplay = countries.filter(country => country.name.includes(searchCountry.trim()))
  console.log(countriesToDisplay);
  return (
    <div>
      <h1>Search Country</h1>
      Search : <input value={searchCountry} onChange={updateSearchCountry}/>

      <DisplaySearchResult countriesToDisplay={countriesToDisplay} />

    </div>
  )
}

export default App;