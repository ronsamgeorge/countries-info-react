import { useState, useEffect } from "react";
import axios from "axios";


const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');

  const updateSearchCountry = (event) => {
    console.log(event.target.value);
    setSearchCountry(event.target.value);
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  },[]);



  return (
    <div>
      <h1>Search Country</h1>
      Search : <input value={searchCountry} onChange={updateSearchCountry}/>

      <ul>
        {countries.map(country => <li key={country.name}>{country.name}</li>)}
      </ul>
    </div>
  )
}

export default App;