import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const MainContainer = () => {
  const [mainListArr, setMainListArr] = useState([]);
  const [searchFilterTopArr, setSearchFilterTopArr] = useState([]);
  const [searchEle, setSearchEle] = useState("");
  // const [searchFilter,setSearchFilter]=useState(restaurants)
  const topRatedFn = () => {
    setSearchFilterTopArr((prevalue) =>
      prevalue.filter((item) => item.info.avgRating === 4.5)
    );
  };
  const searchBox = (e) => {
    setSearchEle(e.target.value)
    setSearchFilterTopArr(
      mainListArr.filter((item)=>{
        return item.info.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
    )
   
    
  
  };
  useEffect(() => {
    async function fetchData() {
      const dataFetch = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const dataJson = await dataFetch.json();
      setMainListArr(
        dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchFilterTopArr(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
    }
    fetchData();
  },[]);

 
  return (
    mainListArr.length === 0 ? <ShimmerUI />: <div className="main-content">
      <div className="search-section">
        <input
          type="text"
          placeholder="search Restaurants..."
          id="search"
          value={searchEle}
          onChange={(e) => searchBox(e)}
        />
        {/* <button id="search-btn" onClick={() => searchBox()}>
          Search
        </button> */}
      </div>

      <button className="top-rated-btn" onClick={() => topRatedFn()}>
        Top Rated
      </button>
      <div className="restaurantCard">
        {searchFilterTopArr.map((resCard) => {
          return (
            <RestaurantCard key={resCard.info.id} resData={resCard.info} />
          );
        })}
      </div>
    </div>
  );
};
export default MainContainer;
