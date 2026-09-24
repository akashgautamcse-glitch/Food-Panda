import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">
        <div className="m-auto w-6/12 ">
          <button className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}>
            Clear Cart
          </button>
          {cartItems.length === 0 && <h1>Cart is empty.Add items to your cart</h1>}
          <ItemList items={cartItems} />
        </div> 
      </h1>
    </div>
  )
}

export default Cart;