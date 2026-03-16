import React from 'react';
import './Country.css';

const Country = ({country}) => {
    const {name, flags, population, area} = country;

    const handleVisited = () =>{
        console.log("Button CLicked");
    }
    return (
        <div className='country'>
            <img src={flags.flags.png} alt="" />
            <h3>Name: {name.common}</h3>
            <p>Population: {population.population}</p>
            <p>Area: {area.area} {area.area > 300000 ? 'Big Country':'Small Country'}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;