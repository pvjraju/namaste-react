import React from "react";
import ReactDOM from "react-dom/client";



/**
 * Header
 *  -Logo
 *  -Nav Items
 * 
 * Body
 *  -Search
 *  -Restuarant container
 *    -Resturant card
 * 
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIPe_egHXbPZF5zsSDJCtBVu032nCKuV2jGDlWx3bLq3Puo47hZ8aWNacmV4Nohgumts&usqp=CAU" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const styleCard = {
  backgroundColor: "#f0f0f0"
}

//This is a functional component.
const RestuarantCard = (props) => {
  const {resData} = props;

  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData
  return (
    <div className="res-card" style={styleCard}>
      <img 
        className="res-logo"
        src = {
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{sla.deliveryTime} Minutes </h5>
    </div>
  )
}

const swiggyData = require('./swiggy_real_data_2.json');

console.log(swiggyData);

const Body = () => {
  return (
   <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
        {swiggyData.restaurants.splice(0,20).map((res) => {
           return <RestuarantCard key={res.info.id} resData={res.info} />
        })}
    </div>
   </div>
  )
}

const AppLayout = () => {
  return (
      <div className="app">
        <Header />
        <Body />
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)