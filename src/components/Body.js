import React from 'react';
import RestuarantCard from './RestuarantCard';
import restList from '../utils/mockdata';
import { useState } from "react"




const Body = () => {

 const swiggyData = require('./swiggy_real_data_2.json'); 
 const arr = useState(swiggyData.restaurants);
//Local State Variables - Super powerful variable
//const [listOfRestaurants, setListOfRestaurants] = require('./swiggy_real_data_2.json'); ;
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];
  return (
   <div className="body">
    <div className="filter">
      <button className="filter-btn" 
      onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4.6
        );
        setListOfRestaurants(filteredList);
      }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">
        {listOfRestaurants.map((res) => {
           return <RestuarantCard key={res.info.id} resData={res.info} />
        })}
    </div>
   </div>
  )
}

export default Body;