import { useState, useEffect } from "react";

const Header = () => {
  const[loginbtn, setloginbtn] = useState("Login");
  return(
    <div className="header-Container">
      <div className="Logo-Container">
        <img alt="App-logo" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/food-delivery-truck-icon-svg-download-png-2629783.png?f=webp&w=128 "/>
      </div>

      <div className="Nav-items-Container">
        <ul className="Nav-items-list">
          <li className="Home">Home</li>
          <li className="About-Us">About Us</li>
          <li className="Contact-Us">Contact Us</li>
          <li className="Cart">Cart</li>
          <li className="Login/out-btn">
            <button onClick={() =>  {
              loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login");
            }}>{loginbtn}</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

const RestCard = (props) => {
  const { resName, cuisine, Res_img, Rating, DeliveryTime } = props;
  return(
    <div className="Restaurant-Card">
      <div className="Restaurant-img">
        <img alt="res-logo" src={Res_img} />
      </div>

      <div className="Restaurant-Details">
        <h3 className="Restaurant-Name">{resName}</h3>
        <h4 className="Restaurant-Cuisine">{cuisine}</h4>
        <h4 className="Restaurant-Rating">{Rating}</h4>
        <h4 className="Delivery-Timme">{DeliveryTime}</h4>
      </div>
    </div>
  )
}

const Body = () => {
  const[listOfRest, setlistOfRest] = useState([]);
  const[filterData, SetFilterData] = useState([]); 
  const[searchText, SetSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  const data = await fetch("https://www.netflix.com/");
  const json = data.json();
  const jsonData = (json?.data?.cards?.card?.card?.info?.restaurants); 
  setlistOfRest(jsonData);
  SetFilterData(jsonData);
};

if(listOfRest?.length === 0){
  return <Shimmer />;
}

  return(
  <div className="Body-Container">
    <div className="Search-Container">
      <div className="Search-bar-Conatiner">
        <input type="text" className="Input-Vox "
         value={searchText}
         onChange={(e) =>  {
          SetSearchText(e.target.value);
        }}/>
        <button onClick={() => {
          listOfRest.filter((restaurant) => {
            const filteredData = restaurant.name.toLowerCase().includes(searchText.toLowerCase());
            SetFilterData(filteredData);
          })
        }}
        >Search
        </button>
      </div>

      <div className="Top-rated-restaurant-Container ">
        <button className="Top-rated-button" onClick={ () =>{
          const filteredRest = listOfRest.filter((restaurant) => restaurant.avgRating > 4);
          setlistOfRest(filteredRest);
        }}        
        >Top rated</button>
      </div>
    </div>

    <div className="Rest-Cards-Container">{
      filterData.map((restaurant) => {
        <RestCard resData={restaurant} />
      })
    }
    </div>
  </div>  
  )
}

const AppLayout = () => {
  return(
    <div className="app">
      <Header />
      <Body />
      //footer
    </div>
  )
}

 
//optional chaining
//state variable inside if dont use why?
//cllient side routing vs server side routing
//what is plugin?

