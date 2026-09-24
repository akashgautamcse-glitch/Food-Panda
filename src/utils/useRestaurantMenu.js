import { useState,useEffect } from 'react';
import { menuURL } from './constant';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async() => {
    try{
      const proxyUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent(menuURL + resId);
      const res = await fetch(proxyurl);
      console.log("status:", res.status);
      const text = await res.text();
      console.log("raw response:", text);
      if (!text) {
        console.error("Empty response body");
        return;
      }
      const json = JSON.parse(text);
      setResInfo(json.data);
      } catch(err){
        console.error("Failed to fetch menu:", err);
      }
  };

  return resInfo;
};

export default useRestaurantMenu;