/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';

const Card = ({ selectedActors, remaining, totalCost }) => {
    console.log(selectedActors)
    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h5>remaining: {remaining}</h5>
            <h3>TotalCost: {totalCost}</h3>
            {
              selectedActors.map((actor) => (<li key={actor.id}>Actor Name: {actor.name}</li>))   
            }
        </div>
    );
};

export default Card;