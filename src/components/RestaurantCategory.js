import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const {data, showItem, setShowIndex} = props;
  const handleClick = () => {
    showItem === false 
    ? setShowIndex() 
    : setShowIndex(null) 
  }
  return(
    <div>
      {/* {Accordian Header} */}
      <div className="w-6/12 my-auto mx-4 bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>{showItem == false ? "⬇️" : "⬆️"}</span>
        </div>
        {showItem &&  <ItemList items={data.itemCards}/> }
        
      </div>
    </div>
  )
}

export default RestaurantCategory;