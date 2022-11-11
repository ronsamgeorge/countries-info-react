const DisplaySearchResult = ({countriesToDisplay}) => {
    // Display filter results when the result size is less than 10 
    if (countriesToDisplay.length > 10) {
      return (
        <div>
          <p>Too many matches, narrow down the searh filter</p>        
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