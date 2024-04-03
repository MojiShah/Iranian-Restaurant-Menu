import React from 'react';
import './Food.css';
import { useParams, Navigate } from 'react-router-dom';
import { foods } from '../../../foodData';

export default function Food() {

  let params = useParams();

  let selectedFood = foods.find(food => food.id == params.id);
  let hasFood = foods.some(food => food.id == params.id);

  console.log('selectedFood', selectedFood);
  return (
    <>
      {
        hasFood ? (
          <div className="wrapper">
            <div className="wrapper__title">
              <h1>{selectedFood.name}</h1>
            </div>
            <div className='wrapper__content'>
              <div className="wrapper__left-section">
                <img src={selectedFood.img} alt={selectedFood.img} className="wrapper__image" />
              </div>
              <div className="wrapper__right-section">
                <p className="wrapper__description">
                  {selectedFood.desc}
                </p>
              </div>
            </div>
          </div>
        ) :
          (
            <Navigate to='/' />
          )
      }
    </>

  )
}
