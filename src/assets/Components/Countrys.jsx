import { use } from "react"
import Country from "./Country/Country";

export default function Countries({countryPromish}){

    const countriesData = use(countryPromish);
    const countries = countriesData.countries;
    

    return(
        <div>
            <h2>shi is my love:{countries.length} </h2>
            {
                countries.map(countries => <Country countries={countries}></Country>)
            }
        </div>
    )
}