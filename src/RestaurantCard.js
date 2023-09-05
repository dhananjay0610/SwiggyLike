import { IMG_CDN_URL } from "../config";
const RestaurantCard = (props) => {
  console.log(props.Restaurant?.info?.name);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.restaurant?.info?.cloudinaryImageId}></img>
      <h2>{props.restaurant?.info?.name}</h2>
      <h3>{props.restaurant?.info?.cuisines.join(",")}</h3>
      <h4>{props.restaurant?.info?.rating}</h4>
    </div>
  );
};

export default RestaurantCard;
