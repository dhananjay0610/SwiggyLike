import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

interface MenuProps {
  MenuDetails: any;
  isMenuVisible: boolean;
}

const Menu: React.FC<MenuProps> = (props) => {
  const val = props.MenuDetails;
  const nameOfMenu = val?.card?.info?.name;
  const finalprice = val?.card?.info?.price;
  const desc = val?.card?.info?.description;
  const visible = props.isMenuVisible;
  const imageId = val?.card?.info?.imageId;
  const dispatch = useDispatch();

  console.log(val);
  const addFoodItem = (item: any) => {
    dispatch(addItem(item));
  };

  return visible ? (
    <div></div>
  ) : (
    <div className="menuCardDetails">
      <div className="CardDetail">
        <div className="cardName">{nameOfMenu}</div>
        <div className="cardPrice">{finalprice / 100}</div>
        <div className="cardDescription">{desc}</div>
      </div>
      <div className="cardBtns">
        <div className="cardImg">
          <img src={IMG_CDN_URL + imageId}></img>
        </div>
        <button
          onClick={() => {
            addFoodItem(val?.card?.info);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

const RestaurantDetail: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState<any>();
  const [menu, setMenu] = useState<any>([]);
  const [isMenuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=" +
        id
    );
    const json = await data.json();
    setDetail(json?.data?.cards[0]?.card?.card?.info);
    // console.log("SDFASDFADS FAS" +json?.data?.cards[0]?.card?.card?.info);

    // console.log("Restaurant Details" + json);
    const menuArr =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card?.itemCards;
    // console.log(menuArr);
    // console.log("Restaurant Details" + json?.data?.cards[0]?.card?.card?.info);
    // console.log("Restaurant Details" + json);
    setMenu(menuArr);
  }
  return (
    <div className="restaurant-detail">
      {/* <div>
        <div style={{ display: "flex", flex: "wrap" }}>
          <h2>{detail?.name}</h2>
        </div>
        <h2>{detail?.avgRating}</h2>
      </div>
      <h2>{detail?.city}</h2> */}
      <div className="RestaurantDetails">
        <div className="RestaurantName">
          <div className="NameDiv"> {detail?.name}</div>
          <p className="LocationDiv"> {detail?.city} </p>
        </div>
        <div className="RestaurantRating"> {detail?.avgRating} </div>
      </div>
      <div className="RestaurantOffer"></div>
      <hr />
      <div className="recommended">
        <h2>Recommented ({menu?.length})</h2>
        {/* <button> */}
        {isMenuVisible ? (
          <button
            onClick={() => {
              setMenuVisible(false);
            }}
          >
            <i className="arrow down"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              setMenuVisible(true);
            }}
          >
            <i className="arrow up"></i>
          </button>
        )}
      </div>
      {menu?.map((a: any) => {
        return <Menu MenuDetails={a} isMenuVisible={isMenuVisible} />;
      })}
    </div>
  );
};
export default RestaurantDetail;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL } from "../config";
// import { useDispatch } from "react-redux";
// import { addItem } from "../cartSlice";

// const Menu = (props) => {
//   const val = props.MenuDetails;
//   const nameOfMenu = val?.card?.info?.name;
//   const finalprice = val?.card?.info?.finalPrice;
//   const desc = val?.card?.info?.description;
//   const visible = props.isMenuVisible;
//   const imageId = val?.card?.info?.imageId;
//   const dispatch = useDispatch();

//   const addFoodItem = (item) => {
//     dispatch(addItem(item));
//   };

//   return visible ? (
//     <div></div>
//   ) : (
//     <div className="menuCardDetails">
//       <div className="CardDetail">
//         <div className="cardName">{nameOfMenu}</div>
//         <div className="cardPrice">{finalprice / 100}</div>
//         <div className="cardDescription">{desc}</div>
//       </div>
//       <div className="cardBtns">
//         <div className="cardImg">
//           <img src={IMG_CDN_URL + imageId}></img>
//         </div>
//         <button
//           onClick={() => {
//             addFoodItem(val?.card?.info);
//           }}
//         >
//           ADD
//         </button>
//       </div>
//     </div>
//   );
// };

// const RestaurantDetail = () => {
//   const params = useParams();
//   const { id } = params;
//   const [detail, setDetail] = useState();
//   const [menu, setMenu] = useState([]);
//   const [isMenuVisible, setMenuVisible] = useState(false);
//   useEffect(() => {
//     apiCall();
//   }, []);
//   async function apiCall() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=" +
//         id
//     );
//     const json = await data.json();
//     setDetail(json?.data?.cards[0]?.card?.card?.info);

//     // console.log("Restaurant Details" + json);
//     const menuArr =
//       json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
//         .card?.itemCards;
//     console.log(menuArr);
//     console.log("Restaurant Details" + json?.data?.cards[0]?.card?.card?.info);
//     console.log("Restaurant Details" + json);
//     setMenu(menuArr);
//   }
//   return (
//     <div className="restaurant-detail">
//       <div>
//         <div style={{ display: "flex", flex: "wrap" }}>
//           <h2>{detail?.name}</h2>
//         </div>
//         <h2>{detail?.avgRating}</h2>
//       </div>
//       <h2>{detail?.city}</h2>
//       <hr />
//       <div className="recommended">
//         <h2>Recommented ({menu?.length})</h2>
//         {/* <button> */}
//         {isMenuVisible ? (
//           <button
//             onClick={() => {
//               setMenuVisible(false);
//             }}
//           >
//             <i class="arrow down"></i>
//           </button>
//         ) : (
//           <button
//             onClick={() => {
//               setMenuVisible(true);
//             }}
//           >
//             <i class="arrow up"></i>
//           </button>
//         )}
//       </div>
//       {menu?.map((a) => {
//         return <Menu MenuDetails={a} isMenuVisible={isMenuVisible} />;
//       })}
//     </div>
//   );
// };
// export default RestaurantDetail;