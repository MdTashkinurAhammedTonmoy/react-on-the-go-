import { use, useState } from "react";
import Country from "../Country/Country";
import './countrys.css'

export default function Countries({ countryPromish }) {

  const [visitedCountry, setVisitedCountry] = useState([])

  const handeleVisitedCountry = (countries) =>{
    console.log('Handele visited country',countries)
    const newvisitedCountry = [...visitedCountry, countries];
    setVisitedCountry(newvisitedCountry)
  }

  const [visitedFlag, setVisitedFlag] = useState([])

  const visitedFlageAdd = (flag) =>{
    const newvisitedFlage = [...visitedFlag,flag];
    setVisitedFlag(newvisitedFlage)
  }

  const countriesData = use(countryPromish);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>In The Countries : {countries.length} </h2>
      <h3>Tottal Country Visite : {visitedCountry.length}</h3>
      <h3>Visited Flage : {visitedFlag.length}</h3>

      <ol>
        {
          visitedCountry.map(countries => <li key={countries.cca3.cca3}>{countries.name.common}</li>)
        }
      </ol>

      <div className="visited-flag">
        {
          visitedFlag.map(flag => <img src={flag}></img>)        }
      </div>

      <div className="coutrys">
        {countries.map((countries) => (
        <Country key={countries.cca3.cca3} countries={countries} handeleVisitedCountry={handeleVisitedCountry} visitedFlageAdd={visitedFlageAdd}></Country>
      ))}
      </div>
    </div>
  );
}
