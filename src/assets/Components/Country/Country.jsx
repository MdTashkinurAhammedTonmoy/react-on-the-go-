import React, { useState } from 'react';
import './country.css'



const Country = ({countries, handeleVisitedCountry ,visitedFlageAdd}) => {
    

    const [Visited, setVisited] = useState(false)

    const handeleVisited = () =>{
        // if(Visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // setVisited(Visited ? false : true);

        setVisited(!Visited)
        handeleVisitedCountry(countries);
    }

    // console.log(countries)
    return (
        <div className={`country ${Visited && 'coutrys-visited'}`}>
            <img src={countries.flags.flags.png} alt={countries.flags.flags.alt} />
            <h2>Name : {countries.name.common}</h2>
            <h3>Languges : {countries.languages.languages.eng}</h3>
            <h3>population : {countries.population.population}</h3>
            <h3>Area : {countries.area.area} = {countries.area.area > 300000? "Big Counrty" : "Smail Country"}</h3>
            <button onClick={handeleVisited}>
               {Visited? 'visited' : 'Not Visited'}
            </button>
            <button onClick={() => {visitedFlageAdd(countries.flags.flags.png)}}>Add visited Flag</button>
        </div>
    );
};

export default Country;