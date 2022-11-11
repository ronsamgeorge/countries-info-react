const DisplaySearchResult = ({countriesToDisplay}) => {
    // Display filter results when the result size is less than 10 
    if (countriesToDisplay.length > 10) {
      return (
        <div>
          <p>Too many matches, narrow down the searh filter</p>        
        </div>
      )
    }
    
    // Display result of country when query has exactly one match    
    if (countriesToDisplay.length === 1){
        return (
            <div>
                <h1>{countriesToDisplay[0].name}</h1>
                <p>capital : {countriesToDisplay[0].capital}</p>
                <h4>Languages</h4>
                <ul>{countriesToDisplay[0].languages.map(language => <li key={countriesToDisplay[0].name + language.name}>{language.name}</li>)}</ul>
                <img src={countriesToDisplay[0].flags.png} alt={"Country flag"}></img>
            </div>
        )
    }

    return(
      <ul>
        {countriesToDisplay.map(country => <li key={country.name}>{country.name}</li>)}
      </ul>
      
    )
  }

export default DisplaySearchResult;