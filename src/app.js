import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet, data } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name : "Akash Gautam"
    }
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName}}>
        <div className='app'>
          <Header/>
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    
  )
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout />,
    errorElement : <Error />,
    children : [
      {
        path : '/',
        element : <Body />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/contact',
        element : <ContactUs />
      },
      {
        path : '/restaurant/:resId',
        element : <RestaurantMenu />
      },
      {
        path : '/cart',
        element : <Cart />
      }
    ]
  }
]);

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter} />);  