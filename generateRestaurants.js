const fs = require("fs");

const generateRestaurants = (count) => {
  const cuisines = ["Indian", "Chinese", "Italian", "Mexican", "Thai", "Tandoori", "Pizza", "Desserts"];
  const restaurants = [];

  for (let i = 1; i <= count; i++) {
    const restaurant = {
      id: `${i}`,
      name: `Restaurant ${i}`,
      cloudinaryImageId: `restaurant_${i}_image`,
      locality: `Locality ${i}`,
      areaName: `Area ${i}`,
      costForTwo: Math.floor(Math.random() * 1000) + 200,
      cuisines: [cuisines[Math.floor(Math.random() * cuisines.length)], cuisines[Math.floor(Math.random() * cuisines.length)]],
      rating: (Math.random() * 2 + 3).toFixed(1),
      deliveryTime: Math.floor(Math.random() * 40) + 20,
      menu: [
        {
          id: `${i}01`,
          name: `Dish ${i}A`,
          price: Math.floor(Math.random() * 500) + 100,
          description: `Description for Dish ${i}A.`,
          imageId: `dish_${i}_a_image`
        },
        {
          id: `${i}02`,
          name: `Dish ${i}B`,
          price: Math.floor(Math.random() * 500) + 100,
          description: `Description for Dish ${i}B.`,
          imageId: `dish_${i}_b_image`
        }
      ]
    };
    restaurants.push(restaurant);
  }

  return {
    restaurants,
    metadata: {
      appName: "Foodie",
      version: "1.0.0",
      currency: "INR",
      deliveryCharges: 50
    }
  };
};

const data = generateRestaurants(100);
fs.writeFileSync("swiggy_data.json", JSON.stringify(data, null, 2));
console.log("Data generated successfully!");