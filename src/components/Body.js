import React from "react";
import RestuarantCard, { withPromotedLabel } from "./RestuarantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //const swiggyData = require('./swiggy_real_data_2.json');
  //const arr = useState(swiggyData.restaurants);
  //const listOfRestaurants = arr[0];
  //const setListOfRestaurants = arr[1];
  //Local State Variables - Super powerful variable
  //const swiggyData = require('./swiggy_real_data_2.json');
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestuarantCard);

  useEffect(() => {
    setTimeout(fetchData, 2000);
  }, []);

  console.log("Body Rendered");

  const fetchData = async () => {
    //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4625121&lng=78.3422633&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //const json = await data.json();
    const swiggyData = await require("./swiggy_real_data_3_withPromoted");
    //const filteredJson = json.data.cards.slice(3);
    //console.log("filteredJson :: " + filteredJson);
    //setListOfRestaurants(filteredJson.map((card) => card.card.card));

    setListOfRestaurants(swiggyData.restaurants);
    setFilteredRestaurant(swiggyData.restaurants);
  };

  //Conditional Rendering
  /*if(listOfRestaurants.length === 0) {
  return (
    <div className="loading">
      <Shimmer />
    </div>
  );
}*/

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.6
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((res) =>
          res.info.promoted ? (
            <RestaurantCardPromoted key={res.info.id} resData={res.info} />
          ) : (
            <RestuarantCard key={res.info.id} resData={res.info} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
