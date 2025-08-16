import ItemList from "./ItemList.js";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    console.log("Clicked");
    //setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="flex flex-col">
        {showItems && <ItemList items={data.itemCards} />}
      </div>
       
    </div>
  );
};

export default RestaurantCategory;
