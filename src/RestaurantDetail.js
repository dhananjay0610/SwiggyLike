import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const Menu = (props) => {
  const val = props.MenuDetails;
  const nameOfMenu = val?.card?.info?.name;
  const finalprice = val?.card?.info?.finalPrice;
  const desc = val?.card?.info?.description;
  const visible = props.isMenuVisible;
  const imageId = val?.card?.info?.imageId;

  return visible ? (
    <div></div>
  ) : (
    <div className="MenuCardDetails">
      <div className="CardDetail">
        <h3 className="">{nameOfMenu}</h3>
        <div className="cardPrice">{finalprice / 100}</div>
        <div className="cardDescription">{desc}</div>
      </div>
      <div className="cardImg">
        <img src={IMG_CDN_URL + imageId}></img>
      </div>
    </div>
  );
};

const RestaurantDetail = () => {
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState();
  const [menu, setMenu] = useState([]);
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

    // console.log("Restaurant Details" + json);
    const menuArr =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card?.itemCards;
    console.log(menuArr);
    console.log("Restaurant Details" + json?.data?.cards[0]?.card?.card?.info);
    console.log("Restaurant Details" + json);
    setMenu(menuArr);
  }
  return (
    <div className="restaurant-detail">
      <div>
        <div style={{ display: "flex", flex: "wrap" }}>
          <h2>{detail?.name}</h2>
        </div>
        <h2>{detail?.avgRating}</h2>
      </div>
      <h2>{detail?.city}</h2>
      <hr />
      <div className="recommended">
        <h2>Recommented ({menu.length})</h2>
        {/* <button> */}
        {isMenuVisible ? (
          <button
            onClick={() => {
              setMenuVisible(false);
            }}
          >
            <i class="arrow down"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              setMenuVisible(true);
            }}
          >
            <i class="arrow up"></i>
          </button>
        )}
      </div>

      {/* <div className="hr"}></div> */}
      {menu?.map((a) => {
        return <Menu MenuDetails={a} isMenuVisible={isMenuVisible} />;
      })}
    </div>
  );
};
export default RestaurantDetail;
