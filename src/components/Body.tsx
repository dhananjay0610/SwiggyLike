import React , { useEffect, useState }  from "react";
import ShimmerBody from "./ShimmerBody";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
function filterData(val : string, arr : any[]) {
  val=val.toLowerCase();
  const ans = arr.filter((curr) => curr?.info?.name?.toLowerCase().includes(val));
  return ans;
}
const Body = () : JSX.Element => {
  const [completeRestaurant, setCompleteRestaurant] = useState<any[]>([]);
  const [FilteredRestaurant, setFilteredRestaurant] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<any>();
  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //    console.log(json);
    setCompleteRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (completeRestaurant?.length === 0) return <ShimmerBody />;
  else
    return (
      <div className="bodyCmp">
        <div className="filter">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurants and food"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              setFilteredRestaurant(
                filterData(searchInput , completeRestaurant)
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="restaurant-list">
          {FilteredRestaurant?.map((currentRestaurant) => {
            return (
              <Link
              className="linkCard"
                to={"/restaurant/" + currentRestaurant?.info?.id}
                key={currentRestaurant?.info?.id}
              >
                <RestaurantCard restaurant={currentRestaurant} />
              </Link>
            );
          })}
        </div>
      </div>
    );
};
export default Body;








// import { useEffect, useState } from "react";
// import ShimmerBody from "./ShimmerBody";
// import RestaurantCard from "./RestaurantCard";
// import { Link } from "react-router-dom";
// function filterData(val, arr) {
//   const ans = arr.filter((curr) => curr?.info?.name?.includes(val));
//   return ans;
// }
// const Body = () => {
//   const [completeRestaurant, setCompleteRestaurant] = useState([]);
//   const [FilteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchInput, setSearchInput] = useState();
//   useEffect(() => {
//     apiCall();
//   }, []);
//   async function apiCall() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     //    console.log(json);
//     setCompleteRestaurant(
//       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   }

//   if (completeRestaurant?.length === 0) return <ShimmerBody />;
//   else
//     return (
//       <div className="bodyCmp">
//         <div className="filter">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search for restaurants and food"
//             value={searchInput}
//             onChange={(e) => {
//               setSearchInput(e.target.value);
//             }}
//           />
//           <button
//             className="search-btn"
//             onClick={() => {
//               setFilteredRestaurant(
//                 filterData(searchInput, completeRestaurant)
//               );
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="restaurant-list">
//           {FilteredRestaurant?.map((currentRestaurant) => {
//             return (
//               <Link
//               className="linkCard"
//                 to={"/restaurant/" + currentRestaurant?.info?.id}
//                 key={currentRestaurant?.info?.id}
//               >
//                 <RestaurantCard restaurant={currentRestaurant} />
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     );
// };
// export default Body;