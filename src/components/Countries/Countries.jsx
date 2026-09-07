import { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = ({countriesPromise}) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCounries = (country) =>{
        // console.log('handleVisitedCounries is clicked',country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag)=>{
        // console.log("handleVisitedFlags is clicked", flag)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries)

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h1>Total countries visited:{visitedCountries.length}</h1>
            <h1>Total visited countries flags:{visitedFlags.length}</h1>
            <ol>
            {
                visitedCountries.map(country => <li>{country.name.common}</li>)
            }
            </ol>

            <div className="visited-country">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className="countries">
            {
                countries.map(country => <Country key={country.cca3.cca3}
                 country={country} 
                 handleVisitedCounries={handleVisitedCounries} 
                 handleVisitedFlags={handleVisitedFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;