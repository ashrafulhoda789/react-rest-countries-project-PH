import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const {name, flags, population, area} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        // Basic System
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }

        // Second system
        // setVisited(visited ? false : true);

        // Third System
        setVisited(!visited);

        handleVisitedCountries(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={flags.flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Population: {population.population}</p>
            <p>Area: {area.area} {area.area > 300000 ? 'Big Country':'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>

            <button onClick={() => {handleVisitedFlag(flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;