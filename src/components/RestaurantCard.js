import {resURL} from "../utils/constant"

export const RestaurantCard = (props) => {
  const {resData} = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla
  } = resData?.info

  const formattedCuisines = cuisines.length > 3 
  ? cuisines.slice(0,3).join(", ") + "..." 
  : cuisines.join(", ");
  return(
    <div className="w-[276.98px] h-75 mx-4 mb-12">
      <div className="w-full h-45.5 mb-1">
        <img className="w-full h-full rounded-2xl" src={resURL + cloudinaryImageId}/>
      </div>   
      <div className="px-3 ">
        <h3 className="font-bold text-lg truncate w-full">{name}</h3>
        <span>{"⭐" + avgRating +  "💠"}</span>
        <span>{sla.deliveryTime} minutes</span>
        <h4>{formattedCuisines}</h4>   
      </div>
    </div>
  )
};

export default RestaurantCard;