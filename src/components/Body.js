import RestaurantCard from "./RestaurantCard";
import { DataApi } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const[ListOfRestaurant, setListOfRestaurant] = useState([]);
  const[filterRest, setFilterRest] = useState([]);
  const[fieldValue, setFieldValue] = useState("");


  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    try{
      const data = await fetch(DataApi);
      const dataJson = await data.json();
  
      setListOfRestaurant(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRest(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (err) {
    console.error("failed to fetch data " + err.message);
    }
  } 

  const OnlineStatus = useOnlineStatus();
  if(!OnlineStatus){
    return (
      <h1>Seems like your are offline...!</h1>
    );
  };
  
  return ListOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100">
      <div className="flex items-center">
          <div className="flex m-3 p-3 gap-1  my-12 ml-41">
            <input 
              type="text"
              className="border border-black"
              value={fieldValue} 
              onChange={(e) => {
                setFieldValue(e.target.value);
              }}
              />
            <button className="px-2 border bg-gray-200 rounded-md cursor-pointer" 
              onClick={() => {
              const filterData = ListOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(fieldValue.toLowerCase()));
            
              setFilterRest(filterData);
              }}
            >
              Search
            </button>
          </div>  

        <div>
          <button className="px-2 border bg-gray-200 border-black cursor-pointer"
            onClick={() => {
              const filterData = ListOfRestaurant.filter((restaurant) =>
                restaurant.info.avgRating > 4
              );
              setFilterRest(filterData);
            }}
          >
            Top rated
          </button>
        </div>
      </div>

      <div className="m-auto w-300 h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filterRest?.map((restaurant) => (
          <Link 
            key={restaurant.info.id}
            to = {"/restaurant/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant}/>
            </Link>
        ))}
      </div>
    </div>
  )
};

export default Body;