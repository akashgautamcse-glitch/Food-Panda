import  Shimmer  from "./Shimmer";
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useParams } from 'react-router-dom';
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  
  if(!resInfo?.cards?.[2]?.card?.card?.info){
    return <Shimmer />
  }

  const {
    avgRatingString,
    costForTwoMessage,
    cuisines,
    name
  } = resInfo?.cards[2]?.card?.card?.info ;

  const categories =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => 
    c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return(
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{avgRatingString +" "+ costForTwoMessage}</p>
      <h2>{cuisines.join(", ")}</h2>
      {categories.map((category, index) => (
        <RestaurantCategory 
          key={category.card.card.info.categoryId} 
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => {setShowIndex(index)}}
        />
      ))}
    </div>

  );
};


export default RestaurantMenu;