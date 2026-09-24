import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import  UserContext  from "../utils/UserContext";
const logo = new URL('../logo.png', import.meta.url).href;
import { useSelector } from "react-redux";

const Header = () => {
  const[value, setValue] = useState("Login");
  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);

  return(
    <div className="flex justify-between h-25 items-center sticky top-0 w-full z-50 bg-white border-b border-gray-100 shadow-lg">
      <div className="w-70 h-full">
        <img className="h-full mx-25 absolute " src={logo} alt="foodpanda logo"/>
      </div>

      <div className='nav-items'>
        <ul className="flex m-4 p-4 items-center text-lg">
          <li className="m-4 p-4 font-semibold"><Link to='/'>Home</Link></li>
          <li className="m-4 p-4 font-semibold"><Link to='/about'>About Us</Link></li>
          <li className="m-4 p-4 font-semibold"><Link to='/contact'>Contacts</Link></li>
          <li className="m-4 p-4 font-bold text-xl">
            <Link to='/cart'>Cart - ({cartItems.length}items)</Link>
          </li>
          <button className="m-4 px-1.5 h-8 text-center  bg-pink-300 text-white rounded-lg" onClick={
            () => { 
              value === "Login" ? setValue("LogOut") : setValue("Login");
            }
          }>
            {value}
          </button>
          <li className="m-4 p-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;