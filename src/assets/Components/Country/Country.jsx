import React from 'react';

const Country = ({countries}) => {
    console.log(countries)
    return (
        <div>
            <img src={countries.flags.flags.png} alt={countries.flags.flags.alt} />
            <h2>Name : {countries.name.common}</h2>
            <h3>Languges : {countries.languages.languages.eng}</h3>
            <h3>population : {countries.population.population}</h3>
        </div>
    );
};

export default Country;