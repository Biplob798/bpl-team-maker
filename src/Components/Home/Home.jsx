/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Home.css'
import Card from '../Cart/Cart';
import {useState} from 'react';



const Home = () => { 

    const [allActors, setAllActors] = useState([]);
    
    const [selectedActors, setSelectedActors] = useState([]);

    const [remaining, setRemaining] = useState(0);

    const [totalCost, setTotalCost] = useState(0);


    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[]);

   
     const handleSelectActor = (actor) => {
       const isExist = selectedActors.find((item) => item.id == actor.id);
        
       let count = actor.salary;

      if(isExist){
        return alert('Already Booked!')
      }
      else{
         
        selectedActors.forEach((item) => {
           count = count + item.salary
        });
        
        const totalRemaining = 20000 - count;
       
        if(count > 20000){
           return alert('taka sesh!')
        }
       else{
        setTotalCost(count);

        setRemaining(totalRemaining);

        setSelectedActors([...selectedActors, actor]);
       }
      }

     };

    return (
        <div className='container'>
            <div className="home-container">
             <div className="card-container">
            {
                allActors.map(actor => (
                    <div key={actor.id} className="card">
                    <div className="card-img">
                        <img className='photo' src={actor.image} alt="" />
                    </div>
                    <h1 className='title'>{actor.name}</h1>
                    <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small></p>
                    <div className="info">
                        <p>
                          Salary:$ {actor.salary} 
                        </p>
                        <p>{actor.role}</p>
                    </div>
                    <button onClick={() => handleSelectActor(actor)} className='card-btn'>Selected</button>
                </div>
                ))
            }
             </div>
                <div className="cart">
                    <Card selectedActors={selectedActors} remaining={remaining} totalCost={totalCost} ></Card>
                </div>
            </div>
        </div>
    );
};

export default Home;