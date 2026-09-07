import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCounries, handleVisitedFlags}) => {
    const [visited, setVisited] = useState(false)
    // console.log(country)
    // console.log(handleVisitedCounries)

    const handleVisited = ()=>{
        // conditional rendering 1
    //   if(visited){
    //     setVisited(false)
    //   }else{
    //     setVisited(true)
    //   }

    // conditional rendering 2
    // setVisited(visited ? false : true)

    // conditional rendering 3
    setVisited(!visited);
    handleVisitedCounries(country)
    }
 
    return (
        <div className={`country ${visited && "country-visited"}`}> 
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Country Name:{country.name.common}</h4>
            <h3>Capital: {country.capital.capital}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area :{country.area.area}
                {country.area.area > 300000 ? "big country" : "Small country"}
            </p>
            <h4>Language : {country.languages.languages.due}</h4>

            <button onClick={handleVisited}>{visited ? "Visited" : "Not visited"}</button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>VisitedFlags</button>
        </div>
    );
};

export default Country;