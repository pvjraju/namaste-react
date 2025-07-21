import {CDN_URL} from "../utils/constants";

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
            CDN_URL + cloudinaryImageId }
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
export default RestuarantCard;