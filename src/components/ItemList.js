import { resURL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const {items} = props;
  const dispatch = useDispatch();
  const handleAdd = (id) => {
    dispatch(addItem(id));
  }


  return(
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left"> 
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> -  ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          <div className="p-4 w-3/12">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg  bg-white"
                onClick={ () => handleAdd(item.card.info.id)}>
                Add+
              </button>
            </div>
            <img src={resURL + item.card.info.imageId} />
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default ItemList;