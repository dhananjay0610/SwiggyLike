import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const Menu = (props) => {
  const val = props.MenuDetails;
  const nameOfMenu = val?.card?.info?.name;
  return (
    <>
      <div className="card">{nameOfMenu}</div>
    </>
  );
};

const RestaurantDetail = () => {
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState();
  const [menu, setMenu] = useState([]);
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
    console.log(json);
    const menuArr =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
        .card?.itemCards;
    setMenu(menuArr);
  }
  return (
    <div>
      <h1> {id}</h1>
      <h2>{detail?.name}</h2>
      <h2>{detail?.avgRating}</h2>
      <h2>{detail?.city}</h2>
      <img src={IMG_CDN_URL + detail?.cloudinaryImageId}></img>
      {menu?.map((a) => {
        return <Menu MenuDetails={a} />;
      })}
    </div>
  );
};
export default RestaurantDetail;
