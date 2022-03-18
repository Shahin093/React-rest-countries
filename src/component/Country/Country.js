import React from 'react';
import './Country.css'
const Country = (props) => {
    return (
        <div className='country'>
            <h3>Country Name : {props.name}</h3>
            <h5>Population : {props.population}</h5>
            <p><small>Area : {props.area}</small></p>
        </div>
    );
};

export default Country;